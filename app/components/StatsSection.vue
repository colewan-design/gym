<script setup lang="ts">
const stats = [
  { value: '14K+', label: 'Followers' },
  { value: '223', label: 'Reviews' },
  { value: '100%', label: 'Recommend' },
  { value: '2018', label: 'Est. since' }
]
</script>

<template>
  <section id="results" class="mx-auto max-w-6xl px-6 py-16">
    <div class="grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-ink-800/60 p-10 sm:grid-cols-4">
      <div v-for="stat in stats" :key="stat.label" class="text-center">
        <p class="font-display text-4xl text-gold-300 sm:text-5xl">{{ stat.value }}</p>
        <p class="mt-1 text-xs uppercase tracking-widest text-white/55">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>
