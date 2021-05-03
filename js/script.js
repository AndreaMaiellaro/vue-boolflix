var app = new Vue({
    el: '#root',
    data: {
        films: [],
        tvSeries: [],
        userResearch: '',
    },
    methods: {
        addNewResearch() {
            if (this.userResearch.length > 0) {
                this.films.push(this.userResearch)
                console.log(this.userResearch);
                this.userResearch = '';
            }
        },

        showFilmsSeries() {
            axios
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        'api_key': "4049f8301925a2068e543ebc9f450c23",
                        'query': this.userResearch,
                        'language': "it-IT",
                        'page': 1,
                    }
                })
                .then((response) => {
                    const result = response.data;
                    console.log(result);
                    this.films = result.results;
                    console.log(this.films);

                    console.log('film', this.films[0]);
                })

            axios
                .get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        'api_key': "4049f8301925a2068e543ebc9f450c23",
                        'query': this.userResearch,
                        'language': "it-IT",
                        'page': 1,
                    }
                })
                .then((response) => {
                    const result = response.data;
                    console.log(result);
                    this.tvSeries = result.results;
                    console.log(this.tvSeries);

                    console.log('serie tv', this.tvSeries[0]);
                })    
        },

        bandiera() {
            var bandiera = '';
        `
        <img :src="img/${film.original_language}.png" alt="bandiera">
        `

        document.getElementById('flag').innerHTML = bandiera;   
        }

        // filmFlag() {
        //     if (lang == 'it' || lang == 'en') {

        //         nomeImmagine = lang;
        //     }else  {
        //         nomeImmagine = 'bandieraGenerica';
        //     }

        //     var path = './img/' + nomeImmagine + '.png';

        //     console.log(nomeImmagine)
        //     console.log(path);
        // }
    },
    mounted() {     
    }
}) 