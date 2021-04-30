var app = new Vue({
    el: '#root',
    data: {
        films: [],
        tvSeries: [],
    },
    methods: {
    },
    mounted() {
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=4049f8301925a2068e543ebc9f450c23&query=ritorno al futuro&language=it-IT&page=1')
            .then((response) => {
                const result = response.data;
                console.log(result);
                this.films = result.results;
                console.log(this.films);

                console.log('film', this.films[0]);

                // if (lang == 'it' || lang == 'uk') {

                //     nomeImmagine = lang;
                // }else  {
                //     nomeImmagine = 'bandieraGenerica';
                // }

                // var path = './img/' + nomeImmagine + '.jpg';

            })

        axios
            .get('https://api.themoviedb.org/3/search/tv?api_key=4049f8301925a2068e543ebc9f450c23&query=scrubs')
            .then((response) => {
                const result = response.data;
                console.log(result);
                this.tvSeries = result.results;
                console.log(this.tvSeries);

                console.log('serie tv', this.tvSeries[0]);
            })    
    }
}) 