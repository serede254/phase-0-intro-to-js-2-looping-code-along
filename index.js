
const people=["Charlie","Samip","Ali"];
function writeCards(people,surprise){
    const message=[];
    for(let i=0;i<people.length;i++){
        message.push(`Thank you, ${people[i]}, for the wonderful ${surprise} gift!`)
   
    }
return message;
}
function countDown(){
let i =0;
while(i<11){
    console.log(i++)
}
return countDown;
}