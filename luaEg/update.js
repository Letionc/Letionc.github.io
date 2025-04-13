fetch("https://letionc.github.io/luaEg/1.lua")
  .then(a=>{
    return a.text()
  })
  .then(a=>{
    document.getElementById("eg1").innerHTML=a;
  })
