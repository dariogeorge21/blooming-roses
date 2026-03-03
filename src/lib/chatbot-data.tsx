'use client';

import React from 'react';

// Define the questions and answers for both languages
export const faqData = {
  en: [
    {
      id: 1,
      question: "Why should I join Blooming Roses?",
      answer: "Blooming Roses is a life-changing event where you'll experience spiritual growth, make lifelong friendships, and deepen your faith. It's designed specifically for teens to help you connect with God and others in a fun, supportive environment."
    },
    {
      id: 2,
      question: "When is this program?",
      answer: "Blooming Roses 26 takes place from April 26-30, 2026. The event begins at 5:00 PM on April 26th."
    },
    {
      id: 3,
      question: "Where is this program held?",
      answer: "The event is held at Chavara Public School, Pala, Kottayam, Kerala, India. You can find directions in the 'About' section of our website."
    },
    {
      id: 4,
      question: "How much does it cost to register?",
      answer: "The registration fee is ₹800 per person. This covers all accommodation, meals, and program materials for the four-day event."
    },
    {
      id: 5,
      question: "What should I bring with me?",
      answer: (
        <div className="space-y-3">
          <p>Please bring the following items for the event:</p>
          <div className="mt-3 p-4 bg-amber-100 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-amber-800 text-lg mr-2">🔔</span>
                <span className="font-medium text-amber-900">Check List</span>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>Holy Bible</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>Qurbana Book</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>Holy Rosary</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>Modest Dressing</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>Medicines <span className="text-sm text-amber-800">(if any)</span></span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>Toiletries</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>Water Bottle</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>Blanket</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>Pillow <span className="text-sm text-amber-800">(if needed)</span></span>
              </li>
            </ul>
          </div>
          <p className="text-sm">Please make sure you have all necessary items to make your stay comfortable.</p>
        </div>
      )
    },
    {
      id: 6,
      question: "How do I register?",
      answer: "You can register by scanning the QR code on our website or by visiting this link: https://bit.ly/blooming25Registration"
    },
    {
      id: 7,
      question: "Who can I contact for more information?",
      answer: "You can contact our event coordinators: Anto (62825 86348) or Neyamol (85908 15612)."
    }
  ],
  ml: [
    {
      id: 1,
      question: "ഞാൻ എന്തിനാണ് ബ്ലൂമിംഗ് റോസസിൽ ചേരേണ്ടത്?",
      answer: "ബ്ലൂമിംഗ് റോസസ് ഒരു ജീവിതം മാറ്റുന്ന ഇവന്റാണ്, അവിടെ നിങ്ങൾ ആത്മീയ വളർച്ച അനുഭവിക്കുകയും, ജീവിതകാല സൗഹൃദങ്ങൾ ഉണ്ടാക്കുകയും, നിങ്ങളുടെ വിശ്വാസം ആഴപ്പെടുത്തുകയും ചെയ്യും. ഇത് പ്രത്യേകിച്ച് കൗമാരക്കാർക്ക് വേണ്ടി രൂപകൽപ്പന ചെയ്തിരിക്കുന്നു, രസകരവും പിന്തുണയുള്ളതുമായ ഒരു അന്തരീക്ഷത്തിൽ ദൈവവുമായും മറ്റുള്ളവരുമായും ബന്ധപ്പെടാൻ നിങ്ങളെ സഹായിക്കുന്നു."
    },
    {
      id: 2,
      question: "ഈ പ്രോഗ്രാം എപ്പോഴാണ്?",
      answer: "ബ്ലൂമിംഗ് റോസസ് 26 2026 ഏപ്രിൽ 26-30 വരെ നടക്കുന്നു. ഏപ്രിൽ 26-ന് വൈകുന്നേരം 5:00 മണിക്ക് ഇവന്റ് ആരംഭിക്കുന്നു."
    },
    {
      id: 3,
      question: "ഈ പ്രോഗ്രാം എവിടെയാണ് നടത്തുന്നത്?",
      answer: "ഈ ഇവന്റ് താബോർ ആശ്രമം കൊടുമ്പിടി, പാലാ, കോട്ടയം, കേരളം, ഇന്ത്യയിൽ നടക്കുന്നു. ഞങ്ങളുടെ വെബ്സൈറ്റിലെ 'കുറിച്ച്' വിഭാഗത്തിൽ നിങ്ങൾക്ക് ദിശാനിർദ്ദേശങ്ങൾ കാണാം."
    },
    {
      id: 4,
      question: "രജിസ്റ്റർ ചെയ്യാൻ എത്ര ചെലവ് വരും?",
      answer: "രജിസ്ട്രേഷൻ ഫീസ് ഒരാൾക്ക് ₹800 ആണ്. ഇതിൽ നാല് ദിവസത്തെ ഇവന്റിനുള്ള എല്ലാ താമസം, ഭക്ഷണം, പ്രോഗ്രാം മെറ്റീരിയലുകൾ എന്നിവ ഉൾപ്പെടുന്നു."
    },
    {
      id: 5,
      question: "ഞാൻ എന്തൊക്കെ കൊണ്ടുവരണം?",
      answer: (
        <div className="space-y-3">
          <p>ഇവന്റിനായി ദയവായി ഇനിപ്പറയുന്ന വസ്തുക്കൾ കൊണ്ടുവരുക:</p>
          <div className="mt-3 p-4 bg-amber-100 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-amber-800 text-lg mr-2">🔔</span>
                <span className="font-medium text-amber-900">ചെക്ക് ലിസ്റ്റ്</span>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>വിശുദ്ധ ബൈബിൾ</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>കുർബാന പുസ്തകം</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>വിശുദ്ധ ജപമാല</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>മിതമായ വസ്ത്രധാരണം</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>മരുന്നുകൾ <span className="text-sm text-amber-800">(ഉണ്ടെങ്കിൽ)</span></span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>ടോയ്‌ലറ്ററികൾ</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>വാട്ടർ ബോട്ടിൽ</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>ബ്ലാങ്കറ്റ്</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border border-amber-700 rounded mr-2"></div>
                <span>തലയണ <span className="text-sm text-amber-800">(ആവശ്യമെങ്കിൽ)</span></span>
              </li>
            </ul>
          </div>
          <p className="text-sm">നിങ്ങളുടെ താമസം സുഖകരമാക്കാൻ എല്ലാ ആവശ്യമായ വസ്തുക്കളും ഉണ്ടെന്ന് ഉറപ്പാക്കുക.</p>
        </div>
      )
    },
    {
      id: 6,
      question: "ഞാൻ എങ്ങനെ രജിസ്റ്റർ ചെയ്യും?",
      answer: "ഞങ്ങളുടെ വെബ്സൈറ്റിലെ QR കോഡ് സ്കാൻ ചെയ്തോ ഈ ലിങ്ക് സന്ദർശിച്ചോ നിങ്ങൾക്ക് രജിസ്റ്റർ ചെയ്യാം: https://bit.ly/blooming25Registration"
    },
    {
      id: 7,
      question: "കൂടുതൽ വിവരങ്ങൾക്ക് ഞാൻ ആരെ ബന്ധപ്പെടണം?",
      answer: "നിങ്ങൾക്ക് ഞങ്ങളുടെ ഇവന്റ് കോർഡിനേറ്റർമാരെ ബന്ധപ്പെടാം: Anto (62825 86348) അല്ലെങ്കിൽ Neyamol (85908 15612)."
    }
  ]
};

// Chatbot UI text translations
export const chatbotUI = {
  en: {
    title: "Blooming Roses Help",
    subtitle: "Were these your questions?",
    greeting: "Hello! What would you like to know about Blooming Roses?",
    backToQuestions: "Back to questions",
    poweredBy: "Powered by Jesus Youth Pala"
  },
  ml: {
    title: "ബ്ലൂമിംഗ് റോസസ് സഹായം",
    subtitle: "ഇവയായിരുന്നോ നിങ്ങളുടെ ചോദ്യങ്ങൾ?",
    greeting: "ഹലോ! ബ്ലൂമിംഗ് റോസസിനെക്കുറിച്ച് നിങ്ങൾക്ക് എന്താണ് അറിയാൻ താൽപ്പര്യം?",
    backToQuestions: "ചോദ്യങ്ങളിലേക്ക് മടങ്ങുക",
    poweredBy: "ജീസസ് യൂത്ത് പാലാ നൽകുന്നത്"
  }
};
