const rNum = (aLen) => {
    return Math.floor(Math.random()*aLen)
}

const medFeedback = {
    greet: ['Hey there.', 'Yo fool.','What\'s up?', 'How you doin\'?'],
    advice: ['take this med', 'go fly a kite', 'I\'m retiring', 'you\'re all good'],
    follow: [2, 3, 4, 5, 6, 8]
}

let message = [];
let randItem;
for (let i in medFeedback){
    switch (i){
        case 'greet':
            randItem = medFeedback[i][rNum(medFeedback[i].length)];
            message.push(randItem);
            break;
            //console.log(`${randItem}`);
        case 'advice':
            randItem = medFeedback[i][rNum(medFeedback[i].length)];
            message.push(`Based on this visit ${randItem}.`);
            break;
        case 'follow':
            randItem = medFeedback[i][rNum(medFeedback[i].length)];
            message.push(`See you in ${randItem} weeks.`);
            break;
        default :
            message.push(`I need to finish`);
            break;
    }
}

formatMsg = (mInput) => {
    const mOutput = message.join(' ');
    console.log(mOutput);
}

formatMsg(message);