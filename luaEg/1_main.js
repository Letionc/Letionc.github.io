getItemContents=getItemNames;
//有了物品描述后需要删掉第一行代码
function search(){
  var a=getItemNames(),
    b=getItemContents(),
    f=document.getElementById('in').value;
    var e=document.createElement('tbody');
    document.getElementById('table').remove();
    document.getElementById('choose').appendChild(e);
    e.id="table";
  if(f=="")return;
  for(let x in a){
    if(a[x]=='')continue;
    if(!f.includes(x+"") && !f.includes(a[x]) && !f.includes(b[x]))continue;
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
