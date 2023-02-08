<template>
  <header>
    <div
      v-if="!isMenuOpen"
      class="bg-mobile-hero-pattern bg-no-repeat px-8 pt-10 pb-52 md:bg-desktop-hero-pattern xl:px-40 xl:pt-16"
    >
      <div class="flex items-center justify-between">
        <div><img v-bind:src="logoUrl" alt="logo" /></div>
        <button
          data-test="menu-button"
          class="xl:hidden"
          v-on:click="handleClick"
        >
          <img v-bind:src="hamburgerUrl" alt="main menu" />
        </button>
        <nav class="hidden xl:block" data-test="desktop-menu">
          <ul
            class="hidden xl:flex xl:gap-6 xl:font-brand-1 xl:text-brand-primary-white"
          >
            <li v-for="navigation in navigationList" v-bind:key="navigation">
              <a v-on:click.prevent href="/">{{ navigation }}</a>
              <hr
                class="mx-auto mt-[0.25rem] w-6 border-[.1rem] hover:border-[0.1rem]"
              />
            </li>
          </ul>
        </nav>
      </div>
      <div class="mt-48 border-2 xl:mt-32 xl:inline-block xl:w-3/5">
        <h1
          class="p-4 font-brand-2 text-[2.5rem] text-brand-primary-white sm:text-center xl:p-8 xl:text-start xl:text-7xl"
        >
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </div>

    <div v-if="isMenuOpen" class="bg-brand-primary-black px-8 pt-10 pb-52">
      <div class="flex items-center justify-between">
        <div><img v-bind:src="logoUrl" alt="logo" /></div>
        <button v-on:click="handleClick" data-test="menu-button">
          <img v-bind:src="iconCloseUrl" alt="main menu" />
        </button>
      </div>
      <div class="mt-48">
        <nav data-test="mobile-menu">
          <ul class="sm:text-center">
            <li
              class="font-brand-2 text-3xl uppercase text-brand-primary-white [&:not(:first-child)]:mt-8"
              v-for="navigation in navigationList"
              v-bind:key="navigation"
            >
              <a class="sm:px-12" href="/">
                {{ navigation }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logoUrl from "../assets/logo.svg";
import hamburgerUrl from "../assets/icon-hamburger.svg";
import iconCloseUrl from "../assets/icon-close.svg";
import { navigationList } from "../data/header";
import { reactive, toRef } from "vue";

const state = reactive({
  isMenuOpen: false,
});

const handleClick = () => (state.isMenuOpen = !state.isMenuOpen);

const isMenuOpen = toRef(state, "isMenuOpen");
</script>

<style scoped>
hr {
  visibility: hidden;
}

a:active + hr {
  visibility: visible;
}

@media (max-width: 355px) {
  h1 {
    font-size: theme("fontSize.3xl");
  }
}
</style>
