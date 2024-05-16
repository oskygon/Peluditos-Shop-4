const nav = document.querySelector("nav");
const footer = document.querySelector("footer");


document.getElementById("botonIngresar").addEventListener("click", function() {
    // Redireccionar al usuario a login.html
    window.location.href = "login.html";
});


//---------Barra de navegación----------
nav.innerHTML=`  
        <div class="topnav" id="myTopnav">
        <a class="logo"> <i class="fa-solid fa-paw fa-sm pata-nav"></i>Peluditos Shop</a>
        <a href="javascript:void(0);" class="icon" onclick="toggleMenu()"><i class="fa fa-bars"></i></a>
        <a href="#home">Home</a>
        <a href="#nosotros">Nosotros</a>
          <div class="dropdown">
             <button class="dropbtn">Productos
             <i class="fa fa-caret-down"></i>
             </button>
            <div class="dropdown-content">
            <a href="#">Alimentos</a>
            <a href="#">Accesorios</a>
            </div>
         </div>
        <div class="dropdown">
            <button class="dropbtn">Servicios
            <i class="fa fa-caret-down"></i>
            </button>
          <div class="dropdown-content">
            <a href="#">Baños</a>
            <a href="#">Paseos</a>
            <a href="#">Peluquería</a>
            <a href="#">Veterinaria</a>
          </div>
        </div>
     <div class="iconos-three">
        <div>
        <a href=""><i class="fa-solid fa-magnifying-glass"></i></a></div>
        <div><a href=""><i class="fa-solid fa-user"></i></a></div>
       <div> <a href=""><i class="fa-solid fa-cart-shopping"></i></a></div>
        </div>
      </div>
      </div>`;

      //---------Footer----------

      footer.innerHTML = `
      <footer">
    <div class="div1"><h3 class="logo"> <i class="fa-solid fa-paw fa-sm"></i>
     <h3>Peluditos Shop</h3>
    </div>
    <div class="div0">
            
           <div class="div2">
            <h4>Nosotros</h4>
                <p><a href="">Quienes somos</a></p>
                <p><a href="">Puntos de retiro</a></p>
                <p><a href="">Delivery</a></p>
                <p><a href="">Contacto</a></p>
           </div>

          <div class="div3">
            <h4>Productos</h4>
                <p><a href="">Alimentos para perros</a></p>
                <p><a href="">Alimentos para gatos</a></p>
                <p><a href="">Accesorios para perros</a></p>
                <p><a href="">Accesorios para gatos</a></p>
            </div>

          <div class="div4">
            <h4>Servicios</h4>
               <p><a href="">Baños</a></p>
               <p><a href="">Paseos</a></p>
               <p><a href="">Peluquería</a></p>
               <p><a href="">Veterinaria</a></p>
         </div>

        <div class="div5">
            <h4>Clientes</h4>
                <p><a href="">Mi cuenta</a></p>
                <p><a href="">Mis pedidos</a></p>
                <p><a href="">Cancelar compra</a></p>
                <p><a href="">Términos y condiciones</a></p>
            </div>

        <div class="div6">
            <div class="seguinos">
                <h4>Seguinos</h4>
                <div>
                <a href=""><i class="facebook"><img src="img/icons8-facebook-rodeado-de-círculo-32.png" alt="facebook"></i></a>
                <a href=""><i class="instagram"><img src="img/icons8-instagram-32.png" alt="instagram"></i></a>
                <a href=""><i class="twitter"><img src="img/icons8-logo-de-twitter-32.png" alt="twitter"></i></a>
                <a href=""><i class="whatsapp"><img src="img/icons8-whatsapp-32.png" alt="whatsapp"></i></a>
                </div>
            </div>
             
            <div class="forma-pago">
                <h4>Formas de pago</h4>
                <div>
                <i class="visa"><img src="img/icons8-visa-32.png" alt="tarjeta visa"></i>
                <i class="mastercard"><img src="img/icons8-tarjeta-mastercard-32.png" alt="tarjeta mastercard"></i>
                <i class="amex"><img src="img/icons8-amex-32.png" alt="amex"></i>
                <i class="mercadopago"><img src="img/icons8-mercado-pago-32.png" alt="mercadopago"></i>
                <i class="maestro"><img src="img/icons8-maestro-32 (1).png" alt="maestro"></i>
                <i class="discover"><img src="img/icons8-discover-32.png" alt="discover"></i>
                <p class="efectivo-transf">Efectivo - Transferencia bancaria</p>
                </div>
            </div>
            
        </div>
    </div>
     <div class="div7">
        <p>Copyright CaC ©2024 - Todos los derechos reservados</p>

     </div>
        
    </footer>`;

  
    
  






