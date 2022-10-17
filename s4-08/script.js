///////////////////////EXERCICIO 1/////////////////

// function verticalText(string){

//     for (let i = 0; i < string.length; i++){
//         console.log(string[i])
//     }
// }

// verticalText('Frontend')

///////////////////////EXERCICIO 2/////////////////

// function incrementText(string){

//     let novaString = '';
//     for (let i = 0; i < string.length; i++){
//         novaString += string[i]
//         console.log(novaString)
//     }

// }

// incrementText("Backend")

///////////////////////EXERCICIO 3/////////////////

function incrementTextBackwards(string){
    let newString = string[string.length -1]; // k
    console.log()
    for (let i = string.length - 2; i >= -1; i--){
        
        console.log(newString)
        newString = string[i] + newString

    
    }
}

incrementTextBackwards("Fullstack");
