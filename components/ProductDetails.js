app.component("product-details", {
    props:{
        details:{
            type: Array,
            required: true

        }
    },
    template:
    /*html */
    `
    <p>{{detailsContent}}</p>
    `,
    computed: {
        detailsContent() {
            return this.details;
        }
    }
})