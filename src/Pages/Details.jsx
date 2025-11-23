import React from 'react';


const Details = () => {

    

    return (
        <div>
  <body class="min-h-screen text-slate-100">
    <main class="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
      
      <section class="relative overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1491921125492-f0b7a5dc2a69?q=80&w=1920&auto=format&fit=crop"
          alt="Neon city skyline background art"
          class="h-56 w-full object-cover md:h-72"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/30 to-transparent"></div>

        <div class="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <div class="flex flex-col gap-4">
            <div>
              <h1 class="text-2xl font-semibold tracking-tight md:text-3xl">Cybernetic Pulse</h1>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-200">Pixel Art</span>
                <span class="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-200">RPG</span>
                <span class="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-200">Platformer</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <button class="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-500">
                
                <svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <path d="M7 10l5 5 5-5"/>
                  <path d="M12 15V3"/>
                </svg>
                Install Game
              </button>
              <button class="inline-flex items-center rounded-xl bg-slate-700 px-5 py-2 text-sm font-medium hover:bg-slate-600">
                
                <svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                  <path d="M12 8v6M9 11h6"/>
                </svg>
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </section>

     
      <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        
        <div class="md:col-span-2">
          
          <section class="rounded-xl border border-slate-800/60 bg-slate-900/50 p-5 backdrop-blur">
            <h2 class="mb-2 text-lg font-semibold">About the Game</h2>
            <p class="leading-relaxed text-slate-300">
              Cybernetic Pulse is a fast-paced pixel art RPG platformer set in a dystopian future. Navigate the neon-lit
              streets of Neo-Veridia, battling rogue AI and corporate enforcers. Uncover a deep conspiracy that threatens
              the last vestiges of humanity. With a rich storyline, customizable character abilities, and a branching
              narrative, every choice matters.
            </p>
          </section>

          
          <section class="mt-6 rounded-xl border border-slate-800/60 bg-slate-900/50 p-5">
            <h2 class="mb-3 text-lg font-semibold">Media Gallery</h2>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="group relative overflow-hidden rounded-xl border border-slate-800/60">
                <img
                  src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop"
                  alt="In-game screenshot of a neon-lit alley"
                  class="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <button class="group relative flex h-44 items-center justify-center overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/60">
                <img
                  src="https://images.unsplash.com/photo-1520975922215-230c439e63f7?q=80&w=1400&auto=format&fit=crop"
                  alt="Trailer preview thumbnail"
                  class="absolute inset-0 h-full w-full object-cover opacity-70"
                />
                <span class="relative z-10 inline-flex items-center rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium backdrop-blur">
                  
                  <svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Trailer
                </span>
              </button>
            </div>
          </section>
        </div>

        
        <aside class="flex flex-col gap-6">
      
          <section class="rounded-xl border border-slate-800/60 bg-slate-900/60 p-5">
            <h3 class="mb-2 text-base font-semibold">Ratings & Reviews</h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
               
                <svg class="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.3l-6.16 3.73 1.64-6.99L2 8.9l7.05-.6L12 1.5l2.95 6.8 7.05.6-5.48 5.14 1.64 6.99z"/></svg>
                <svg class="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.3l-6.16 3.73 1.64-6.99L2 8.9l7.05-.6L12 1.5l2.95 6.8 7.05.6-5.48 5.14 1.64 6.99z"/></svg>
                <svg class="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.3l-6.16 3.73 1.64-6.99L2 8.9l7.05-.6L12 1.5l2.95 6.8 7.05.6-5.48 5.14 1.64 6.99z"/></svg>
                <svg class="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.3l-6.16 3.73 1.64-6.99L2 8.9l7.05-.6L12 1.5l2.95 6.8 7.05.6-5.48 5.14 1.64 6.99z"/></svg>
                <svg class="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <div class="text-right">
                <div class="text-xl font-semibold">4.5</div>
                <div class="text-xs text-slate-400">(1,284 reviews)</div>
              </div>
            </div>
          </section>

          
          <section class="rounded-xl border border-slate-800/60 bg-slate-900/60 p-5">
            <h3 class="mb-2 text-base font-semibold">Developer</h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800">
                  
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 21h18"/>
                    <path d="M9 8h1"/>
                    <path d="M9 12h1"/>
                    <path d="M9 16h1"/>
                    <path d="M14 8h1"/>
                    <path d="M14 12h1"/>
                    <path d="M14 16h1"/>
                    <path d="M4 21V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15"/>
                  </svg>
                </div>
                <div>
                  <div class="font-medium leading-tight">Synthwave Studios</div>
                  <div class="text-xs text-slate-400">Indie Developer</div>
                </div>
              </div>
              <button class="rounded-xl bg-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-600">Follow</button>
            </div>
          </section>

          
          <section class="rounded-xl border border-slate-800/60 bg-slate-900/60 p-5">
            <h3 class="mb-2 text-base font-semibold">Game Details</h3>
            <div class="space-y-3 text-sm text-slate-300">
              <div class="flex items-start justify-between gap-6">
                <span class="text-slate-400">Release Date</span>
                <span class="font-medium">Oct 26, 2023</span>
              </div>
              <div class="h-px bg-slate-800"></div>
              <div class="flex items-start justify-between gap-6">
                <span class="text-slate-400">Platform</span>
                <span class="font-medium">PC, Mac</span>
              </div>
              <div class="h-px bg-slate-800"></div>
              <div class="flex items-start justify-between gap-6">
                <span class="text-slate-400">Languages</span>
                <span class="font-medium">English, Spanish</span>
              </div>
            </div>
          </section>

          
          <section class="rounded-xl border border-slate-800/60 bg-slate-900/60 p-4">
            <div class="flex items-center gap-3 text-sm text-slate-300">
             
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 12h12"/>
                <path d="M7 10v4"/>
                <circle cx="17" cy="10" r="1"/>
                <circle cx="17" cy="14" r="1"/>
              </svg>
              Ready to dive in? Install now and jump into Neo-Veridia.
            </div>
          </section>
        </aside>
      </div>
    </main>
  </body>

        </div>
    );
};

export default Details;