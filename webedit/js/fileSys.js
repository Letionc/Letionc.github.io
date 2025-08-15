//File System
!function(noRUN){if(noRUN)return;
  var body=$s('body');
  var filesSpace=new IndexedDBUtils('files',2);
  var fileWrapper=$s('#file-area');
  var fileList=$s('.file-list');
  var editorApp=$s('#app');
  var loading=$s('#loadPage');
  var fnInput=$s('#fn');
  var updated=$s('#updated');
  var operatingFn=0;
  var fileArray={};
  var sessionAreaText='';
  var LS=localStorage;
  var ttl=Array.from(new Array(8),e=>'0123456789abcdef'[Math.floor(Math.random()*16)]).join('')
  window.addEventListener('beforeunload',e=>{
    LS.removeItem('_'+operatingFn);
  })
  document.title=`${ttl} session`;
  window.fileOperations=new class{
    add(fn){
      return $c('li').intext(fn).THEN(a=>{
        a.listen('click',function(e){
          fileOperations.saveFile();
          var q=a.INTEXT();
          var t='_'+q;
          if(q==operatingFn)
            return fileOperations.msgBox('切换失败！',`文件已在本窗口打开`,'color:red','color:red');
          if(LS[t])
            return fileOperations.msgBox('切换失败！',`文件已在窗口${LS[t]}打开<br>右键取消锁定`,'color:red','color:red');
          LS.removeItem('_'+operatingFn);
          document.title=`${ttl} ${operatingFn=q}`;
          aceEditor.selectAll();
          aceEditor.insert(fileArray[operatingFn]);
          fnInput.attr('value',operatingFn);
          LS[t]=ttl
        }).listen('contextmenu',e=>{e.preventDefault();LS.removeItem('_'+a.INTEXT())})
      }).follow(fileList);
    }
    get(){
      return window.aceEditor?window.aceEditor.session.doc.$lines.join('\n'):''
      ;
    }
    saveFile(){
      var a=operatingFn,b=fileOperations.get();
      if(updated.INTEXT()=='已保存')return;
      if(a==0){
        sessionAreaText=b;
      }else{
        fileArray[a]=b;
        filesSpace.update('0',{fn:a,doc:b}).catch(err=>{
          updated
            .style('color','red')
            .intext('出错误');
          fileOperations.msgBox('保存失败！',err,'color:red','color:red');
        });
      }
      updated
        .style('color','green')
        .intext('已保存');
    }
    addFile(fn){
      if(Object.keys(fileArray).indexOf(fn)!=-1)
        fileOperations.msgBox('创建失败！','新文件名与其他文件不能重复','color:red','color:red');
      filesSpace.create('0',{fn:fn,doc:''}).catch(err=>{
        fileOperations.msgBox('创建失败！',err,'color:red','color:red');
      });
      fileArray[fn]='';
      fileOperations.add(fn);
    }
    rnmFile(fn1,fn2){
      if(Object.keys(fileArray).indexOf(fn2)!=-1)
        return fileOperations.msgBox('重命名失败！','文件名与其他文件不能重复','color:red','color:red');
      if(fn1==fn2)
        return fileOperations.msgBox('重命名失败！','文件名前后不能重复','color:red','color:red');
      filesSpace.create('0',{fn:fn2,doc:fileArray[fn1]}).catch(err=>{
        return fileOperations.msgBox('重命名失败！(步骤1)',err,'color:red','color:red');
      });
      var unsafe=false;
      filesSpace.delete('0',fn1).catch(err=>{
        unsafe=true;
        return fileOperations.msgBox('重命名失败！(步骤2)',err,'color:red','color:red');
      });
      if(unsafe)return;
      try{
        fileArray[fn2]=fileArray[fn1];
        delete fileArray[fn1];
      }catch(err){
        unsafe=true;
        return fileOperations.msgBox('重命名失败！(步骤3)',err,'color:red','color:red')
      }
      if(unsafe)return;
      var a=$S('.file-list>li:not([data-sp])');
      a=a[a.map(e=>e.INTEXT()).indexOf(fn1)];
      if(a)
        a.intext(fn2);
      else 
        return fileOperations.msgBox('重命名失败！(步骤4)','你看这文件能被点击吗？它喝隐身药水了你知道吗？？？','color:red','color:red');
      LS.removeItem('_'+operatingFn);
      LS[fn2]=ttl
      operatingFn=fn2;
      fnInput.attr('value',fn2);
    }
    remFile(fn){
      var unsafe=false;
      filesSpace.delete('0',fn).catch(err=>{
        unsafe=true;
        return fileOperations.msgBox('删除失败！(步骤1)',err,'color:red','color:red');
      });
      if(unsafe)return;
      try{
        delete fileArray[fn];
      }catch(err){
        unsafe=true
        return fileOperations.msgBox('删除失败！(步骤2)',err,'color:red','color:red')
      }
      if(unsafe)return;
      var a=$S('.file-list>li:not([data-sp])');
      a=a[a.map(e=>e.INTEXT()).indexOf(fn)];
      if(a)
        a.remove();
      else 
        return fileOperations.msgBox('删除失败！(步骤3)','你看这文件能被点击吗？它喝隐身药水了你知道吗？？？','color:red','color:red');
      aceEditor.selectAll();
      aceEditor.insert(sessionAreaText);
      LS.removeItem('_'+operatingFn);
      operatingFn=0;
      fnInput.attr('value','session');
    }
    msgBox(title='title',content='content',titleStyle='',contentStyle='',autoClick=true){
      return $c('div')
        .class('cusMsgBox')
        .append($c('h1')
          .inhtml(title)
          .attr('style',titleStyle)
        ).append($c('p')
          .inhtml(content)
          .attr('style',contentStyle)
        ).follow(body)
        .THEN(a=>a
          .listen('click',e=>{
            a.style('animationName','cusMsgBox_anim2')
              .THEN(e=>setTimeout(e=>e.remove(),500,e))
          })
        )
        .THEN(a=>autoClick&&setTimeout(e=>e.click(),3000,a))
    }
  }
  $s('.file-list>li[data-sp]').listen('click',function(e){
    fileOperations.saveFile();
    LS.removeItem('_'+operatingFn);
    document.title=`${ttl} session`;
    aceEditor.selectAll();
    aceEditor.insert(sessionAreaText);
    operatingFn=0;
    fnInput.attr('value','session');
  });
  updated.listen('click',function(e){
    fileOperations.saveFile();
  });
  setInterval(()=>{
    fileOperations.saveFile();
  },2000);
  $s('#fileCloseBtn').listen('click',function(e){
    fileWrapper.CLASS('fileOpened');
    editorApp.CLASS('fileOpened');
  });
  $s('#fileBton').listen('click',function(e){
    fileWrapper.class('fileOpened');
    editorApp.class('fileOpened');
  });
  $s('#fileAddBtn').listen('click',function(e){
    var a=$c('input')
      .style('position','absolute')
      .style('top',e.y+'px')
      .style('left',e.x+'px')
      .style('width','300px')
      .style('height','23px')
      .style('font-size','18px')
      .style('z-index','65537')
      .listen('blur',e=>a.remove())
      .listen('keydown',e=>{
        if(e.keyCode==9){
          fileOperations.addFile(a.elem.value);
          a.elem.blur();
        }
      })
      .follow(body)
      .then(e=>e.focus())
  });
  $s('#fileRnmBtn').listen('click',function(e){
    if(operatingFn==0)
      return fileOperations.msgBox('重命名失败！','你惹session大小姐干嘛？','color:red','color:red');
    var a=$c('input')
      .style('position','absolute')
      .style('top',e.y+'px')
      .style('left',e.x+'px')
      .style('width','300px')
      .style('height','23px')
      .style('font-size','18px')
      .style('z-index','65537')
      .listen('blur',e=>a.remove())
      .listen('keydown',e=>{
        if(e.keyCode==9){
          fileOperations.rnmFile(operatingFn,a.elem.value);
          a.elem.blur();
        }
      })
      .follow(body)
      .then(e=>e.focus())
      .attr('value',operatingFn)
  });
  $s('#fileDelBtn').listen('click',function(e){
    if(operatingFn==0)
      return fileOperations.msgBox('删除失败！','你惹session大小姐干嘛？','color:red','color:red');
    fileOperations.remFile(operatingFn);
  });
  filesSpace.openDB('0','fn').catch(err=>{
    loading.append($c('h1').style('color','red').intext(err.toString()));
  }).then(db=>{
    filesSpace.getAll('0').then(datas=>{
      console.warn(datas);
      for(let x of datas){
        fileOperations.add(x.fn);
        fileArray[x.fn]=x.doc;
      }
      fnInput.attr('value','session');
      loadOK();
    }).catch(err=>{
        fileOperations.msgBox('数据打开失败！',"IndexedDB 出现错误，请修改网页的IndexedDB的权限或打开重试。\
您现在创建的文件可能丢失！\
错误内容："+err,'color:red','color:red',false)
    });
    $s('#loadPage>h3[data-db]').remove();
  });
}(false)
