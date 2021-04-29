var app = new Vue({
    el: '#root',
    data: {    
    },
    methods: {
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                const result = response.data;
                console.log(result);
                this.cds = result.response;
                console.log(this.cds)

                if(ds) {

                }
            })
    }
}) 