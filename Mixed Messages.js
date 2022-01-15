const fullMsg = {
 userName: 'John',
 greeting() {
    const rnum = Math.floor(Math.random()*4)
    switch (rnum){
       case 0:
           return 'Yo!'
           break;
       case 1:
           return 'Hola!';
           break;
       case 2:
           return 'Cheese man in the house';
           break;
       case 3:
           return 'Allo.';
           break;
       default:
           return 'Check your random!';
           break;
    }
},

 apt(userNum = Math.floor(Math.random()*24)){
    return `Your appointment is at ${userNum}:00`
},

 meds(dx = "Schizophrenia") {
    switch (dx){
        case 'Schizophrenia':
            return 'Antipsychotics';
            break;
        case 'Depression':
            return 'Happy pills';
            break;
        case 'Anxiety':
            return 'Meditation';
            break;
        default:
            return 'I\'m not sure I can help you if you can\'t tell me a real diagnosis';
    }
}
}

console.log(`${fullMsg.greeting()} ${fullMsg.userName}. ${fullMsg.meds('Schizophrenia')} are recommended. ${fullMsg.apt()} `)