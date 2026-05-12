'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Phone, FileText, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface Message {
  role: 'user' | 'assistant';
  content: string;
  time: string; // pre-formatted time string, only created client-side
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
function formatTime(): string {
  return new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */
const QUICK_REPLIES = [
  'Get a Quote',
  'Track Shipment',
  'Our Services',
  'Academy Courses',
  'Contact Us',
  'Trade Corridors',
];

// Content only — no Date objects at module level
const GREETING_CONTENT =
  "Welcome to **Afri-Bridge AI Assistant**! \ud83c\udf0d\n\nI can help you with:\n\n\u2022 Freight forwarding & customs clearing\n\u2022 Shipment tracking & quotes\n\u2022 Academy courses & training\n\u2022 Trade corridor intelligence\n\u2022 General enquiries\n\nHow can I assist you today?";

/* ------------------------------------------------------------------ */
/*  Helper: render inline markdown (bold, links, bullets)              */
/* ------------------------------------------------------------------ */
function renderMarkdown(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (line.trimStart().startsWith('\u2022') || line.trimStart().startsWith('- ')) {
      const content = line.replace(/^[\u2022-]\s*/, '');
      return (
        <li key={i} className="ml-1 list-disc list-inside">
          {inlineFormat(content)}
        </li>
      );
    }
    if (line.trim() === '') return <br key={i} />;
    return <span key={i}>{inlineFormat(line)}{'\n'}</span>;
  });
}

function inlineFormat(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.match(/\[.*?\]\(.*?\)/)) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <a
            key={i}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
          >
            {match[1]}
          </a>
        );
      }
    }
    return <span key={i}>{part}</span>;
  });
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export function FloatingWhatsAppAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize greeting on client only — avoids hydration mismatch from Date/timezone
  useEffect(() => {
    setMessages([{ role: 'assistant', content: GREETING_CONTENT, time: formatTime() }]);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      const timer = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = {
      role: 'user',
      content: text.trim(),
      time: formatTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const conversationHistory = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversationHistory }),
      });

      if (!res.ok) throw new Error('API error');

      const data = await res.json();
      const botReply: Message = {
        role: 'assistant',
        content: data.reply || "I'm sorry, I couldn't understand that. Could you rephrase?",
        time: formatTime(),
      };

      setMessages((prev) => [...prev, botReply]);
    } catch {
      const errorMessage: Message = {
        role: 'assistant',
        content:
          "I'm having trouble connecting right now. Please try again, or reach our team directly:\n\n\u2022 **WhatsApp:** +27 83 391 0863\n\u2022 **Phone:** +27 11 568 6712\n\u2022 **Email:** info@afribridge.co.za",
        time: formatTime(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReply = (text: string) => {
    sendMessage(text);
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed bottom-6 right-6 z-[9999] w-full max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl
          bg-white overflow-hidden flex flex-col
          transition-all duration-300 ease-out origin-bottom-right
          ${isOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-90 opacity-0 translate-y-4 pointer-events-none'}
        `}
        style={{ height: isOpen ? 'min(560px, calc(100vh - 8rem))' : '0' }}
      >
        {/* Header — WhatsApp style */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#075E54] text-white shrink-0">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#075E54]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold">Afri-Bridge AI Assistant</p>
            <p className="text-xs text-white/70">
              {isTyping ? 'typing...' : 'Online — typically replies instantly'}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-4 py-3 space-y-2"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f0f0f0\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundColor: '#e5ddd5',
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-[#DCF8C6] text-gray-800 rounded-tr-none'
                    : 'bg-white text-gray-800 rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-wrap">{renderMarkdown(msg.content)}</div>
                <p
                  className={`text-[10px] mt-1 ${
                    msg.role === 'user' ? 'text-gray-500' : 'text-gray-400'
                  } text-right`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
                <div className="flex gap-1 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {!isTyping && (
          <div className="px-3 py-2 bg-white border-t border-gray-100 shrink-0">
            <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pb-1">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-emerald-200 text-emerald-700 bg-emerald-50/60 hover:bg-emerald-100 transition-colors whitespace-nowrap"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quick Action Links */}
        <div className="px-3 py-1.5 bg-[#f0f0f0] flex items-center gap-3 text-xs shrink-0">
          <Link
            href="/quote"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 text-[#075E54] hover:underline font-medium"
          >
            <FileText className="h-3 w-3" />
            Quote
          </Link>
          <Link
            href="/tracking"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 text-[#075E54] hover:underline font-medium"
          >
            <ArrowRight className="h-3 w-3" />
            Track
          </Link>
          <Link
            href="/academy"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 text-[#075E54] hover:underline font-medium"
          >
            <GraduationCap className="h-3 w-3" />
            Academy
          </Link>
          <a
            href="https://wa.me/27833910863"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#075E54] hover:underline font-medium"
          >
            <Phone className="h-3 w-3" />
            WhatsApp
          </a>
        </div>

        {/* Input Area — WhatsApp style */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-3 py-2.5 bg-[#f0f0f0] border-t border-gray-200 shrink-0"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            disabled={isTyping}
            className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-800 placeholder-gray-400 border-0 outline-none focus:ring-2 focus:ring-emerald-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="w-10 h-10 rounded-full bg-[#075E54] hover:bg-[#064E46] text-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            aria-label="Send message"
          >
            {isTyping ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4 ml-0.5" />
            )}
          </button>
        </form>
      </div>

      {/* Floating Button — WhatsApp style */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[9998] w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg shadow-green-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-600/40 group"
          aria-label="Open Afri-Bridge AI Assistant"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
            1
          </span>
        </button>
      )}
    </>
  );
}
