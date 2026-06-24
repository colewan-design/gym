<script setup lang="ts">
const features = [
  {
    icon: 'mdi:dumbbell',
    title: 'Strength & Conditioning',
    description: 'Structured programs built around progressive overload, mobility, and recovery.'
  },
  {
    icon: 'mdi:account-group',
    title: 'Real Coaching',
    description: 'Hands-on guidance from trainers who track your form, not just your reps.'
  },
  {
    icon: 'mdi:fire',
    title: 'Transformation Focus',
    description: 'Home of the Fat Belly Project — accountability challenges that actually deliver.'
  },
  {
    icon: 'mdi:clock-outline',
    title: 'Open Daily',
    description: 'Flexible hours at our Pines Hill location so training fits your schedule.'
  }
]
</script>

<template>
  <section id="programs" class="mx-auto max-w-6xl px-6 py-24">
    <div class="mb-14 max-w-2xl">
      <p class="text-xs font-semibold uppercase tracking-widest text-gold-400">Why Furukawa</p>
      <h2 class="mt-3 font-display text-4xl text-white sm:text-5xl">
        Built for people serious about change.
      </h2>
      <p class="mt-4 text-white/65">
        Furukawa Fitness Gym is a Gym &amp; Physical Fitness Center in La Trinidad, Benguet, trusted
        by a community of 14K+ followers and a 100% recommendation rate across 223 reviews.
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="rounded-2xl border border-white/10 bg-ink-800/60 p-6 transition hover:border-gold-400/40 hover:bg-ink-800"
      >
        <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300">
          <Icon :name="feature.icon" size="22" />
        </div>
        <h3 class="font-semibold text-white">{{ feature.title }}</h3>
        <p class="mt-2 text-sm text-white/60">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>
