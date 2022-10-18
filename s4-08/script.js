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

// function incrementTextBackwards(string){
//     let newString = string[string.length -1]; // k
//     console.log()
//     for (let i = string.length - 2; i >= -1; i--){
        
//         console.log(newString)
//         newString = string[i] + newString

    
//     }
// }

// incrementTextBackwards("Fullstack");

///////////////////////EXERCICIO 4/////////////////

// function decrementText(string){

//     for (let i = string.length; i >= 0; i--){
//         let newString = string.substring(0,i)
//         console.log(newString)

//     }

// }

// decrementText("Fullstack")

///////////////////////EXERCICIO 5/////////////////

// function incrementTextMiddle(string){

//     if (string.length % 2 == 0){
//         return "Palavra Inválida";
//     } else {
//         let index = Math.floor(string.length/2);
//         let left = index
//         let termo1 = ''
//         let indexDoMeio = string[index]
//         for (let i = index; i < string.length; i++){
//             left--
//             console.log(indexDoMeio)
//             termo1 = string[left] + indexDoMeio + string[i+1]
//             indexDoMeio = termo1;
            
            
//         }
//     }
// }

// incrementTextMiddle("Fullstack")

///////////////////////EXERCICIO 6/////////////////


// function padEnd(string1, num, string2){
    
//     let newString = string1;
//     for (let i = 0; i < num; i++){
//         newString += string2
//     }

//     return newString
// }

// console.log(padEnd("Kenzie", 5, "foo"))

///////////////////////EXERCICIO 7/////////////////

// function padStart(string1, num, string2){
//     let newString = ''
//     for (let i = 0; i < num; i++){
//         newString += string2
//     }
//     newString += string1;
//     return newString

// }

// console.log(padStart("Kenzie", 3, "foo"));

/////////////////////EXERCICIO 8/////////////////

function subString(string, num1, num2){

}

