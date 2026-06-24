<script setup lang="ts">
const plans = [
  {
    name: 'Drop-In',
    price: '₱150',
    period: 'per session',
    highlight: false,
    features: ['Single gym session', 'Full equipment access', 'No commitment']
  },
  {
    name: 'Monthly',
    price: '₱1,200',
    period: 'per month',
    highlight: true,
    features: ['Unlimited gym access', 'Fat Belly Project eligibility', 'Progress tracking', 'Community channel access']
  },
  {
    name: 'Coached',
    price: '₱2,500',
    period: 'per month',
    highlight: false,
    features: ['Everything in Monthly', '1-on-1 coaching sessions', 'Custom program design', 'Priority weigh-ins']
  }
]
</script>

<template>
  <section id="pricing" class="mx-auto max-w-6xl px-6 py-24">
    <div class="mb-14 max-w-2xl">
      <p class="text-xs font-semibold uppercase tracking-widest text-gold-400">Membership</p>
      <h2 class="mt-3 font-display text-4xl text-white sm:text-5xl">Pick your plan.</h2>
      <p class="mt-4 text-white/65">
        Rates shown are indicative — message us on Facebook or WhatsApp for current promos and
        the latest Fat Belly Project season pricing.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <div
        v-for="plan in plans"
        :key="plan.name"
        class="relative flex flex-col rounded-3xl border p-8"
        :class="plan.highlight
          ? 'border-gold-400/60 bg-ink-800 shadow-xl shadow-gold-400/5'
          : 'border-white/10 bg-ink-800/50'"
      >
        <span
          v-if="plan.highlight"
          class="absolute -top-3 left-8 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-ink-900"
        >Most popular</span>

        <h3 class="font-display text-2xl text-white">{{ plan.name }}</h3>
        <p class="mt-4">
          <span class="font-display text-4xl text-gold-300">{{ plan.price }}</span>
          <span class="ml-1 text-sm text-white/50">{{ plan.period }}</span>
        </p>

        <ul class="mt-6 flex-1 space-y-3 text-sm text-white/70">
          <li v-for="f in plan.features" :key="f" class="flex items-start gap-2">
            <Icon name="mdi:check" class="mt-0.5 shrink-0 text-gold-400" size="16" />
            {{ f }}
          </li>
        </ul>

        <a
          href="#contact"
          class="mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition"
          :class="plan.highlight
            ? 'bg-gold-400 text-ink-900 hover:bg-gold-300'
            : 'border border-white/15 text-white/85 hover:border-gold-400/50 hover:text-gold-300'"
        >Get Started</a>
      </div>
    </div>
  </section>
</template>
