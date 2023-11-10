//Cat Public API Site: https://thecatapi.com////////

const catPhotos = document.querySelector('.cat-photos');
        const moreInfo = document.querySelector('#more-info');
        const catButton = document.querySelector('#cat-button');

function fetchRandomCat(){
        fetch('https://api.thecatapi.com/v1/images/search') //Cat API Site//
                .then(response => response.json())
                .then(data => {
                    const cat = data[0];
                    catPhotos.src = cat.url      
                })       
}

//button//
catButton.addEventListener('click', fetchRandomCat);

//Random Cat Picture when it loads//
fetchRandomCat();