"use strict";
//我以前在说什么concat啊
//杂鱼～天天写bug还不是自己修复？
var Ids=getIds(),
  Names=getNames(),
  Descs=window.getDesc(),
  len=Ids.length;
function search(){
    var f=document.getElementById('in').value,
      e=document.createElement('tbody');
    document.getElementById('table').remove();
    document.getElementById('choose').appendChild(e);
    e.id="table";
  if(f=="")return;
  for(var i=0;i<len;i++){
    if(!(Ids[i].includes(f)||Names[i].includes(f)||Descs[i].includes(f)))continue;
    var e=document.createElement('tr'),
      e1=document.createElement('td'),
      e2=document.createElement('td'),
      e3=document.createElement('td');
    e1.innerHTML=Ids[i];
    e2.innerHTML=Names[i];
    e3.innerHTML=Descs[i];
    document.getElementById('table').appendChild(e);
    e.appendChild(e1);
    e.appendChild(e2);
    e.appendChild(e3);
  }
}
function searchRe(){
    var f=document.getElementById('in').value,
      e=document.createElement('tbody');
    document.getElementById('table').remove();
    document.getElementById('choose').appendChild(e);
    e.id="table";
  if(f=="")return;
  for(var i=0;i<len;i++){
    if(!(Ids[i].match(f)||Names[i].match(f)||Descs[i].match(f)))continue;
    var e=document.createElement('tr'),
      e1=document.createElement('td'),
      e2=document.createElement('td'),
      e3=document.createElement('td');
    e1.innerHTML=Ids[i];
    e2.innerHTML=Names[i];
    e3.innerHTML=Descs[i];
    document.getElementById('table').appendChild(e);
    e.appendChild(e1);
    e.appendChild(e2);
    e.appendChild(e3);
  }
}
function searchID(){
    var f=document.getElementById('in').value,
      e=document.createElement('tbody');
    document.getElementById('table').remove();
    document.getElementById('choose').appendChild(e);
    e.id="table";
  if(f=="")return;
  for(var i=0;i<len;i++){
    if(Ids[i]!=f)continue;
    var e=document.createElement('tr'),
      e1=document.createElement('td'),
      e2=document.createElement('td'),
      e3=document.createElement('td');
    e1.innerHTML=Ids[i];
    e2.innerHTML=Names[i];
    e3.innerHTML=Descs[i];
    document.getElementById('table').appendChild(e);
    e.appendChild(e1);
    e.appendChild(e2);
    e.appendChild(e3);
  }
}
document.getElementById('in').addEventListener('keydown',e=>{
  var i=e.which?e.which:e.KeyCode;
  if(i==13)search();
  if(i==9 && !e.altKey && !e.shiftKey){e.preventDefault();searchID();}
  if(i==9 && !e.altKey && e.shiftKey){e.preventDefault();searchRe();}
});