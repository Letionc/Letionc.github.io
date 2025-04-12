local 爆竹刷新间隔=5
local 胜利的x坐标=20
local 无尽吗=false
----------
local run,res,x,y,z,hstid=true
local f1=function(e)
    hstid=e.eventobjid
    Player:setPosition(hstid,0,80,0)
    res,x,y,z=Actor:getPosition(hstid)
    Area:fillBlockAreaRange({x=x,y=y,z=z-10},{x=x,y=y,z=z+10},614,1)
    Player:setPosition(hstid,2,80,0)
    y=y-1
    dx=x
    while run do
        threadpool:wait(0.001)
        if dx < ({Actor:getPosition(hstid)})[2]+20 then
            Area:clearAllBlockAreaRange({x=dx,y=y-10,z=z-10},{x=dx,y=y+10,z=z+10},nil)
            Area:fillBlockAreaRange({x=dx,y=y,z=z-10},{x=dx,y=y,z=z+10},614,1)
            dx=dx+1
        end
    end
end
ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.EnterGame]=],f1)-- 任一玩家进入  eventobjid,shortix,x,y,z
local f2=function(e)
    if ({Actor:getPosition(hstid)})[2]>胜利的x坐标 and not 无尽吗then run,f2=false,nullF;Game:doGameEnd(nil);return end
    if e.ticks%爆竹刷新间隔>0 then return end
    local o,p=math.random(({Actor:getPosition(hstid)})[2]-10,dx),math.random(z-10,z+10)
    World:spawnProjectile(hstid,12280,o,y+10,p,o,y,p,30)
    Area:clearAllBlockAreaRange({x=e.ticks*0.4-5,y=y-10,z=z-10},{x=e.ticks/10-10,y=y+10,z=z+10},nil)
    local res,id=Graphics:createGraphicsTxtByPos(o,y+1,p,Graphics:makeflotageText('1.7',15,e.ticks),0,0)
    for q=1,0,-0.05 do
        Graphics:updateGraphicsTextById(id,tostring(q),15,100)
        threadpool:wait(0.05)
    end
    Graphics:removeGraphicsByPos(o,y+1,p,e.ticks,1)
end
local nullF=function()end
ScriptSupportEvent:registerEvent([=[Game.RunTime]=],f2)-- 世界Tick变化  second,ticks
