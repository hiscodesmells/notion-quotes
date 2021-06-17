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
    fetchQuote: async ({ commit, getters }: any) => {
        let response = await fetch("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en")
                .then(res => res.json())
            console.log(JSON.stringify(response))
        commit('setQuote', response.quoteText)
        commit('setAuthor', response.quoteAuthor)
    }
}