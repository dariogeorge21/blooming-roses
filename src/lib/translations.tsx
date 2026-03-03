'use client';

import { Language } from "../hooks/contexts/LanguageContext";

// Define the translations for different categories
const translations = {
  common: {
    languageToggle: {
      en: 'English',
      ml: 'മലയാളം',
    },
    home: {
      en: 'Home',
      ml: 'ഹോം',
    },
    about: {
      en: 'About',
      ml: 'കുറിച്ച്',
    },
    gallery: {
      en: 'Gallery',
      ml: 'ഗാലറി',
    },
    register: {
      en: 'Register Now',
      ml: 'ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക',
    },
    readMore: {
      en: 'Read More',
      ml: 'കൂടുതൽ വായിക്കുക',
    },
    learnMore: {
      en: 'Learn More',
      ml: 'കൂടുതൽ അറിയുക',
    },
  },
  home: {
    title: {
      en: 'Blooming Roses',
      ml: 'ബ്ലൂമിംഗ് റോസസ്',
    },
    subtitle: {
      en: 'A spiritual journey for teens organized by Jesus Youth Pala',
      ml: 'ജീസസ് യൂത്ത് പാലാ സംഘടിപ്പിക്കുന്ന കൗമാരക്കാർക്കായുള്ള ആത്മീയ യാത്ര',
    },
    eventDate: {
      en: 'April 26–30, 2026 • Chavara Public School, Pala',
      ml: 'ഏപ്രിൽ 26–30, 2026 • ചവര പബ്ലിക് സ്കൂള്, പാലാ',
    },
    quote: {
      en: 'Rejoice in hope',
      ml: 'പ്രത്യാശയിൽ ആനന്ദിക്കുക',
    },
    quoteReference: {
      en: 'Romans 12:12',
      ml: 'റോമാ 12:12',
    },
    countdownTitle: {
      en: 'Your Spiritual Journey Begins In:',
      ml: 'നിങ്ങളുടെ ആത്മീയ യാത്ര ആരംഭിക്കുന്നു:',
    },
    getDirections: {
      en: 'Get Directions',
      ml: 'വഴി കാണിക്കുക',
    },
    highlightsTitle: {
      en: '🔥 Why You Can\'t Miss This! 🔥',
      ml: '🔥 നിങ്ങൾക്ക് ഇത് നഷ്ടപ്പെടുത്താൻ കഴിയില്ല! 🔥',
    },
    inspiringSessions: {
      en: '✨ Inspiring Sessions & Talks',
      ml: '✨ പ്രചോദനാത്മകമായ സെഷനുകളും സംസാരങ്ങളും',
    },
    inspiringSessionsDesc: {
      en: 'Be inspired through powerful talks and interactive sessions designed just for teens.',
      ml: 'കൗമാരക്കാർക്കായി രൂപകൽപ്പന ചെയ്ത ശക്തമായ സംസാരങ്ങളിലൂടെയും ഇന്ററാക്ടീവ് സെഷനുകളിലൂടെയും പ്രചോദനം നേടുക.',
    },
    fellowship: {
      en: '✨ Fellowship & Unforgettable Memories',
      ml: '✨ കൂട്ടായ്മയും മറക്കാനാവാത്ത ഓർമ്മകളും',
    },
    fellowshipDesc: {
      en: 'Make new friends and create lasting memories with other teens on the same journey.',
      ml: 'പുതിയ സുഹൃത്തുക്കളെ സൃഷ്ടിക്കുകയും ഒരേ യാത്രയിലുള്ള മറ്റ് കൗമാരക്കാരുമായി സ്ഥായിയായ ഓർമ്മകൾ സൃഷ്ടിക്കുകയും ചെയ്യുക.',
    },
    encounter: {
      en: '✨ Encounter with Jesus',
      ml: '✨ യേശുവുമായുള്ള കൂടിക്കാഴ്ച',
    },
    encounterDesc: {
      en: 'Experience a personal encounter with Christ that can transform your life.',
      ml: 'നിങ്ങളുടെ ജീവിതം മാറ്റാൻ കഴിയുന്ന ക്രിസ്തുവുമായുള്ള വ്യക്തിപരമായ കൂടിക്കാഴ്ച അനുഭവിക്കുക.',
    },
    adoration: {
      en: '✨ Adoration & Sacramental Life',
      ml: '✨ ആരാധനയും കൂദാശാ ജീവിതവും',
    },
    adorationDesc: {
      en: 'Deepen your faith through adoration, prayer, and the sacraments in a supportive community.',
      ml: 'പിന്തുണയുള്ള ഒരു സമൂഹത്തിൽ ആരാധന, പ്രാർത്ഥന, കൂദാശകൾ എന്നിവയിലൂടെ നിങ്ങളുടെ വിശ്വാസം ആഴപ്പെടുത്തുക.',
    },
    testimonialTitle: {
      en: 'What Participants Say',
      ml: 'പങ്കെടുത്തവർ പറയുന്നത്',
    },
  },
  gallery: {
    title: {
      en: 'Gallery',
      ml: 'ഗാലറി',
    },
    subtitle: {
      en: 'Moments captured during our spiritual journey together, reflecting the joy, community, and faith we share',
      ml: 'നമ്മുടെ ആത്മീയ യാത്രയിൽ പകർത്തിയ നിമിഷങ്ങൾ, നാം പങ്കിടുന്ന സന്തോഷം, സമൂഹം, വിശ്വാസം എന്നിവ പ്രതിഫലിപ്പിക്കുന്നു',
    },
    photos: {
      en: 'Photos',
      ml: 'ഫോട്ടോകൾ',
    },
    videos: {
      en: 'Videos',
      ml: 'വീഡിയോകൾ',
    },
  },
  about: {
    eventDetails: {
      en: 'Event Details',
      ml: 'ഇവന്റ് വിശദാംശങ്ങൾ',
    },
    location: {
      en: 'Location:',
      ml: 'സ്ഥലം:',
    },
    locationValue: {
      en: 'Chavara Public School, Pala',
      ml: 'ചവര പബ്ലിക് സ്കൂള്, പാലാ',
    },
    dates: {
      en: 'Dates:',
      ml: 'തീയതികൾ:',
    },
    datesValue: {
      en: 'April 26-30, 2026',
      ml: 'ഏപ്രിൽ 26-30, 2026',
    },
    registrationFee: {
      en: 'Registration Fee:',
      ml: 'രജിസ്ട്രേഷൻ ഫീസ്:',
    },
    registrationFeeValue: {
      en: '₹800',
      ml: '₹800',
    },
    programOutline: {
      en: 'Program Outline',
      ml: 'പ്രോഗ്രാം രൂപരേഖ',
    },
    programOutlineDesc: {
      en: 'Experience a transformative journey of faith through our carefully crafted program designed to nurture your spiritual growth and deepen your relationship with Christ.',
      ml: 'നിങ്ങളുടെ ആത്മീയ വളർച്ച പരിപോഷിപ്പിക്കുന്നതിനും ക്രിസ്തുവുമായുള്ള നിങ്ങളുടെ ബന്ധം ആഴപ്പെടുത്തുന്നതിനും രൂപകൽപ്പന ചെയ്ത ഞങ്ങളുടെ ശ്രദ്ധാപൂർവ്വം തയ്യാറാക്കിയ പ്രോഗ്രാമിലൂടെ വിശ്വാസത്തിന്റെ പരിവർത്തനാത്മകമായ യാത്ര അനുഭവിക്കുക.',
    },
    contactTeam: {
      en: '📞 Contact Our Team',
      ml: '📞 ഞങ്ങളുടെ ടീമുമായി ബന്ധപ്പെടുക',
    },
    eventLocation: {
      en: '📍 Event Location',
      ml: '📍 ഇവന്റ് സ്ഥലം',
    },
    getDirections: {
      en: 'Get Directions',
      ml: 'വഴി കാണിക്കുക',
    },
    readyToJoin: {
      en: 'Ready to Join Us?',
      ml: 'ഞങ്ങളോടൊപ്പം ചേരാൻ തയ്യാറാണോ?',
    },
    scanQR: {
      en: 'Scan the QR code and register now! 📲',
      ml: 'QR കോഡ് സ്കാൻ ചെയ്ത് ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക! 📲',
    },
    orUseLink: {
      en: 'Or use the link below to register',
      ml: 'അല്ലെങ്കിൽ രജിസ്റ്റർ ചെയ്യാൻ താഴെയുള്ള ലിങ്ക് ഉപയോഗിക്കുക',
    },
    registerNow: {
      en: 'Register Now',
      ml: 'ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക',
    },
    closingMessage: {
      en: 'Come, let\'s grow in faith and fellowship together! 💖',
      ml: 'വരൂ, നമുക്ക് വിശ്വാസത്തിലും കൂട്ടായ്മയിലും ഒരുമിച്ച് വളരാം! 💖',
    },
    organizer: {
      en: 'Jesus Youth Pala',
      ml: 'ജീസസ് യൂത്ത് പാലാ',
    },
  },
  footer: {
    copyright: {
      en: 'Copyright © 2024 Jesus Youth Pala. All rights reserved.',
      ml: 'പകർപ്പവകാശം © 2024 ജീസസ് യൂത്ത് പാലാ. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
    },
    contactUs: {
      en: 'Contact Us',
      ml: 'ഞങ്ങളുമായി ബന്ധപ്പെടുക',
    },
    followUs: {
      en: 'Follow Us',
      ml: 'ഞങ്ങളെ പിന്തുടരുക',
    },
  },
};

// Function to get a translation
export function getTranslation(
  category: keyof typeof translations,
  key: string,
  language: Language
): string {
  try {
    const categoryData = translations[category] as Record<string, Record<Language, string>>;
    const translation = categoryData[key]?.[language];
    return translation || `Missing translation: ${category}.${key}.${language}`;
  } catch {
    console.error(`Translation not found for ${category}.${key}.${language}`);
    return `Missing translation: ${category}.${key}.${language}`;
  }
}
