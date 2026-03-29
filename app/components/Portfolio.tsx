"use client";

import { Play, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { getEmbedUrl } from '@/utils/url';

const projects = [
  {
    id: 1,
    title: "ATOS Event",
    category: "Corporate Event",
    link: "https://youtu.be/6mz9fFNlmBg",
    thumbnail: "https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3Mzg1NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "2:28"
  },
  // {
  //   id: 2,
  //   title: "Music Video Production",
  //   category: "Music",
  //   thumbnail: "https://images.unsplash.com/photo-1638128807421-1fe4b5f4e7c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2NzM4MDU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   duration: "3:20"
  // },
  // {
  //   id: 3,
  //   title: "",
  //   category: "Documentary",
  //   thumbnail: "/images/comingsoon.jpg",
  //   // thumbnail: "https://images.unsplash.com/photo-1695408248582-0c122bf0f9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2aWRlbyUyMGNhbWVyYXxlbnwxfHx8fDE3Njc0NjA4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   duration: ""
  // },
  {
    id: 4,
    title: "BNI Meet",
    category: "Corporate Event",
    link: "https://youtu.be/g48AUGkZATg",
    thumbnail: "https://images.unsplash.com/photo-1638961862991-bd7ee1c9ecfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3Njc0MjQ1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "1:15"
  },
  // {
  //   id: 5,
  //   title: "Product Showcase",
  //   category: "Commercial",
  //   thumbnail: "https://images.unsplash.com/photo-1760780567530-389d8a3fba75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHN0dWRpb3xlbnwxfHx8fDE3NjczODgwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   duration: "1:30"
  // },
  // {
  //   id: 6,
  //   title: "Travel Vlog Series",
  //   category: "Lifestyle",
  //   thumbnail: "https://images.unsplash.com/photo-1758788505792-38d65b41699e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlb2dyYXBoZXIlMjBjYW1lcmElMjBmaWxtaW5nfGVufDF8fHx8MTc2NzQ2MDgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   duration: "6:15"
  // },
  {
    id: 7,
    title: "BOBST Event",
    category: "Corporate Event",
    link: "https://youtu.be/d9aWXsfs4mI",
    thumbnail: "/images/comingsoon.jpg",
    duration: "1:29"
  },
  {
    id: 8,
    title: "AutoDesk Event",
    category: "Corporate Event",
    link: "https://youtube.com/shorts/6oZG_9WhwVs",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:52"
  },
  {
    id: 9,
    title: "Ujjivan Event",
    category: "Corporate Event",
    link: "https://youtube.com/shorts/nFpDlE2cihA",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:46"
  },
  {
    id: 10,
    title: "Drum Circle Event",
    category: "Corporate Event",
    link: "https://youtu.be/2iJPGDzyAa0",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:46"
  },
  {
    id: 11,
    title: "Drum Circle Event 2.0",
    category: "Corporate Event",
    link: "https://www.youtube.com/watch?v=GyQUDYaw-LA",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:41"
  },
  {
    id: 12,
    title: "Bridgenext Event",
    category: "Corporate Event",
    link: "https://www.youtube.com/shorts/sHW0t-_zPTc",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:42"
  },
  {
    id: 13,
    title: "Roche Event",
    category: "Corporate Event",
    link: "https://www.youtube.com/shorts/_A3xhZ1S-jk",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:59"
  },
  {
    id: 14,
    title: "ATOS Event",
    category: "Corporate Event",
    link: "https://youtu.be/YT52I906GA8",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:57"
  },
  {
    id: 15,
    title: "Baby Shower",
    category: "Cinematic",
    link: "https://www.youtube.com/watch?v=8ALHZoSSC0g",
    thumbnail: "/images/comingsoon.jpg",
    duration: "1:53"
  },
  {
    id: 16,
    title: "Mehendi Rang Laayo",
    category: "Special Occasions",
    link: "https://www.youtube.com/shorts/b0BU3GYwsCY",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:32"
  },
  {
    id: 17,
    title: "DJ + Djembe Percussion",
    category: "Live Performance",
    link: "https://www.youtube.com/shorts/EpkXi3MgFE0",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:39"
  },
  {
    id: 18,
    title: "Djembe + Live DJ",
    category: "Live Performance",
    link: "https://www.youtube.com/shorts/8ZPmPVtRO2c",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:31"
  },
  {
    id: 19,
    title: "BMW 530Li PPF",
    category: "Car Detailing",
    link: "https://www.youtube.com/shorts/nJv28Lz-UhQ",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:34"
  },
  {
    id: 20,
    title: "BMW PPF",
    category: "Car Detailing",
    link: "https://www.youtube.com/shorts/b6STdKPnrz0",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:32"
  },
  {
    id: 21,
    title: "MG Gloster PPF",
    category: "Car Detailing",
    link: "https://www.youtube.com/shorts/CWU5VsjtTZU",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:32"
  },
  {
    id: 22,
    title: "Fortuner PPF",
    category: "Car Detailing",
    link: "https://www.youtube.com/shorts/Gtyno-XN530",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:37"
  },
  {
    id: 23,
    title: "Mahindra Xev9e PPF",
    category: "Car Detailing",
    link: "https://www.youtube.com/shorts/AYQM3oVrypA",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:30"
  },
  {
    id: 24,
    title: "KIA Seltos PPF",
    category: "Car Detailing",
    link: "https://www.youtube.com/shorts/ixFPqSvAevk",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:31"
  },
  {
    id: 25,
    title: "Interior Cleaning | Before & After",
    category: "Car Detailing",
    link: "https://www.youtube.com/shorts/X-Q5B1ZoI9g",
    thumbnail: "/images/comingsoon.jpg",
    duration: "0:16"
  },
];

const categories = ["All", "Corporate Event", "Car Detailing", "Special Occasions", "Live Performance", "Cinematic"];

const projectsDivVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Delay between each child's animation start (e.g., 0.1 seconds)
      staggerChildren: 0.1,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

// const thisSectionHeadingCharsArr = ["S", "e", "l", "e", "c", "t", "e", "d", " ", "W", "o", "r", "k"]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showReel, setShowReel] = useState(false);
  const [link, setLink] = useState<string | undefined>("");

  const [showMore, setShowMore] = useState<boolean>(false);

  const filteredProjects = selectedCategory === "All"
    ? (showMore ? projects : projects.slice(0, 6))
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <section id="work" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            {/* NORMAL HEADING */}
            <h2 className="text-4xl md:text-6xl mb-4 text-white">
              Selected Works
            </h2>
            {/* ANIMATED HEADING */}
            {/* <motion.h2
              variants={projectsDivVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl mb-4 text-white"
            >
              {thisSectionHeadingCharsArr.map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={projectVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2> */}
            <p
              className="text-xl text-white/60"
            >
              A collection of our recent projects spanning commercials, music videos, and documentaries
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 transition-all ${selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            variants={projectsDivVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                variants={projectVariants}
                key={project.id}
                className="group relative aspect-video overflow-hidden bg-zinc-900 cursor-pointer"
                onClick={() => {
                  const embedUrl = getEmbedUrl(project.link);
                  setLink(embedUrl);
                  setShowReel(true)
                }}
              >
                {/* Thumbnail */}
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  loading={project.title ? undefined : "eager"}
                  width={1920}
                  height={1920}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs text-white/60 mb-1">{project.category} • {project.duration}</div>
                  <h3 className="text-xl text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {selectedCategory === "All" && (
          <div className='flex justify-center pt-10'>
            <button
              onClick={() => {
                setShowMore(!showMore)
                if (showMore) {
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                };
              }}
              className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-all transform hover:scale-105"
            >
              {showMore
                ? (<span className='flex items-center gap-1'>Show Less <ChevronUp size={18} /></span>)
                : (<span className='flex items-center gap-1'>Show More <ChevronDown size={18} /></span>)}
            </button>
          </div>
        )}
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
            className="absolute z-10000 top-6 right-6 text-white text-3xl cursor-pointer"
          >
            ✕
          </button>

          {/* VIDEO */}
          <iframe
            src={link}
            allow="autoplay; encrypted-media"
            allowFullScreen
            onEnded={() => setShowReel(false)}
            className="w-full h-full py-12 sm:p-0"
          // style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}
