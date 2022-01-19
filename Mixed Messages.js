const fullMsg = {
 userName: 'John',
 greetings: ['Yo', 'Hola', 'Bonjour', 'Hi'],
 treatments: ['antipsychotic','prozac','a happy pill','meditation'],
 diagnoses: ['schizophrenia','compulsive complaining','code addiction'],
 nextApt(){
    const hour = Math.floor(Math.random()*24)
    const min = Math.floor(Math.random()*59)
    return `Your next appointment is at ${hour}:${min}.`
 },   
 msg() {
    const greet = this.greetings[Math.floor(Math.random()*this.greetings.length)];
    const med = this.treatments[Math.floor(Math.random()*this.treatments.length)];
    const dx = this.diagnoses[Math.floor(Math.random()*this.diagnoses.length)]
    return `${greet} ${this.userName}. I suggest ${med} for your ${dx}.`
    }
}

console.log(`${fullMsg.msg()} ${fullMsg.nextApt()}`)