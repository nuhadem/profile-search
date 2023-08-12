const name='Adem'
let age=37
const inQatar=false

const summ=(username,age,inqatar)=>{
return ('Name is ' + username + ' age is '+age+' in Qatar '+inQatar);
}

const person={
    ad: 'Adem',
    soyad:'Karadag',
    greeting(){
        console.log('Hi I am '+this.ad+' '+this.soyad)
    }
}
person.greeting;
const add=(a,b)=>a+b
const subt=a=>a-3
const sum=()=>2*4
console.log(add(1,4))
console.log(subt(1))
console.log(sum())
console.log(summ(name,age,inQatar))