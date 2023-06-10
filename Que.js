let num=783;
function findNumber(n){
  
    let val3= "" + n + (n*2) +(n*3);
    
    let val4=parseInt(val3);
    
    let obj={};
    if(val3.length>9) return false;
    for(let i=0;i<val3.length;i++){
        obj[val3[i]]=1;
    }
    
    for(let i=1;i<=9;i++){
        if(obj.hasOwnProperty(0)){
            return false
        }
       
        if(obj.hasOwnProperty(i)){
            
        }else{
          
            return false;
        }
    }
   
    return true;
}
console.log(findNumber(num));
