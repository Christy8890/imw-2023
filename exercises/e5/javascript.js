/*Box 1: Interaction******************************************************************/
const container = document.getElementById('interactionContainer');
const circles = container.querySelectorAll('.colors');

circles.forEach((circle) => {
    circle.addEventListener('click', function () {
        const color = window.getComputedStyle(circle).backgroundColor;
        container.style.backgroundColor = color;
    });
});


/*Box 2: Loop******************************************************************/
const loopContainer = document.getElementById('loopContainer');
const textToAdd = 'Here again and again';
for (let i = 0; i < 10; i++) {
    const span = document.createElement('span');
    loopContainer.appendChild(span);
    span.textContent = textToAdd;
}


/*Box 3: Condition******************************************************************/
const square = document.getElementById("conditions");
document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const viewportWidth = window.innerWidth;
  if (mouseX > viewportWidth / 4) {
    square.style.backgroundColor = "green";
  } else {
    square.style.backgroundColor = "pink";
  } 
  
});

/*Box 4: Time******************************************************************/
const increaseText = document.getElementById('increaseText');
let fontSize = 20;

setInterval(function () {
    fontSize++;
    increaseText.style.fontSize = `${fontSize}px`;
}, 1000);


/*Box 5: Input******************************************************************/
const inputText = document.getElementById('inputText');
const textLength = document.getElementById('text-length');

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputLength = inputText.value.length;
    textLength.textContent = `Character Count: ${inputLength}`;
});


/*Box 6: Console******************************************************************/
console.log('hmmmm struggled a bit w/ java :/ ');
