
  let m = function(){
      return new Promise(function(res,rej){
          res("Executed!1");
      })
  }
   
  let n = function(){
      return new Promise(function(res,rej){
          res('Executed!2');
      })
  }
 let o = function(){
     return new Promise(function(res,rej){
         rej('failed Executed!3');
     })
 }



m().then(function(msg){
    console.log(msg + 'function1');
    return n()
}).then(function(msg){
    console.log(msg + 'function2');
    return o()
}).then(function(msg){
   console.log(msg + 'function3');
}).catch(function(error){
    console.log(error + 'Not Executed');
})