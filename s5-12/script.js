const slenzie = {
    nameEvent: "",
    questions: []
}

const question = {
    user: "Hanna",
    userQuestion: "Com quantos paus se faz uma canoa?",
    vote: 0,
}

function createEvent(obj, str){
    if(typeof str == 'string' && str.length >= 5){
        obj.nameEvent = str;
        return obj;
    } else {
        return `The input value is invalid`;
    }
}
createEvent(slenzie, "Dia de Rodeio")
console.log(slenzie)

function addQuestion(obj, quest){
    if(quest.user == ''){
        return `The user can't be found`;
    } else if(quest.userQuestion == ''){
        return `The question can't be null`
    } else {
        obj.questions.push(quest)
        return `Question was updated`
    }
}

addQuestion(slenzie, question);
console.log(slenzie)

function addVoteToQuestion(num, obj){
    if(num > obj.questions.length){
        return `Question not found."`
    } else if(num < 0 && parseInt(num) !== num){
        return `The value is not allowed`
    } else {
        obj.questions[num].vote++
        return `Vote registered successfully"`
    }
}

addVoteToQuestion(0, slenzie)
console.log(slenzie)

function questionAnswered(num, obj){
    if(num > obj.questions.length){
        return `Question not found.`
    } else if(num < 0 && parseInt(num) !== num){
        return `The value is not allowed`
    } else {
        obj.questions[num].answered = true;
        return `Answer registered successfully`
    }
}

questionAnswered(0, slenzie)
console.log(slenzie)

function unansweredQuestions(obj){
    const output = []
    for(let i = 0; i < obj.questions.length; i++){
        if(obj.questions[i].answered == false){
            output.push(obj.questions[i])
        }
    }

    return output;
}

unansweredQuestions(slenzie)
console.log(slenzie)