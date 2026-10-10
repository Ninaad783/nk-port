import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { streamChatMessage } from '../services/aiAgent';
import {
  Bot,
  X,
  Send,
  Sparkles,
  Maximize2,
  Minimize2,
  RotateCcw,
  ExternalLink,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function AiAssistantModal({ isOpen, onClose, initialQuery = '' }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `### 👋 Hello! I am Ninaad AI\n\nI am Ninaad Kumbhar's autonomous portfolio assistant. I can evaluate his qualifications for **Generative AI Engineer** or **MERN Stack Developer** roles, walk you through his verified production repositories, or analyze your specific Job Description (JD).\n\n**Quick Suggestions to start:**\n- 🎯 *"Is Ninaad eligible for a GenAI Engineer role?"*\n- ⚡ *"Is Ninaad eligible for a MERN Stack Developer role?"*\n- 📄 *"Download his resumes (GenAI vs MERN)"*\n- 📁 *"Show all projects with GitHub and Live demo links"*\n- 🏆 *"Tell me about his COMSYS Hackathon win and Bug Bounty award"*\n- 📋 *"Evaluate JD: [paste your requirements]"*`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isStreaming]);

  useEffect(() => {
    if (initialQuery && isOpen && !isStreaming) {
      handleSend(initialQuery);
    }
  }, [initialQuery, isOpen]);

  const handleSend = async (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim() || isStreaming) return;

    const userMessage = { role: 'user', content: text };
    const updatedMessages = [...messages, userMessage];

    // Create a placeholder assistant message that will be populated as chunks stream in
    const assistantPlaceholder = { role: 'assistant', content: '', isStreaming: true };
    setMessages([...updatedMessages, assistantPlaceholder]);
    setInputValue('');
    setIsStreaming(true);

    await streamChatMessage(
      updatedMessages,
      null,
      // onChunk: called on every streamed piece of text
      (accumulatedText) => {
        setMessages((prev) => {
          const newArr = [...prev];
          newArr[newArr.length - 1] = {
            role: 'assistant',
            content: accumulatedText,
            isStreaming: true
          };
          return newArr;
        });
      },
      // onComplete: called when streaming finishes
      (finalText) => {
        setMessages((prev) => {
          const newArr = [...prev];
          newArr[newArr.length - 1] = {
            role: 'assistant',
            content: finalText,
            isStreaming: false
          };
          return newArr;
        });
        setIsStreaming(false);
      },
      // onError
      (error) => {
        setMessages((prev) => {
          const newArr = [...prev];
          newArr[newArr.length - 1] = {
            role: 'assistant',
            content: "I encountered an error during streaming. Please try sending your query again.",
            isStreaming: false
          };
          return newArr;
        });
        setIsStreaming(false);
      }
    );
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: `### 🔄 Conversation Reset\n\nHow else can I assist your candidate evaluation today? Try asking about Ninaad's **RAG pipelines**, **MERN internship**, or paste your **Job Description**.`
      }
    ]);
  };

  if (!isOpen) return null;

  // Simple Markdown Parser for rendered responses
  const renderFormattedContent = (content, isCurrentStreaming) => {
    const lines = content.split('\n');
    return (
      <>
        {lines.map((line, idx) => {
          // Heading 3
          if (line.startsWith('### ')) {
            return (
              <h4 key={idx} className="text-sm font-bold text-zinc-100 mt-2.5 mb-1 flex items-center gap-1.5">
                <span className="text-[#d97757]">&bull;</span>
                <span>{line.replace('### ', '')}</span>
              </h4>
            );
          }
          // Heading 4
          if (line.startsWith('#### ')) {
            return (
              <h5 key={idx} className="text-xs font-semibold text-zinc-200 mt-2 mb-1">
                {line.replace('#### ', '')}
              </h5>
            );
          }
          // Bullet list item
          if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
            const itemText = line.trim().substring(2);
            // Check if it's a suggested question (e.g. starts and ends with *)
            const isClickablePrompt = itemText.startsWith('*') && itemText.endsWith('*');
            if (isClickablePrompt && !isCurrentStreaming) {
              const cleanPrompt = itemText.replace(/^\*["']?|["']?\*$/g, '');
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(cleanPrompt)}
                  className="w-full text-left my-1.5 p-2 rounded-lg bg-[#141416] hover:bg-[#202025] border border-[#27272a] hover:border-[#d97757]/40 text-xs text-[#d97757] hover:text-[#e0896b] transition-all flex items-center justify-between gap-2 cursor-pointer group"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-zinc-500 font-mono text-[10px]">&rarr;</span>
                    <span className="font-medium">{cleanPrompt}</span>
                  </span>
                  <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300 font-mono shrink-0">Ask &rarr;</span>
                </button>
              );
            }

            return (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 my-1 leading-relaxed pl-1">
                <span className="text-[#d97757] mt-0.5">&bull;</span>
                <span>{renderInlineMarkdown(itemText)}</span>
              </div>
            );
          }
          // Blank line
          if (!line.trim()) {
            return <div key={idx} className="h-1.5" />;
          }
          // Normal paragraph
          return (
            <p key={idx} className="text-xs text-zinc-300 leading-relaxed my-1">
              {renderInlineMarkdown(line)}
            </p>
          );
        })}
        {isCurrentStreaming && (
          <span className="inline-block w-1.5 h-3 bg-[#d97757] ml-0.5 animate-pulse align-middle" />
        )}
      </>
    );
  };

  // Parses bold **text** and markdown links [text](url)
  const renderInlineMarkdown = (text) => {
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(renderBoldText(text.substring(lastIndex, match.index)));
      }
      const label = match[1];
      const url = match[2];
      parts.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 font-medium text-[#d97757] hover:text-[#c96442] underline underline-offset-2 mx-1"
        >
          <span>{label}</span>
          <ExternalLink className="w-2.5 h-2.5 inline" />
        </a>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(renderBoldText(text.substring(lastIndex)));
    }

    return parts.length > 0 ? parts : renderBoldText(text);
  };

  const renderBoldText = (text) => {
    const boldParts = text.split(/\*\*(.*?)\*\*/g);
    return boldParts.map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="font-semibold text-zinc-100">{part}</strong> : part
    );
  };

  const quickPromptChips = [
    "Is Ninaad eligible for GenAI Engineer?",
    "Is he eligible for MERN Stack Developer?",
    "Download his resumes",
    "Show projects with Live links",
    "Evaluate custom JD"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/70 backdrop-blur-xs">
      
      {/* Container Box: Claude / ChatGPT Minimalist Style with Real-Time Streaming */}
      <div
        className={`w-full bg-[#18181b] border border-[#2e2e34] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-200 ${
          isExpanded
            ? 'sm:w-[92vw] sm:max-w-4xl h-[95vh] sm:h-[88vh]'
            : 'sm:w-[90vw] sm:max-w-2xl h-[90vh] sm:h-[620px]'
        }`}
      >
        {/* Header */}
        <div className="p-3.5 bg-[#141416] border-b border-[#27272a] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#222226] border border-[#2e2e33] flex items-center justify-center text-[#d97757]">
              <Bot className="w-4 h-4" />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-bold text-zinc-100 text-xs sm:text-sm">Ninaad AI</span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Portfolio Assistant &bull; Ask anything about Ninaad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleResetChat}
              disabled={isStreaming}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[#222226] disabled:opacity-40 transition-colors"
              title="Reset Chat"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hidden sm:block p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[#222226] transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[#222226] transition-colors"
              title="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-3.5 py-2 bg-[#141416] border-b border-[#222226] flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-[10px] text-zinc-500 font-mono uppercase shrink-0">Ask:</span>
          {quickPromptChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip)}
              disabled={isStreaming}
              className="px-2.5 py-1 rounded-lg bg-[#1c1c20] hover:bg-[#26262b] disabled:opacity-40 border border-[#27272b] hover:border-[#38383e] text-zinc-300 hover:text-zinc-100 text-[11px] font-medium shrink-0 transition-colors cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-left">
          {messages.map((msg, index) => {
            const isUser = msg.role === 'user';
            const isLastAssistant = !isUser && index === messages.length - 1;

            return (
              <div
                key={index}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-6 h-6 rounded-md bg-[#222226] border border-[#2e2e33] flex items-center justify-center shrink-0 mt-0.5 text-[#d97757]">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-xl p-3.5 sm:p-4 text-xs leading-relaxed ${
                    isUser
                      ? 'bg-[#27272b] text-zinc-100 rounded-tr-none border border-[#34343a]'
                      : 'bg-[#1b1b1e] border border-[#27272a] text-zinc-300 rounded-tl-none space-y-1'
                  }`}
                >
                  {isUser ? (
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  ) : (
                    <div>
                      {msg.content === '' && msg.isStreaming ? (
                        <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d97757] animate-ping" />
                          <span>Generating answer line-by-line...</span>
                        </div>
                      ) : (
                        renderFormattedContent(msg.content, msg.isStreaming)
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form: Clean Claude Style */}
        <div className="p-3 bg-[#141416] border-t border-[#27272a] shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isStreaming}
              placeholder={isStreaming ? "Streaming response..." : "Ask anything about Ninaad's skills, repos, role eligibility, or paste a JD..."}
              className="flex-1 px-3.5 py-2.5 rounded-lg bg-[#18181b] border border-[#2c2c31] text-zinc-100 placeholder:text-zinc-500 text-xs focus:outline-none focus:border-[#d97757] transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isStreaming}
              className="p-2.5 rounded-lg bg-[#d97757] hover:bg-[#c96442] disabled:opacity-40 text-white transition-colors cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="flex items-center justify-between mt-2 text-[10px] text-zinc-500 px-1">
            <span>Ninaad AI &bull; Portfolio Screening Assistant</span>
            <span className="hidden sm:inline">Press Enter to send</span>
          </div>
        </div>

      </div>

    </div>
  );
}
