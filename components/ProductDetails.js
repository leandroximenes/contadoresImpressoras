app.component('product-detail', {
    props: {
        details: {
            type: Boolean,
            requeried: true
        }
    },
    template:
        /*html*/`
            <ul>
            <li v-for="detail in details">{{ detail }}</li>
            </ul>
        `
})