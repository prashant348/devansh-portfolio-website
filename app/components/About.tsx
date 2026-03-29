"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-4/5 overflow-hidden bg-zinc-900">
              <Image
                // src={"/images/about_us.jpg"}
                src="https://images.unsplash.com/photo-1638128807421-1fe4b5f4e7c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2NzM4MDU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Videographer at work"
                width={1920}
                height={1920}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-white/20 -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              {/* <div className="text-sm tracking-widest text-white/60 mb-4">ABOUT ME</div> */}
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                About Us
              </h2>
            </div>

            <div className="space-y-4 text-lg text-white/70">
              <p>
                We offer professional video production, photography, video editing, and 
                social media marketing services. We help brands and 
                businesses grow through high-quality visual content. 🎬
              </p>
              <p>
                From corporate brand films to music videos and documentaries, We approach
                each project with a unique blend of technical expertise and artistic sensibility.
                We believe that every frame should serve the story and evoke emotion.
              </p>
              <p>
                Based in Pune, We've had the privilege of working with diverse clients
                ranging from startups to established brands, always focused on delivering
                content that exceeds expectations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-4xl mb-2 text-white">150+</div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl mb-2 text-white">25+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl mb-2 text-white">4+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
