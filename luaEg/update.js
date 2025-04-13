"use strict";
var i=0;
while(++i){
  fetch(`https://letionc.github.io/luaEg/{i}.lua`)
    .then(a=>{
      return a.text();
    })
    .then(a=>{
      document.getElementById("eg{i}").innerHTML=a;
    })
    .catch(e==>{
        break;
    });
};
