const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

nav.innerHTML=`  
<div class="menuBar">
 <h1 class="logo"> <i class="fa-solid fa-paw fa-lg" style="color: #eaeff3;"></i>
   Peluditos <span>Shop</span></h1>
   <div>
       <form>
           <input class="input-busqueda" type="search" placeholder="Buscar" aria-label="Search">
           <button class="btn-busqueda" type="submit"><a href="">Buscar</a></button>
         </form>
       </div>

 <ul>
   <li><a href="index.html">Home</a></li>
   <li><a href="nosotros.html">Nosotros</a></li>
   <li><a href="productos.html">Productos <i class="fas fa-caret-down"></i></a>

       <div class="drop-down-menu">
           <ul>
               <li>
                   <a href="#">Alimentos <i class="fas fa-caret-right"></i></a>
                   
                   <div class="drop-down-menu-1">
                       <ul>
                           <li><a href="caninos.html">Caninos</a></li>
                           <li><a href="#">Felinos</a></li>
                           
                       </ul>
                   </div>
               </li>
               <li>
                   <a href="#">Accesorios <i class="fas fa-caret-right"></i></a>
                   
                   <div class="drop-down-menu-1">
                       <ul>
                           <li><a href="#">Caninos</a></li>
                           <li><a href="#">Felinos</a></li>
                           
                       </ul>
                   </div>
               </li>
               
           </ul>
       </div>
   </li>
   <li><a href="servicios.html">Servicios<i class="fas fa-caret-down"></i></a>
       <div class="drop-down-menu">
           <ul>
               <li><a href="#">Baños</a></li>
               <li><a href="#">Peluquería</a></li>
               <li><a href="#">Paseos</a></li>
               <li><a href="#">Veterinaria</a></li>
               <li>
               </ul>
           </li>
       
           <li><a href="#">Clientes<i class="fas fa-caret-right"></i></a>
               <div class="drop-down-menu">
                   <ul>
                       <li><a href="#">Mi cuenta</a></li>
                       <li><a href="#">Mis compras</a></li>
                      
                       <li>
                       </ul>
           </li>
   <li><a href="#promos">Promos</a></li>
   <li><a href="#footer">Contacto</a></li>
 </ul>
</div>`;

footer.innerHTML = ` 
<section class="foot contenedor-foot red" id="foot">
<div class="logo-foot">
    <h3 class="logo"> <i class="fa-solid fa-paw fa-lg" style="color: #eaeff3;"></i>
    Peluditos <span>Shop</span></h3>
</div>

<div class="nosotros">
    <h6>Nosotros</h6>
    <p><a href="">Quienes somos</a></p>
    <p><a href="">Puntos de retiro</a></p>
    <p><a href="">Delivery</a></p>
    <p><a href="">Contacto</a></p>
</div>
<div class="productos">
    <h6>Productos</h6>
    <p><a href="">Alimentos para perros</a></p>
    <p><a href="">Alimentos para gatos</a></p>
    <p><a href="">Accesorios para perros</a></p>
    <p><a href="">Accesorios para gatos</a></p>
</div>
<div class="servicios">
    <h6>Servicios</h6>
    <p><a href="">Baños</a></p>
    <p><a href="">Paseos</a></p>
    <p><a href="">Peluquería</a></p>
    <p><a href="">Veterinaria</a></p>
</div>
<div class="clientes">
    <h6>Clientes</h6>
    <p><a href="">Mi cuenta</a></p>
    <p><a href="">Mis pedidos</a></p>
    <p><a href="">Cancelar compra</a></p>
    <p><a href="">Términos y condiciones</a></p>

</div>
<div class="redes-pay ">
    <div class="seguinos">
        <h6>Seguinos</h6>
        <a href=""><i class="facebook"><img src="img/icons8-facebook-rodeado-de-círculo-32.png" alt="facebook"></i></a>
        <a href=""><i class="instagram"><img src="img/icons8-instagram-32.png" alt="instagram"></i></a>
        <a href=""><i class="twitter"><img src="img/icons8-logo-de-twitter-32.png" alt="twitter"></i></a>
        <a href=""><i class="whatsapp"><img src="img/icons8-whatsapp-32.png" alt="whatsapp"></i></a>
     
    </div>
    <div class="forma-pago">
        <h6>Formas de pago</h6>
        <i class="visa"><img src="img/icons8-visa-32.png" alt="tarjeta visa"></i>
        <i class="mastercard"><img src="img/icons8-tarjeta-mastercard-32.png" alt="tarjeta mastercard"></i>
        <i class="amex"><img src="img/icons8-amex-32.png" alt="amex"></i>
        <i class="mercadopago"><img src="img/icons8-mercado-pago-32.png" alt="mercadopago"></i>
        <p class="efectivo-transf">Efectivo - Transferencia bancaria</p>
    </div>
</div>

</section>`


