"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import {
  MessageCircle,
  FileQuestion,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  Brain,
  Send,
} from "lucide-react";
import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { v4 } from "uuid";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant" | "system";
}

const LoadingDots = () => {
  return (
    <div className="flex space-x-1">
      <div
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></div>
    </div>
  );
};

const Avatar = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
      <Image src={src} alt={alt} width={32} height={32} />
    </div>
  );
};

const MarkdownContent = ({ content }: { content: string }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      ul({ children, className, ...props }) {
        return (
          <ul className={`${className} list-disc list-outside ml-6`} {...props}>
            {children}
          </ul>
        );
      },
      ol({ children, className, ...props }) {
        return (
          <ol
            className={`${className} list-decimal list-outside ml-6`}
            {...props}
          >
            {children}
          </ol>
        );
      },
      li({ children, className, ...props }) {
        return (
          <li className={`${className}list-item my-1.5 text-sm`} {...props}>
            {children}
          </li>
        );
      },
      br({ children, ...props }) {
        return <br {...props} />;
      },
      code({ node, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return match ? (
          <pre className="bg-gray-100 rounded p-2 my-3 overflow-x-auto text-sm">
            <code className={className} {...props}>
              {children}
            </code>
          </pre>
        ) : (
          <code className={`text-sm ${className}`} {...props}>
            {children}
          </code>
        );
      },
      p({ children }) {
        return <p className="text-sm leading-6">{children}</p>;
      },
    }}
  >
    {content}
  </ReactMarkdown>
);

export default function Component() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [input, setInput] = useState("what are the causes of greenwashing?");
  const [isLoading, setLoading] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = useCallback(
    (e: any) => setInput(e.currentTarget.value),
    []
  );

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      if (isLoading || newMessage !== "") {
        return;
      }

      const id = v4();
      setMessages((messages) => [
        ...messages,
        { role: "user", content: input, id },
      ]);
      setLoading(true);
      setInput("");

      let airesponse = "";

      const es = new EventSource(
        `https://anti-greenwashing-graphrag-production.up.railway.app/chat?query=${input}`
      );
      es.onmessage = function (event) {
        if (event.data == "END") {
          es.close();
          setMessages((messages) => [
            ...messages,
            { role: "assistant", content: airesponse, id: v4() },
          ]);
          setNewMessage("");

          setLoading(false);
        } else {
          setNewMessage((nm) => {
            let n = nm + event.data;
            airesponse = n;
            return n;
          });
        }
      };

      es.onerror = function (ev) {
        toast.error("An error occurred", { description: JSON.stringify(ev) });
        setLoading(false);
      };
    },
    [input, isLoading, newMessage]
  );

  useEffect(() => {
    // Scroll to bottom of message container when new messages are added
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div
      className={`flex h-screen bg-gray-100 ${GeistSans.className}`}
      style={{
        background: "radial-gradient(circle at center left, #010b49, #000000)",
      }}
    >
      <div
        className={`w-64 text-white p-4 flex flex-col transition-all duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 top-0 bottom-0 z-50`}
      >
        <div className="flex items-center mb-8">
          <h1 className="text-xl font-bold">GraphRag</h1>
        </div>
        {/* <h2 className="text-xs font-semibold mb-2 text-gray-400">
          CONVERSATIONS
        </h2> */}

        <div className="mt-auto">
          <Button
            variant="ghost"
            className="justify-start mb-2 w-full text-white hover:text-white hover:bg-white/10"
          >
            <FileQuestion className="mr-2 h-4 w-4" />
            FAQ
          </Button>
          <Button
            variant="ghost"
            className="justify-start mb-2 w-full text-white hover:text-white hover:bg-white/10"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Subscription
          </Button>
          <Button
            variant="ghost"
            className="justify-start mb-2 w-full text-white hover:text-white hover:bg-white/10"
            // onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="justify-start w-full text-white hover:text-white hover:bg-white/10"
            onClick={() => signOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out relative overflow-hidden ${
          sidebarOpen ? "ml-64 m-4 rounded-xl" : "ml-0 m-0 rounded-none"
        }`}
      >
        <header className="bg-white p-4 flex justify-between items-center border-b absolute w-full top-0 left-0 right-0">
          <div className="w-[1024px] mx-auto">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>

        <main
          ref={messageContainerRef}
          className="flex-1 p-6 pb-0 flex flex-col bg-white mt-[69px] h-[calc(100%-69px)] overflow-scroll scroll-smooth"
        >
          <div className="w-[1024px] mx-auto h-full">
            <div className="flex-1 bg-gray-50 rounded-2xl p-6 mb-4 h-full">
              {messages.length == 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="text-2xl font-bold mb-4">
                    Welcome to NeonChat!
                  </h2>
                  <p className="text-center text-gray-600 max-w-md mb-8">
                    NeonChat is your personal AI-powered assistant, ready to
                    help you navigate your day and provide valuable insights.
                    We&apos;re here to make your life easier. Let&apos;s get
                    started on this exciting journey together!
                  </p>
                  <div className="grid grid-cols-1 gap-4  max-w-md">
                    <Button
                      variant="outline"
                      className="flex items-center justify-center"
                      onClick={() => {
                        setInput("What are the causes of greenwashing?");
                        inputRef.current?.focus();
                      }}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      What are the causes of greenwashing?
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center justify-center"
                      onClick={() => {
                        setInput("How do I avoid greenwashing?");
                        inputRef.current?.focus();
                      }}
                    >
                      <Brain className="mr-2 h-4 w-4" />
                      How do I avoid greenwashing?
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <Avatar src="/image.png" alt="AI Avatar" />
                      )}
                      <div
                        className={`max-w-[70%] rounded-3xl p-3 mx-2 ${
                          message.role === "user"
                            ? "bg-[#08193b] text-white"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        <MarkdownContent content={message.content} />
                      </div>
                      {message.role === "user" && (
                        <Avatar src="/user.png" alt="User Avatar" />
                      )}
                    </div>
                  ))}

                  {isLoading && !newMessage && (
                    <div className="flex items-start justify-start">
                      <Avatar src="/image.png" alt="AI Avatar" />
                      <div className="bg-gray-200 text-gray-800 rounded-lg p-3 mx-2">
                        <LoadingDots />
                      </div>
                    </div>
                  )}

                  {isLoading && newMessage && (
                    <div className={"flex items-start justify-start"}>
                      <Avatar src="/image.png" alt="AI Avatar" />
                      <div
                        className={`max-w-[70%] rounded-3xl p-3 mx-2 bg-gray-200 text-gray-800`}
                      >
                        <MarkdownContent content={newMessage} />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>

        <div className="bg-white p-6 pt-0">
          <form
            className="flex items-center relative gap-4 w-[1024px] mx-auto"
            onSubmit={handleSubmit}
          >
            <Textarea
              ref={inputRef}
              className="mt-4"
              placeholder="Type your message here..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <Button
              disabled={isLoading || newMessage !== ""}
              size="icon"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleSubmit}
            >
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
