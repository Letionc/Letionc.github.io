"use strict";
setTimeout(()=>{
  for(var i=1;i<=1;i++){
    fetch(`https://letionc.github.io/luaEg/${i}.lua`)
      .then(a=>a.text())
      .then(a=>{
        document.getElementById("eg"+i).innerHTML=a;
      }
      );
  }
},50);
