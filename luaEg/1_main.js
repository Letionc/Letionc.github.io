getItemContents=getItemNames;
//有了物品描述后需要删掉第一行代码
//以后要用concat合并数组了 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
var ItemNames1=getItemNames(),
  ItemContents1=getItemContents(),
  a=[],
  b=[];
setTimeout(function(){
  for(let x in ItemNames1){
    if(ItemNames1[x]!=''){
      a.push(ItemNames1[x]);
      b.push(ItemContents1[x]);
    }
  }
},0);
function search(){
    var f=document.getElementById('in').value,
      e=document.createElement('tbody');
    document.getElementById('table').remove();
    document.getElementById('choose').appendChild(e);
    e.id="table";
  if(f=="")return;
  for(let x in a){
    if(!(`${x}`.includes(f)||a[x].includes(f)||b[x].includes(f)))continue;
    var e=document.createElement('tr'),
      e1=document.createElement('td'),
      e2=document.createElement('td'),
      e3=document.createElement('td');
    e1.innerHTML=x+"";
    e2.innerHTML=a[x];
    e3.innerHTML=b[x];
    document.getElementById('table').appendChild(e);
    e.appendChild(e1);
    e.appendChild(e2);
    e.appendChild(e3);
  }
}
