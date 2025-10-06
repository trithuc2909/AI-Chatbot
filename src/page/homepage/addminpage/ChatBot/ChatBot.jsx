import { useState } from "react";
import { Sparkles, Send } from "lucide-react";

export default function ChatBot() {
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
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Header */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-5 shadow-lg">
        <Sparkles className="w-7 h-7" />
        <h1 className="text-2xl font-bold">AI Assistant</h1>
        <span className="ml-auto text-sm bg-green-500 px-4 py-1.5 rounded-full font-semibold">Trực tuyến</span>
      </div>

      {/* Messages Area - Chiếm toàn bộ không gian */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-5">
        <div className="max-w-4xl mx-auto space-y-5">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-2xl px-6 py-4 rounded-2xl shadow-lg ${
                  msg.sender === "user"
                    ? "bg-purple-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                }`}
              >
                <p className="text-base leading-relaxed">{msg.text}</p>

                {/* Options Buttons */}
                {msg.type === "options" && (
                  <div className="mt-4 flex flex-col gap-3">
                    <button
                      onClick={() => handleCourseSelect("Backend")}
                      className="px-5 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition text-left font-semibold shadow-md hover:shadow-lg"
                    >
                      🚀 Khóa học Backend
                    </button>
                    <button
                      onClick={() => handleCourseSelect("Frontend")}
                      className="px-5 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition text-left font-semibold shadow-md hover:shadow-lg"
                    >
                      💻 Khóa học Frontend
                    </button>
                    <button
                      onClick={() => handleCourseSelect("Data Analysis")}
                      className="px-5 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition text-left font-semibold shadow-md hover:shadow-lg"
                    >
                      📊 Khóa học Data Analysis
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area - Fixed ở dưới cùng */}
      <div className="bg-white border-t border-gray-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 bg-gray-100 rounded-full px-6 py-3 shadow-md">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Nhập tin nhắn của bạn..."
              className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-base"
            />
            <button
              onClick={handleSend}
              className="bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700 transition shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}