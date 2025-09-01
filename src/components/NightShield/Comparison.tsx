"use client";
import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <span>
            NightShield AI Surveillance vs Conventional Security
          </span>
        }
        badge={
          <a href="https://peerlist.io/manuarora">
            <Badge className="h-10 w-10 -rotate-12 transform" />
          </a>
        }
        src={`/images/linear.webp`}
        showGradient={false}
      />
      {/* CTA under the simulated Macbook demo */}
    
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};























// 'use client'
// import React from 'react'

// import Image from 'next/image'
// import { ContainerScroll } from '@/components/ui/ContainerScroll'

// const Comparison = () => {
//   const comparisonData = [
//     {
//       feature: "Response Time",
//       traditional: "5-10 minutes",
//       nightshield: "< 2 seconds",
//       advantage: "nightshield"
//     },
//     {
//       feature: "Detection Accuracy",
//       traditional: "60-70%",
//       nightshield: "99.9%",
//       advantage: "nightshield"
//     },
//     {
//       feature: "24/7 Monitoring",
//       traditional: "Manual (limited)",
//       nightshield: "Fully Automated",
//       advantage: "nightshield"
//     },
//     {
//       feature: "False Alarms",
//       traditional: "High",
//       nightshield: "Minimal",
//       advantage: "nightshield"
//     },
//     {
//       feature: "Setup Time",
//       traditional: "Weeks",
//       nightshield: "Hours",
//       advantage: "nightshield"
//     },
//     {
//       feature: "Cost per Month",
//       traditional: "$2,000-5,000",
//       nightshield: "$500-1,500",
//       advantage: "nightshield"
//     },
//     {
//       feature: "Scalability",
//       traditional: "Limited",
//       nightshield: "Unlimited",
//       advantage: "nightshield"
//     },
//     {
//       feature: "Data Analytics",
//       traditional: "Basic",
//       nightshield: "Advanced AI",
//       advantage: "nightshield"
//     }
//   ]

//   return (
//     <section className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
//       <div className="absolute inset-0 grid-texture opacity-10"></div>

//       <div className="relative z-10">
//         <ContainerScroll
//           titleComponent={(
//             <div className="flex flex-col items-center justify-center">
//               <div className="flex justify-center items-center space-x-3 mb-4">
//                 <Image 
//                   src="/images/logo/LOGO TRANSPARENT.png" 
//                   alt="NightShield Logo" 
//                   width={48} 
//                   height={48}
//                   className="w-12 h-12"
//                 />
//                 <h2 className="text-3xl md:text-5xl font-bold">
//                   Why Choose <span className="text-red-500">NightShield</span>
//                 </h2>
//               </div>
//               <p className="text-base md:text-xl text-gray-300 max-w-3xl">
//                 See how NightShield&apos;s AI-powered surveillance outperforms traditional security systems
//               </p>
//             </div>
//           )}
//         >
//           <div className="h-full w-full px-4 md:px-8 flex flex-col">
//             <div className="bg-card-bg border border-red-500/20 rounded-2xl overflow-hidden">
//               <div className="grid grid-cols-3 bg-red-500/10 p-4 md:p-6">
//                 <div className="text-center">
//                   <h3 className="text-lg md:text-xl font-bold text-white">Feature</h3>
//                 </div>
//                 <div className="text-center">
//                   <h3 className="text-lg md:text-xl font-bold text-gray-400">Traditional Security</h3>
//                 </div>
//                 <div className="text-center">
//                   <h3 className="text-lg md:text-xl font-bold text-red-500">NightShield</h3>
//                 </div>
//               </div>
//               <div className="divide-y divide-red-500/20">
//                 {comparisonData.map((row, index) => (
//                   <div
//                     key={index}
//                     className={`grid grid-cols-3 p-4 md:p-6 hover:bg-red-500/5 transition-colors duration-200 ${
//                       row.advantage === 'nightshield' ? 'bg-green-500/5' : ''
//                     }`}
//                   >
//                     <div className="font-semibold text-white">
//                       {row.feature}
//                     </div>
//                     <div className="text-center text-gray-400">
//                       {row.traditional}
//                     </div>
//                     <div className="text-center text-red-500 font-semibold">
//                       {row.nightshield}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-8 md:mt-12 grid md:grid-cols-3 gap-4 md:gap-8">
//               <div className="bg-card-bg border border-red-500/20 rounded-xl p-6 text-center">
//                 <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-white">10x Faster Response</h3>
//                 <p className="text-gray-300">
//                   AI-powered detection provides instant alerts, reducing response time from minutes to seconds.
//                 </p>
//               </div>

//               <div className="bg-card-bg border border-red-500/20 rounded-xl p-6 text-center">
//                 <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20A8 8 0 0 1 4 12A8 8 0 0 1 12 4M12 6A6 6 0 0 0 6 12A6 6 0 0 0 12 18A6 6 0 0 0 18 12A6 6 0 0 0 12 6M12 8A4 4 0 0 1 16 12A4 4 0 0 1 12 16A4 4 0 0 1 8 12A4 4 0 0 1 12 8Z"/>
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-white">99.9% Accuracy</h3>
//                 <p className="text-gray-300">
//                   Advanced AI algorithms eliminate false alarms and provide precise threat detection.
//                 </p>
//               </div>

//               <div className="bg-card-bg border border-red-500/20 rounded-xl p-6 text-center">
//                 <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-white">60% Cost Savings</h3>
//                 <p className="text-gray-300">
//                   Reduce security costs while improving protection with automated AI surveillance.
//                 </p>
//               </div>
//             </div>

//             <div className="text-center mt-8 md:mt-12">
//               <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-8">
//                 <h3 className="text-2xl font-bold mb-4">
//                   Ready to Upgrade Your Security?
//                 </h3>
//                 <p className="text-gray-300 mb-6">
//                   Join hundreds of venues that have already upgraded to NightShield&apos;s AI-powered protection.
//                 </p>
//                 <button
//                   onClick={() => {
//                     const element = document.querySelector('#contact')
//                     if (element) element.scrollIntoView({ behavior: 'smooth' })
//                   }}
//                   className="btn-primary text-lg px-8 py-4 hover:scale-105 active:scale-95"
//                 >
//                   Get Started Today
//                 </button>
//               </div>
//             </div>
//           </div>
//         </ContainerScroll>
//       </div>
//     </section>
//   )
// }

// export default Comparison
