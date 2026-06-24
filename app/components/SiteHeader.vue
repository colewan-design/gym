<script setup lang="ts">
const open = ref(false)

const links = [
  { label: 'Programs', href: '#programs' },
  { label: 'Fat Belly Project', href: '#fat-belly-project' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' }
]

function closeMenu() {
  open.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
    <nav
      class="flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border border-white/10 bg-ink-800/80 px-5 py-3 backdrop-blur-md shadow-lg shadow-black/40"
    >
      <a href="#top" class="flex items-center gap-2 shrink-0">
        <img src="~/assets/images/logo.png" alt="Furukawa Fitness Gym" class="h-10 w-10 object-contain" />
        <span class="font-display text-lg tracking-wide text-white">FURUKAWA</span>
      </a>

      <ul class="hidden items-center gap-7 text-sm font-medium text-white/80 lg:flex">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="transition hover:text-gold-300">{{ link.label }}</a>
        </li>
      </ul>

      <a
        href="#contact"
        class="hidden shrink-0 rounded-full bg-gold-400 px-5 py-2 text-sm font-semibold text-ink-900 transition hover:bg-gold-300 lg:inline-block"
      >Join Now</a>

      <button class="lg:hidden text-white" aria-label="Toggle menu" @click="open = !open">
        <Icon :name="open ? 'mdi:close' : 'mdi:menu'" size="26" />
      </button>
    </nav>

    <Transition name="fade">
      <div
        v-if="open"
        class="absolute top-20 w-full max-w-5xl rounded-3xl border border-white/10 bg-ink-800/95 p-6 backdrop-blur-md lg:hidden"
      >
        <ul class="flex flex-col gap-4 text-base font-medium text-white/85">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="block" @click="closeMenu">{{ link.label }}</a>
          </li>
          <li>
            <a
              href="#contact"
              class="block rounded-full bg-gold-400 px-5 py-2 text-center font-semibold text-ink-900"
              @click="closeMenu"
            >Join Now</a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
