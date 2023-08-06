function rot13(str) {
    let alph="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let answer="" 
    for(let i=0;i<str.length;i++){
      if(alph.indexOf(str[i])>=13){
      answer+=alph[alph.indexOf(str[i])-13]
      }
      else if(alph.indexOf(str[i])<13 && alph.indexOf(str[i])>-1 ){
      answer+=alph[alph.indexOf(str[i])+13]
      }
      else{
        answer+=str[i]
      }
    }
    return answer;
  }
  
  console.log(rot13("SERR PBQR PNZC"));