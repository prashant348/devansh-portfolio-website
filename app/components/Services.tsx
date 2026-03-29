"use client";

import { Camera, Film, Play } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: "Cinematography",
    description: "Professional video production with high-end cinema cameras and lighting equipment. From concept to capture, We handle all aspects of filming.",
    features: [
      "Multi-camera setups",
      "Drone cinematography",
      "Stabilized camera work",
      "Professional lighting"
    ]
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Expert post-production services including editing, color grading, and motion graphics to bring your footage to life.",
    features: [
      "Color correction & grading",
      "Motion graphics",
      "Sound design & mixing",
      "Visual effects"
    ]
  },
  {
    icon: Play,
    title: "Content Creation",
    description: "End-to-end content production for social media, websites, and marketing campaigns tailored to your brand's voice.",
    features: [
      "Social media content",
      "Brand storytelling",
      "Promotional videos",
      "Documentary-style films"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm tracking-widest text-white/60 mb-4">SERVICES</div>
          <h2 className="text-4xl md:text-6xl mb-4 text-white">What We Offer</h2>
          <p className="text-xl text-white/60">
            Comprehensive video production and content marketing services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900/50 p-8 border border-white/10 hover:border-white/20 transition-all group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-2xl mb-4 text-white">{service.title}</h3>
                <p className="text-white/60 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-white/70 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-white/70 mb-6">
            Need a custom package? Let's discuss your project
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-all inline-block"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}