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
        return obj.nameEvent;
    } else {
        return `The input value is invalid`;
    }
}

// console.log(createEvent(slenzie, "Dia de Rodeio"))

function addQuestion(obj, quest){
    if(quest.user == ''){
        return `The user can't be found`;
    } else if(quest.userQuestion == ''){
        return `The question can't be null`
    } else {
        obj.questions.push(quest.userQuestion)
        return obj
    }
}

// console.log(addQuestion(slenzie, question))

function addVoteToQuestion(num, obj){
    
}