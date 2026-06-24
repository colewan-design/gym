<script setup lang="ts">
const galleryCards = [
  {
    title: 'Week 1 Check-In',
    caption: 'Baseline photo day with coach support and first measurements.',
    image: '/images/fat-belly/01_week_1_check_in.png',
    alt: 'Week 1 transformation check-in at Furukawa Fitness Gym'
  },
  {
    title: 'Coach On The Floor',
    caption: 'Hands-on coaching during a strength session with focused form cues.',
    image: '/images/fat-belly/02_coach_on_the_floor.png',
    alt: 'Coach guiding a member through strength training at Furukawa Fitness Gym'
  },
  {
    title: 'Progress In Motion',
    caption: 'A member pushing through a cardio finisher after steady fat-loss progress.',
    image: '/images/fat-belly/03_progress_in_motion.png',
    alt: 'Member training through a cardio finisher during a transformation journey'
  },
  {
    title: 'Champion Finish',
    caption: 'Challenge winner moment with visible confidence and community pride.',
    image: '/images/fat-belly/04_champion_finish.png',
    alt: 'Champion finish portrait celebrating a transformation win at Furukawa Fitness Gym'
  }
]
</script>

<template>
  <section id="fat-belly-project" class="border-y border-white/5 bg-ink-800/40 py-24">
    <div class="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gold-400">
          Community Channel &middot; 368 members
        </p>
        <h2 class="mt-3 font-display text-4xl text-white sm:text-5xl">The Fat Belly Project</h2>
        <p class="mt-4 text-white/65">
          This could be you. Our flagship transformation challenge has been running since 2018 -
          real members, real before-and-afters, real accountability. No excuses, no shortcuts,
          just consistent work and a coach in your corner.
        </p>

        <ul class="mt-6 space-y-3 text-sm text-white/70">
          <li class="flex items-start gap-3">
            <Icon name="mdi:check-circle" class="mt-0.5 shrink-0 text-gold-400" size="18" />
            Seasonal challenges with tracked weigh-ins and progress photos
          </li>
          <li class="flex items-start gap-3">
            <Icon name="mdi:check-circle" class="mt-0.5 shrink-0 text-gold-400" size="18" />
            Champion awards each season for the biggest transformations
          </li>
          <li class="flex items-start gap-3">
            <Icon name="mdi:check-circle" class="mt-0.5 shrink-0 text-gold-400" size="18" />
            Supportive community of 368+ members keeping each other on track
          </li>
        </ul>

        <a
          href="#contact"
          class="mt-8 inline-flex rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold text-ink-900 transition hover:bg-gold-300"
        >
          Start Your Transformation
        </a>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="card in galleryCards"
          :key="card.title"
          class="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-ink-900"
        >
          <img
            :src="card.image"
            :alt="card.alt"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/15 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5">
            <h3 class="mt-3 font-display text-2xl leading-none text-white">{{ card.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-white/65">{{ card.caption }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
