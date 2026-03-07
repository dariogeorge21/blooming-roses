'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { faqData, chatbotUI } from '@/lib/chatbot-data'

export function Chatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)

  // Get the appropriate language data
  const currentFaqData = faqData[language];
  const uiText = chatbotUI[language];

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setSelectedQuestion(null)
    }
  }

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(id)
  }

  const resetChat = () => {
    setSelectedQuestion(null)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChatbot}
        className="bg-gradient-to-br from-blue-700 to-indigo-800 hover:from-blue-600 hover:to-indigo-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(30,58,138,0.3)] hover:shadow-[0_15px_40px_rgba(30,58,138,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 border border-blue-400/20"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-80 md:w-96 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden transition-all duration-300 animate-fade-in origin-bottom-right">
          <div className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white p-5 border-b border-blue-600/30">
            <h3 className="font-exrabold text-lg tracking-tight">{uiText.title}</h3>
            <p className="text-sm text-blue-100/80 font-medium">{uiText.subtitle}</p>
          </div>

          <div className="h-96 overflow-y-auto p-4">
            {selectedQuestion === null ? (
              <>
                <p className="text-gray-600 mb-4">{uiText.greeting}</p>
                <div className="space-y-2">
                  {currentFaqData.map((faq) => (
                    <button
                      key={faq.id}
                      className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 text-sm transition-colors"
                      onClick={() => handleQuestionClick(faq.id)}
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-800 text-sm">
                  {currentFaqData.find(faq => faq.id === selectedQuestion)?.question}
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-gray-800">
                  {currentFaqData.find(faq => faq.id === selectedQuestion)?.answer}
                </div>
                <button
                  onClick={resetChat}
                  className="text-blue-800 hover:text-blue-600 text-sm font-medium flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {uiText.backToQuestions}
                </button>
              </div>
            )}
          </div>

          <div className="border-t p-3 text-xs text-center text-gray-500">
            {uiText.poweredBy}
          </div>
        </div>
      )}
    </div>
  )
}