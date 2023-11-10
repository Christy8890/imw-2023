const catImage = document.querySelector('.cat-image');
        const breedInfo = document.querySelector('#breed-info');
        const newCatButton = document.querySelector('#new-cat-button');

        function fetchRandomCat() {
            fetch('https://api.thecatapi.com/v1/images/search')
                .then(response => response.json())
                .then(data => {
                    const cat = data[0];
                    catImage.src = cat.url      
                })       
        }

        newCatButton.addEventListener('click', fetchRandomCat);

        // Initial load
        fetchRandomCat();