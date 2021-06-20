<template>
  <!-- App -->
  <div class="mb-8 text-black bg-white">
    <!-- Navbar -->
    <div class="px-4 h-16 flex flex-row items-center justify-between">
      <!-- Logo -->
      <img src="../assets/logo.svg" alt="Logo" class="h-6" />

      <!-- About -->
      <button class="px-3 py-2 border-2 rounded border-black hover:bg-black hover:text-white" @click="scrollToElement('how-to-section')">How to?</button>
    </div>

    <!-- Hero Section -->
    <div class="px-4 mt-4 h-96 md:h-full flex flex-row items-center">
      <!-- Hero Text -->
      <div class="w-full md:w-2/5 text-center">
        <!-- Heading -->
        <p class="text-4xl font-bold">Get daily notion quotes</p>

        <!-- Subheading -->
        <p class="mt-2 mb-4">Free notion quote widget for your Notion pages</p>

        <!-- Get started button -->
        <button class="px-4 py-3 rounded bg-black text-white" @click="scrollToElement('preview-section')">Get Started ↓</button>
      </div>

      <!-- Hero Image -->
      <img class="w-3/5 h-96 border-2 border-black hidden md:block" src="" alt="Hero Image" />
    </div>

    <!-- Spacer -->
    <div class="h-8 md:h-24"></div>

    <!-- Preview Section -->
    <div id="preview-section" class="pt-4 pb-8 text-3xl text-center font-bold">Preview</div>

    <div class="px-4 flex flex-col md:flex-row items-center justify-center">
      <!-- Preview Frame -->
      <iframe
        :src="`${getRelativeQuoteUrl()}`"
        frameborder="0"
        class="w-full md:w-3/5 h-96 border-2 border-black"
      ></iframe>

      <!-- Config section -->
      <div class="py-4 w-full md:w-2/5 flex flex-col justify-around items-center">

        <!-- Theme settings -->
        <div class="">
          <p class="text-sm m-1">Theme :</p>
          <select class="px-3 py-1 w-48 border-2 rounded border-black text-black" name="theme" id="theme" v-model="themeSelected">
            <option class="text-black" v-for="(theme, index) in themes" :key="index" :value="theme">{{ theme }}</option>
          </select>
        </div>

        <!-- Spacer -->
        <div class="h-4"></div>

        <!-- Font Size setting -->
        <div class="">
          <p class="text-sm m-1">Font size :</p>
          <select class="px-3 py-1 w-48 border-2 rounded border-black text-black" name="fontSizes" id="fontSizes" v-model="fontSizeSelected">
            <option class="text-black" v-for="(fontSize, index) in fontSizes" :key="index" :value="fontSize">{{ fontSize }}</option>
          </select>
        </div>

        <!-- Spacer -->
        <div class="h-4"></div>

        <!-- Quote type settings -->
        <div class="">
          <p class="text-sm m-1">Quote type :</p>
          <select class="px-3 py-1 w-48 border-2 rounded border-black text-black" name="quoteType" id="quoteType" v-model="quoteTypeSelected">
            <option class="text-black" v-for="(qupteType, index) in quoteTypes" :key="index" :value="qupteType">{{ qupteType }}</option>
          </select>
        </div>

        <!-- Spacer -->
        <div class="h-8"></div>

        <!-- Copy Link button -->
        <button class="w-3/5 md:w-2/5 px-4 py-3 bg-black text-white rounded" @click="copyLink">Copy Link</button>

      </div>
    </div>

    <!-- Spacer -->
    <div class="h-12"></div>

    <!-- How To section -->
    <div id="how-to-section" class="py-4 text-center font-bold text-3xl">How To</div>
    <div class="flex items-center justify-center">
      <ol class="list-inside list-decimal leading-loose">
      <li>Style your quote in the preview section</li>
      <li>Click on Copy Link button</li>
      <li>Paste it in a Notion block</li>
      <li>Select 'Create Embed' in the drop down</li>
    </ol>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      fontSizes: [
        'Text', 
        'Heading 3', 
        'Heading 2', 
        'Heading 1'
      ],
      fontSizeSelected: 'Text',
      themes: [
        'Light', 
        'Dark'
      ],
      themeSelected: 'Light',
      quoteTypes: [
        'Random',
        'Wisdom',
        'Technology',
        'Friendship',
        'Inspirational',
        'Famous Quotes'
      ],
      quoteTypeSelected: 'Random'
    }
  },
  methods: {
    createUrlEncoding(text: string) {
      return text ? text.toLowerCase().split(' ').join('-') : ''
    },
    getRelativeQuoteUrl() {
      const themeSelected = this.createUrlEncoding(this.themeSelected)
      const fontSizeSelected = this.createUrlEncoding(this.fontSizeSelected)
      const quoteTypeSelected = this.createUrlEncoding(this.quoteTypeSelected)
      return `/quote?theme=${themeSelected}&fontSize=${fontSizeSelected}&quoteType=${quoteTypeSelected}`
    },
    async copyLink() {
      const url = `${process.env.baseUrl}${this.getRelativeQuoteUrl()}`
      await navigator.clipboard.writeText(`${process.env.baseUrl}${this.getRelativeQuoteUrl()}`)
    },
    scrollToElement(id: string) {
      const element = document.getElementById(id)
      element?.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
});
</script>
