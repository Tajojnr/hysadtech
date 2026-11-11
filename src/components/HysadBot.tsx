'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Send, X, Sparkles, MessageSquare } from 'lucide-react';
import { getBotResponse } from '@/lib/chatbot';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  time: string;
  quickReplies?: string[];
}

const QUICK_START = ['Phone prices', 'Track my order', 'Importation class', 'Shipping time'];

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function HysadBot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  // Prevent SSR/hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Greeting on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: '1',
            text:
              "Sannu! Welcome to Hysad Tech (AG Import).\n\nI'm Hysad AI. Ask me about phone prices, pre-orders, Skycargo shipping, order tracking, or our Online Importation Class.",
            sender: 'bot',
            time: nowTime(),
            quickReplies: QUICK_START,
          },
        ]);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  if (!mounted) return null;

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      time: nowTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const res = getBotResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: res.text,
          sender: 'bot',
          time: nowTime(),
          quickReplies: res.quickReplies,
        },
      ]);
    }, 900);
  };

  return (
    <>
      {/* Floating Launcher */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open Hysad AI chat"
            className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 p-2.5 md:p-3 pr-2.5 md:pr-5 rounded-full shadow-2xl shadow-yellow-500/30 flex items-center gap-2.5 border border-yellow-300/50"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-950 border border-yellow-400/60 flex items-center justify-center overflow-hidden shrink-0">
              <Image src="/logo.webp" alt="Hysad Tech" width={40} height={40} className="w-full h-full object-contain" />
            </div>
            <span className="font-extrabold text-sm hidden md:inline">Chat with Hysad AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.95 }}
            className="fixed bottom-0 right-0 md:bottom-5 md:right-5 z-50 w-full md:w-96 h-[85svh] md:h-[580px] bg-slate-950 md:rounded-3xl shadow-2xl flex flex-col border border-yellow-500/30 overflow-hidden text-slate-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-yellow-950/40 to-slate-900 border-b border-yellow-500/20 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-950 rounded-full border border-yellow-400/60 p-0.5 shadow-[0_0_12px_rgba(234,179,8,0.3)] overflow-hidden">
                  <Image src="/logo.webp" alt="Hysad Tech" width={40} height={40} className="w-full h-full object-contain rounded-full" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                    Hysad AI <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </h3>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AG Import Assistant • Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950">
              {messages.map((m) => (
                <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-yellow-500 text-slate-950 font-semibold rounded-br-none'
                        : 'bg-slate-900 text-slate-100 border border-slate-800 rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 px-1">{m.time}</span>

                  {m.quickReplies && m.sender === 'bot' && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {m.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => handleSend(qr)}
                          className="text-xs bg-slate-900 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/10 px-3 py-1.5 rounded-full font-bold transition-colors"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-4 py-3 rounded-2xl rounded-bl-none w-fit">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about prices, shipping, class..."
                className="flex-1 bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm px-4 py-2.5 rounded-full focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 p-2.5 rounded-full hover:brightness-110 disabled:opacity-40 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}