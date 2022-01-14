const greeting = () => {
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
}

greeting();