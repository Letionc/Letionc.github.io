"use strict";
for(var i=1;i<=1;i++){
  fetch(`https://letionc.github.io/luaEg/${i}.lua`)
    .then(a=>{
      return a.text();
    })
    .then(a=>{
      document.getElementById("eg"+i).innerHTML=a;
    });
};
