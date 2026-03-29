"use client";

import { Play } from 'lucide-react';
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from './ui/AnimationBackgroud';

export function Hero() {
  const [showReel, setShowReel] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // backgroundImage: `url('https://images.unsplash.com/photo-1758788505792-38d65b41699e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlb2dyYXBoZXIlMjBjYW1lcmElMjBmaWxtaW5nfGVufDF8fHx8MTc2NzQ2MDgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        >
          <AnimatedBackground />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black" />
        </div>


        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}    // Starts slightly lower and invisible
              animate={{ opacity: 1, y: 0 }}     // Slides up and fades in
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl tracking-tight"
            >
              Bringing Stories
              <br />
              <span className="italic">to <span className='story-text bg-transparent'>Life</span></span>

            </motion.h1>
            {/* <h1 style={{ animation: "fade-in 1s ease-out forwards" }} className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-white">
              Bringing Stories
              <br />
              <span className="italic">to Life</span>
            </h1> */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8, // Starts after the main heading begins its animation
                ease: "easeOut"
              }}
              className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto"
            >
              Professional cinematography and editing services for brands,
              events, and creators
            </motion.p>
            {/* <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Professional videography and editing services for brands, events, and creators
            </p> */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 1.6, // Starts after the main heading begins its animation
                ease: "easeOut"
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-all transform hover:scale-105"
              >
                View Our Work
              </button>
              {/* WATCH REEL BUTTON */}
              <button
                onClick={() => setShowReel(true)}
                className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-all flex items-center gap-2">
                <Play size={20} />
                Show Reel
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </div>
      </section>
      {/* 🎬 FULLSCREEN VIDEO MODAL */}
      {showReel && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
          style={{
            animation: "fade-in 0.5s ease-in-out"
          }}
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowReel(false)}
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
          >
            ✕
          </button>

          {/* VIDEO */}
          <video
            src="/videos/sample_video.mp4"
            controls
            autoPlay
            playsInline
            onEnded={() => setShowReel(false)}
            className="max-h-screen max-w-[100vw] shadow-2xl"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}
