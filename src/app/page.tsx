"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
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

const cleanInput = (input: string): string => {
  return input
    .replace(/\\n/g, "\n")
    .replace("<br>", "\n")
    .replace("</br>", "\n");
};

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

const MarkdownContent = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        ul({ children, className, ...props }) {
          return (
            <ul
              className={`${className} list-disc list-inside space-y-3`}
              {...props}
            >
              {children}
            </ul>
          );
        },
        ol({ children, className, ...props }) {
          return (
            <ol
              className={`${className} list-decimal list-inside space-y-3`}
              {...props}
            >
              {children}
            </ol>
          );
        },
        li({ children, className, ...props }) {
          return (
            <li
              className={`${className} leading-8 list-item list-inside`}
              {...props}
            >
              {children}
            </li>
          );
        },
        br({ children, ...props }) {
          return <br {...props} />;
        },
        div({ children, ...props }) {
          return (
            <div className="space-y-3" {...{ ...props }}>
              {children}
            </div>
          );
        },
        code({ className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <pre className="bg-gray-100 rounded p-2 my-3 overflow-x-auto">
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
          return (
            <p className="leading-5 lg:leading-8 text-sm lg:text-base">
              {children}
            </p>
          );
        },
        h1({ children }) {
          return <h1 className="text-2xl leading-10 mb-6">{children}</h1>;
        },
      }}
    >
      {cleanInput(content)}
    </ReactMarkdown>
  );
};

export default function Component() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [initInput, setInitInput] = useState("");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setSidebarOpen(window.innerWidth > 768);
  }, []);

  const handleInputChange = useCallback(
    (e: any) => setInput(e.currentTarget.value),
    []
  );

  useEffect(() => {
    if (inputRef.current && initInput) {
      inputRef.current.innerText = initInput;
      setInput(initInput);
    }
  }, [initInput]);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      if (isLoading || input === "") {
        return;
      }

      const id = v4();
      setMessages((messages) => [
        ...messages,
        {
          role: "user",
          content: input,
          id,
        },
      ]);
      setLoading(true);
      setInput("");
      setInitInput("");
      if (inputRef.current) {
        inputRef.current.innerText = "";
      }

      let airesponse = "";

      const es = new EventSource(
        `https://anti-greenwashing-graphrag-production.up.railway.app/chat?query=${input}`
      );
      es.onmessage = function (event) {
        if (event.data == "END") {
          es.close();
          console.log(airesponse);
          setMessages((messages) => [
            ...messages,
            {
              role: "assistant",
              content: airesponse,
              id: v4(),
            },
          ]);
          setNewMessage("");

          setLoading(false);
        } else {
          setNewMessage((nm) => {
            let n = nm + event.data.slice(1, event.data.length - 1);
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
    [input, isLoading]
  );

  useEffect(() => {
    // Scroll to bottom of message container when new messages are added
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

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
          <div className="w-screen xl:w-[1024px] mx-auto">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>

        <main
          ref={messageContainerRef}
          className="flex-1 p-6 pb-0 flex flex-col bg-white mt-[69px] h-[calc(100%-69px)] overflow-y-scroll overflow-x-hidden scroll-smooth"
        >
          <div
            className={`${
              sidebarOpen ? "w-screen" : "w-full"
            } xl:w-[1024px] mx-auto h-full`}
          >
            <div className="flex-1 bg-gray-50 rounded-2xl p-6 mb-4 h-full">
              {messages.length == 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="text-2xl font-bold mb-4">Welcome to Eloh!</h2>
                  <p className="text-center text-gray-600 max-w-md mb-8">
                    Clear, instant answers on UK(FCA/CMA) anti-greenwashing
                    regulations. Ask your first questions and Let&apos;s make
                    your sustainability🌍♻️ journey transparent and compliant!
                  </p>
                  <div className="grid grid-cols-1 gap-4  max-w-md">
                    <Button
                      variant="outline"
                      className="flex items-center justify-center"
                      onClick={() => {
                        setInitInput("What is greenwashing?");
                        inputRef.current?.focus();
                      }}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      What is greenwashing?
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center justify-center"
                      onClick={() => {
                        setInitInput("How do I avoid greenwashing?");
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
            className={`flex items-center relative gap-4 ${
              sidebarOpen ? "w-screen" : "w-full"
            } xl:w-[1024px] mx-auto`}
            onSubmit={handleSubmit}
          >
            <div
              contentEditable
              ref={inputRef}
              className="min-h-[80px] max-h-[300px] w-full rounded-xl border  bg-transparent p-3 text-sm shadow-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-offset-2 outline-none disabled:cursor-not-allowed disabled:opacity-50 mt-4"
              onChange={handleInputChange}
              onInput={(e) => {
                const text = e.currentTarget.innerText || "";
                setInput(text);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (e.shiftKey) {
                  } else {
                    e.preventDefault();
                    if (input.trim() !== "") {
                      handleSubmit(e);
                    }
                  }
                }
              }}
            ></div>
            <Button
              disabled={isLoading || newMessage !== ""}
              size="icon"
              className="bg-blue-500 absolute hover:bg-blue-600 text-white rounded-full bottom-2 right-2 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
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
