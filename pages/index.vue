<template>
  <!-- App -->
  <div class="mb-8">
    <!-- Navbar -->
    <div class="px-4 h-16 flex flex-row items-center justify-between">
      <!-- Logo -->
      <img src="../assets/logo.svg" alt="Logo" class="h-6" />

      <!-- About -->
      <NuxtLink
        to="/guide"
        class="
          px-3
          py-2
          border-2
          rounded
          border-black
          hover:bg-black
          hover:text-white
        "
        >How to?</NuxtLink
      >
    </div>

    <!-- Hero Section -->
    <div class="px-4 mt-4 flex flex-row items-center">
      <!-- Hero Text -->
      <div class="w-2/5 text-center">
        <!-- Heading -->
        <p class="text-4xl font-bold">Get daily notion quotes</p>

        <!-- Subheading -->
        <p class="mt-2 mb-4">Free notion quote widget for your Notion pages</p>

        <!-- Get started button -->
        <NuxtLink to="/" class="px-4 py-3 rounded bg-black text-white"
          >Get Started ↓</NuxtLink
        >
      </div>

      <!-- Hero Image -->
      <img class="w-3/5 h-96 border-2 border-black" src="" alt="Hero Image" />
    </div>

    <!-- Spacer -->
    <div class="h-24"></div>

    <!-- Preview Section -->
    <div class="px-4 flex flex-row items-center justify-center">
      <!-- Preview Frame -->
      <iframe
        :src="`/quote?fontSize=${fontSizeSelected}&fontColor=${fontColorSelected}`"
        frameborder="0"
        class="w-3/5 h-96 border-2 border-black"
      ></iframe>

      <!-- Config section -->
      <div class="w-2/5 flex flex-col justify-around items-center">
        <!-- Font Size setting -->
        <div class="">
          <p class="text-sm m-1">Font size :</p>
          <select class="px-3 py-1 w-48 border-2 rounded border-black text-black" name="fontSizes" id="fontSizes" v-model="fontSizeSelected">
            <option class="text-black" v-for="(fontSize, index) in fontSizes" :key="index" :value="fontSize">{{ fontSize }}</option>
          </select>
        </div>

        <!-- Spacer -->
        <div class="h-4"></div>

        <!-- Color settings -->
        <div class="">
          <p class="text-sm m-1">Font color :</p>
          <select class="px-3 py-1 w-48 border-2 rounded border-black text-black" name="fontColors" id="fontColors" v-model="fontColorSelected">
            <option class="text-black" v-for="(fontColor, index) in fontColors" :key="index" :value="fontColor">{{ fontColor }}</option>
          </select>
        </div>

        <!-- Spacer -->
        <div class="h-8"></div>

        <!-- Copy Link button -->
        <button class="px-3 py-2 bg-black text-white rounded" @click="copyLinkToClipboard">Copy Link To Clipboard</button>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      fontSizes: ['Text', 'Heading 3', 'Heading 2', 'Heading 1'],
      fontSizeSelected: 'Text',
      fontColors: ['Default', 'Gray', 'Brown', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Red'],
      fontColorSelected: 'Default',
    }
  },
  methods: {
    async copyLinkToClipboard() {
      await navigator.clipboard.writeText(`${process.env.BASE_URL || 'http://localhost:3000'}/quote?fontSize=${this.fontSizeSelected}&fontColor=${this.fontColorSelected}`)
    }
  }
});
</script>
