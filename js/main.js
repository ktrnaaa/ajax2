
const image = document.querySelector('.images')

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => response.json())
      .then(json => {
        for(let i in json){            
            drawImgs (json[i].url);
        }   
      })

function drawImgs(img){
    var element = document.createElement("div");
    element.classList.add('card');
    element.innerHTML = `<img src="${img}" alt="">`
    image.appendChild(element);
} 