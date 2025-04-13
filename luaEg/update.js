"use strict";
var i=0;
while(++i){
  fetch(`https://letionc.github.io/luaEg/${i}.lua`)
    .then(a=>{
      return a.text();
    })
    .then(a=>{
      nw=document.createElement('code');
      nw.innerHTML=a;
      nw.class="lang-lua";
      document.getElementById('codes').appendChild(nw);
    })
    .catch(e=>{
        i=-1;
    });
};
