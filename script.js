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