document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000); // Cambia la imagen cada 3 segundos (3000 milisegundos)

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
        { imageUrl: './img/excellent 20kg perros.png', text1: 'Excellent Smart Perro Ad. 20 Kg', text2: '$45.097', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/old price.png', text1: 'Old Prince Premium Ad. X 20 Kg', text2: '$36.399', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/proplan.png', text1: 'Pro Plan Perro Ad. 15 + 3 Kg', text2: '$69.502', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/agility.png', text1: 'Agility Perro Ad. X 20 Kg', text2: '$45.336', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/slieger.png', text1: 'Sieger Perro Criadores X 20 Kg', text2: '$64.821', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/royal caning.png', text1: 'Royal Canin Perro Ad. X 15 Kg', text2: '$66.603', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/selection.png', text1: 'Dog Selection Cachorro 21+3 Kg', text2: '$54.636', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/dogchow.png', text1: 'Dog Chow S/ Colorante Ad.X 21 Kg', text2: '$39.503', text3: 'Envios a domicilio sin cargo' },
       
    ];
    
    let startIndex = 0;
    const cardsPerRow = 4;
    
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
                <p>${cardData.text2}</p>
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
});

function a() {
    alert("funciona");
}

function inicializarCaninos() {
    const contenido = document.getElementById('contenido-alimento-perro');
    function crearTarjeta({imageUrl, text1, text2, text3}) {
        return `
        <div class="tarjeta">
            <img src="${imageUrl}">
            <div class"tarjeta-text">
                <p>${text1}</p>
                <p>${text2}</p>
                <p>${text3}</p>
                </div>
            </div>
        `;
    }
                
    function crearFila(grupo) {
        return `${grupo.map(producto => crearTarjeta(producto)).join("")}</div>`;
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

    class alimentoPerro {
        constructor(a, b, c, d) {
            this.imageUrl = a;
            this.text1 = b;
            this.text2 = c;
            this.text3 = d;
        }
    }

    const alimentosPerro = [
        { imageUrl: './img/img-caninos/alimento-veguis.jpg', text1: 'Veguis Ad. 15 Kg', text2: '$47.361', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/img-caninos/Dog-chow.jpg', text1: 'Dog Chow ExtraLife Ad. X 21 Kg', text2: '$76.400', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/img-caninos/Gandum.jpg', text1: 'Gandum Balanceado Ad. 20 Kg', text2: '$16.764', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/img-caninos/Old-Prince-Cordero.jpg', text1: 'Old Price Cordero Ad. X 15 Kg', text2: '$69.900', text3: 'Envios a domicilio sin cargo' },

        { imageUrl: './img/img-caninos/Optimum.jpg', text1: 'Optimum Puppy  X 15 Kg', text2: '$46.900', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/img-caninos/Pedigree.jpg', text1: 'Pedigree Dentastix Ad. X 7 Uni', text2: '$2.490', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/img-caninos/Proplan.jpg', text1: 'Proplan OptiHealth 20 Kg', text2: '$54.636', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/img-caninos/Pucherito.jpg', text1: 'PucheritoAlimento para Perro Ad.X 15 Kg', text2: '$39.200', text3: 'Envios a domicilio sin cargo' },

        { imageUrl: './img/img-caninos/Vitalcan.jpg', text1: 'Vitalcan Balanceado Ad.X 3Kg', text2: '$13.800', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/img-caninos/Yenu.jpg', text1: 'Yenu Alimento para Cachorros  Ad.X 10 Kg', text2: '$48.400', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/img-caninos/Simpli.jpg', text1: 'Simpli Alimento para Perro Ad.X 15 Kg', text2: '$42.200', text3: 'Envios a domicilio sin cargo' },
        { imageUrl: './img/img-caninos/Eukanuba.jpg', text1: 'Eukanuba Perro Adulto Ad.X 3Kg', text2: '$15.200', text3: 'Envios a domicilio sin cargo' },
    ];

    renderizar(contenido, grupos(alimentosPerro, 4));
}

document.addEventListener("DOMContentLoaded", inicializarCaninos);