function toggleMenu() {
    var x = document.getElementById("myTopnav");
    var icon = document.querySelector(".icon i");
   
    if (x.className === "topnav") {
        x.className += " responsive";
        icon.className = "fa fa-times"; // Cambia el icono a 'x'
    } else {
        x.className = "topnav";
        icon.className = "fa fa-bars"; // Cambia el icono de vuelta a hamburguesa
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos)

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container-ofertas');
    const nextBtn = document.getElementById('nextBtn');
    
    const data = [ 
        { imageUrl: 'https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2024-03/Excellent_Perros_AdultMedyGran.png.webp?itok=8y3j5DeW', text1: 'Excellent Smart Perro Ad. 20 Kg', text2: '$45.097', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: 'https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2024-03/Excellent_Perros_PuppyPequenos.png.webp?itok=4djBD_pp', text1: 'Eccellent Puppy Ad. X 20 Kg', text2: '$36.399', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: 'https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2022-08/Reduced_Calorie_Gato_Frente_Pro_Plan.png.webp?itok=Jk50_Y18', text1: 'Pro Plan Gato BC. 15 Kg', text2: '$69.502', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: 'https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2022-10/Adult-7%2B-Carne-%26-Arroz_1.png.webp?itok=mqlGkqs3', text1: 'Gato Adulto X 20 Kg', text2: '$45.336', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: 'https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2022-08/gato_adulto_frenre_pro_plan.png.webp?itok=LpfdNG7y', text1: 'Pro Plan Gato Adulto X 20 Kg', text2: '$64.821', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: 'https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2022-10/Kitten-Pollo-%26-H%C3%ADgado_1.png.webp?itok=XesLYaeC', text1: 'Pro Plan Kitten X 15 Kg', text2: '$66.603', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: 'https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2022-10/ProPlan-Sensitive-Skin-Cachorros.png.webp?itok=uLsD2Jf5', text1: 'Sensitive Cachorro 21+3 Kg', text2: '$54.636', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: 'https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2024-01/1200x1200_DC_Gran_Comienzo_cachorros_M%26G.png.webp?itok=Nz8mWmXk', text1: 'Dog Chow S/Col Ad.X 21 Kg', text2: '$39.503', text3: 'Envios a domicilio sin cargo' },
    ];
    
    let startIndex = 0;
    let cardsPerRow = 4; // Número de tarjetas por fila
    
    function loadCards() {
        container.innerHTML = ''; 
    
        for (let i = startIndex; i < startIndex + cardsPerRow && i < data.length; i++) {
            const cardData = data[i];
    
            const card = document.createElement('div');
            card.classList.add('card');
    
            const img = document.createElement('img');
            img.src = cardData.imageUrl;
            card.appendChild(img);
    
            const textDiv = document.createElement('div');
            textDiv.classList.add('card-text');
            textDiv.innerHTML = `
                <p>${cardData.text1}</p>
                <h3>${cardData.text2}</h3>
                <p>${cardData.text3}</p>
            `;
            card.appendChild(textDiv);
    
            container.appendChild(card);
        }
    }
    
    loadCards();
    
    nextBtn.addEventListener('click', function() {
        startIndex += cardsPerRow;
        if (startIndex >= data.length) {
            startIndex = 0;
        }
        loadCards();
    });

    // Ajustar el número de tarjetas por fila en función del tamaño de la pantalla
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            cardsPerRow = 4;
        } else if (window.innerWidth >= 768) {
            cardsPerRow = 2;
        } else {
            cardsPerRow = 1;
        }
        loadCards(); // Recargar las tarjetas con el nuevo número por fila
    });
});





