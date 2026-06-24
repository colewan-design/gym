<template>
  <section id="top" class="relative h-[92vh] min-h-[640px] overflow-hidden bg-ink-900">
    <!-- ambient glow -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(240,178,43,0.14),transparent_55%)]" />

    <!-- hero athlete photo -->
    <img
      src="~/assets/images/hero-athlete.png"
      alt="Furukawa Fitness Gym athlete"
      class="absolute right-0 bottom-0 hidden h-[105%] max-h-none object-contain object-bottom drop-shadow-[0_0_60px_rgba(240,178,43,0.18)] sm:block sm:right-[-2%] lg:right-[6%] lg:h-full"
    />

    <!-- darken for text contrast -->
    <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
    <div class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/70 to-transparent sm:via-ink-900/40" />

    <!-- scroll indicator -->
    <div class="absolute right-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 text-white/50 lg:flex">
      <span
        class="text-[11px] font-medium uppercase [text-orientation:upright] [writing-mode:vertical-rl]"
        style="letter-spacing: 0.15em"
      >Scroll Down</span>
      <span class="flex h-8 w-4 items-start justify-center rounded-full border border-white/30 p-1">
        <span class="h-1 w-1 animate-bounce rounded-full bg-gold-400" />
      </span>
    </div>

    <div class="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 pt-24">
      <h1 class="font-display text-[3.2rem] leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
        <span class="block"><span class="text-gradient-gold">You</span> have to be</span>
        <span class="block">odd to be</span>
        <span class="block"><span class="text-gradient-gold">number 1.</span></span>
      </h1>

      <p class="mt-6 max-w-md text-base text-white/70 sm:text-lg">
        Unlock your potential and redefine your life. Welcome to Furukawa Fitness Gym, where
        every drop of sweat brings you one step closer to your transformation.
      </p>

      <div class="mt-8 flex flex-wrap items-center gap-5">
        <a
          href="#pricing"
          class="rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold text-ink-900 transition hover:bg-gold-300"
        >
          Join Now
        </a>

        <div class="flex items-center gap-3">
          <div class="flex -space-x-3">
            <span
              v-for="n in 3"
              :key="n"
              class="h-9 w-9 rounded-full border-2 border-ink-900 bg-gradient-to-br from-gold-300 to-gold-600"
            />
          </div>
          <div class="text-sm text-white/70">
            <span class="font-display text-lg text-white">14K+</span> Followers
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
