<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 px-6 py-10">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
      <div class="flex items-center gap-2">
        <img src="~/assets/images/logo.png" alt="Furukawa Fitness Gym" class="h-8 w-8 object-contain" />
        <span class="font-display text-base tracking-wide text-white">FURUKAWA FITNESS GYM</span>
      </div>

      <p class="text-xs text-white/45">
        &copy; {{ year }} Furukawa Fitness Gym. All rights reserved.
      </p>

      <a
        href="https://www.facebook.com/furukawafitness"
        target="_blank"
        rel="noopener"
        class="flex items-center gap-2 text-sm text-white/60 hover:text-gold-300"
      >
        <Icon name="mdi:facebook" size="18" />
        Follow on Facebook
      </a>
    </div>
  </footer>
</template>
