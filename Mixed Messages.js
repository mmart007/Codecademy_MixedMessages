const fullMsg = {
 userName: 'John',
 greeting() {
    const rnum = Math.floor(Math.random()*4)
    switch (rnum){
       case 0:
           console.log('Yo!')
           break;
       case 1:
           console.log('Hola!');
           break;
       case 2:
           console.log('Cheese man in the house')
           break;
       case 3:
           console.log('Allo.');
           break;
       default:
           console.log('Check your random!')
           break;
    }
},

 apt(userNum = Math.floor(Math.random()*24)){
    console.log(`Your appointment is at ${userNum}:00`)
},

 meds(dx = "Schizophrenia") {
    switch (dx){
        case 'Schizophrenia':
            console.log('Antipsychotics');
            break;
        case 'Depression':
            console.log('Happy pills');
            break;
        case 'Anxiety':
            console.log('Meditation');
            break;
        default:
            console.log('I\'m not sure I can help you if you can\'t tell me a real diagnosis');
    }
}
}

console.log(fullMsg.userName);
fullMsg.greeting();
fullMsg.meds();