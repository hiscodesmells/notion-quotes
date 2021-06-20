<template>
    <div :class="`p-4 min-h-screen flex flex-col items-center justify-center bg-${bgColor}`">
        <div v-if="this.$store.state.quote">
            <div :class="`text-${textSize} text-${textColor}`">{{ this.$store.state.quote }}</div>
            <div :class="`pl-2 pt-2 text-${textSize} text-${textColor} font-bold`">- {{ this.$store.state.author }}</div>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    async fetch() {
        await this.$store.dispatch('fetchQuote', this.$route.query.quoteType)
    },
    computed: {
        textColor() {
            if (this.$route.query.theme === 'dark') {
                return 'white'
            } else {
                return 'black'
            }
        },
        bgColor() {
            if (this.$route.query.theme === 'dark') {
                return 'black'
            } else {
                return 'white'
            }
        },
        textSize() {
            switch (this.$route.query.fontSize) {
                case 'text':
                    return 'base'
                case 'heading-1':
                    return '4xl'
                case 'heading-2':
                    return '2xl'
                case 'heading-3':
                    return 'xl'
            }
        }
    }
})

</script>