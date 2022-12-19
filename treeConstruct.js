function TreeConstructor(strArr) { 
let parents={};
 let children={};


for(let i=0; i<strArr.length; i++){
    
    let pair = strArr[i].replace(/[()]/g,"").split(",");
    
    let child = pair[0];
    let parent = pair[1];
    
    if(parents[parent]){
       parents[parent].push(child);
    }else{
     parents[parent]=[child];
    }
    
    if(parents[parent].length > 2){
      return false;
    }
    
    if(children[child]){
     return false;
    } else {
       children[child]=parent;
    }
    
    
}

return true;

}
   
// keep this function call here 
console.log(TreeConstructor(readline()));
