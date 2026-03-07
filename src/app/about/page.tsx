'use client'

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

// Metadata is defined in metadata.js

export default function AboutPage() {
  const { language } = useLanguage();
  // Add effect to handle hash navigation
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Remove the # character
      const targetId = hash.substring(1);

      // Find the element with the matching ID
      const targetElement = document.getElementById(targetId);

      // If the element exists, scroll to it
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200); // Small delay to ensure page has loaded
      }
    }
  }, []);

  return (
    <div className="relative bg-[#fafcff] min-h-screen overflow-hidden">
      {/* Modern Premium Background Orbs & Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[40vw] h-[40vw] bg-blue-400/20 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] bg-pink-400/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
      </div>

      <Container className="relative z-10">
        <div className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Main Hero Section */}
            <div className="text-center space-y-4 animate-fade-in">
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/images/bloomingroses/logo.png"
                  alt="Blooming Roses Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              {/* <h2 className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  Blooming Roses 26
                </span>
              </h2> */}
              <p className="text-xl text-blue-800 animate-slide-up font-medium">
                {getTranslation('home', 'eventDate', language)}
              </p>

              <div className="mt-10 mx-auto max-w-2xl rounded-[2rem] bg-white/80 backdrop-blur-md border border-white/60 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-pink-600 mb-6">
                  {language === 'en' ? 'Hey Teens! 🎉' : 'ഹേയ് ടീൻസ്! 🎉'}
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {language === 'en' ? 'Get ready for Blooming Roses 25, an exciting and life-changing event just for YOU! Join us from April 26th to April 30th at Chavara Public School, Pala, for five days filled with fellowship and faith!' : 'ബ്ലൂമിംഗ് റോസസ് 26-ന് തയ്യാറാകൂ, നിങ്ങൾക്കായി മാത്രമുള്ള ഒരു രസകരവും ജീവിതം മാറ്റുന്നതുമായ ഇവന്റ്! ഏപ്രിൽ 26 മുതൽ 30 വരെ ചവര പബ്ലിക് സ്കൂളിൽ, പാലായിൽ കൂട്ടായ്മയും വിശ്വാസവും നിറഞ്ഞ നാല് ദിവസങ്ങളിലേക്ക് ഞങ്ങളോടൊപ്പം ചേരുക!'}
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 mt-8 tracking-tight">
                <span className="text-gray-900">{getTranslation('home', 'highlightsTitle', language)}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                  <p className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">✦</span>
                    {getTranslation('home', 'inspiringSessions', language)}
                  </p>
                  <p className="text-gray-600 leading-relaxed font-medium pl-13">{getTranslation('home', 'inspiringSessionsDesc', language)}</p>
                </div>

                <div className="group rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                  <p className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">♥</span>
                    {getTranslation('home', 'fellowship', language)}
                  </p>
                  <p className="text-gray-600 leading-relaxed font-medium pl-13">{getTranslation('home', 'fellowshipDesc', language)}</p>
                </div>

                <div className="group rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                  <p className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">✧</span>
                    {getTranslation('home', 'encounter', language)}
                  </p>
                  <p className="text-gray-600 leading-relaxed font-medium pl-13">{getTranslation('home', 'encounterDesc', language)}</p>
                </div>

                <div className="group rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                  <p className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">✺</span>
                    {getTranslation('home', 'adoration', language)}
                  </p>
                  <p className="text-gray-600 leading-relaxed font-medium pl-13">{getTranslation('home', 'adorationDesc', language)}</p>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-6 animate-slide-up mt-12" style={{ animationDelay: "0.4s" }}>
              <div className="p-10 rounded-[2.5rem] bg-white shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">{getTranslation('about', 'eventDetails', language)}</h3>
                <div className="max-w-md mx-auto">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">📍</span>
                      <div>
                        <span className="font-medium">{getTranslation('about', 'location', language)}</span> {getTranslation('about', 'locationValue', language)}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">📅</span>
                      <div>
                        <span className="font-medium">{getTranslation('about', 'dates', language)}</span> {getTranslation('about', 'datesValue', language)}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">💰</span>
                      <div>
                        <span className="font-medium">{getTranslation('about', 'registrationFee', language)}</span> {getTranslation('about', 'registrationFeeValue', language)}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Program Outline */}
            <div className="space-y-6 animate-slide-up mt-16" style={{ animationDelay: "0.45s" }}>
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-[#f8fafc] to-[#f1f5f9] shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -z-10" />
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">{getTranslation('about', 'programOutline', language)}</h3>
                <p className="text-center text-gray-600 font-medium mb-12 max-w-2xl mx-auto">
                  {getTranslation('about', 'programOutlineDesc', language)}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Sessions - God's Love */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-800">{language === 'en' ? "Sessions - God's Love" : "സെഷനുകൾ - ദൈവത്തിന്റെ സ്നേഹം"}</h4>
                      </div>
                      <p className="text-gray-700">
                        {language === 'en' ?
                          "Immerse yourself in powerful teachings that illuminate the boundless love of God. Through Scripture, tradition, and personal testimony, discover how deeply the Father loves you and how His divine love can transform every aspect of your life." :
                          "ദൈവത്തിന്റെ അതിരറ്റ സ്നേഹത്തെ പ്രകാശിപ്പിക്കുന്ന ശക്തമായ ഉപദേശങ്ങളിൽ നിങ്ങളെത്തന്നെ മുക്കുക. തിരുവചനം, പാരമ്പര്യം, വ്യക്തിപരമായ സാക്ഷ്യം എന്നിവയിലൂടെ, പിതാവ് നിങ്ങളെ എത്രമാത്രം സ്നേഹിക്കുന്നുവെന്നും അവന്റെ ദിവ്യസ്നേഹം നിങ്ങളുടെ ജീവിതത്തിന്റെ എല്ലാ വശങ്ങളെയും എങ്ങനെ പരിവർത്തനം ചെയ്യാൻ കഴിയുമെന്നും കണ്ടെത്തുക."}
                      </p>
                    </div>

                    {/* Sharing - Personal Encounter */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-pink-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-pink-800">{language === 'en' ? "Sharing - Personal Encounter" : "പങ്കുവെയ്ക്കൽ - വ്യക്തിപരമായ കൂടിക്കാഴ്ച"}</h4>
                      </div>
                      <p className="text-gray-700">
                        {language === 'en' ?
                          "Witness the living testimony of faith as participants share their personal encounters with Christ. These authentic stories of conversion, healing, and divine intervention will inspire your own journey and remind you that God continues to work miracles in our lives today." :
                          "പങ്കെടുക്കുന്നവർ അവരുടെ ക്രിസ്തുവുമായുള്ള വ്യക്തിപരമായ കൂടിക്കാഴ്ചകൾ പങ്കുവെയ്ക്കുമ്പോൾ വിശ്വാസത്തിന്റെ ജീവിക്കുന്ന സാക്ഷ്യം കാണുക. മാനസാന്തരം, രോഗശാന്തി, ദൈവിക ഇടപെടൽ എന്നിവയുടെ ഈ യഥാർത്ഥ കഥകൾ നിങ്ങളുടെ സ്വന്തം യാത്രയ്ക്ക് പ്രചോദനം നൽകുകയും ദൈവം നമ്മുടെ ജീവിതത്തിൽ ഇന്നും അത്ഭുതങ്ങൾ പ്രവർത്തിക്കുന്നുവെന്ന് നിങ്ങളെ ഓർമിപ്പിക്കുകയും ചെയ്യും."}
                      </p>
                    </div>

                    {/* Confession */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-purple-800">{language === 'en' ? "Confession" : "കുമ്പസാരം"}</h4>
                      </div>
                      <p className="text-gray-700">
                        {language === 'en' ?
                          "Experience the profound mercy of God through the Sacrament of Reconciliation. In this sacred encounter, receive the healing grace of Christ's forgiveness, unburdening your soul and renewing your baptismal purity. Trained priests will be available to guide you through this beautiful sacrament of healing and peace." :
                          "അനുരഞ്ജന കൂദാശയിലൂടെ ദൈവത്തിന്റെ അഗാധമായ കരുണ അനുഭവിക്കുക. ഈ വിശുദ്ധ കൂടിക്കാഴ്ചയിൽ, ക്രിസ്തുവിന്റെ ക്ഷമയുടെ രോഗശാന്തി കൃപ സ്വീകരിക്കുക, നിങ്ങളുടെ ആത്മാവിന്റെ ഭാരം ഇല്ലാതാക്കുകയും നിങ്ങളുടെ മാമ്മോദീസാ ശുദ്ധി പുതുക്കുകയും ചെയ്യുക. രോഗശാന്തിയുടെയും സമാധാനത്തിന്റെയും ഈ മനോഹരമായ കൂദാശയിലൂടെ നിങ്ങളെ നയിക്കാൻ പരിശീലനം ലഭിച്ച വൈദികർ ലഭ്യമായിരിക്കും."}
                      </p>
                    </div>

                    {/* Counselling */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-indigo-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-indigo-800">{language === 'en' ? "Counselling" : "കൌൺസലിംഗ്"}</h4>
                      </div>
                      <p className="text-gray-700">
                        {language === 'en' ?
                          "Receive spiritual guidance and personal counseling from experienced mentors who understand the unique challenges facing young Catholics today. These one-on-one sessions provide a safe space to discuss your spiritual journey, ask questions, and receive wisdom rooted in faith and Scripture." :
                          "ഇന്നത്തെ യുവ കത്തോലിക്കർ നേരിടുന്ന അതുല്യമായ വെല്ലുവിളികൾ മനസ്സിലാക്കുന്ന പരിചയസമ്പന്നരായ മെൻറ്റർമാരിൽ നിന്ന് ആത്മീയ മാർഗ്ഗനിർദേശവും വ്യക്തിപരമായ കൌൺസലിംഗും സ്വീകരിക്കുക. നിങ്ങളുടെ ആത്മീയ യാത്രയെ കുറിച്ച് ചർച്ച ചെയ്യാനും, ചോദ്യങ്ങൾ ചോദിക്കാനും, വിശ്വാസത്തിലും തിരുവചനത്തിലും അടിസ്ഥാനമാക്കിയ ജ്ഞാനം സ്വീകരിക്കാനും ഈ വ്യക്തിഗത സെഷനുകൾ സുരക്ഷിതമായ ഇടം നൽകുന്നു."}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Group Activities */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-green-800">{language === 'en' ? "Group Activities" : "ഗ്രൂപ്പ് പ്രവർത്തനങ്ങൾ"}</h4>
                      </div>
                      <p className="text-gray-700">
                        {language === 'en' ?
                          "Build community and deepen friendships through engaging group activities that combine fun with faith formation. These interactive experiences foster teamwork, communication, and the joy of Christian fellowship, creating bonds that extend beyond the retreat and support your ongoing spiritual journey." :
                          "വിനോദത്തെ വിശ്വാസ രൂപീകരണവുമായി സംയോജിപ്പിക്കുന്ന ആകർഷകമായ ഗ്രൂപ്പ് പ്രവർത്തനങ്ങളിലൂടെ സമൂഹത്തെ പടുത്തുയർത്തുകയും സൌഹൃദങ്ങൾ ആഴപ്പെടുത്തുകയും ചെയ്യുക. ഈ ഇന്റരാക്ടീവ് അനുഭവങ്ങൾ ടീംവർക്ക്, ആശയവിനിമയം, ക്രിസ്തീയ കൂട്ടായ്മയുടെ സന്തോഷം എന്നിവ വളർത്തുന്നു, റിട്രീറ്റിനപ്പുറം വ്യാപിക്കുകയും നിങ്ങളുടെ തുടർച്ചയായ ആത്മീയ യാത്രയെ പിന്തുണയ്ക്കുകയും ചെയ്യുന്ന ബന്ധങ്ങൾ സൃഷ്ടിക്കുന്നു."}
                      </p>
                    </div>

                    {/* Musical Worship */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-amber-800">{language === 'en' ? "Musical Worship" : "സംഗീത ആരാധന"}</h4>
                      </div>
                      <p className="text-gray-700">
                        {language === 'en' ?
                          "Lift your heart and voice in praise through vibrant musical worship that draws you into the presence of God. Experience the power of sacred music to express devotion, gratitude, and surrender, creating moments of profound spiritual connection and communal prayer that transcend words alone." :
                          "നിങ്ങളെ ദൈവസാന്നിധ്യത്തിലേക്ക് ആകർഷിക്കുന്ന ജീവസുള്ള സംഗീത ആരാധനയിലൂടെ നിങ്ങളുടെ ഹൃദയവും ശബ്ദവും സ്തുതിയിൽ ഉയർത്തുക. ഭക്തി, നന്ദി, സമർപ്പണം എന്നിവ പ്രകടിപ്പിക്കാൻ പവിത്ര സംഗീതത്തിന്റെ ശക്തി അനുഭവിക്കുക, വാക്കുകൾക്ക് മാത്രം അതീതമായ ആഴമേറിയ ആത്മീയ ബന്ധത്തിന്റെയും സാമൂഹിക പ്രാർത്ഥനയുടെയും നിമിഷങ്ങൾ സൃഷ്ടിക്കുന്നു."}
                      </p>
                    </div>

                    {/* Adoration */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-red-800">{language === 'en' ? "Adoration" : "ആരാധന"}</h4>
                      </div>
                      <p className="text-gray-700">
                        {language === 'en' ?
                          "Enter into the sacred silence of Eucharistic Adoration, where Jesus Christ is truly present in the Blessed Sacrament. In this intimate encounter with the Real Presence, experience the transformative power of simply being with Our Lord, allowing His divine love to heal, strengthen, and renew your soul in ways that surpass understanding." :
                          "യേശുക്രിസ്തു വിശുദ്ധ കുർബാനയിൽ യഥാർത്ഥത്തിൽ സാന്നിധ്യമുള്ള ദിവ്യകാരുണ്യ ആരാധനയുടെ പവിത്രമായ നിശ്ശബ്ദതയിലേക്ക് പ്രവേശിക്കുക. യഥാർത്ഥ സാന്നിധ്യവുമായുള്ള ഈ ആത്മീയ കൂടിക്കാഴ്ചയിൽ, നമ്മുടെ കർത്താവിനോടൊപ്പം സാധാരണമായി ഇരിക്കുന്നതിന്റെ പരിവർത്തനാത്മക ശക്തി അനുഭവിക്കുക, അവന്റെ ദിവ്യസ്നേഹം മനസ്സിലാക്കാൻ കഴിയാത്ത രീതിയിൽ നിങ്ങളുടെ ആത്മാവിനെ സുഖപ്പെടുത്താനും, ശക്തിപ്പെടുത്താനും, പുതുക്കാനും അനുവദിക്കുക."}
                      </p>
                    </div>

                    {/* Spiritual Reflection */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-teal-800">{language === 'en' ? "Spiritual Reflection" : "ആത്മീയ ചിന്തന"}</h4>
                      </div>
                      <p className="text-gray-700">
                        {language === 'en' ?
                          "Embrace moments of guided meditation and personal reflection that invite you to contemplate God's word and presence in your life. These sacred pauses allow the Holy Spirit to speak to your heart, revealing divine wisdom and direction for your unique spiritual journey." :
                          "നിങ്ങളുടെ ജീവിതത്തിൽ ദൈവത്തിന്റെ വചനവും സാന്നിധ്യവും ധ്യാനിക്കാൻ നിങ്ങളെ ക്ഷണിക്കുന്ന നിർദ്ദേശിക്കപ്പെട്ട ധ്യാനത്തിന്റെയും വ്യക്തിപരമായ ചിന്തനയുടെയും നിമിഷങ്ങളെ സ്വീകരിക്കുക. ഈ പവിത്രമായ ഇടവേളകൾ പരിശുദ്ധാത്മാവിനെ നിങ്ങളുടെ ഹൃദയത്തോട് സംസാരിക്കാൻ അനുവദിക്കുന്നു, നിങ്ങളുടെ അതുല്യമായ ആത്മീയ യാത്രയ്ക്കായി ദൈവിക ജ്ഞാനവും ദിശാബോധവും വെളിപ്പെടുത്തുന്നു."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-blue-800 font-medium italic">
                    {language === 'en' ?
                      "\"For where two or three are gathered together in my name, there am I in the midst of them.\" — Matthew 18:20" :
                      "\"എന്തെന്നാൽ രണ്ടുപേരോ മൂന്നുപേരോ എന്റെ നാമത്തിൽ എവിടെ സമ്മേളിച്ചിരിക്കുന്നുവോ, അവിടെ ഞാൻ അവരുടെ നടുവിൽ ഉണ്ട്.\" — മത്തായി 18:20"}
                  </p>
                </div>
              </div>
            </div>

            {/* Meet the Organizers Section */}
            <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-2xl font-bold text-center mb-8">
                <span className="text-blue-800">{getTranslation('about', 'contactTeam', language)}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Fr Roshan's Contact Card */}
                <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-purple-100 border-2 border-purple-200">
                    <Image
                      src="/images/about/roshan.jpg"
                      alt="Fr Roshan Ennackappallil - Director of Jesus Youth Pala"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Fr Roshan Ennackappallil</h3>
                  <p className="text-sm text-gray-600 mb-2">Director of Jesus Youth Pala</p>
                  <a
                    href="tel:+919446812266"
                    className="flex items-center justify-center px-4 py-2 bg-purple-50 hover:bg-purple-100 rounded-full text-purple-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    94468 12266
                  </a>
                </div>

                {/* Neyamol's Contact Card */}
                <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-pink-100 border-2 border-pink-200">
                    <Image
                      src="/images/about/neyamol.jpg"
                      alt="Neyamol - Event Coordinator"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Neyamol</h3>
                  <a
                    href="tel:+918590815612"
                    className="flex items-center justify-center px-4 py-2 bg-pink-50 hover:bg-pink-100 rounded-full text-pink-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    85908 15612
                  </a>
                </div>

                {/* Anto's Contact Card */}
                <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 bg-blue-100 border-2 border-blue-200">
                    <Image
                      src="/images/about/anto.jpg"
                      alt="Anto - Event Coordinator"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Anto</h3>
                  <a
                    href="tel:+916282586348"
                    className="flex items-center justify-center px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-full text-blue-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    62825 86348
                  </a>
                </div>
              </div>
            </div>

            {/* Location Map Section */}
            <div className="animate-slide-up" style={{ animationDelay: "0.6s" }} id="location">
              <h2 className="text-2xl font-bold text-center mb-6">
                <span className="text-blue-800">{getTranslation('about', 'eventLocation', language)}</span>
              </h2>

              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.5878417942345!2d76.68890847535616!3d9.716173490375263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d0e948fe23fb%3A0x4d561f94a3ec7dc4!2sChavara%20CMI%20Public%20School%20Pala!5e0!3m2!1sen!2sin!4v1772556834795!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chavara CMI Public School Pala, Kottayam, Kerala Map"
                  className="w-full"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://maps.app.goo.gl/vetjoStbSfGKiTEm9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {getTranslation('about', 'getDirections', language)}
                </a>
              </div>
            </div>

            {/* Registration Section */}
            <div className="text-center space-y-6 animate-slide-up" style={{ animationDelay: "0.7s" }}>
              <h3 className="text-2xl font-bold text-blue-800">{getTranslation('about', 'readyToJoin', language)}</h3>
              <p className="text-lg text-gray-700">
                {getTranslation('about', 'scanQR', language)}<br />
                {getTranslation('about', 'orUseLink', language)}
              </p>

              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="relative w-64 h-64">
                    <Image
                      src="/images/bloomingroses/qr.png"
                      alt="Registration QR Code"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>

                <Link
                  href="https://tally.so/r/gDMyEd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-lg transition-all hover:shadow-xl">
                    {getTranslation('about', 'registerNow', language)}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Closing Message */}
            <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: "0.8s" }}>
              <p className="text-xl font-medium text-blue-800">
                {getTranslation('about', 'closingMessage', language)}
              </p>
              <p className="text-lg font-bold mt-2 text-pink-600">
                {getTranslation('about', 'organizer', language)}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}