let button = document.getElementById('button')
let img = document.getElementsByTagName('img')[0];

console.log(button)
console.log(img)


button.addEventListener('click',light)

function light(){

    if(button.innerText == "Turn off"){

        button.innerText = "Turn on"
        img.setAttribute('src', './assets/img/light-off.svg')

    } else {

        button.innerText = "Turn off"
        img.setAttribute('src', './assets/img/light-on.svg')

    }

}
