
// funcion vue : lee dos apis y devuelve imagenes, gatos y perros.
const { createApp } = Vue
 
createApp({
    data() {
      return {
            urls: ["https://api.thecatapi.com/v1/images/search?limit=10", "https://dog.ceo/api/breed/hound/images"],
            gatos: null,
            perros: null,
            error: false,
            iteracion: 0,
            perro: "",
            gato: ""
        }
    },
    methods: {
        fetchData(url, storeInd) {
            fetch(url)
                .then(response => response.json())
                .then(
                    data => {
                        if(storeInd)
                            this.perros = data
                        else
                            this.gatos = data
                    }
                )
                .catch(
                  this.error
                );
        },
        cambiarImagen() {
            if(this.perros == null)
                return;
            if(this.gatos.length == null)
                return;
            this.gato = this.gatos[this.iteracion % 10].url;
            this.perro = this.perros.message[this.iteracion];
            this.iteracion++;
        }
    },
    created() {   // se ejecuta al inicializar VUE despues de crear las variables
        this.fetchData(this.urls[0], false);
        this.fetchData(this.urls[1], true);
        setInterval(this.cambiarImagen, 2000);
    }
}).mount('#app');
