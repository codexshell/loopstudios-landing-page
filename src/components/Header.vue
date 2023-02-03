<template>
  <div
    v-if="!drawerOpen"
    class="bg-mobile-hero-pattern bg-no-repeat pt-10 px-8 pb-52 md:bg-desktop-hero-pattern 2xl:pt-16 2xl:px-40"
  >
    <div class="flex justify-between items-center">
      <div><img v-bind:src="logoUrl" alt="logo" /></div>
      <button class="xl:hidden" v-on:click="handleClick">
        <img v-bind:src="hamburgerUrl" alt="main menu" />
      </button>
      <nav class="hidden xl:block">
        <ul
          class="hidden xl:flex xl:gap-6 xl:text-brand-primary-white xl:font-brand-1"
        >
          <li v-for="navigation in navigationList" v-bind:key="navigation">
            <a v-on:click.prevent href="/">{{ navigation }}</a>
            <hr
              class="border-[.1rem] hover:border-[0.1rem] w-6 mx-auto mt-[0.25rem]"
            />
          </li>
        </ul>
      </nav>
    </div>
    <div class="border-2 mt-48 xl:inline-block xl:w-3/5 xl:mt-32">
      <h1
        class="text-brand-primary-white font-brand-2 text-5xl p-4 sm:text-center xl:text-7xl xl:text-start xl:p-8"
      >
        IMMERSIVE EXPERIENCES THAT DELIVER
      </h1>
    </div>
  </div>

  <div v-if="drawerOpen" class="bg-brand-primary-black pt-10 px-8 pb-52">
    <div class="flex justify-between items-center">
      <div><img v-bind:src="logoUrl" alt="logo" /></div>
      <button v-on:click="handleClick">
        <img v-bind:src="iconCloseUrl" alt="main menu" />
      </button>
    </div>
    <div class="mt-48">
      <nav>
        <ul class="sm:text-center">
          <li
            class="text-brand-primary-white uppercase font-brand-2 text-3xl [&:not(:first-child)]:mt-8"
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
</template>

<script setup lang="ts">
import logoUrl from "../assets/logo.svg";
import hamburgerUrl from "../assets/icon-hamburger.svg";
import iconCloseUrl from "../assets/icon-close.svg";
import { navigationList } from "../data/header";
import { ref } from "vue";

let drawerOpen = $ref(false);

const handleClick = () => (drawerOpen = !drawerOpen);
</script>

<style scoped>
hr {
  visibility: hidden;
}

a:active + hr {
  visibility: visible;
}
</style>
