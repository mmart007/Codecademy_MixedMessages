const rNum = (aLen) => {
    return Math.floor(Math.random()*aLen)
}

const medFeedback = {
    greet: ['Hey there', 'Yo fool','What\'s up?', 'How you doin\'?'],
    advice: ['Take this med', 'Go fly a kite', 'I\'m retiring', 'You\'re all good'],
    follow: [1, 2, 3, 4, 5, 6]
}

let message = [];
let randItem;
for (let i in medFeedback){
    switch (i){
        case 'greet':
            randItem = medFeedback[i][rNum(medFeedback[i].length)];
            message.push(randItem);
            //console.log(`${randItem}`);
        case 'advice':
            randItem = medFeedback[i][rNum(medFeedback[i].length)];
            message.push(`Based on this visit ${randItem}.`);
        case 'advice':
            randItem = medFeedback[i][rNum(medFeedback[i].length)];
            message.push(`See you in ${randItem} weeks.`);
        default :
            message.push(`I need to finish`);
    }
    
}