let sliderInner = document.querySelector(".slider-inner");
let images = sliderInner.querySelectorAll("img");
let index = 1;
setInterval(function(){
    let percentage = index * -100 ;
   
    sliderInner.style.transform = "translateX("+percentage+"%)";
    index ++;
    if(index > (images.length -1)){
        index = 0 ;
    }
}, 5000);







function inicializar(animal) {
    return () => {

        const contenido = document.getElementById(`contenido-${animal}`);
        

        function crearTarjeta({imageUrl, text1, text2, text3}) {
            return `
            <div class="tarjeta">
                <img src="${imageUrl}">
                <div class="tarjeta-text">
                    <p>${text1}</p>
                    <p>${text2}</p>
                    <p>${text3}</p>
                    </div>
                </div>
            `;
        }
                    
        function crearFila(grupo) {
            return `<div class="fila">${grupo.map(producto => crearTarjeta(producto)).join("")}</div>`;
        }
            
        function grupos(datos, cantidad) {
            let grupos = [];
            for(let i = cantidad; i <= datos.length; i += cantidad)
                grupos.push(datos.slice(i - cantidad, (i > datos.length)? datos.length - 1 : i));
            return grupos;
        }
        
        function renderizar(raiz, grupos) {
            console.log(grupos);
            raiz.innerHTML = `${grupos.map(grupo => crearFila(grupo)).join("")}`;
        }

        const alimentos = { "alimento-perro": [
            { imageUrl: './img/img-caninos/alimento-veguis.jpg', text1: 'Veguis Ad. 15 Kg', text2: '$47.361', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-caninos/Dog-chow.jpg', text1: 'Dog Chow ExtraLife Ad. X 21 Kg', text2: '$76.400', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-caninos/Gandum.jpg', text1: 'Gandum Balanceado Ad. 20 Kg', text2: '$16.764', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-caninos/Old-Prince-Cordero.jpg', text1: 'Old Price Cordero Ad. X 15 Kg', text2: '$69.900', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-caninos/Optimum.jpg', text1: 'Optimum Puppy  X 15 Kg', text2: '$46.900', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-caninos/Pedigree.jpg', text1: 'Pedigree Dentastix Ad. X 7 Uni', text2: '$2.490', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-caninos/Proplan.jpg', text1: 'Proplan OptiHealth 20 Kg', text2: '$54.636', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-caninos/Pucherito.jpg', text1: 'PucheritoAlimento para Perro Ad.X 15 Kg', text2: '$39.200', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-caninos/Vitalcan.jpg', text1: 'Vitalcan Balanceado Ad.X 3Kg', text2: '$13.800', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-caninos/Yenu.jpg', text1: 'Yenu Alimento Perros  Ad.X 10 Kg', text2: '$48.400', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-caninos/Simpli.jpg', text1: 'Simpli Alimento  Perro Ad.X 15 Kg', text2: '$42.200', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-caninos/Eukanuba.jpg', text1: 'Eukanuba  Adulto Ad.X 3Kg', text2: '$15.200', text3: 'Envios a domicilio sin cargo' },
        ], "alimento-gato": [
            { imageUrl: './img/img-felinos/bel-cat.jpg', text1: 'Alimento belcat Ad. 10 Kg', text2: '$15.361', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-felinos/canin-club.jpg', text1: 'Royal Canin Club Ad. X 7.5Kg', text2: '$39.400', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-felinos/canin-veterinary.jpg', text1: 'Royal Canin Vet Ad. 20Kg', text2: '$62.764', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-felinos/complete.jpg', text1: 'Vital Can Complete Ad. X 15 Kg', text2: '$25.980', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-felinos/criadores.jpg', text1: ' Criadores Ad X 15Kg', text2: '$36.400', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-felinos/monami.jpg', text1: 'Mom Ami Alimentos Ad. X 7 Uni', text2: '$49.590', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-felinos/old-prince-adulto.jpg', text1: 'Old Prince Adulto Ad 20Kg', text2: '$54.636', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-felinos/premium-mix.jpg', text1: 'Vitalcan Primium  Ad.X 705Kg', text2: '$24.500', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-felinos/purina.jpg', text1: 'Purina Ad.X 3Kg', text2: '$40.830', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-felinos/purina2.jpg', text1: 'Purina  Ad.X 10 Kg', text2: '$48.400', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-felinos/royal-canin.jpg', text1: 'Royal Canin Ad.X 15 Kg', text2: '$42.200', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-felinos/vitalcan-premium.jpg', text1: 'Vitalcan Premium Ad.X 3Kg', text2: '$15.200', text3: 'Envios a domicilio sin cargo' },
        ] ,
        "accesorio-gato": [
            
            { imageUrl: './img/img-ac-gato/bebedero.jpg', text1: 'Bebedero Fuente Gatos y Perros', text2: '$45.360', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-gato/bolso.jpg', text1: 'Bolso para Transporte de Mascotas', text2: '$12.400', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-gato/casa-gato.jpg', text1: 'Casa Cucha Para Gato', text2: '$36.764', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-gato/cepillo.jpg', text1: 'Cepillo de Dientes Para Mascotas', text2: '$2.400', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-gato/comedero.jpg', text1: 'Comedero 2 en 1 Mascotas', text2: '$23.400', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-gato/kit-gato.jpg', text1: 'Kit  de Bienvenida Gato', text2: '$100.590', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-gato/raton.jpg', text1: 'Juguete Raton Electrico', text2: '$35.636', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-gato/transportador.jpg', text1: 'Transportador Impermeable Gato y Perro', text2: '$17.500', text3: 'Envios a domicilio sin cargo' },
        ], 
        "accesorio-perro": [  
            
            { imageUrl: './img/img-ac-perro/arnes.jpg', text1: 'Conj.Pretal Arnes', text2: '$8.360', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-perro/bolso-transporte.jpg', text1: 'Bolso para Transporte de Mascotas', text2: '$12.400', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-perro/campera-perro.jpg', text1: 'Campera Chaleco', text2: '$15.764', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-perro/chaleco.jpg', text1: ' Abrigo Chaleco Friza Perros ', text2: '$16.400', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-perro/collar.jpg', text1: 'Collar para Mascotas Clasico', text2: '$11.400', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-perro/kit-alimento.jpg', text1: 'Kit de  Alimento para Mascotas', text2: '$9.999', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-perro/maquina.jpg', text1: 'Maquina de cortar pelo Mascotas', text2: '$28.636', text3: 'Envios a domicilio sin cargo' },

            { imageUrl: './img/img-ac-perro/transportador-perro.jpg', text1: 'Transportador Impermeable perritos ', text2: '$59.500', text3: 'Envios a domicilio sin cargo' },
        ]};


        renderizar(contenido, grupos(alimentos[animal], 4));
    }
}

document.addEventListener("DOMContentLoaded", inicializar("alimento-gato"));
document.addEventListener("DOMContentLoaded", inicializar("alimento-perro"));
document.addEventListener("DOMContentLoaded", inicializar("accesorio-gato"));
document.addEventListener("DOMContentLoaded", inicializar("accesorio-perro"));

document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "live_LlSgQwRpWgVPpEpOsNcCPwDX3RSRFaz16ls4AMrJxMeCSLcXhFpSK3WqujpmxpB5";
    const dogImage = document.getElementById("dog-image");

    // Función para obtener una imagen de perro aleatoria
    function getNewDogImage() {
        fetch("https://api.thecatapi.com/v1/images/search?limit=10", {
            headers: {
                "x-api-key": apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            // Obtener la URL de la imagen
            const imageUrl = data[0].url;
            // Establecer la URL de la imagen
            dogImage.src = imageUrl;
            // Establecer el tamaño deseado de la imagen
            dogImage.style.width = "300px"; // Ancho deseado
            dogImage.style.height = "200px"; // Alto deseado
        })
        .catch(error => {
            console.error("Error fetching dog image:", error);
        });
    }

    // Obtener una imagen de perro aleatoria cada 5 segundos
    setInterval(getNewDogImage, 5000);

    // Obtener una imagen de perro aleatoria al cargar la página
    getNewDogImage();
});

