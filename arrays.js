const hobbies=['Plants' ,'Sports', 'Cinema'];
hobbies.push('Painting')
//for (let hobby of hobbies){
//    console.log(hobby);
//}

const [h1, h2]=hobbies;
console.log(h1,h2);

console.log(hobbies.map(hobby=>'Hobby: '+hobby))
const copiedArray=hobbies.slice()
console.log(copiedArray)
const copiedArray2=[...hobbies]
copiedArray2.push('Riding bicycle ')
console.log(copiedArray2)