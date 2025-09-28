import { useState } from "react";
import { Sparkles, Send } from "lucide-react";

export default function Contact() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Xin chào! Tôi là AI Assistant. Tôi có thể giúp gì cho bạn hôm nay?",
    },
    {
      id: 2,
      sender: "ai",
      text: "Bạn muốn tìm khóa học nào ?",
      type: "options", 
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages([...messages, newMessage]);
    setInput("");

  
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "ai", text: "AI đã nhận tin nhắn của bạn 🚀" },
      ]);
    }, 800);
  };

  const handleCourseSelect = (course) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: `Tôi chọn khóa học ${course}` },
      { id: Date.now() + 1, sender: "ai", text: `Bạn đã chọn ${course}. Rất tuyệt! 🎉` },
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-500 to-indigo-600">

      <div className="flex items-center gap-2 bg-purple-700 text-white p-4 shadow-md">
        <Sparkles className="w-6 h-6" />
        <h1 className="text-lg font-semibold">AI Assistant</h1>
        <span className="ml-auto text-sm text-green-300">Trực tuyến</span>
      </div>


      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-purple-100">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-sm shadow ${
                msg.sender === "user"
                  ? "bg-purple-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}

          
              {msg.type === "options" && (
                <div className="mt-2 flex flex-col gap-2">
                  <button
                    onClick={() => handleCourseSelect("Backend")}
                    className="px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                  >
                    Khóa học Backend
                  </button>
                  <button
                    onClick={() => handleCourseSelect("Frontend")}
                    className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    Khóa học Frontend
                  </button>
                  <button
                    onClick={() => handleCourseSelect("Data Analysis")}
                    className="px-3 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                  >
                    Khóa học Data Analysis
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập tin nhắn của bạn..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
