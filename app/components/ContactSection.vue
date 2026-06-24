<script setup lang="ts">
const contacts = [
  {
    icon: 'mdi:map-marker',
    label: 'Address',
    value: '5th Floor Pines Hill Building 2, KM5, La Trinidad, Philippines, 2601'
  },
  {
    icon: 'mdi:email-outline',
    label: 'Email',
    value: 'furukawa.info@yahoo.com',
    href: 'mailto:furukawa.info@yahoo.com'
  },
  {
    icon: 'mdi:whatsapp',
    label: 'WhatsApp / Phone',
    value: '+63 968 852 7498',
    href: 'tel:+639688527498'
  },
  {
    icon: 'mdi:facebook-messenger',
    label: 'Messenger',
    value: 'Furukawa Fitness Gym',
    href: 'https://m.me/furukawafitness'
  },
  {
    icon: 'mdi:facebook',
    label: 'Facebook',
    value: 'facebook.com/furukawafitness',
    href: 'https://www.facebook.com/furukawafitness'
  }
]
</script>

<template>
  <section id="contact" class="mx-auto max-w-6xl px-6 py-24">
    <div class="grid gap-12 rounded-3xl border border-white/10 bg-ink-800/60 p-10 lg:grid-cols-2">
      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gold-400">Get In Touch</p>
        <h2 class="mt-3 font-display text-4xl text-white sm:text-5xl">No excuses. No shortcuts.</h2>
        <p class="mt-4 max-w-md text-white/65">
          Drop by our Pines Hill location, send us a message, or give us a call to start your
          transformation with Furukawa Fitness Gym.
        </p>

        <ul class="mt-8 space-y-5">
          <li v-for="c in contacts" :key="c.label" class="flex items-start gap-4">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300">
              <Icon :name="c.icon" size="20" />
            </span>
            <div>
              <p class="text-xs uppercase tracking-widest text-white/45">{{ c.label }}</p>
              <a
                v-if="c.href"
                :href="c.href"
                :target="c.href.startsWith('http') ? '_blank' : undefined"
                :rel="c.href.startsWith('http') ? 'noopener' : undefined"
                class="text-white/85 hover:text-gold-300"
              >{{ c.value }}</a>
              <p v-else class="text-white/85">{{ c.value }}</p>
            </div>
          </li>
        </ul>
      </div>

      <form class="flex flex-col gap-4 self-start rounded-2xl border border-white/10 bg-ink-900/60 p-6" @submit.prevent>
        <div>
          <label class="mb-1 block text-xs uppercase tracking-widest text-white/50">Name</label>
          <input
            type="text"
            class="w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-sm text-white outline-none focus:border-gold-400/60"
            placeholder="Your name"
          />
        </div>
        <div>
          <label class="mb-1 block text-xs uppercase tracking-widest text-white/50">Phone / Email</label>
          <input
            type="text"
            class="w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-sm text-white outline-none focus:border-gold-400/60"
            placeholder="How can we reach you?"
          />
        </div>
        <div>
          <label class="mb-1 block text-xs uppercase tracking-widest text-white/50">Message</label>
          <textarea
            rows="4"
            class="w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-sm text-white outline-none focus:border-gold-400/60"
            placeholder="Tell us about your goals"
          />
        </div>
        <button
          type="submit"
          class="mt-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:bg-gold-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>
