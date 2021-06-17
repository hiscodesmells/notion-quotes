<template>
    <div class="p-4 min-h-screen flex flex-col items-center justify-center">
        <div>
            <div :class="`text-${fontSize} text-${fontColor}`">{{ this.$store.state.quote }}</div>
            <div :class="`pl-2 pt-2 text-${fontSize} text-${fontColor} font-bold`">- {{ this.$store.state.author }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    async fetch() {
        await this.$store.dispatch('fetchQuote')
    },
    computed: {
        fontSize() {
            const fontSize = this.$route.query.fontSize
            switch (fontSize) {
                case 'Text':
                    return 'base'
                case 'Heading 1':
                    return '4xl'
                case 'Heading 2':
                    return '2xl'
                case 'Heading 3':
                    return 'xl'
            }
        },
        fontColor() {
            const fontColor = this.$route.query.fontColor
            
        }
    }
})

</script>