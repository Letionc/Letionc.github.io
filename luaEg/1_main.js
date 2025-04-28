"use strict";
var getItemContents=getItemNames;
//有了物品描述后需要删掉第2行代码
//以后要用concat合并数组了 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
//杂鱼～天天写bug还不是自己修复？
var ItemNames=getItemNames(),
  ItemContents=getItemContents(),
  a=[];

function search(){
    var f=document.getElementById('in').value,
      e=document.createElement('tbody');
    document.getElementById('table').remove();
    document.getElementById('choose').appendChild(e);
    e.id="table";
  if(f=="")return;
  for(let x of a){
    if(!(`${x[0]}`.includes(f)||x[1].includes(f)||x[2].includes(f)))continue;
    var e=document.createElement('tr'),
      e1=document.createElement('td'),
      e2=document.createElement('td'),
      e3=document.createElement('td');
    e1.innerHTML=x[0];
    e2.innerHTML=x[1];
    e3.innerHTML=x[2];
    document.getElementById('table').appendChild(e);
    e.appendChild(e1);
    e.appendChild(e2);
    e.appendChild(e3);
  }
}
setTimeout(function(){
  let l=ItemNames.length,r=l/100;
  for(let x in ItemNames){
    document.getElementById("proc").innerHTML="加载中，可搜索部分为："+(x/r)+"% "+x+"/"+l;
    if(ItemNames[x]!=''){
      a.push([x,ItemNames[x],ItemContents[x]]);
    }
  };
  document.getElementById("proc").innerHTML="加载完毕，可搜索物品 1~"+a[a.length-1][0];
  document.getElementById("proc").style="color:#0f0";
  ItemContents=ItemNames=undefined;
},10);
