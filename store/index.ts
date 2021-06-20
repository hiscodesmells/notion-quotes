type QuoteStore = {
    quote: string
    author: string
}

export const state = (): QuoteStore => ({
    quote: '',
    author: '',
})

export const getters = {
    getQuote: (state: QuoteStore) => state.quote,
    getAuthor: (state: QuoteStore) => state.author
}

export const mutations = {
    setQuote: (state: QuoteStore, quote: string) => {
        state.quote = quote
    },
    setAuthor: (state: QuoteStore, author: string) => {
        state.author = author
    }
}

export const actions = {
    fetchQuote: async ({ commit }: any, tags: string) => {
        let url = ''
        if (tags === 'random') {
            url = 'https://api.quotable.io/random'
        } else {
            url = `https://api.quotable.io/random?tags=${tags}`
        }
        console.log(url)
        const response = await fetch(url).then(res => res.json())
        console.log(JSON.stringify(response))
        commit('setQuote', response.content)
        commit('setAuthor', response.author)
    }
}