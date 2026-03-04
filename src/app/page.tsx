'use client';

import Link from "next/link"
import Image from "next/image"
import { CountdownTimer } from "@/components/countdown-timer"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

export default function Home() {
  const { language } = useLanguage();
  return (
    <div className="relative overflow-hidden bg-[#fafcff]">
      {/* Modern Premium Background Orbs & Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-400/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-pink-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[20%] w-[35vw] h-[35vw] bg-purple-400/20 rounded-full blur-[100px]" />

        {/* Subtle decorative crosses/stars */}
        <svg className="absolute top-32 left-20 text-blue-300/50 w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg>
        <svg className="absolute bottom-40 right-24 text-pink-300/50 w-6 h-6 rotate-45" viewBox="0 0 24 24" fill="none"><path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-12 text-center">

            <div className="space-y-6 animate-fade-in flex flex-col items-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-4 drop-shadow-2xl">
                <Image
                  src="/images/bloomingroses/logo.png"
                  alt="Blooming Roses Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                {getTranslation('home', 'title', language)} <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">
                  2K26
                </span>
              </h1>

              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-600 font-medium">
                {getTranslation('home', 'subtitle', language)}
              </p>

              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 font-semibold shadow-sm">
                {getTranslation('home', 'eventDate', language)}
              </div>

              {/* Spiritual quote integrated as a subtle glass feature */}
              <div className="mt-8 mx-auto max-w-3xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg rounded-2xl p-6 italic text-gray-700">
                <p className="text-lg md:text-xl">
                  &ldquo;{getTranslation('home', 'quote', language)}&rdquo;
                </p>
                <div className="mt-3 text-sm font-semibold text-gray-900 text-right opacity-80">
                  — {getTranslation('home', 'quoteReference', language)}
                </div>
              </div>
            </div>

            {/* Countdown Timer Wrapper - using existing component */}
            <div className="w-full max-w-3xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
              <CountdownTimer />
            </div>

            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-8 w-full sm:w-auto">
              <Link
                href="https://tally.so/r/gDMyEd"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gray-900 px-10 font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 hover:shadow-2xl hover:bg-gray-800 w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative flex items-center gap-2">
                  {getTranslation('common', 'register', language)}
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </Link>

              <Link
                href="/about#location"
                className="group flex h-14 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 px-10 font-bold text-gray-800 shadow-sm transition-all hover:bg-white hover:shadow-md hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-rose-500 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {getTranslation('home', 'getDirections', language)}
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Video & Photo Highlight Cards - Premium Glass & Hover */}
      <section className="relative z-10 py-24 bg-white/50 backdrop-blur-xl border-t border-b border-gray-100/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
              {language === 'en' ? 'Glimpses of Faith & Fellowship' : 'വിശ്വാസത്തിന്റെയും കൂട്ടായ്മയുടെയും നിമിഷങ്ങൾ'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              {language === 'en' ? 'Experience the joy and transformation of past Blooming Roses events through our collection of cherished memories' : 'ഞങ്ങളുടെ ചെറുശേഖരത്തിലൂടെ മുൻ ബ്ലൂമിംഗ് റോസസ് ഇവന്റുകളുടെ സന്തോഷവും പരിവർത്തനവും അനുഭവിക്കുക'}
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Video highlight card */}
            <Link
              href="/gallery?tab=videos"
              className="group relative overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/30 transform hover:-translate-y-2 aspect-[4/3] sm:aspect-[16/10]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
              <Image
                src="https://res.cloudinary.com/dobqxxtml/video/upload/so_2.7/v1744695372/bloom_24_promo_onxbtt.jpg"
                alt="Prayer session from previous Blooming Roses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />

              {/* Play Button Center (Visible on hover) */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 p-8 text-white flex flex-col justify-end">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    {language === 'en' ? 'WATCH NOW' : 'ഇപ്പോൾ കാണുക'}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3">{language === 'en' ? 'Previous Blooming Roses' : 'മുൻ ബ്ലൂമിംഗ് റോസസ്'}</h3>
                <p className="text-white/80 font-medium mb-4 line-clamp-2">
                  {language === 'en' ? 'See the beautiful moments and transformations from our past events' : 'ഞങ്ങളുടെ മുൻ ഇവന്റുകളിൽ നിന്നുള്ള മനോഹരമായ നിമിഷങ്ങളും പരിവർത്തനങ്ങളും കാണുക'}
                </p>
                <div className="flex items-center font-bold text-white group-hover:text-blue-200 transition-colors">
                  {language === 'en' ? 'View All Videos' : 'എല്ലാ വീഡിയോകളും കാണുക'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Photo highlight card */}
            <Link
              href="/gallery?tab=photos"
              className="group relative overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/30 transform hover:-translate-y-2 aspect-[4/3] sm:aspect-[16/10]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
              <Image
                src="https://res.cloudinary.com/dobqxxtml/image/upload/v1744693380/previous_blooming_nkakyy.jpg"
                alt="Photos from previous Blooming Roses"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />

              {/* Eye/Gallery Icon Center (Visible on hover) */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 p-8 text-white flex flex-col justify-end">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    {language === 'en' ? 'BROWSE GALLERY' : 'ഗാലറി ബ്രൗസ് ചെയ്യുക'}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3">{language === 'en' ? 'Photo Memories' : 'ഫോട്ടോ ഓർമ്മകൾ'}</h3>
                <p className="text-white/80 font-medium mb-4 line-clamp-2">
                  {language === 'en' ? 'Explore our collection of moments capturing joy, friendship and spiritual growth' : 'സന്തോഷം, സൗഹൃദം, ആത്മീയ വളർച്ച എന്നിവ പകർത്തുന്ന നിമിഷങ്ങളുടെ ഞങ്ങളുടെ ശേഖരം പര്യവേക്ഷണം ചെയ്യുക'}
                </p>
                <div className="flex items-center font-bold text-white group-hover:text-pink-200 transition-colors">
                  {language === 'en' ? 'View All Photos' : 'എല്ലാ ഫോട്ടോകളും കാണുക'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Event Highlights - Fluid grid, sophisticated cards */}
      <section className="relative z-10 py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
              {language === 'en' ? 'Why Blooming Roses is Life-Changing' : 'എന്തുകൊണ്ട് ബ്ലൂമിംഗ് റോസസ് ജീവിതം മാറ്റുന്നു'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              {language === 'en' ? 'Discover the unique aspects of our event that create lasting spiritual impact and personal transformation' : 'സ്ഥായിയായ ആത്മീയ സ്വാധീനവും വ്യക്തിപരമായ പരിവർത്തനവും സൃഷ്ടിക്കുന്ന ഞങ്ങളുടെ ഇവന്റിന്റെ അനന്യമായ വശങ്ങൾ കണ്ടെത്തുക'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Highlight 1 */}
            <div className="group rounded-[2rem] bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{language === 'en' ? 'Spiritual Growth' : 'ആത്മീയ വളർച്ച'}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {language === 'en' ? 'Deepen your relationship with God through inspiring sessions, adoration, and a vibrant prayer life.' : 'പ്രചോദനാത്മകമായ സെഷനുകൾ, ആരാധന, സജീവമായ പ്രാർത്ഥനാ ജീവിതം എന്നിവയിലൂടെ ദൈവവുമായുള്ള നിങ്ങളുടെ ബന്ധം ആഴപ്പെടുത്തുക.'}
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="group rounded-[2rem] bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{language === 'en' ? 'Community' : 'കൂട്ടായ്മ'}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {language === 'en' ? 'Form meaningful connections with peers who share your values and faith journey.' : 'നിങ്ങളുടെ മൂല്യങ്ങളും വിശ്വാസ യാത്രയും പങ്കിടുന്ന സഹപാഠികളുമായി അർത്ഥവത്തായ ബന്ധങ്ങൾ രൂപപ്പെടുത്തുക.'}
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="group rounded-[2rem] bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{language === 'en' ? 'Transformation' : 'പരിവർത്തനം'}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {language === 'en' ? 'Experience lasting personal growth through encounters with Christ that will change your life.' : 'നിങ്ങളുടെ ജീവിതം മാറ്റുന്ന ക്രിസ്തുവുമായുള്ള കൂടിക്കാഴ്ചകളിലൂടെ സ്ഥായിയായ വ്യക്തിപരമായ വളർച്ച അനുഭവിക്കുക.'}
              </p>
            </div>
          </div>

          {/* Testimonial Section - Clean Masonry-like grid */}
          <div className="mt-28">
            <h3 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">{getTranslation('home', 'testimonialTitle', language)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

              {/* Testimonial 1 */}
              <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] transition-shadow">
                <div className="absolute top-8 right-8 text-blue-100">
                  <svg width="48" height="48" viewBox="0 0 32 32" fill="currentColor"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" /></svg>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 shadow-md">
                    <Image src="/images/testimonies/ann.jpg" alt="Ann Maria Saju" width={96} height={96} className="object-cover w-full h-full" unoptimized />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-6 font-medium">
                      &ldquo;{language === 'en' ? 'It was only after the Blooming Rose program that I was able to love and know the Jesus within me more. I came to that program for the opportunity to spend time with my friends for two or three days, but when I realized how I could spend the rest of my life with Jesus.' : 'ബ്ലൂമിംഗ് റോസ് പ്രോഗ്രാമിന് ശേഷം മാത്രമാണ് എനിക്ക് എന്നിലുള്ള യേശുവിനെ കൂടുതൽ സ്നേഹിക്കാനും അറിയാനും കഴിഞ്ഞത്. വീട്ടിലേക്ക് മടങ്ങിയപ്പോൾ, എനിക്ക് എന്റെ ജീവിതത്തിന്റെ ബാക്കി ഭാഗം യേശുവിനോടൊപ്പം എങ്ങനെ ചെലവഴിക്കാൻ കഴിയുമെന്ന് മനസ്സിലായി.'}&rdquo;
                    </p>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-bold text-gray-900 uppercase tracking-wide">Ann Maria Saju</p>
                      <p className="text-sm text-gray-500 font-medium tracking-wide">Blooming Roses &apos;23</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] transition-shadow">
                <div className="absolute top-8 right-8 text-pink-100">
                  <svg width="48" height="48" viewBox="0 0 32 32" fill="currentColor"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" /></svg>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 shadow-md">
                    <Image src="/images/testimonies/agnes.jpg" alt="Agnes Maria Sibi" width={96} height={96} className="object-cover w-full h-full" unoptimized />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-6 font-medium">
                      &ldquo;{language === 'en' ? 'You did not choose me, but I chose you (John. 15:16). I understood His call for me as a child of GOD, who needs to be giving His love which I received.' : 'നിങ്ങൾ എന്നെ തിരഞ്ഞെടുത്തതല്ല, ഞാൻ നിങ്ങളെ തിരഞ്ഞെടുത്തതാണ് (യോഹന്നാൻ. 15:16). ഞാൻ സ്വീകരിച്ച അവന്റെ സ്നേഹം നൽകേണ്ട ദൈവത്തിന്റെ കുഞ്ഞായി എന്നോടുള്ള അവന്റെ വിളി ഞാൻ മനസ്സിലാക്കി.'}&rdquo;
                    </p>
                    <div className="border-l-4 border-pink-500 pl-4">
                      <p className="font-bold text-gray-900 uppercase tracking-wide">Agnes Maria Sibi</p>
                      <p className="text-sm text-gray-500 font-medium tracking-wide">Blooming Roses &apos;21</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] transition-shadow">
                <div className="absolute top-8 right-8 text-indigo-100">
                  <svg width="48" height="48" viewBox="0 0 32 32" fill="currentColor"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" /></svg>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 shadow-md">
                    <Image src="/images/testimonies/tija.jpg" alt="Tija Thomas" width={96} height={96} className="object-cover w-full h-full" unoptimized />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-6 font-medium">
                      &ldquo;{language === 'en' ? 'Those 4 days I experienced Love of God through many people. It spiritually helped me a lot. Got the chance to be more closer to Jesus.' : 'ആ 4 ദിവസങ്ങളിൽ ഞാൻ നിരവധി ആളുകളിലൂടെ ദൈവത്തിന്റെ സ്നേഹം അനുഭവിച്ചു. അത് എന്നെ ആത്മീയമായി വളരെയധികം സഹായിച്ചു. യേശുവിനോട് കൂടുതൽ അടുക്കാനുള്ള അവസരം ലഭിച്ചു.'}&rdquo;
                    </p>
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <p className="font-bold text-gray-900 uppercase tracking-wide">Tija Thomas</p>
                      <p className="text-sm text-gray-500 font-medium tracking-wide">Blooming Roses &apos;24</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] transition-shadow">
                <div className="absolute top-8 right-8 text-purple-100">
                  <svg width="48" height="48" viewBox="0 0 32 32" fill="currentColor"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" /></svg>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 shadow-md">
                    <Image src="/images/testimonies/angel.jpg" alt="Angel Rose Babu" width={96} height={96} className="object-cover w-full h-full" unoptimized />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-6 font-medium">
                      &ldquo;{language === 'en' ? 'Amidst \'Blooming roses\', my soul found its path, which was the stage for crucial turning points in my life! The experience enabled me to walk along with Eeshopa.' : '\'ബ്ലൂമിംഗ് റോസസ്\' മധ്യേ, എന്റെ ആത്മാവ് അതിന്റെ പാത കണ്ടെത്തി. അനുഭവം ഈശോപ്പയോടൊപ്പം നടക്കാൻ എന്നെ പ്രാപ്തമാക്കി.'}&rdquo;
                    </p>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-bold text-gray-900 uppercase tracking-wide">Angel Rose Babu</p>
                      <p className="text-sm text-gray-500 font-medium tracking-wide">Blooming Roses &apos;24</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center pb-10">
            <Link
              href="/about"
              className="group inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-indigo-600 px-10 text-base font-bold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 transition-transform group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {language === 'en' ? 'Learn More About The Event' : 'ഇവന്റിനെക്കുറിച്ച് കൂടുതൽ അറിയുക'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
