import { useState, useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function LiveChatWidget() {
  const { trackEvent } = useAnalytics();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m here to help with your AC service needs. What can I assist you with today?', time: new Date() }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "AC not cooling properly",
    "Need installation quote",
    "Emergency repair needed",
    "Schedule maintenance"
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    
    trackEvent("live_chat_message", "widget");
    
    setMessages(prev => [...prev, { type: 'user', text: message, time: new Date() }]);
    setNewMessage('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Thanks for your message! For immediate assistance, please call +91-97025-25317 or use WhatsApp. Our technician will respond within 2-4 hours.',
        time: new Date() 
      }]);
    }, 2000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      trackEvent("live_chat_open", "widget");
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-30 flex flex-col">
          {/* Header */}
          <div className="bg-trust-blue text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <div>
                <div className="font-bold">Tara AC Support</div>
                <div className="text-xs opacity-80">Online now</div>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300"
              data-testid="chat-close"
            >
              ×
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.type === 'user'
                      ? 'bg-trust-blue text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <div className="text-xs text-gray-500 text-center">Quick options:</div>
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="w-full text-left px-3 py-2 bg-blue-50 text-trust-blue rounded-lg text-sm hover:bg-blue-100 transition-colors"
                    data-testid={`quick-reply-${index}`}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(newMessage)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                data-testid="chat-input"
              />
              <button
                onClick={() => handleSendMessage(newMessage)}
                className="bg-trust-blue text-white px-4 py-2 rounded-lg hover:bg-trust-blue-light transition-colors"
                data-testid="chat-send"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Button - Repositioned to avoid conflicts */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={toggleChat}
          className="bg-trust-blue hover:bg-trust-blue-light text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-110"
          data-testid="chat-toggle"
          aria-label="Live chat support"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
        </button>
      </div>
    </>
  );
}