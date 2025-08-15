function GetSnippetText() {
	var snippet = "\n\
snippet local var\n\
	local ${1:val} = ${2:0}\n\
snippet local table\n\
	local ${1:tab}= ${2:tab}\n\
snippet FunctionAnonymous\n\
	function(${1:e})\n\
		${2:}\n\
	end\n\
snippet coroutine.create 创建线程\n\
	coroutine.create(${1:func})\n\
snippet coroutine.resume (重新)执行线程\n\
	coroutine.resume(${1:crtnName})\n\
snippet coroutine.yield 暂时暂停线程\n\
	coroutine.yield(${1:result_In_crtn})\n\
snippet coroutine.wrap 函数式线程\n\
	coroutine.wrap(${1:func})\n\
snippet coroutine.status 看线程状态\n\
	coroutine.status(${1:coroutineName}) -- dead完毕 running运行中 suspended暂停\n\
snippet coroutine.running 看在运行的线程\n\
	coroutine.running()${1:}\n\
snippet functionNormal\n\
	function ${1:name}(${2:params}) \n\
		${3:-- code block}\n\
	end\n\
snippet functionLocal\n\
	local function ${1:func}(${2:params})\n\
		${3:Your_Main_Code}\n\
	end\n\
snippet if 条件语句\n\
	if ${1:true} then\n\
		${2:Your_Main_Code}\n\
	end\n\
snippet if.else条件语句\n\
	if ${1:true} then\n\
		${2:When_True_Code}\n\
	else\n\
		${3:When_False_Code}\n\
	end\n\
snippet for =循环语句\n\
	for ${1:i}=${2:1,10} do\n\
		${3:Your_Main_Code}\n\
	end\n\
snippet for pairs迭代器语句\n\
	for k,v in pairs(${1:Tab_any}) do\n\
		${2:print(k,v)}\n\
	end\n\
snippet for ipairs迭代器语句\n\
	for v in ipairs(${1:array}) do\n\
		${2:print(v)}\n\
	end\n\
snippet repeat 循环语句\n\
	repeat\n\
		${1:Your_Main_Code}\n\
	until ${2:until_true)}\n\
snippet while 循环语句\n\
	while ${1:until_false)} do\n\
		${2:Your_Main_Code}\n\
	end\n\
snippet math.sin三角函数,正弦\n\
	math.sin(${1:deg})\n\
snippet math.asin反正弦\n\
	math.asin(${1:rad})\n\
snippet math.cos余弦\n\
	math.cos(${1:deg})\n\
snippet math.acos反余弦\n\
	math.acos(${1:rad})\n\
snippet math.tan正切\n\
	math.tan(${1:deg})\n\
snippet math.atan反正切\n\
	math.atan(${1:rad})\n\
snippet math.exp取e的x次方\n\
	math.exp(${1:x})\n\
snippet math.log计算x自然对数\n\
	math.log(${1:x})\n\
snippet math.log10计算10为底，x的对数\n\
	math.log(${1:x})\n\
snippet math.frexp将val拆成x*(2^y)的形式\n\
	math.frexp(${1:val})\n\
snippet math.ldexp计算x*(2^y)\n\
	math.ldexp(${1:x},${2:y})\n\
snippet math.pi圆周率\n\
	math.pi\n\
snippet math.abs取绝对值\n\
	math.abs(${1:val})\n\
snippet math.pow幂运算\n\
	math.pow(${1:m},${2:times})\n\
snippet math.sqrt开平方\n\
	math.sqrt(${1:m})\n\
snippet math.mod取模\n\
	math.mod(${1:val1},${2:val2})\n\
snippet math.modf取整数、小数\n\
	math.modf(${1:float})\n\
snippet math.rad角度转弧度\n\
	math.rad(${1:val})\n\
snippet math.deg弧度转角度\n\
	math.deg(${1:val})\n\
snippet math.floor向下取整\n\
	math.floor(${1:val})\n\
snippet math.ceil向上取整\n\
	math.ceil(${1:val})\n\
snippet math.max取最大值\n\
	math.max(${1:str})\n\
snippet math.min取最小值\n\
	math.min(${1:str})\n\
snippet math.randomseed随机数种子\n\
	math.randomseed(os.time())\n\
snippet math.random取随机数（0-1）\n\
	math.random()\n\
snippet math.random取随机数（0-n）\n\
	math.random(${1:n})\n\
snippet math.random取随机数（m-n）\n\
	math.random(${1:m},${2:n})\n\
snippet table.insert末尾插入\n\
	table.insert(${1:tab}, ${2:val})\n\
snippet table.insert在第n位插入\n\
	table.insert(${1:tab},${2:n},${3:val})\n\
snippet table.remove删除末尾\n\
	table.remove(${1:tab})\n\
snippet table.remove删除第n位的元素\n\
	table.remove(${1:tab},n)\n\
snippet table.sort小到大排序↑\n\
	table.sort(${1:tab})\n\
snippet table.sort大到小排序↓\n\
	table.sort(${1:tab}, function (a, b) if a > b then return true end end)  -- 排序tab内元素，z-a，降序\n\
snippet table.pack打包多参数\n\
	table.pack(${1: ... })\n\
snippet table.unpack拆包数组表\n\
	table.unpack(${1:array})\n\
snippet OS库 clock获取cpu近似值\n\
	os.clock() -- 返回CPU运行的近似值\n\
snippet os.time时间戳\n\
	os.time() -- 返回从1070.1.1到当前的秒数\n\
snippet os.difftime返回时间差\n\
	os.difftime(m,n) -- 返回m-n之间的时间差，m、n可以用os.time()获取\n\
snippet os.date时间列表\n\
	os.date('*t') -- 返回当前时间的列表\n\
snippet os.date - 字符串参数\n\
	-- %a  一星期中天数的简写Wed）\n\
	-- %A  一星期中天数的全称（Wednesday）\n\
	-- %b  月份的简写（Sep）\n\
	-- %B  月份的全称（September）\n\
	-- %c  日期和时间（09/16/98 23:48:10）\n\
	-- %d  一个月中的第几天[0 ~ 31]\n\
	-- %H  24小时制中的小时数[00 ~ 23]\n\
	-- %I  12小时制中的小时数[01 ~ 12]\n\
	-- %j  一年中的第几天[01 ~ 366]\n\
	-- %M  分钟数[00 ~ 59]\n\
	-- %m  月份数[01 ~ 12]\n\
	-- %P  上午(am) 或 下午(pm)\n\
	-- %S  秒数[00 ~ 59]\n\
	-- %w  一星期中的第几天[0 ~ 6 = 星期天 ~ 星期六]\n\
	-- %W　一年中的第几个星期0 ~ 52\n\
	-- %x  日期（09/16/98）\n\
	-- %X  时间（23:48:10）\n\
	-- %y  两位数的年份[00 ~ 99]\n\
	-- %Y  完整的年份\n\
	-- %%  字符串'%'\n\
snippet string.len 长度\n\
	string.len(${1:str})\n\
snippet utf8.len 中文Uni长度\n\
	utf8.len(${1:str})\n\
snippet string.sub 截取字符串内容\n\
	string.sub(${1:str},m,n)\n\
snippet string.rep 重复\n\
	string.rep(${1:str},n)\n\
snippet string.lower 转换小写字母\n\
	string.lower(${1:str})\n\
snippet string.upper 转换大写字母\n\
	string.upper(${1:str})\n\
snippet string.char 转换字符\n\
	string.char(${1:ASCII_code})\n\
snippet string.byte 转换ASCII码\n\
	string.byte(${1:str},${2:index})\n\
snippet string.reverse 反转字符串\n\
	string.reverse(${1:str})\n\
snippet string.format 格式化字符串\n\
	string.format(${1:formation}${2:, ...})\n\
snippet string.find 字符串查位\n\
	string.find(${1:str},${2:regExp})\n\
snippet string.gmatch 字符串迭代查字\n\
	string.gmatch(${1:str},${2:regExp})\n\
snippet for string.gmatch\n\
	for ${1:x} in string.gmatch(${2:str},${3:regExp}) do\n\
		${4:Your_Main_Code}\n\
	end\n\
snippet string.match 字符串查字\n\
	string.match(${1:str},${2:regExp})\n\
snippet string.gsub 字符串替换\n\
	string.gsub(${1:str},${2:regExp},${3:repStr | func(str)}${4:,times})\n\
snippet string库 字符串配对转译码\n\
	-- .(点): 与任何字符配对\n\
	-- %a: 与任何字母配对\n\
	-- %c: 与任何控制符配对\n\
	-- %d: 与任何数字配对\n\
	-- %l: 与任何小写字母配对\n\
	-- %p: 与任何标点(punctuation)配对\n\
	-- %s: 与空白字符配对\n\
	-- %u: 与任何大写字母配对\n\
	-- %w: 与任何字母/数字配对\n\
	-- %x: 与任何十六进制数配对\n\
	-- %z: 与任何代表0的字符配对\n\
	-- %x(此处x是非字母非数字字符): 与字符x配对. 主要用来处理表达式中有功能的字符(^$()%.[]*+-?)的配对问题, 例如%%与%配对\n\
	-- [数个字符类]: 与任何[]中包含的字符类配对. 例如[%w_]与任何字母/数字, 或下划线符号(_)配对\n\
	-- [^数个字符类]: 与任何不包含在[]中的字符类配对. 例如[^%s]与任何非空白字符配对\n\
snippet string库 字符串格式化转译码\n\
	-- %s - 接受一个字符串并按照给定的参数格式化该字符串\n\
	-- %d - 接受一个数字并将其转化为有符号的整数格式\n\
	-- %f - 接受一个数字并将其转化为浮点数格式(小数)，默认保留6位小数，不足位用0填充\n\
	-- %x - 接受一个数字并将其转化为小写的十六进制格式\n\
	-- %X - 接受一个数字并将其转化为大写的十六进制格式\n\
	-- %c - 接受一个数字,并将其转化为ASCII码表中对应的字符\n\
	-- %d, %i - 接受一个数字并将其转化为有符号的整数格式\n\
	-- %o - 接受一个数字并将其转化为八进制数格式\n\
	-- %u - 接受一个数字并将其转化为无符号整数格式\n\
	-- %x - 接受一个数字并将其转化为十六进制数格式,使用小写字母\n\
	-- %X - 接受一个数字并将其转化为十六进制数格式,使用大写字母\n\
	-- %e - 接受一个数字并将其转化为科学记数法格式,使用小写字母e\n\
	-- %E - 接受一个数字并将其转化为科学记数法格式,使用大写字母E\n\
	-- %f - 接受一个数字并将其转化为浮点数格式\n\
	-- %g(%G) - 接受一个数字并将其转化为%e(%E,对应%G)及%f中较短的一种格式\n\
	-- %q - 接受一个字符串并将其转化为可安全被Lua编译器读入的格式\n\
	-- %s - 接受一个字符串并按照给定的参数格式化该字符串\n\
snippet 等待threadpool:wait\n\
	threadpool:wait(${1:sec})\n\
snippet 编译模块translateModel\n\
	local e = string.len(${1:str})\n\
	for i=1,e do\n\
		c = string.sub(${1:str},i,i)\n\
		${2:-- 使用if语句判断}\n\
	end\n\
snippet V3 Script模板\n\
	local Script={}\n\
	function Script:OnStart()\n\
	    ${1:-- Your_Main_Code}\n\
	end\n\
	return Script\n\
";
	return snippet;
}

//获取本地设置的Completer
function GetServiceFuncs() {
	var jsonObj = [
		{"meta":"World","type":"local","score":9,"name":"World.StopParticleOnPos","caption":"World:StopParticleOnPos","value":"World:StopParticleOnPos(x,y,z,particleId)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.SetParticleTransform","caption":"World:SetParticleTransform","value":"World:SetParticleTransform(pos,particleIdArg,offset,rot,scale)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.PlayParticle","caption":"World:PlayParticle","value":"World:PlayParticle(pos,particleIdArg,ptimeArg,offset,rot,scale)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.GetLightByPos","caption":"World:GetLightByPos","value":"World:GetLightByPos(x,y,z)\n-- 返回：lv:number光照强度(0~16)"},
        {"meta":"World","type":"local","score":9,"name":"World.SpawnCreature","caption":"World:SpawnCreature","value":"World:SpawnCreature(x,y,z,actorid,num,trigger)\n-- 返回：objs:table生物ID组"},
        {"meta":"World","type":"local","score":9,"name":"World.DespawnActor","caption":"World:DespawnActor","value":"World:DespawnActor(objid)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.GetPlayerTotal","caption":"World:GetPlayerTotal","value":"World:GetPlayerTotal(alive)\n-- 返回：num:number获取数量"},
        {"meta":"World","type":"local","score":9,"name":"World.GetAllPlayers","caption":"World:GetAllPlayers","value":"World:GetAllPlayers(alive)\n-- 返回：list:table对象objid组"},
        {"meta":"World","type":"local","score":9,"name":"World.GetSpawnPoint","caption":"World:GetSpawnPoint","value":"World:GetSpawnPoint()\n-- 返回：x,y,z:number方块坐标"},
        {"meta":"World","type":"local","score":9,"name":"World.FindCanSpawnMobPosList","caption":"World:FindCanSpawnMobPosList","value":"World:FindCanSpawnMobPosList(centerX,centerY,centerZ,radius,includeCenterPos)\n-- 返回：posList:table位置列表"},
        {"meta":"World","type":"local","score":9,"name":"World.FindNearestPlayerByPos","caption":"World:FindNearestPlayerByPos","value":"World:FindNearestPlayerByPos(posX,posY,posZ,radius,worldId)\n-- 返回：objid:number玩家uin"},
        {"meta":"World","type":"local","score":9,"name":"World.PlaySoundEffectOnPos","caption":"World:PlaySoundEffectOnPos","value":"World:PlaySoundEffectOnPos(pos,soundId,volume,pitch,isLoop)\n-- 返回：ret:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.StopSoundEffectOnPos","caption":"World:StopSoundEffectOnPos","value":"World:StopSoundEffectOnPos(pos,soundId)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.PauseSoundEffectOnPos","caption":"World:PauseSoundEffectOnPos","value":"World:PauseSoundEffectOnPos(pos,soundId,pause)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.IsDaytime","caption":"World:IsDaytime","value":"World:IsDaytime()\n-- 返回：isDaytime:bool是否白天"},
        {"meta":"World","type":"local","score":9,"name":"World.SetHours","caption":"World:SetHours","value":"World:SetHours(time)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.GetHours","caption":"World:GetHours","value":"World:GetHours()\n-- 返回：curHour:number时间(小时)"},
        {"meta":"World","type":"local","score":9,"name":"World.GetDay","caption":"World:GetDay","value":"World:GetDay()\n-- 返回：code:number天数"},
        {"meta":"World","type":"local","score":9,"name":"World.SetGravity","caption":"World:SetGravity","value":"World:SetGravity(value)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.GetGravity","caption":"World:GetGravity","value":"World:GetGravity()\n-- 返回：value:number重力值"},
        {"meta":"World","type":"local","score":9,"name":"World.CanMobSpawnOnPosXZ","caption":"World:CanMobSpawnOnPosXZ","value":"World:CanMobSpawnOnPosXZ(x,y,z)\n-- 返回：posy:numberY轴坐标"},
        {"meta":"World","type":"local","score":9,"name":"World.GetCurMapId","caption":"World:GetCurMapId","value":"World:GetCurMapId()\n-- 返回：mapid:number地图ID"},
        {"meta":"World","type":"local","score":9,"name":"World.SpawnProjectile","caption":"World:SpawnProjectile","value":"World:SpawnProjectile(objid,itemid,x,y,z,dstx,dsty,dstz,speed)\n-- 返回：objid:number投掷物objid"},
        {"meta":"World","type":"local","score":9,"name":"World.SpawnProjectileByDir","caption":"World:SpawnProjectileByDir","value":"World:SpawnProjectileByDir(objid,itemid,x,y,z,dstx,dsty,dstz,speed)\n-- 返回：objid:number投掷物objid"},
        {"meta":"World","type":"local","score":9,"name":"World.GetBiomeType","caption":"World:GetBiomeType","value":"World:GetBiomeType(posX,posZ)\n-- 返回：ret:number地形类型 BiomeType"},
        {"meta":"World","type":"local","score":9,"name":"World.GetBiomeGroup","caption":"World:GetBiomeGroup","value":"World:GetBiomeGroup(posX,posZ)\n-- 返回：biometype:number地形组类型(WeatherGroup)"},
        {"meta":"World","type":"local","score":9,"name":"World.FindEcosystem","caption":"World:FindEcosystem","value":"World:FindEcosystem(x,y,z,biomeid,radius)\n-- 返回：x,y,z:number找到的地形位置坐标"},
        {"meta":"World","type":"local","score":9,"name":"World.PixelMapAddMarker","caption":"World:PixelMapAddMarker","value":"World:PixelMapAddMarker()\n-- 返回："},
        {"meta":"World","type":"local","score":9,"name":"World.PixelMapRefreshMarker","caption":"World:PixelMapRefreshMarker","value":"World:PixelMapRefreshMarker()\n-- 返回："},
        {"meta":"World","type":"local","score":9,"name":"World.PixelMapDelMarker","caption":"World:PixelMapDelMarker","value":"World:PixelMapDelMarker()\n-- 返回："},
        {"meta":"World","type":"local","score":9,"name":"World.PixelMapAddTexture","caption":"World:PixelMapAddTexture","value":"World:PixelMapAddTexture()\n-- 返回："},
        {"meta":"World","type":"local","score":9,"name":"World.PixelMapRefreshTexture","caption":"World:PixelMapRefreshTexture","value":"World:PixelMapRefreshTexture()\n-- 返回："},
        {"meta":"World","type":"local","score":9,"name":"World.PixelMapDelTexture","caption":"World:PixelMapDelTexture","value":"World:PixelMapDelTexture()\n-- 返回："},
        {"meta":"World","type":"local","score":9,"name":"World.SetSkyBoxColorAnim","caption":"World:SetSkyBoxColorAnim","value":"World:SetSkyBoxColorAnim(time,itype,color,animId,animTime)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.SetTimeVanishingSpeed","caption":"World:SetTimeVanishingSpeed","value":"World:SetTimeVanishingSpeed(speed)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.SetSkyBoxTemplate","caption":"World:SetSkyBoxTemplate","value":"World:SetSkyBoxTemplate(value)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.SetSkyBoxMaps","caption":"World:SetSkyBoxMaps","value":"World:SetSkyBoxMaps(time,itype,url)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.SetSkyBoxColor","caption":"World:SetSkyBoxColor","value":"World:SetSkyBoxColor(time,itype,color)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.SetSkyBoxAttr","caption":"World:SetSkyBoxAttr","value":"World:SetSkyBoxAttr(time,itype,value)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.SetSkyBoxFilter","caption":"World:SetSkyBoxFilter","value":"World:SetSkyBoxFilter(itype,value)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.SetSkyBoxSwitch","caption":"World:SetSkyBoxSwitch","value":"World:SetSkyBoxSwitch(time,itype,value)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.SetSkyBoxMapsAnim","caption":"World:SetSkyBoxMapsAnim","value":"World:SetSkyBoxMapsAnim(time,itype,url)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.SetSkyBoxFilterAnim","caption":"World:SetSkyBoxFilterAnim","value":"World:SetSkyBoxFilterAnim(itype,value,animId,animTime)\n-- 返回：code:bool成功(true)"},
        {"meta":"World","type":"local","score":9,"name":"World.GetDirRayDetection","caption":"World:GetDirRayDetection","value":"World:GetDirRayDetection(posbegin,y=0,z=0},dir,y=floaty,z=floatz},maxlen,picktype)\n-- 返回：ret:number对象ID,vec:table对象位置{x=0,y=0,z=0}"},
        {"meta":"World","type":"local","score":9,"name":"World.GetRayLength","caption":"World:GetRayLength","value":"World:GetRayLength(srcx,srcy,srcz,dstx,dsty,dstz,distance)\n-- 返回：ret:number距离"},
        {"meta":"World","type":"local","score":9,"name":"World.GetRayBlock","caption":"World:GetRayBlock","value":"World:GetRayBlock(srcx,srcy,srcz,dstx,dsty,dstz,distance)\n-- 返回：ret:number方块ID"},
        {"meta":"World","type":"local","score":9,"name":"World.CalcDirectionByYawDirection","caption":"World:CalcDirectionByYawDirection","value":"World:CalcDirectionByYawDirection(objid,vx,vy,vz)\n-- 返回：ret:table:绝对方向向量{x: number,y: number,z: number}"},
        {"meta":"World","type":"local","score":9,"name":"World.CalcDirectionByYawAngle","caption":"World:CalcDirectionByYawAngle","value":"World:CalcDirectionByYawAngle(objid,yaw,pitch)\n-- 返回：ret:table:绝对方向向量{x: number,y: number,z: number}"},
        {"meta":"World","type":"local","score":9,"name":"World.CalcDirectionByCoord","caption":"World:CalcDirectionByCoord","value":"World:CalcDirectionByCoord(x,y,z)\n-- 返回：ret:table:绝对方向向量{x: number,y: number,z: number}"},
        {"meta":"World","type":"local","score":9,"name":"World.CalcDirectionByAngle","caption":"World:CalcDirectionByAngle","value":"World:CalcDirectionByAngle(yaw,pitch)\n-- 返回：ret:table:绝对方向向量{x: number,y: number,z: number}"},
        {"meta":"World","type":"local","score":9,"name":"World.RandomParticleEffectID","caption":"World:RandomParticleEffectID","value":"World:RandomParticleEffectID()\n-- 返回：ret:number特效ID"},
        {"meta":"World","type":"local","score":9,"name":"World.RandomSoundID","caption":"World:RandomSoundID","value":"World:RandomSoundID()\n-- 返回：ret:number音效ID"},
        {"meta":"World","type":"local","score":9,"name":"World.CalcDistance","caption":"World:CalcDistance","value":"World:CalcDistance(posSrc,y,z,posDst,y,z)\n-- 返回：ret:number两点之间的距离"},
        {"meta":"World","type":"local","score":9,"name":"World.SetGroupWeather","caption":"World:SetGroupWeather","value":"World:SetGroupWeather(groupid,weatherid)\n-- 返回：ret:boolean设置成功(true)或失败(false)"},
        {"meta":"World","type":"local","score":9,"name":"World.RandomWeatherID","caption":"World:RandomWeatherID","value":"World:RandomWeatherID()\n-- 返回：ret:number 随机出来的天气ID"},
        {"meta":"World","type":"local","score":9,"name":"World.GetGroupWeather","caption":"World:GetGroupWeather","value":"World:GetGroupWeather(groupid)\n-- 返回：ret:number天气值"},
        {"meta":"World","type":"local","score":9,"name":"World.SetSpawnPoint","caption":"World:SetSpawnPoint","value":"World:SetSpawnPoint(x,y,z)\n-- 返回：ret:bool结果"},
        {"meta":"World","type":"local","score":9,"name":"World.CalcDirectionByPos","caption":"World:CalcDirectionByPos","value":"World:CalcDirectionByPos(pos1,pos2)\n-- 返回：ret:table单位方向"},
        {"meta":"World","type":"local","score":9,"name":"World.SetWorldCreateMobRule","caption":"World:SetWorldCreateMobRule","value":"World:SetWorldCreateMobRule(cfgs)\n-- 返回：ret:boolean成功true"},
        {"meta":"World","type":"local","score":9,"name":"World.SetMobSpawnDensity","caption":"World:SetMobSpawnDensity","value":"World:SetMobSpawnDensity(mobType,density)\n-- 返回：ret:boolean成功true"},
        {"meta":"World","type":"local","score":9,"name":"World.SetPlantGrowRate","caption":"World:SetPlantGrowRate","value":"World:SetPlantGrowRate(rate)\n-- 返回：ret:boolean成功true"},
        {"meta":"World","type":"local","score":9,"name":"World.SetInnerViewEnable","caption":"World:SetInnerViewEnable","value":"World:SetInnerViewEnable(iview,bopen)\n-- 返回：ret:bool是否成功"},
        {"meta":"World","type":"local","score":9,"name":"World.SetMidJoin","caption":"World:SetMidJoin","value":"World:SetMidJoin(enable)\n-- 返回：ret:bool是否成功"},
        {"meta":"World","type":"local","score":9,"name":"World.GetGameMode","caption":"World:GetGameMode","value":"World:GetGameMode()\n-- 返回：mode:number游戏模式 WorldType"},
        {"meta":"GameObject","type":"local","score":9,"name":"GameObject.FindObject","caption":"GameObject:FindObject","value":"GameObject:FindObject(id)\n-- 返回：ret:GameObject,nil返回找到的游戏对象，如果没有找到则返回nil"},
        {"meta":"GameObject","type":"local","score":9,"name":"GameObject.FindUIObject","caption":"GameObject:FindUIObject","value":"GameObject:FindUIObject(id)\n-- 返回：ret:GameObject,nil返回查找的ui对象，如果没有找到则返回nil"},
        {"meta":"GameObject","type":"local","score":9,"name":"GameObject.FindBlockObject","caption":"GameObject:FindBlockObject","value":"GameObject:FindBlockObject(id)\n-- 返回：ret:GameObject,nil返回查找的方块对象，如果没有找到则返回nil"},
        {"meta":"GameObject","type":"local","score":9,"name":"GameObject.CreatePrefabInst","caption":"GameObject:CreatePrefabInst","value":"GameObject:CreatePrefabInst(prefabId,mapId,x,y,z,trigger)\n-- 返回：ret:GameObject,nil返回创建的对象，如果创建失败则返回nil\n"},
        {"meta":"GameObject","type":"local","score":9,"name":"GameObject.CreatePrefab","caption":"GameObject:CreatePrefab","value":"GameObject:CreatePrefab(objectType,prefabId,x,y,z,num,trigger,mapId)\n-- 返回：ret:table返回创建对象的objId列表\n"},
        {"meta":"GameObject","type":"local","score":9,"name":"GameObject.Destroy","caption":"GameObject:Destroy","value":"GameObject:Destroy(objId)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"GameObject","type":"local","score":9,"name":"GameObject.GetObjectPrefab","caption":"GameObject:GetObjectPrefab","value":"GameObject:GetObjectPrefab(objId)\n-- 返回：ret:number,string预制id,objtype:number对象类型\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetItemId","caption":"Actor:GetItemId","value":"Actor:GetItemId(objid)\n-- 返回：ret:number掉落物类型ID\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetDropItemNum","caption":"Actor:GetDropItemNum","value":"Actor:GetDropItemNum(objid)\n-- 返回：itemnum:number掉落物品数量\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetTeam","caption":"Actor:SetTeam","value":"Actor:SetTeam(objid,teamid,bResetAttr)\n-- 返回：ret:bool设置成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetTeam","caption":"Actor:GetTeam","value":"Actor:GetTeam(objid)\n-- 返回：teamId:number队伍ID\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.AddHp","caption":"Actor:AddHp","value":"Actor:AddHp(objid,hp,hp<0减少血量))\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetMaxHP","caption":"Actor:GetMaxHP","value":"Actor:GetMaxHP(objid)\n-- 返回：value:number最大生命值\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.ShowNickName","caption":"Actor:ShowNickName","value":"Actor:ShowNickName(objid,bshow)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetNickName","caption":"Actor:SetNickName","value":"Actor:SetNickName(objid,nickname)\n-- 返回：ret:bool设置成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetNickName","caption":"Actor:GetNickName","value":"Actor:GetNickName(objid)\n-- 返回：name:string角色昵称\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetCurMapId","caption":"Actor:GetCurMapId","value":"Actor:GetCurMapId(objid)\n-- 返回：mapID:number当前地图ID\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.IsPlayer","caption":"Actor:IsPlayer","value":"Actor:IsPlayer(objid)\n-- 返回：ret:bool是否为玩家(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.PlaySoundEffectById","caption":"Actor:PlaySoundEffectById","value":"Actor:PlaySoundEffectById(objid,soundId,volume,pitch,isLoop)\n-- 返回：ret:bool播放成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.StopSoundEffectById","caption":"Actor:StopSoundEffectById","value":"Actor:StopSoundEffectById(objid,soundId)\n-- 返回：ret:bool停止成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.PauseSoundEffectById","caption":"Actor:PauseSoundEffectById","value":"Actor:PauseSoundEffectById(objid,soundId,pause)\n-- 返回：ret:bool停止成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.RotateFaceToActor","caption":"Actor:RotateFaceToActor","value":"Actor:RotateFaceToActor(objid,targetid)\n-- 返回：ret:bool旋转成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetMotion","caption":"Actor:GetMotion","value":"Actor:GetMotion(objid)\n-- 返回：x:number运动速度X,y:number运动速度Y,z:number运动速度Z (未移动速度是0)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.HasActor","caption":"Actor:HasActor","value":"Actor:HasActor(objid)\n-- 返回：ret:bool是否存在角色(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetBeHurtTarget","caption":"Actor:SetBeHurtTarget","value":"Actor:SetBeHurtTarget(objid,targetid)\n-- 返回：ret:bool设置成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetActorFacade","caption":"Actor:GetActorFacade","value":"Actor:GetActorFacade(objid)\n-- 返回：facade:string生物外观对象\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.CompareMainModel","caption":"Actor:CompareMainModel","value":"Actor:CompareMainModel(facade1,facade2)\n-- 返回：ret:bool是否相等(true) ，传入参数错误返回false\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.PlayBodyParticleById","caption":"Actor:PlayBodyParticleById","value":"Actor:PlayBodyParticleById(objid,particleId,ptme,offset,rot,scale)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.StopBodyEffectById","caption":"Actor:StopBodyEffectById","value":"Actor:StopBodyEffectById(objid,particleId)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetBodyParticleTransform","caption":"Actor:SetBodyParticleTransform","value":"Actor:SetBodyParticleTransform(objid,particleId,offset,rot,scale)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.Jump","caption":"Actor:Jump","value":"Actor:Jump(objid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetRidingActorObjId","caption":"Actor:GetRidingActorObjId","value":"Actor:GetRidingActorObjId(objid)\n-- 返回：objid:number生物objid\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetFaceDirection","caption":"Actor:GetFaceDirection","value":"Actor:GetFaceDirection(objid)\n-- 返回：pos:table轴向上的方向\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.TryMoveToActor","caption":"Actor:TryMoveToActor","value":"Actor:TryMoveToActor(objid,targetObjid,speed)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetFaceDirection","caption":"Actor:SetFaceDirection","value":"Actor:SetFaceDirection(objid,x,y,z)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.KillSelf","caption":"Actor:KillSelf","value":"Actor:KillSelf(objid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetAttr","caption":"Actor:SetAttr","value":"Actor:SetAttr(objid,atttype,val)\n-- 返回：ret:bool设置成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetAttr","caption":"Actor:GetAttr","value":"Actor:GetAttr(objid,atttype)\n-- 返回：value:number属性值\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetActorPermissions","caption":"Actor:SetActorPermissions","value":"Actor:SetActorPermissions(objid,actionattr,switch)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetActorPermissions","caption":"Actor:GetActorPermissions","value":"Actor:GetActorPermissions(objid,actionattr)\n-- 返回：ret:bool开关\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetFaceYaw","caption":"Actor:SetFaceYaw","value":"Actor:SetFaceYaw(objid,yaw)\n-- 返回：ret:bool设置成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetFaceYaw","caption":"Actor:GetFaceYaw","value":"Actor:GetFaceYaw(objid)\n-- 返回：yaw:number面朝角度\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetFacePitch","caption":"Actor:SetFacePitch","value":"Actor:SetFacePitch(objid,pitch)\n-- 返回：ret:bool设置成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetFacePitch","caption":"Actor:GetFacePitch","value":"Actor:GetFacePitch(objid)\n-- 返回：pitch:number仰望角度\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetPosition","caption":"Actor:SetPosition","value":"Actor:SetPosition(objid,x,y,z)\n-- 返回：ret:bool设置成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetPosition","caption":"Actor:GetPosition","value":"Actor:GetPosition(objid)\n-- 返回：x:number目标X坐标,y:number目标Y坐标,z:number目标Z坐标\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.ChangeCustomModel","caption":"Actor:ChangeCustomModel","value":"Actor:ChangeCustomModel(objid,modleName)\n-- 返回：ret:bool成功(true)，\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.RecoverinitialModel","caption":"Actor:RecoverinitialModel","value":"Actor:RecoverinitialModel(objid)\n-- 返回：code:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.ActorHurt","caption":"Actor:ActorHurt","value":"Actor:ActorHurt(objid,targetid,damage,attacktype,ignoreResist,ignoreTriggerEvent)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetImmuneType","caption":"Actor:SetImmuneType","value":"Actor:SetImmuneType(objid,immunetype,enable)\n-- 返回：code:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.ChangActorMoveType","caption":"Actor:ChangActorMoveType","value":"Actor:ChangActorMoveType(objid,moveType)\n-- 返回：\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetActorMovementMode","caption":"Actor:GetActorMovementMode","value":"Actor:GetActorMovementMode(objid)\n-- 返回：return:number返回玩家的移动模式\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetBoundSzie","caption":"Actor:GetBoundSzie","value":"Actor:GetBoundSzie(objid)\n-- 返回：vec:table返回值\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.RandomFacadeID","caption":"Actor:RandomFacadeID","value":"Actor:RandomFacadeID()\n-- 返回：ret:string随机外观ID\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetObjType","caption":"Actor:GetObjType","value":"Actor:GetObjType(objid)\n-- 返回：ret:itype获取结果 ObjType\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.TryMoveToPos","caption":"Actor:TryMoveToPos","value":"Actor:TryMoveToPos(objid,,x,y,z,cancontrol,bshowtip)\n-- 返回：ret:bool移动成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.AppendSpeed","caption":"Actor:AppendSpeed","value":"Actor:AppendSpeed(objid,x,y,z)\n-- 返回：code:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.FindNearestBlock","caption":"Actor:FindNearestBlock","value":"Actor:FindNearestBlock(objid,blockid,blockRange)\n-- 返回：x,y,z:number方块坐标\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetEyeHeight","caption":"Actor:GetEyeHeight","value":"Actor:GetEyeHeight(objid)\n-- 返回：hight:number高度\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.ClearActorWithId","caption":"Actor:ClearActorWithId","value":"Actor:ClearActorWithId()\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.IsExist","caption":"Actor:IsExist","value":"Actor:IsExist(objid)\n-- 返回：ret:bool存在(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.PlayAnim","caption":"Actor:PlayAnim","value":"Actor:PlayAnim(objid,animid,speed,loop)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.PlayHandAnim","caption":"Actor:PlayHandAnim","value":"Actor:PlayHandAnim(objid,animid,speed,loop)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.MountActor","caption":"Actor:MountActor","value":"Actor:MountActor(objid,rideObjid,isContrl,isCloseAI)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.DisMountActor","caption":"Actor:DisMountActor","value":"Actor:DisMountActor(objid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.PickupActor","caption":"Actor:PickupActor","value":"Actor:PickupActor(objid,targetobjid)\n-- 返回：ret:bool抓取成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.TryPickupActorForward","caption":"Actor:TryPickupActorForward","value":"Actor:TryPickupActorForward(objid,distance)\n-- 返回：ret:bool抓取成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.DropActor","caption":"Actor:DropActor","value":"Actor:DropActor(objid,dir,isThrow,speed,hasInertance)\n-- 返回：ret:bool投掷成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.EscapePickup","caption":"Actor:EscapePickup","value":"Actor:EscapePickup(objid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetBtreeVarValue","caption":"Actor:SetBtreeVarValue","value":"Actor:SetBtreeVarValue(pos {x=0,y=0,z=0})\n-- 返回：ret:bool成功(true) 失败(false) 组数据无法设置\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetBtreeVarValue","caption":"Actor:GetBtreeVarValue","value":"Actor:GetBtreeVarValue(objid,varid)\n-- 返回：\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetDropItemInstanceId","caption":"Actor:GetDropItemInstanceId","value":"Actor:GetDropItemInstanceId(objid)\n-- 返回：InstanceId:string道具实例id\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.SetAblePick","caption":"Actor:SetAblePick","value":"Actor:SetAblePick(objid,able)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.GetEntityFacade","caption":"Actor:GetEntityFacade","value":"Actor:GetEntityFacade(objid)\n-- 返回：ret:string外观\n"},
        {"meta":"Actor","type":"local","score":9,"name":"Actor.PickupItem","caption":"Actor:PickupItem","value":"Actor:PickupItem(objid,itemobjid)\n-- 返回：num:number拾取数量\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetHostUin","caption":"Player:GetHostUin","value":"Player:GetHostUin()\n-- 返回：ret:number玩家Uin\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetGameResults","caption":"Player:SetGameResults","value":"Player:SetGameResults(objid,result)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetGameWin","caption":"Player:SetGameWin","value":"Player:SetGameWin(objid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetCurToolID","caption":"Player:GetCurToolID","value":"Player:GetCurToolID(objid)\n-- 返回：ret:number,string道具ID\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetShotcutIndex","caption":"Player:GetShotcutIndex","value":"Player:GetShotcutIndex(objid)\n-- 返回：ret:number索引值\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetShotcutIndex","caption":"Player:SetShotcutIndex","value":"Player:SetShotcutIndex(objid,index)\n-- 返回：ret:bool成功\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetSkillCD","caption":"Player:SetSkillCD","value":"Player:SetSkillCD(objid,itemid,cd)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.ReviveToPos","caption":"Player:ReviveToPos","value":"Player:ReviveToPos(objid,x,y,z)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetRevivePoint","caption":"Player:SetRevivePoint","value":"Player:SetRevivePoint(objid,x,y,z)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.NotifyGameInfo","caption":"Player:NotifyGameInfo","value":"Player:NotifyGameInfo(objid,info)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.RotateCamera","caption":"Player:RotateCamera","value":"Player:RotateCamera(objid,yaw,pitch,issmooth,iscorrectyaw)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.ShakeCamera","caption":"Player:ShakeCamera","value":"Player:ShakeCamera(objid,power,duration)\n-- 返回：ret:boolean操作是否成功\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.StopShakeCamera","caption":"Player:StopShakeCamera","value":"Player:StopShakeCamera(objid)\n-- 返回：ret:boolean操作是否成功\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.RotateCameraToActor","caption":"Player:RotateCameraToActor","value":"Player:RotateCameraToActor(objid,targetid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.ChangeViewMode","caption":"Player:ChangeViewMode","value":"Player:ChangeViewMode(objid,viewmode,islock)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.IsEquipByResID","caption":"Player:IsEquipByResID","value":"Player:IsEquipByResID(objid,itemid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetAimPos","caption":"Player:GetAimPos","value":"Player:GetAimPos(objid)\n-- 返回：\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetAimDir","caption":"Player:GetAimDir","value":"Player:GetAimDir(objid)\n-- 返回：ret:table单位方向向量\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetRayOriginPos","caption":"Player:GetRayOriginPos","value":"Player:GetRayOriginPos(objid)\n-- 返回：x,y,z:number方块坐标\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.PlayMusic","caption":"Player:PlayMusic","value":"Player:PlayMusic(objid,musicId,volume,pitch,isLoop)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.StopMusic","caption":"Player:StopMusic","value":"Player:StopMusic(objid,musicId)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.PauseMusic","caption":"Player:PauseMusic","value":"Player:PauseMusic(objid,musicId,pause)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.OpenUIView","caption":"Player:OpenUIView","value":"Player:OpenUIView(objid,uiname,effectid,time)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.HideUIView","caption":"Player:HideUIView","value":"Player:HideUIView(objid,uiname,effectid,time)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetClientInfo","caption":"Player:GetClientInfo","value":"Player:GetClientInfo(objid)\n-- 返回：ret:number返回值（1 pc 2 android 3 ios）\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetNickname","caption":"Player:GetNickname","value":"Player:GetNickname(objid)\n-- 返回：name:string玩家昵称\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.OpenDevGoodsBuyDialog","caption":"Player:OpenDevGoodsBuyDialog","value":"Player:OpenDevGoodsBuyDialog(objid,devGoodsId,customDesc)\n-- 返回：code:number成功(ErrorCode.OK)ErrorCode\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.OpenDevGoodsBuyDetailedDialog","caption":"Player:OpenDevGoodsBuyDetailedDialog","value":"Player:OpenDevGoodsBuyDetailedDialog(objid,devGoodsId)\n-- 返回：code:number成功(ErrorCode.OK)ErrorCode\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.OpenDevStore","caption":"Player:OpenDevStore","value":"Player:OpenDevStore(objid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.OpenDevStoreTab","caption":"Player:OpenDevStoreTab","value":"Player:OpenDevStoreTab(objid,page,name)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.OpenDevGoodsPage","caption":"Player:OpenDevGoodsPage","value":"Player:OpenDevGoodsPage(objid,pagetype,pagetitle)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetPlayerCostStatic","caption":"Player:GetPlayerCostStatic","value":"Player:GetPlayerCostStatic(call_back,playerid,tbegin,tend,costtype)\n-- 返回：icount:number消费数量(-1 请求失败)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.StandReportEvent","caption":"Player:StandReportEvent","value":"Player:StandReportEvent(playerid,eventstr)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.ClearMotion","caption":"Player:ClearMotion","value":"Player:ClearMotion(uin)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetMobileVibrate","caption":"Player:SetMobileVibrate","value":"Player:SetMobileVibrate(playerid,time,amplitude)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetScreenSpacePos","caption":"Player:GetScreenSpacePos","value":"Player:GetScreenSpacePos(playerid,x,y,z)\n-- 返回：\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetScreenSpacePosV","caption":"Player:GetScreenSpacePosV","value":"Player:GetScreenSpacePosV(playerid,x,y,z)\n-- 返回：\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SendFriendApply","caption":"Player:SendFriendApply","value":"Player:SendFriendApply(playerid,uin2)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetCameraPosTransformTo","caption":"Player:SetCameraPosTransformTo","value":"Player:SetCameraPosTransformTo(playerid,vec,animid,time)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetCameraPosTransformBy","caption":"Player:SetCameraPosTransformBy","value":"Player:SetCameraPosTransformBy(playerid,vec,animid,time)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetCameraRotTransformBy","caption":"Player:SetCameraRotTransformBy","value":"Player:SetCameraRotTransformBy(playerid,vec,animid,time)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetCameraFovTransformBy","caption":"Player:SetCameraFovTransformBy","value":"Player:SetCameraFovTransformBy(playerid,fov,animid,time)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetCameraAttrState","caption":"Player:SetCameraAttrState","value":"Player:SetCameraAttrState(playerid,attr)\n-- 返回：enable:bool开关(true开启 false关闭)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetCameraRotMode","caption":"Player:SetCameraRotMode","value":"Player:SetCameraRotMode(playerid,attr)\n-- 返回：code:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetCameraMountObj","caption":"Player:SetCameraMountObj","value":"Player:SetCameraMountObj(playerid,objid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetCameraMountPos","caption":"Player:SetCameraMountPos","value":"Player:SetCameraMountPos(playerid,pos)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.ResetCameraAttr","caption":"Player:ResetCameraAttr","value":"Player:ResetCameraAttr(playerid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.OpenBoxByPos","caption":"Player:OpenBoxByPos","value":"Player:OpenBoxByPos(objid,x,y,z)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetFirstInviter","caption":"Player:GetFirstInviter","value":"Player:GetFirstInviter(call_back,objid,)\n-- 返回：uin:number邀请人的玩家Uin(获取失败时返回错误码)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.HasFriend","caption":"Player:HasFriend","value":"Player:HasFriend(playerid,playerid2)\n-- 返回：code:bool是否是好友\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetMiniVipLevel","caption":"Player:GetMiniVipLevel","value":"Player:GetMiniVipLevel(playerid)\n-- 返回：viplevel:numbervip等级\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.ChangPlayerMoveType","caption":"Player:ChangPlayerMoveType","value":"Player:ChangPlayerMoveType(objid,moveType)\n-- 返回：success:bool成功\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.PlayAdvertising","caption":"Player:PlayAdvertising","value":"Player:PlayAdvertising(objid,adname)\n-- 返回：code:number执行结果 ErrorCodeErrorCode,objid:number玩家ID,adname:string广告名称\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.OpenInnerView","caption":"Player:OpenInnerView","value":"Player:OpenInnerView(uin,iview,bopen,data)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetItemAttAction","caption":"Player:SetItemAttAction","value":"Player:SetItemAttAction(objid,itemid,atttype,switch)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.ForceOpenBoxUI","caption":"Player:ForceOpenBoxUI","value":"Player:ForceOpenBoxUI(objid,itemid)\n-- 返回：code:bool成功(true)\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.ItemSkillCDEnter","caption":"Player:ItemSkillCDEnter","value":"Player:ItemSkillCDEnter(objid,itemid,cd)\n-- 返回：ret:boolean操作是否成功\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.ItemSkillCDDone","caption":"Player:ItemSkillCDDone","value":"Player:ItemSkillCDDone(objid,itemid)\n-- 返回：ret:boolean操作是否成功\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.SetGunActionState","caption":"Player:SetGunActionState","value":"Player:SetGunActionState(objid,action,switch)\n-- 返回：ret:boolean操作是否成功\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetViewMode","caption":"Player:GetViewMode","value":"Player:GetViewMode(uin)\n-- 返回：ret:number视角模式 ViewPortType\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetRevivePoint","caption":"Player:GetRevivePoint","value":"Player:GetRevivePoint(objid,)\n-- 返回：x,y,z:number方块坐标\n"},
        {"meta":"Player","type":"local","score":9,"name":"Player.GetRentCloudServerOwner","caption":"Player:GetRentCloudServerOwner","value":"Player:GetRentCloudServerOwner()\n-- 返回：uin:number玩家Uin （仅租赁云服生效）\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.GetActorID","caption":"Monster:GetActorID","value":"Monster:GetActorID(objid)\n-- 返回：actorid:number生物defId\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.GetActorName","caption":"Monster:GetActorName","value":"Monster:GetActorName(objid)\n-- 返回：name:string生物类型名称\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.ReplaceActor","caption":"Monster:ReplaceActor","value":"Monster:ReplaceActor(objidSrc,actorid,replacehp)\n-- 返回：ret:number替换后的生物id\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.GetMonsterDefLevelExp","caption":"Monster:GetMonsterDefLevelExp","value":"Monster:GetMonsterDefLevelExp(actorid)\n-- 返回：ret:number掉落经验\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.SetMonsterDefLevelExp","caption":"Monster:SetMonsterDefLevelExp","value":"Monster:SetMonsterDefLevelExp(actorid,levelExp)\n-- 返回：ret:boolean操作是否成功\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.ChangeAI","caption":"Monster:ChangeAI","value":"Monster:ChangeAI(objid,treeid)\n-- 返回：ret:boolean操作是否成功\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.CanSee","caption":"Monster:CanSee","value":"Monster:CanSee(objid,targetObjid)\n-- 返回：result:bool是否可见\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.GetDropItemInfo","caption":"Monster:GetDropItemInfo","value":"Monster:GetDropItemInfo(actorid)\n-- 返回：ret:table掉落物信息 {...{道具ID，数量，概率}...}\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.SetTameTarget","caption":"Monster:SetTameTarget","value":"Monster:SetTameTarget(objidA,objidB)\n-- 返回：ret:boolean操作是否成功\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.RandomActorID","caption":"Monster:RandomActorID","value":"Monster:RandomActorID()\n-- 返回：ret:number随机生物类型ID\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.GetTamedOwnerID","caption":"Monster:GetTamedOwnerID","value":"Monster:GetTamedOwnerID(objid)\n-- 返回：\n"},
        {"meta":"Monster","type":"local","score":9,"name":"Monster.GetFacade","caption":"Monster:GetFacade","value":"Monster:GetFacade(monsterid,string)\n-- 返回：model:string模型名称 （如果是prefab资源会带有子部件信息，选择器选择不带子部件信息）\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.IsSolidBlock","caption":"Block:IsSolidBlock","value":"Block:IsSolidBlock(x,y,z)\n-- 返回：ret:booleantrue/false\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.IsLiquidBlock","caption":"Block:IsLiquidBlock","value":"Block:IsLiquidBlock(x,y,z)\n-- 返回：ret:booleantrue/false\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.IsAirBlock","caption":"Block:IsAirBlock","value":"Block:IsAirBlock(x,y,z)\n-- 返回：\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.GetBlockID","caption":"Block:GetBlockID","value":"Block:GetBlockID(x,y,z)\n-- 返回：blockid:number方块类型ID\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.SetBlockAll","caption":"Block:SetBlockAll","value":"Block:SetBlockAll(x,y,z,blockid,data)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.DestroyBlock","caption":"Block:DestroyBlock","value":"Block:DestroyBlock(x,y,z,dropitem)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.PlaceBlock","caption":"Block:PlaceBlock","value":"Block:PlaceBlock(blockid,x,y,z,face,color)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.ReplaceBlock","caption":"Block:ReplaceBlock","value":"Block:ReplaceBlock(blockid,x,y,z,face,color)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.SetBlockData","caption":"Block:SetBlockData","value":"Block:SetBlockData(x,y,z,blockid)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.GetBlockData","caption":"Block:GetBlockData","value":"Block:GetBlockData(x,y,z)\n-- 返回：data:number具体的值\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.GetBlockDir","caption":"Block:GetBlockDir","value":"Block:GetBlockDir(x,y,z)\n-- 返回：ret:number返回类型 FaceDir\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.PlayAnim","caption":"Block:PlayAnim","value":"Block:PlayAnim(pos,y=y,z=z},animid,speed,loop)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.SetBlockSettingAttState","caption":"Block:SetBlockSettingAttState","value":"Block:SetBlockSettingAttState(blockid,attrtype,switch)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.GetBlockSettingAttState","caption":"Block:GetBlockSettingAttState","value":"Block:GetBlockSettingAttState(blockid,attrtype)\n-- 返回：ret:boolean是否开启\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.GetBlockSwitchStatus","caption":"Block:GetBlockSwitchStatus","value":"Block:GetBlockSwitchStatus(pos)\n-- 返回：ret:boolean是否开启\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.GetBlockPowerStatus","caption":"Block:GetBlockPowerStatus","value":"Block:GetBlockPowerStatus(x,y,z)\n-- 返回：ret:boolean是否开启\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.RandomBlockID","caption":"Block:RandomBlockID","value":"Block:RandomBlockID()\n-- 返回：ret:number随机的方块类型\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.GetBlockDefName","caption":"Block:GetBlockDefName","value":"Block:GetBlockDefName(blockid)\n-- 返回：name:string方块名称\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.GetBlockDefDesc","caption":"Block:GetBlockDefDesc","value":"Block:GetBlockDefDesc(blockid)\n-- 返回：ret:string方块描述\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.ReplaceBluePrint","caption":"Block:ReplaceBluePrint","value":"Block:ReplaceBluePrint(x,y,z,blueprint,angle,mirror,placeMode)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.PlayCrackEffect","caption":"Block:PlayCrackEffect","value":"Block:PlayCrackEffect(x,y,z,process)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.PlayDestroyEffect","caption":"Block:PlayDestroyEffect","value":"Block:PlayDestroyEffect(x,y,z)\n-- 返回：ret:boolean操作是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.GetBlockDropItemType","caption":"Block:GetBlockDropItemType","value":"Block:GetBlockDropItemType(blockid,itype)\n-- 返回：ret:table返回掉落道具信息{itemid,itemnum,odds} 道具,数量,概率\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.GetBlockDropExp","caption":"Block:GetBlockDropExp","value":"Block:GetBlockDropExp(blockid)\n-- 返回：exp:number经验值\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.SetBlockColor","caption":"Block:SetBlockColor","value":"Block:SetBlockColor(x,y,z,color)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.SetBlockSwichState","caption":"Block:SetBlockSwichState","value":"Block:SetBlockSwichState(x,y,z,isactive)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.SetBlockDir","caption":"Block:SetBlockDir","value":"Block:SetBlockDir(x,y,z,dir)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.GetFacade","caption":"Block:GetFacade","value":"Block:GetFacade(blockid,string)\n-- 返回：ret:string方块类型外观\n"},
        {"meta":"Block","type":"local","score":9,"name":"Block.SetBlockTextureColor","caption":"Block:SetBlockTextureColor","value":"Block:SetBlockTextureColor(blockid,color,alpha,slotindex)\n-- 返回：ret:bool是否成功（仅支持草块、土块、树叶、花草等方块，其它方块暂不支持；设置后不会存档；玩法转编辑后需要重进地图才可还原）\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetItemName","caption":"Item:GetItemName","value":"Item:GetItemName(itemid)\n-- 返回：name:string道具名称\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.RandomItemID","caption":"Item:RandomItemID","value":"Item:RandomItemID()\n-- 返回：ret:number道具ID\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.RandomProjectileID","caption":"Item:RandomProjectileID","value":"Item:RandomProjectileID()\n-- 返回：ret:number道具ID\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetAttr","caption":"Item:GetAttr","value":"Item:GetAttr(itemid,attr)\n-- 返回：ret:number属性值\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetItemDesc","caption":"Item:GetItemDesc","value":"Item:GetItemDesc(itemid)\n-- 返回：ret:string道具描述\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetCustomGunAttr","caption":"Item:GetCustomGunAttr","value":"Item:GetCustomGunAttr(itemid,attrname)\n-- 返回：val:any返回的值\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetCraftIDNum","caption":"Item:GetCraftIDNum","value":"Item:GetCraftIDNum(itemid)\n-- 返回：num:number配方数量\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetCraftMaterialAndNum","caption":"Item:GetCraftMaterialAndNum","value":"Item:GetCraftMaterialAndNum(itemid)\n-- 返回：tab:table原料信息 { {iemid,itemnum}}\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetFacade","caption":"Item:GetFacade","value":"Item:GetFacade(itemid,string)\n-- 返回：ret:string道具类型外观\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.CreateItemInstInWorld","caption":"Item:CreateItemInstInWorld","value":"Item:CreateItemInstInWorld(itemid,pos,y=0,z=0})\n-- 返回：objid:number,nil对象objid\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.CreateGunInWorld","caption":"Item:CreateGunInWorld","value":"Item:CreateGunInWorld(itemid,pos)\n-- 返回：objid:number,nil对象objid\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetEquipItemGridID","caption":"Item:GetEquipItemGridID","value":"Item:GetEquipItemGridID(itemid)\n-- 返回：ret:number装备栏位置 BackpackBeginIndex.Equip + (EquipSlotType)\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.ModifyGunAttribute","caption":"Item:ModifyGunAttribute","value":"Item:ModifyGunAttribute(instId,key,value)\n-- 返回：ret:bool成功\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetGunAttribute","caption":"Item:GetGunAttribute","value":"Item:GetGunAttribute(instId,key)\n-- 返回：value:number,string,bool,nil值\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetGunPrefabAttribute","caption":"Item:GetGunPrefabAttribute","value":"Item:GetGunPrefabAttribute(instId,key)\n-- 返回：value:number,string,bool,nil值\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetItemIdByInstanceId","caption":"Item:GetItemIdByInstanceId","value":"Item:GetItemIdByInstanceId(instId)\n-- 返回：itemId:number,string道具id\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.AddSubModelPart","caption":"Item:AddSubModelPart","value":"Item:AddSubModelPart(instId,partName,boneName,modelStr,offset,rot,scale)\n-- 返回：partName:string,nil部件名字\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.DeleteSubModelPart","caption":"Item:DeleteSubModelPart","value":"Item:DeleteSubModelPart(instId,partName)\n-- 返回：ret:bool成功\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.ReplaceSubModelPart","caption":"Item:ReplaceSubModelPart","value":"Item:ReplaceSubModelPart(instId,partName,boneName,modelStr,offset,rot,scale)\n-- 返回：ret:bool成功\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.SetStringCustomData","caption":"Item:SetStringCustomData","value":"Item:SetStringCustomData(instId,key,value)\n-- 返回：ret:bool成功\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.SetBoolCustomData","caption":"Item:SetBoolCustomData","value":"Item:SetBoolCustomData(instId,key,value)\n-- 返回：ret:bool成功\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.SetNumberCustomData","caption":"Item:SetNumberCustomData","value":"Item:SetNumberCustomData(instId,key,value)\n-- 返回：ret:bool成功\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.SetObjCustomData","caption":"Item:SetObjCustomData","value":"Item:SetObjCustomData(instId,key,value)\n-- 返回：ret:bool成功\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.SetArrayCustomData","caption":"Item:SetArrayCustomData","value":"Item:SetArrayCustomData(instId,key,value)\n-- 返回：ret:bool成功\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetStringCustomData","caption":"Item:GetStringCustomData","value":"Item:GetStringCustomData(instId,key)\n-- 返回：value:string,nil值\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetBoolCustomData","caption":"Item:GetBoolCustomData","value":"Item:GetBoolCustomData(instId,key)\n-- 返回：value:bool,nil值\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetNumberCustomData","caption":"Item:GetNumberCustomData","value":"Item:GetNumberCustomData(instId,key)\n-- 返回：value:number,nil值\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetObjCustomData","caption":"Item:GetObjCustomData","value":"Item:GetObjCustomData(instId,key)\n-- 返回：value:table,nil值\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetArrayCustomData","caption":"Item:GetArrayCustomData","value":"Item:GetArrayCustomData(instId,key)\n-- 返回：value:table,nil值\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetItemInstFacade","caption":"Item:GetItemInstFacade","value":"Item:GetItemInstFacade(instId)\n-- 返回：ret:string道具实例外观\n"},
        {"meta":"Item","type":"local","score":9,"name":"Item.GetGridAttr","caption":"Item:GetGridAttr","value":"Item:GetGridAttr(objid,attr)\n-- 返回：ret:number属性值\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.SetGridItem","caption":"Backpack:SetGridItem","value":"Backpack:SetGridItem(playerid,gridid,itemid,num,durability)\n-- 返回：ret:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.RemoveGridItem","caption":"Backpack:RemoveGridItem","value":"Backpack:RemoveGridItem(playerid,gridid,num)\n-- 返回：ret:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.RemoveGridItemByItemID","caption":"Backpack:RemoveGridItemByItemID","value":"Backpack:RemoveGridItemByItemID(playerid,itemid,num)\n-- 返回：ret:number移除数量（ret and ret> 0 成功）\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.ClearPack","caption":"Backpack:ClearPack","value":"Backpack:ClearPack(playerid,bartype)\n-- 返回：ret:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.ClearAllPack","caption":"Backpack:ClearAllPack","value":"Backpack:ClearAllPack(playerid)\n-- 返回：ret:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.MoveGridItem","caption":"Backpack:MoveGridItem","value":"Backpack:MoveGridItem(playerid,gridsrc,griddst,num)\n-- 返回：ret:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.SwapGridItem","caption":"Backpack:SwapGridItem","value":"Backpack:SwapGridItem(playerid,gridsrc,griddst)\n-- 返回：ret:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.EnoughSpaceForItem","caption":"Backpack:EnoughSpaceForItem","value":"Backpack:EnoughSpaceForItem(playerid,itemid,num)\n-- 返回：ret:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.CalcSpaceNumForItem","caption":"Backpack:CalcSpaceNumForItem","value":"Backpack:CalcSpaceNumForItem(playerid,itemid)\n-- 返回：leftNum:number可以存放的数量\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.HasItemByBackpackBar","caption":"Backpack:HasItemByBackpackBar","value":"Backpack:HasItemByBackpackBar(playerid,bartype,itemid)\n-- 返回：ret:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.GetItemNumByBackpackBar","caption":"Backpack:GetItemNumByBackpackBar","value":"Backpack:GetItemNumByBackpackBar(playerid,bartype,itemid)\n-- 返回：num:number道具数量,arr:table格子ID数组\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.GetItemNum","caption":"Backpack:GetItemNum","value":"Backpack:GetItemNum(playerid,itemid,isAddEquip)\n-- 返回：num:number道具数量,arr:table格子ID数组\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.GetGridItemID","caption":"Backpack:GetGridItemID","value":"Backpack:GetGridItemID(playerid,gridid)\n-- 返回：itemid:number,string道具类型,num:number道具数量 (无道具 数量是0 itemid是0)\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.GetGridItemName","caption":"Backpack:GetGridItemName","value":"Backpack:GetGridItemName(playerid,gridid)\n-- 返回：name:string道具名称\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.AddItem","caption":"Backpack:AddItem","value":"Backpack:AddItem(playerid,itemid,num,prioritytype)\n-- 返回：num:number成功添加的数量\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.DiscardItem","caption":"Backpack:DiscardItem","value":"Backpack:DiscardItem(playerid,gridid,num)\n-- 返回：code:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.DiscardItemByID","caption":"Backpack:DiscardItemByID","value":"Backpack:DiscardItemByID(playerid,gridid,itemnum)\n-- 返回：code:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.ActEquipUpByResID","caption":"Backpack:ActEquipUpByResID","value":"Backpack:ActEquipUpByResID(playerid,itemid,frompos,则必须和itemid一致）)\n-- 返回：code:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.ActEquipOffByEquipID","caption":"Backpack:ActEquipOffByEquipID","value":"Backpack:ActEquipOffByEquipID(playerid,grid,grid2,则必须是空格子))\n-- 返回：code:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.ActDestructEquip","caption":"Backpack:ActDestructEquip","value":"Backpack:ActDestructEquip(playerid,grid)\n-- 返回：code:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.CreateItem","caption":"Backpack:CreateItem","value":"Backpack:CreateItem(playerid,itemid,itemid,ipos)\n-- 返回：code:bool成功（true）\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.PlayShortCutIxEffect","caption":"Backpack:PlayShortCutIxEffect","value":"Backpack:PlayShortCutIxEffect(playerid,effectid,scale)\n-- 返回：code:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.PlayShortCutIxParticle","caption":"Backpack:PlayShortCutIxParticle","value":"Backpack:PlayShortCutIxParticle(playerid,effectids,offset,rot)\n-- 返回：code:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.StopShortCutIxEffect","caption":"Backpack:StopShortCutIxEffect","value":"Backpack:StopShortCutIxEffect(playerid,effectid)\n-- 返回：code:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.PlayShortCutItemParticle","caption":"Backpack:PlayShortCutItemParticle","value":"Backpack:PlayShortCutItemParticle(playerid,itemid,effectid,offset,rot,scale)\n-- 返回：code:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.StopShortCutItemEffect","caption":"Backpack:StopShortCutItemEffect","value":"Backpack:StopShortCutItemEffect(playerid,itemid,effectid)\n-- 返回：code:boolean是否成功\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.GetGridInfos","caption":"Backpack:GetGridInfos","value":"Backpack:GetGridInfos(playerid,begingridId,endgridId)\n-- 返回：\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.LoadGridInfos","caption":"Backpack:LoadGridInfos","value":"Backpack:LoadGridInfos(playerid,gridinfo)\n-- 返回：\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.DecodeGridInfo","caption":"Backpack:DecodeGridInfo","value":"Backpack:DecodeGridInfo()\n-- 返回：\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.EncodeTableGridInfo","caption":"Backpack:EncodeTableGridInfo","value":"Backpack:EncodeTableGridInfo()\n-- 返回：\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.SetGridsLock","caption":"Backpack:SetGridsLock","value":"Backpack:SetGridsLock(playerid,begingridId,endgridId,lock)\n-- 返回：\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.ClearGrids","caption":"Backpack:ClearGrids","value":"Backpack:ClearGrids(playerid,begingridId,endgridId)\n-- 返回：\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.SetBackPackNum","caption":"Backpack:SetBackPackNum","value":"Backpack:SetBackPackNum(playerid,num)\n-- 返回：\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.GetAllBackPackInstanceIds","caption":"Backpack:GetAllBackPackInstanceIds","value":"Backpack:GetAllBackPackInstanceIds(playerid,bartype)\n-- 返回：instanceIds:table实例ID表\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.CreateItemInstInBackpack","caption":"Backpack:CreateItemInstInBackpack","value":"Backpack:CreateItemInstInBackpack(playerid,itemid,gridIndex)\n-- 返回：instId:string,nil道具实例ID\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.CreateGunInBackpack","caption":"Backpack:CreateGunInBackpack","value":"Backpack:CreateGunInBackpack(playerid,itemid,gridIndex)\n-- 返回：instId:string,nil道具实例ID\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.GetInstIdByGridIndex","caption":"Backpack:GetInstIdByGridIndex","value":"Backpack:GetInstIdByGridIndex(playerid,gridIndex)\n-- 返回：instId:string,nil道具实例id\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.GetGunInstIdInBackpack","caption":"Backpack:GetGunInstIdInBackpack","value":"Backpack:GetGunInstIdInBackpack(playerid)\n-- 返回：tab:table,nil实例id数组\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.IsLock","caption":"Backpack:IsLock","value":"Backpack:IsLock(playerid,gridIndex)\n-- 返回：isLock:boolean是否锁定 （参数错误返回true）\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.GetGridAttr","caption":"Backpack:GetGridAttr","value":"Backpack:GetGridAttr(playerid,gridid,attr)\n-- 返回：value:number属性值\n"},
        {"meta":"Backpack","type":"local","score":9,"name":"Backpack.SetGridAttr","caption":"Backpack:SetGridAttr","value":"Backpack:SetGridAttr(playerid,gridid,attr,value)\n-- 返回：code:boolean是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetText","caption":"CustomUI:SetText","value":"CustomUI:SetText(playerid,uiid,elementid,text,animid,time,mode)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetTexture","caption":"CustomUI:SetTexture","value":"CustomUI:SetTexture(playerid,uiid,elementid,url)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetSize","caption":"CustomUI:SetSize","value":"CustomUI:SetSize(playerid,uiid,elementid,width,height)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetFontSize","caption":"CustomUI:SetFontSize","value":"CustomUI:SetFontSize(playerid,uiid,elementid,size)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetColor","caption":"CustomUI:SetColor","value":"CustomUI:SetColor(playerid,uiid,elementid,color)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.ShowElement","caption":"CustomUI:ShowElement","value":"CustomUI:ShowElement(playerid,uiid,elementid,effectid,time)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.HideElement","caption":"CustomUI:HideElement","value":"CustomUI:HideElement(playerid,uiid,elementid,effectid,time)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.RotateElement","caption":"CustomUI:RotateElement","value":"CustomUI:RotateElement(playerid,uiid,elementid,rotate)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetAlpha","caption":"CustomUI:SetAlpha","value":"CustomUI:SetAlpha(playerid,uiid,elementid,alpha)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetState","caption":"CustomUI:SetState","value":"CustomUI:SetState(playerid,uiid,elementid,pageIndex,easeType,time)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetPosition","caption":"CustomUI:SetPosition","value":"CustomUI:SetPosition(playerid,uiid,elementid,x,y)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetScale","caption":"CustomUI:SetScale","value":"CustomUI:SetScale(playerid,uiid,elementid,x,y)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.GetItemIcon","caption":"CustomUI:GetItemIcon","value":"CustomUI:GetItemIcon(itemid)\n-- 返回：icon:string道具图标\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.GetMonsterObjIcon","caption":"CustomUI:GetMonsterObjIcon","value":"CustomUI:GetMonsterObjIcon(objid)\n-- 返回：icon:string生物图标\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.GetMonsterIcon","caption":"CustomUI:GetMonsterIcon","value":"CustomUI:GetMonsterIcon(actor)\n-- 返回：icon:string道具图标\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.GetStatusIcon","caption":"CustomUI:GetStatusIcon","value":"CustomUI:GetStatusIcon(buffid)\n-- 返回：icon:string状态图标\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.GetBlockIcon","caption":"CustomUI:GetBlockIcon","value":"CustomUI:GetBlockIcon(blockid)\n-- 返回：icon:string方块图标\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.GetRoleIcon","caption":"CustomUI:GetRoleIcon","value":"CustomUI:GetRoleIcon(playerid)\n-- 返回：icon:string角色图标\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.GetRoleHeadIcon","caption":"CustomUI:GetRoleHeadIcon","value":"CustomUI:GetRoleHeadIcon(playerid)\n-- 返回：icon:string角色图标\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.GetShortcutIcon","caption":"CustomUI:GetShortcutIcon","value":"CustomUI:GetShortcutIcon(playerid,ix)\n-- 返回：icon:string道具图标\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SmoothMoveTo","caption":"CustomUI:SmoothMoveTo","value":"CustomUI:SmoothMoveTo(playerid,uiid,elementid,time,x,y)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SmoothMoveBy","caption":"CustomUI:SmoothMoveBy","value":"CustomUI:SmoothMoveBy(playerid,uiid,elementid,time,x,y)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SmoothScaleTo","caption":"CustomUI:SmoothScaleTo","value":"CustomUI:SmoothScaleTo(playerid,uiid,elementid,time,w,h)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SmoothScaleBy","caption":"CustomUI:SmoothScaleBy","value":"CustomUI:SmoothScaleBy(playerid,uiid,elementid,time,w,h)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SmoothScaleByEx","caption":"CustomUI:SmoothScaleByEx","value":"CustomUI:SmoothScaleByEx(playerid,uiid,elementid,time,x,y,delayTime,easeType)\n-- 返回：ret:boolean操作是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SmoothRotateTo","caption":"CustomUI:SmoothRotateTo","value":"CustomUI:SmoothRotateTo(playerid,uiid,elementid,time,angle)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SmoothRotateBy","caption":"CustomUI:SmoothRotateBy","value":"CustomUI:SmoothRotateBy(playerid,uiid,elementid,time,angle)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.PlayElementAnim","caption":"CustomUI:PlayElementAnim","value":"CustomUI:PlayElementAnim(playerid,uiid,elementid,animid,time,mode,easetype,delaytime,endvalue)\n-- 返回：ret:boolean操作是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.StopAnim","caption":"CustomUI:StopAnim","value":"CustomUI:StopAnim(playerid,uiid,elementid,itype)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetLoaderModel","caption":"CustomUI:SetLoaderModel","value":"CustomUI:SetLoaderModel(playerid,uiid,elementid,modleName)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetLoaderModelScale","caption":"CustomUI:SetLoaderModelScale","value":"CustomUI:SetLoaderModelScale(playerid,uiid,elementid,modlescale)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetLoaderModelDir","caption":"CustomUI:SetLoaderModelDir","value":"CustomUI:SetLoaderModelDir(playerid,uiid,elementid,yaw)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetLoaderModelPosition","caption":"CustomUI:SetLoaderModelPosition","value":"CustomUI:SetLoaderModelPosition(playerid,uiid,elementid,x,y,z)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetLoaderModelAct","caption":"CustomUI:SetLoaderModelAct","value":"CustomUI:SetLoaderModelAct(playerid,uiid,elementid,animid,playmode)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.TurnSliderToPos","caption":"CustomUI:TurnSliderToPos","value":"CustomUI:TurnSliderToPos(playerid,uiid,elementid,x,y)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetSliderDir","caption":"CustomUI:SetSliderDir","value":"CustomUI:SetSliderDir(playerid,uiid,elementid,dir)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetSliderBarImg","caption":"CustomUI:SetSliderBarImg","value":"CustomUI:SetSliderBarImg(playerid,uiid,elementid,url)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetRelationPosition","caption":"CustomUI:SetRelationPosition","value":"CustomUI:SetRelationPosition(playerid,uiid,elementid,v,xOffset,xUnits,h,yOffset,yUnits)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetRelationSize","caption":"CustomUI:SetRelationSize","value":"CustomUI:SetRelationSize(playerid,uiid,elementid,width,widthUnits,height,heightUnits)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.CreateElement","caption":"CustomUI:CreateElement","value":"CustomUI:CreateElement(playerid,uiid,elementType)\n-- 返回：elementid:string新建出来元件ID,创建元件的子节点用 A.B 操作\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.CloneElement","caption":"CustomUI:CloneElement","value":"CustomUI:CloneElement(playerid,uiid,elementid)\n-- 返回：elementid:string克隆出来的元件ID\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.ChangeParent","caption":"CustomUI:ChangeParent","value":"CustomUI:ChangeParent(playerid,uiid,elementid,parentElementid)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetProgressBarValue","caption":"CustomUI:SetProgressBarValue","value":"CustomUI:SetProgressBarValue(playerid,uiid,elementid,itype,value)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.GetProgressBarValue","caption":"CustomUI:GetProgressBarValue","value":"CustomUI:GetProgressBarValue(playerid,uiid,elementid,itype)\n-- 返回：min:number返回的值,max:number返回的值,value:number返回的值\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetProgressBarResId","caption":"CustomUI:SetProgressBarResId","value":"CustomUI:SetProgressBarResId(playerid,uiid,elementid,itype,url)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SmoothChangeProgress","caption":"CustomUI:SmoothChangeProgress","value":"CustomUI:SmoothChangeProgress(playerid,uiid,elementid,bval,eval,time)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetSpineAnimID","caption":"CustomUI:SetSpineAnimID","value":"CustomUI:SetSpineAnimID(playerid,uiid,elementid,animid,animindex,playmode)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SmoothIncreaseProgress","caption":"CustomUI:SmoothIncreaseProgress","value":"CustomUI:SmoothIncreaseProgress(playerid,uiid,elementid,time,ptype,3 变化至）,value)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.SetFloatDamageTxt","caption":"CustomUI:SetFloatDamageTxt","value":"CustomUI:SetFloatDamageTxt(playerid,elementid,objid,text,color,offsetx,offsety,movex,movey,showtime,movex2,movey2,showtime2)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"CustomUI","type":"local","score":9,"name":"CustomUI.GetScreenSize","caption":"CustomUI:GetScreenSize","value":"CustomUI:GetScreenSize(playerid)\n-- 返回：size:table屏幕大小{w,h}\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.MakeGraphicsText","caption":"Graphics:MakeGraphicsText","value":"Graphics:MakeGraphicsText(title,font,apha,itype,autoWrap)\n-- 返回：info:table文本信息内容\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.MakeflotageText","caption":"Graphics:MakeflotageText","value":"Graphics:MakeflotageText(title,font,apha,itype)\n-- 返回：info:table漂浮文字信息内容\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.MakeGraphicsProgress","caption":"Graphics:MakeGraphicsProgress","value":"Graphics:MakeGraphicsProgress(v1,v2,color,itype)\n-- 返回：info:table进度条信息内容\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.MakeGraphicsArrowToPos","caption":"Graphics:MakeGraphicsArrowToPos","value":"Graphics:MakeGraphicsArrowToPos(x,y,z,size,color,itype)\n-- 返回：info:table箭头信息内容\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.MakeGraphicsLineToPos","caption":"Graphics:MakeGraphicsLineToPos","value":"Graphics:MakeGraphicsLineToPos(x,y,z,size,color,itype)\n-- 返回：info:table线信息内容\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.MakeGraphicsSurfaceToPos","caption":"Graphics:MakeGraphicsSurfaceToPos","value":"Graphics:MakeGraphicsSurfaceToPos(x,y,z,size,color,itype)\n-- 返回：info:table面信息内容\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.MakeGraphicsArrowToActor","caption":"Graphics:MakeGraphicsArrowToActor","value":"Graphics:MakeGraphicsArrowToActor(objid,size,color,itype)\n-- 返回：info:table箭头信息内容\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.MakeGraphicsLineToActor","caption":"Graphics:MakeGraphicsLineToActor","value":"Graphics:MakeGraphicsLineToActor(objid,size,color,itype)\n-- 返回：info:table线信息内容\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.MakeGraphicsSurfaceToActor","caption":"Graphics:MakeGraphicsSurfaceToActor","value":"Graphics:MakeGraphicsSurfaceToActor(objid,size,color,itype)\n-- 返回：info:table面信息内容\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.MakeGraphicsImage","caption":"Graphics:MakeGraphicsImage","value":"Graphics:MakeGraphicsImage(imgid,scale,apha,itype)\n-- 返回：info:table图片信息内容\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsTxtByPos","caption":"Graphics:CreateGraphicsTxtByPos","value":"Graphics:CreateGraphicsTxtByPos(x,y,z,graphicInfo,x2,y2)\n-- 返回：ret:number图文对象id\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsTxtByActor","caption":"Graphics:CreateGraphicsTxtByActor","value":"Graphics:CreateGraphicsTxtByActor(objid,info,dir,offest,x2,y2)\n-- 返回：ret:number图文实例ID\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateflotageTextByPos","caption":"Graphics:CreateflotageTextByPos","value":"Graphics:CreateflotageTextByPos(x,y,z,info,x2,y2)\n-- 返回：ret:number图文实例ID\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateflotageTextByActor","caption":"Graphics:CreateflotageTextByActor","value":"Graphics:CreateflotageTextByActor(objid,info,dir,offest,x2,y2)\n-- 返回：ret:number实例ID\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsProgressByPos","caption":"Graphics:CreateGraphicsProgressByPos","value":"Graphics:CreateGraphicsProgressByPos(x,y,z,info,x2,y2)\n-- 返回：ret:number实例ID\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsProgressByActor","caption":"Graphics:CreateGraphicsProgressByActor","value":"Graphics:CreateGraphicsProgressByActor(objid,info,dir,offest,x2,y2)\n-- 返回：ret:number实例ID\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.RemoveGraphicsByPos","caption":"Graphics:RemoveGraphicsByPos","value":"Graphics:RemoveGraphicsByPos(x,y,z,itype,graphType)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.RemoveGraphicsByObjID","caption":"Graphics:RemoveGraphicsByObjID","value":"Graphics:RemoveGraphicsByObjID(objid,itype,graphType)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.UpdateGraphicsTextById","caption":"Graphics:UpdateGraphicsTextById","value":"Graphics:UpdateGraphicsTextById(graphid,title,fontsize,apha)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsArrowByActorToPos","caption":"Graphics:CreateGraphicsArrowByActorToPos","value":"Graphics:CreateGraphicsArrowByActorToPos(objid,info,dir,offset)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsArrowByActorToActor","caption":"Graphics:CreateGraphicsArrowByActorToActor","value":"Graphics:CreateGraphicsArrowByActorToActor(objid,info,dir,offset)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsArrowByPosToPos","caption":"Graphics:CreateGraphicsArrowByPosToPos","value":"Graphics:CreateGraphicsArrowByPosToPos(pos,info)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsArrowByPosToActor","caption":"Graphics:CreateGraphicsArrowByPosToActor","value":"Graphics:CreateGraphicsArrowByPosToActor(pos,info)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsLineByActorToPos","caption":"Graphics:CreateGraphicsLineByActorToPos","value":"Graphics:CreateGraphicsLineByActorToPos(objid,info,dir,offset)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsLineByActorToActor","caption":"Graphics:CreateGraphicsLineByActorToActor","value":"Graphics:CreateGraphicsLineByActorToActor(objid,info,dir,offset)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsLineByPosToPos","caption":"Graphics:CreateGraphicsLineByPosToPos","value":"Graphics:CreateGraphicsLineByPosToPos(pos,info)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsLineByPosToActor","caption":"Graphics:CreateGraphicsLineByPosToActor","value":"Graphics:CreateGraphicsLineByPosToActor(pos,info)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsSurfaceByActorToPos","caption":"Graphics:CreateGraphicsSurfaceByActorToPos","value":"Graphics:CreateGraphicsSurfaceByActorToPos(objid,info,dir,offset)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsSurfaceByActorToActor","caption":"Graphics:CreateGraphicsSurfaceByActorToActor","value":"Graphics:CreateGraphicsSurfaceByActorToActor(objid,info,dir,offest)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsSurfaceByPosToPos","caption":"Graphics:CreateGraphicsSurfaceByPosToPos","value":"Graphics:CreateGraphicsSurfaceByPosToPos(pos,info)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsSurfaceByPosToActor","caption":"Graphics:CreateGraphicsSurfaceByPosToActor","value":"Graphics:CreateGraphicsSurfaceByPosToActor()\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.ReplaceAllGraphics","caption":"Graphics:ReplaceAllGraphics","value":"Graphics:ReplaceAllGraphics(srcObjid,desObjid)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsImageByPos","caption":"Graphics:CreateGraphicsImageByPos","value":"Graphics:CreateGraphicsImageByPos(x,y,z,info,x2,y2)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.CreateGraphicsImageByActor","caption":"Graphics:CreateGraphicsImageByActor","value":"Graphics:CreateGraphicsImageByActor(objid,info,dir,offest,x2,y2)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Graphics","type":"local","score":9,"name":"Graphics.GetInnerGraphicsOffset","caption":"Graphics:GetInnerGraphicsOffset","value":"Graphics:GetInnerGraphicsOffset(objid,itype)\n-- 返回：ret:number高度值（未展示 0）\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.CreateAreaPrefab","caption":"Area:CreateAreaPrefab","value":"Area:CreateAreaPrefab(pos,size)\n-- 返回：ret:obj区域对象id,id:number区域ID\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetAreaUuidByObjId","caption":"Area:GetAreaUuidByObjId","value":"Area:GetAreaUuidByObjId(objId)\n-- 返回：ret:number区域uuid\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.CreateAreaRectByRange","caption":"Area:CreateAreaRectByRange","value":"Area:CreateAreaRectByRange(posBeg,posEnd,btmp)\n-- 返回：ret:number区域ID\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.DestroyArea","caption":"Area:DestroyArea","value":"Area:DestroyArea(areaid)\n-- 返回：ret:boolean成功(true)\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetAreaCenter","caption":"Area:GetAreaCenter","value":"Area:GetAreaCenter(areaid)\n-- 返回：ret:table区域中心位置\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetAreaRectLength","caption":"Area:GetAreaRectLength","value":"Area:GetAreaRectLength(areaid)\n-- 返回：ret:number x轴向长度,leny:number y轴向长度,lenz:number z轴向长度\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetAreaRectRange","caption":"Area:GetAreaRectRange","value":"Area:GetAreaRectRange(areaid)\n-- 返回：ret:table区域起始坐标,posEnd:table区域结束坐标\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetRandomPos","caption":"Area:GetRandomPos","value":"Area:GetRandomPos(areaid)\n-- 返回：ret:table随机坐标\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.ObjInArea","caption":"Area:ObjInArea","value":"Area:ObjInArea(areaid,objid)\n-- 返回：ret:bool是否在区域内\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.BlockInArea","caption":"Area:BlockInArea","value":"Area:BlockInArea(areaid,blockid)\n-- 返回：ret:bool是否在区域内\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.PosInArea","caption":"Area:PosInArea","value":"Area:PosInArea(areaid,pos)\n-- 返回：ret:bool是否在区域内\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetAreaPlayers","caption":"Area:GetAreaPlayers","value":"Area:GetAreaPlayers(areaid)\n-- 返回：playerlist:table玩家objid组\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetAreaCreatures","caption":"Area:GetAreaCreatures","value":"Area:GetAreaCreatures(areaid)\n-- 返回：playerlist:table生物objid组\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.ClearAllBlock","caption":"Area:ClearAllBlock","value":"Area:ClearAllBlock(areaid,blockid,num,btriggerevent)\n-- 返回：ret:boolean成功(true)\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.CloneAreaBlock","caption":"Area:CloneAreaBlock","value":"Area:CloneAreaBlock(areaid,pos)\n-- 返回：ret:boolean成功(true)\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.ReplaceAreaBlock","caption":"Area:ReplaceAreaBlock","value":"Area:ReplaceAreaBlock(areaid,srcblockid,destblockid,face,color)\n-- 返回：ret:boolean成功(true)\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetAllObjsInAreaRange","caption":"Area:GetAllObjsInAreaRange","value":"Area:GetAllObjsInAreaRange(posbeg,posend,objtype)\n-- 返回：objs:table对象objid组\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetAllPlayersInAreaRange","caption":"Area:GetAllPlayersInAreaRange","value":"Area:GetAllPlayersInAreaRange(posbeg,posend)\n-- 返回：objs:table对象objid组\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetAllCreaturesInAreaRange","caption":"Area:GetAllCreaturesInAreaRange","value":"Area:GetAllCreaturesInAreaRange(posbeg,posend)\n-- 返回：objs:table对象objid组\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.FillBlockAreaRange","caption":"Area:FillBlockAreaRange","value":"Area:FillBlockAreaRange(posbeg,posend,blockid,face,color,switch,filltype)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.ClearAllBlockAreaRange","caption":"Area:ClearAllBlockAreaRange","value":"Area:ClearAllBlockAreaRange(posbeg,posend,blockid,btriggerevent)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.DestroyAllBlock","caption":"Area:DestroyAllBlock","value":"Area:DestroyAllBlock(areaid,blockid,n,candrop,btriggerevent)\n-- 返回：ret:boolean操作成功(true)\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.CloneAreaRange","caption":"Area:CloneAreaRange","value":"Area:CloneAreaRange(posbeg,posend,deststartpos)\n-- 返回：ret:boolean操作是否成功(true/false)\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.ReplaceAreaRangeBlock","caption":"Area:ReplaceAreaRangeBlock","value":"Area:ReplaceAreaRangeBlock(posbeg,posend,srcblockid,destblockid,face,inair)\n-- 返回：ret:boolean操作是否成功(true/false)\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetRandomAirPos","caption":"Area:GetRandomAirPos","value":"Area:GetRandomAirPos(posbeg,posend)\n-- 返回：ret:table随机空气位置(x,y,z)\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetAreaBlockTypes","caption":"Area:GetAreaBlockTypes","value":"Area:GetAreaBlockTypes(areaid)\n-- 返回：ret:table类型组\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetBlockNum","caption":"Area:GetBlockNum","value":"Area:GetBlockNum(areaid,blockid)\n-- 返回：ret:number方块数量\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.CheckRangeCanPlace","caption":"Area:CheckRangeCanPlace","value":"Area:CheckRangeCanPlace(posbeg,posend,blockid)\n-- 返回：ret:boolean是否可以放置方块(true/false)\n"},
        {"meta":"Area","type":"local","score":9,"name":"Area.GetRelativeActors","caption":"Area:GetRelativeActors","value":"Area:GetRelativeActors(posbeg,posend,uin,relativing,actortype)\n-- 返回：num:number数量,arr:tableID数组\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.CheckStorage","caption":"WorldContainer:CheckStorage","value":"WorldContainer:CheckStorage(x,y,z)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.ClearStorageBox","caption":"WorldContainer:ClearStorageBox","value":"WorldContainer:ClearStorageBox(x,y,z)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.CheckStorageEmptyGrid","caption":"WorldContainer:CheckStorageEmptyGrid","value":"WorldContainer:CheckStorageEmptyGrid(x,y,z,itemid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.SetStorageItem","caption":"WorldContainer:SetStorageItem","value":"WorldContainer:SetStorageItem(x,y,z,offset,itemid,num)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.GetStorageItem","caption":"WorldContainer:GetStorageItem","value":"WorldContainer:GetStorageItem(x,y,z,offset,(从1开始))\n-- 返回：itemid:number,string道具类型ID,num:number道具数量\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.AddStorageItem","caption":"WorldContainer:AddStorageItem","value":"WorldContainer:AddStorageItem(x,y,z,itemid,num)\n-- 返回：relNum:number成功添加数量\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.RemoveStorageItemByID","caption":"WorldContainer:RemoveStorageItemByID","value":"WorldContainer:RemoveStorageItemByID(x,y,z,itemid,num)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.RemoveStorageItemByIndex","caption":"WorldContainer:RemoveStorageItemByIndex","value":"WorldContainer:RemoveStorageItemByIndex(x,y,z,offset,num)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.AddItemToContainer","caption":"WorldContainer:AddItemToContainer","value":"WorldContainer:AddItemToContainer(x,y,z,itemid,num)\n-- 返回：relNum:number成功添加数量\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.RemoveContainerItemByID","caption":"WorldContainer:RemoveContainerItemByID","value":"WorldContainer:RemoveContainerItemByID(x,y,z,itemid,num)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.ClearContainer","caption":"WorldContainer:ClearContainer","value":"WorldContainer:ClearContainer(x,y,z)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.AddWorldStorageItems","caption":"WorldContainer:AddWorldStorageItems","value":"WorldContainer:AddWorldStorageItems(x,y,z,itemids,itemNum))\n-- 返回：relNum:number成功添加数量\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.GetStorageItemInstanceId","caption":"WorldContainer:GetStorageItemInstanceId","value":"WorldContainer:GetStorageItemInstanceId(x,y,z,offset,(从1开始))\n-- 返回：instanceId:string实例ID\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.GetAllStorageItemInstanceIds","caption":"WorldContainer:GetAllStorageItemInstanceIds","value":"WorldContainer:GetAllStorageItemInstanceIds(x,y,z)\n-- 返回：instanceIds:table实例ID表\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.SwapContainerItem","caption":"WorldContainer:SwapContainerItem","value":"WorldContainer:SwapContainerItem(playerid,grid,x,y,z,grid2)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"WorldContainer","type":"local","score":9,"name":"WorldContainer.GetGridAttr","caption":"WorldContainer:GetGridAttr","value":"WorldContainer:GetGridAttr(x,y,z,gridid,attr)\n-- 返回：value:number属性值\n"},
        {"meta":"Mod","type":"local","score":9,"name":"Mod.GetCfgIdByAssetId","caption":"Mod:GetCfgIdByAssetId","value":"Mod:GetCfgIdByAssetId(assetId)\n-- 返回：cfgId:numberdefid\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.IsExist","caption":"Timer:IsExist","value":"Timer:IsExist(id)\n-- 返回：code:boolean成功(true)\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.CreateTimer","caption":"Timer:CreateTimer","value":"Timer:CreateTimer(name)\n-- 返回：timerid:number计时器ID\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.DeleteTimer","caption":"Timer:DeleteTimer","value":"Timer:DeleteTimer(name,timerid)\n-- 返回：code:boolean成功(true)\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.StartBackwardTimer","caption":"Timer:StartBackwardTimer","value":"Timer:StartBackwardTimer(id,interval,repeated)\n-- 返回：code:boolean成功(true)\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.StartForwardTimer","caption":"Timer:StartForwardTimer","value":"Timer:StartForwardTimer(id)\n-- 返回：code:boolean成功(true)\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.PauseTimer","caption":"Timer:PauseTimer","value":"Timer:PauseTimer(id)\n-- 返回：code:boolean成功(true)\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.ResumeTimer","caption":"Timer:ResumeTimer","value":"Timer:ResumeTimer(id)\n-- 返回：code:boolean成功(true)\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.StopTimer","caption":"Timer:StopTimer","value":"Timer:StopTimer(id)\n-- 返回：code:boolean成功(true)\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.ChangeTimerTime","caption":"Timer:ChangeTimerTime","value":"Timer:ChangeTimerTime(id,curtime)\n-- 返回：code:boolean成功(true)\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.GetTimerTime","caption":"Timer:GetTimerTime","value":"Timer:GetTimerTime(id)\n-- 返回：runtime:number当前倒计时时间\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.ShowTimerWnd","caption":"Timer:ShowTimerWnd","value":"Timer:ShowTimerWnd(playerids,timerid,title)\n-- 返回：code:boolean成功(true)\n"},
        {"meta":"Timer","type":"local","score":9,"name":"Timer.HideTimerWnd","caption":"Timer:HideTimerWnd","value":"Timer:HideTimerWnd(playerids,timerid)\n-- 返回：code:boolean成功(true)\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.AddBuff","caption":"Buff:AddBuff","value":"Buff:AddBuff(objid,buffid,bufflv,customticks)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.RemoveBuff","caption":"Buff:RemoveBuff","value":"Buff:RemoveBuff(objid,buffid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.ClearAllBuff","caption":"Buff:ClearAllBuff","value":"Buff:ClearAllBuff(objid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.ClearAllBadBuff","caption":"Buff:ClearAllBadBuff","value":"Buff:ClearAllBadBuff(objid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.ClearAllGoodBuff","caption":"Buff:ClearAllGoodBuff","value":"Buff:ClearAllGoodBuff(objid)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.HasBuff","caption":"Buff:HasBuff","value":"Buff:HasBuff(objid,buffid,bufflv)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.GetBuffList","caption":"Buff:GetBuffList","value":"Buff:GetBuffList(objid)\n-- 返回：num:number效果数量,arr:table效果ID数组\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.GetBuffNumByBuffid","caption":"Buff:GetBuffNumByBuffid","value":"Buff:GetBuffNumByBuffid(objid,buffid)\n-- 返回：ret:number数量\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.GetBuffLeftTime","caption":"Buff:GetBuffLeftTime","value":"Buff:GetBuffLeftTime(objid,buffid)\n-- 返回：ret:number剩余时间(秒,0表示永久)\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.GetBuffDefName","caption":"Buff:GetBuffDefName","value":"Buff:GetBuffDefName(buffid)\n-- 返回：ret:string效果名称\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.GetBuffDefDesc","caption":"Buff:GetBuffDefDesc","value":"Buff:GetBuffDefDesc(buffid)\n-- 返回：ret:string状态效果描述\n"},
        {"meta":"Buff","type":"local","score":9,"name":"Buff.ReplaceBuff","caption":"Buff:ReplaceBuff","value":"Buff:ReplaceBuff(objid,buffsrc,buffsrclv,buffdst,buffdstlv,customticks)\n-- 返回：ret:boolean替换成功(true)或失败(false)\n"},
        {"meta":"Chat","type":"local","score":9,"name":"Chat.SendChat","caption":"Chat:SendChat","value":"Chat:SendChat(content,playerID)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Chat","type":"local","score":9,"name":"Chat.SendSystemMsg","caption":"Chat:SendSystemMsg","value":"Chat:SendSystemMsg(content,playerID)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Data","type":"local","score":9,"name":"Data.SetValue","caption":"Data:SetValue","value":"Data:SetValue(varId,playerId,value)\n-- 返回：code:bool是否成功\n"},
        {"meta":"Data","type":"local","score":9,"name":"Data.GetValue","caption":"Data:GetValue","value":"Data:GetValue(varId,playerId)\n-- 返回：value:any返回值\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.SetValue","caption":"Array:SetValue","value":"Data.Array:SetValue(varId,playerId,value,index)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.InsertValue","caption":"Array:InsertValue","value":"Data.Array:InsertValue(varId,playerId,value,index)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.ReplaceValue","caption":"Array:ReplaceValue","value":"Data.Array:ReplaceValue(varId,playerId,newvalue,oldValue)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.GetValue","caption":"Array:GetValue","value":"Data.Array:GetValue(varId,playerId,index)\n-- 返回：ret:any返回值\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.GetIndexByValue","caption":"Array:GetIndexByValue","value":"Data.Array:GetIndexByValue(varId,playerId,value)\n-- 返回：ret:number索引\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.RemoveByValue","caption":"Array:RemoveByValue","value":"Data.Array:RemoveByValue(varId,playerId,value)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.Remove","caption":"Array:Remove","value":"Data.Array:Remove(varId,playerId,index)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.Clear","caption":"Array:Clear","value":"Data.Array:Clear(varId,playerId)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.Sort","caption":"Array:Sort","value":"Data.Array:Sort(varId,playerId,isUp)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.GetSize","caption":"Array:GetSize","value":"Data.Array:GetSize(varId,playerId)\n-- 返回：ret:num数量\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.GetAllValue","caption":"Array:GetAllValue","value":"Data.Array:GetAllValue(varId,playerId)\n-- 返回：ret:table数组值\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.GetMax","caption":"Array:GetMax","value":"Data.Array:GetMax(varId,playerId)\n-- 返回：ret:number数值\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.GetMin","caption":"Array:GetMin","value":"Data.Array:GetMin(varId,playerId)\n-- 返回：ret:number数值\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.RandomValue","caption":"Array:RandomValue","value":"Data.Array:RandomValue(varId,playerId)\n-- 返回：ret:number数值\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.HasValue","caption":"Array:HasValue","value":"Data.Array:HasValue(varId,playerId,value)\n-- 返回：ret:bool是否有值\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.HasValueByNo","caption":"Array:HasValueByNo","value":"Data.Array:HasValueByNo(varId,playerId,index)\n-- 返回：ret:bool是否有值\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.InsertValues","caption":"Array:InsertValues","value":"Data.Array:InsertValues(varId,playerId,index,varId,playerId)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.RemoveByValues","caption":"Array:RemoveByValues","value":"Data.Array:RemoveByValues(varId,playerId,index,varId,playerId)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Array","type":"local","score":9,"name":"Array.GetCountByValue","caption":"Array:GetCountByValue","value":"Data.Array:GetCountByValue(varId,playerId,value)\n-- 返回：ret:number数量\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.UpdateAllValue","caption":"Table:UpdateAllValue","value":"Data.Table:UpdateAllValue(varId,playerId,value)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.Clear","caption":"Table:Clear","value":"Data.Table:Clear(varId,playerId)\n-- 返回：ret:bool是否成功\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.InsertValue","caption":"Table:InsertValue","value":"Data.Table:InsertValue(varId,playerId,...)\n-- 返回：value:any返回的值\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.InsertValueByRow","caption":"Table:InsertValueByRow","value":"Data.Table:InsertValueByRow(varId,playerId,value,...} or {[key] = xx,...})\n-- 返回：value:any返回的值\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.GetValue","caption":"Table:GetValue","value":"Data.Table:GetValue(varId,playerId,row,col)\n-- 返回：value:any返回的值\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.GetAllValue","caption":"Table:GetAllValue","value":"Data.Table:GetAllValue(varId,playerId)\n-- 返回：value:any返回的值\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.SetValue","caption":"Table:SetValue","value":"Data.Table:SetValue(varId,playerId,row,col,value)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.RemoveRow","caption":"Table:RemoveRow","value":"Data.Table:RemoveRow(varId,playerId,row)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.GetValuesByCol","caption":"Table:GetValuesByCol","value":"Data.Table:GetValuesByCol(varId,playerId,col)\n-- 返回：ret:bool成功(true)\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.GetRows","caption":"Table:GetRows","value":"Data.Table:GetRows(varId,playerId)\n-- 返回：size:number行数\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.GetCols","caption":"Table:GetCols","value":"Data.Table:GetCols(varId,playerId)\n-- 返回：size:number列数\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.GetColIndex","caption":"Table:GetColIndex","value":"Data.Table:GetColIndex(varId,playerId)\n-- 返回：size:number列索引\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.GetRowIndex","caption":"Table:GetRowIndex","value":"Data.Table:GetRowIndex(varId,playerId,col,value,cmp,value) return a == value end）)\n-- 返回：size:number行数\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.GetRowIndexs","caption":"Table:GetRowIndexs","value":"Data.Table:GetRowIndexs(varId,playerId,col,value,cmp,value) return a == value end）)\n-- 返回：size:number行数\n"},
        {"meta":"Table","type":"local","score":9,"name":"Table.GetTableColKeys","caption":"Table:GetTableColKeys","value":"Data.Table:GetTableColKeys()\n-- 返回：\n"},
        {"meta":"CloudSever","type":"local","score":9,"name":"CloudSever.SetDataListBykey","caption":"CloudSever:SetDataListBykey","value":"CloudSever:SetDataListBykey(libvarid,key,value,string,table))\n-- 返回：ret:boolean成功(true)\n"},
        {"meta":"CloudSever","type":"local","score":9,"name":"CloudSever.GetDataListByKey","caption":"CloudSever:GetDataListByKey","value":"CloudSever:GetDataListByKey(libvarid,key,callback)\n-- 返回：ret:boolean成功(true)\n"},
        {"meta":"CloudSever","type":"local","score":9,"name":"CloudSever.GetRoomID","caption":"CloudSever:GetRoomID","value":"CloudSever:GetRoomID()\n-- 返回：ret:boolean成功(true),roomid:string房间ID\n"},

	]
	return jsonObj
}

function GetGlobalVars() {
	var jsonObj = [
		{"meta":"Event","type":"local","score":6,"name":"TriggerEvent.GroupWeatherChanged","caption":"TriEvt$GroupWeatherChanged","value":"self:AddTriggerEvent(TriggerEvent.GroupWeatherChanged,self.Handler)"},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.GameStart","caption":"TriEvt$GameStart","value":"self:AddTriggerEvent(TriggerEvent.GameStart,self.Handler)"},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.GameHour","caption":"TriEvt$GameHour","value":"self:AddTriggerEvent(TriggerEvent.GameHour,self.Handler)"},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MinitimerChange","caption":"TriEvt$MinitimerChange","value":"self:AddTriggerEvent(TriggerEvent.MinitimerChange,self.Handler)"},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.CraftEnd","caption":"TriEvt$CraftEnd","value":"self:AddTriggerEvent(TriggerEvent.CraftEnd,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , itemid ( 事件中的道具类型 ) , itemnum ( 事件中的道具数量 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.FurnaceBegin","caption":"TriEvt$FurnaceBegin","value":"self:AddTriggerEvent(TriggerEvent.FurnaceBegin,self.Handler)\n-- x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.FurnaceEnd","caption":"TriEvt$FurnaceEnd","value":"self:AddTriggerEvent(TriggerEvent.FurnaceEnd,self.Handler)\n-- x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerRevive","caption":"TriEvt$PlayerRevive","value":"self:AddTriggerEvent(TriggerEvent.PlayerRevive,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerMoveOneBlockSize","caption":"TriEvt$PlayerMoveOneBlockSize","value":"self:AddTriggerEvent(TriggerEvent.PlayerMoveOneBlockSize,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerSelectShortcut","caption":"TriEvt$PlayerSelectShortcut","value":"self:AddTriggerEvent(TriggerEvent.PlayerSelectShortcut,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , shortix ( 事件中的快捷栏 ) , itemnum ( 事件中的道具数量 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerInvateFriend","caption":"TriEvt$PlayerInvateFriend","value":"self:AddTriggerEvent(TriggerEvent.PlayerInvateFriend,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.GameAnyPlayerEnterGame","caption":"TriEvt$GameAnyPlayerEnterGame","value":"self:AddTriggerEvent(TriggerEvent.GameAnyPlayerEnterGame,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.GameAnyPlayerLeaveGame","caption":"TriEvt$GameAnyPlayerLeaveGame","value":"self:AddTriggerEvent(TriggerEvent.GameAnyPlayerLeaveGame,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.GameAnyPlayerVictory","caption":"TriEvt$GameAnyPlayerVictory","value":"self:AddTriggerEvent(TriggerEvent.GameAnyPlayerVictory,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.GameAnyPlayerDefeat","caption":"TriEvt$GameAnyPlayerDefeat","value":"self:AddTriggerEvent(TriggerEvent.GameAnyPlayerDefeat,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerClickBlock","caption":"TriEvt$PlayerClickBlock","value":"self:AddTriggerEvent(TriggerEvent.PlayerClickBlock,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , blockid ( 事件中的方块类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerClickPlayer","caption":"TriEvt$PlayerClickPlayer","value":"self:AddTriggerEvent(TriggerEvent.PlayerClickPlayer,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , blockid ( 事件中的方块类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerClickMob","caption":"TriEvt$PlayerClickMob","value":"self:AddTriggerEvent(TriggerEvent.PlayerClickMob,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , blockid ( 事件中的方块类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerClickProjectile","caption":"TriEvt$PlayerClickProjectile","value":"self:AddTriggerEvent(TriggerEvent.PlayerClickProjectile,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , blockid ( 事件中的方块类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerClickDropItem","caption":"TriEvt$PlayerClickDropItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerClickDropItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , blockid ( 事件中的方块类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerClickEntity","caption":"TriEvt$PlayerClickEntity","value":"self:AddTriggerEvent(TriggerEvent.PlayerClickEntity,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , blockid ( 事件中的方块类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerInputKeyClick","caption":"TriEvt$PlayerInputKeyClick","value":"self:AddTriggerEvent(TriggerEvent.PlayerInputKeyClick,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , vkey ( 按键 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerInputKeyDown","caption":"TriEvt$PlayerInputKeyDown","value":"self:AddTriggerEvent(TriggerEvent.PlayerInputKeyDown,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , vkey ( 按键 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerInputKeyUp","caption":"TriEvt$PlayerInputKeyUp","value":"self:AddTriggerEvent(TriggerEvent.PlayerInputKeyUp,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , vkey ( 按键 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerInputKeyOnPress","caption":"TriEvt$PlayerInputKeyOnPress","value":"self:AddTriggerEvent(TriggerEvent.PlayerInputKeyOnPress,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , vkey ( 按键 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerNewInputContent","caption":"TriEvt$PlayerNewInputContent","value":"self:AddTriggerEvent(TriggerEvent.PlayerNewInputContent,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , content ( 事件中的字符串 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerGunAction","caption":"TriEvt$PlayerGunAction","value":"self:AddTriggerEvent(TriggerEvent.PlayerGunAction,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerMotionStateChange","caption":"TriEvt$PlayerMotionStateChange","value":"self:AddTriggerEvent(TriggerEvent.PlayerMotionStateChange,self.Handler)\n-- x,y,z ( 事件中的位置 ) , eventobjid ( 触发事件的对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerAddItem","caption":"TriEvt$PlayerAddItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerAddItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , itemnum ( 事件中的道具数量 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerUseItem","caption":"TriEvt$PlayerUseItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerUseItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , itemnum ( 事件中的道具数量 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerChargeItemBegin","caption":"TriEvt$PlayerChargeItemBegin","value":"self:AddTriggerEvent(TriggerEvent.PlayerChargeItemBegin,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , itemnum ( 事件中的道具数量 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerConsumeItem","caption":"TriEvt$PlayerConsumeItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerConsumeItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , itemnum ( 事件中的道具数量 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerPickUpItem","caption":"TriEvt$PlayerPickUpItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerPickUpItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , itemnum ( 事件中的道具数量 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerDiscardItem","caption":"TriEvt$PlayerDiscardItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerDiscardItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , itemnum ( 事件中的道具数量 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerChargeItemEnd","caption":"TriEvt$PlayerChargeItemEnd","value":"self:AddTriggerEvent(TriggerEvent.PlayerChargeItemEnd,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , itemnum ( 事件中的道具数量 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerShortcutChange","caption":"TriEvt$PlayerShortcutChange","value":"self:AddTriggerEvent(TriggerEvent.PlayerShortcutChange,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , shortix ( 事件中的快捷栏 ) , itemnum ( 事件中的道具数量 ) , itemix ( 事件中的装备栏 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerShortcutAddItem","caption":"TriEvt$PlayerShortcutAddItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerShortcutAddItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , shortix ( 事件中的快捷栏 ) , itemnum ( 事件中的道具数量 ) , itemix ( 事件中的装备栏 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerShortcutRemItem","caption":"TriEvt$PlayerShortcutRemItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerShortcutRemItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , shortix ( 事件中的快捷栏 ) , itemnum ( 事件中的道具数量 ) , itemix ( 事件中的装备栏 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerBackPackChange","caption":"TriEvt$PlayerBackPackChange","value":"self:AddTriggerEvent(TriggerEvent.PlayerBackPackChange,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , shortix ( 事件中的快捷栏 ) , itemnum ( 事件中的道具数量 ) , itemix ( 事件中的装备栏 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerBackPackAddItem","caption":"TriEvt$PlayerBackPackAddItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerBackPackAddItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , shortix ( 事件中的快捷栏 ) , itemnum ( 事件中的道具数量 ) , itemix ( 事件中的装备栏 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerBackPackRemItem","caption":"TriEvt$PlayerBackPackRemItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerBackPackRemItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , shortix ( 事件中的快捷栏 ) , itemnum ( 事件中的道具数量 ) , itemix ( 事件中的装备栏 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerEquipChange","caption":"TriEvt$PlayerEquipChange","value":"self:AddTriggerEvent(TriggerEvent.PlayerEquipChange,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , shortix ( 事件中的快捷栏 ) , itemnum ( 事件中的道具数量 ) , itemix ( 事件中的装备栏 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerEquipAddItem","caption":"TriEvt$PlayerEquipAddItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerEquipAddItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , shortix ( 事件中的快捷栏 ) , itemnum ( 事件中的道具数量 ) , itemix ( 事件中的装备栏 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerEquipRemItem","caption":"TriEvt$PlayerEquipRemItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerEquipRemItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , shortix ( 事件中的快捷栏 ) , itemnum ( 事件中的道具数量 ) , itemix ( 事件中的装备栏 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerEquipOn","caption":"TriEvt$PlayerEquipOn","value":"self:AddTriggerEvent(TriggerEvent.PlayerEquipOn,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , itemix ( 事件中的装备栏 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerEquipOff","caption":"TriEvt$PlayerEquipOff","value":"self:AddTriggerEvent(TriggerEvent.PlayerEquipOff,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , itemix ( 事件中的装备栏 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.BlockAdd","caption":"TriEvt$BlockAdd","value":"self:AddTriggerEvent(TriggerEvent.BlockAdd,self.Handler)\n-- x,y,z ( 事件中的位置 ) , blockid ( 事件中的方块类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.BlockRemove","caption":"TriEvt$BlockRemove","value":"self:AddTriggerEvent(TriggerEvent.BlockRemove,self.Handler)\n-- x,y,z ( 事件中的位置 ) , blockid ( 事件中的方块类型 ) , eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.BlockDigBegin","caption":"TriEvt$BlockDigBegin","value":"self:AddTriggerEvent(TriggerEvent.BlockDigBegin,self.Handler)\n-- x,y,z ( 事件中的位置 ) , blockid ( 事件中的方块类型 ) , eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.BlockDigEnd","caption":"TriEvt$BlockDigEnd","value":"self:AddTriggerEvent(TriggerEvent.BlockDigEnd,self.Handler)\n-- x,y,z ( 事件中的位置 ) , blockid ( 事件中的方块类型 ) , eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.BlockDigCancel","caption":"TriEvt$BlockDigCancel","value":"self:AddTriggerEvent(TriggerEvent.BlockDigCancel,self.Handler)\n-- x,y,z ( 事件中的位置 ) , blockid ( 事件中的方块类型 ) , eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.BlockTrigger","caption":"TriEvt$BlockTrigger","value":"self:AddTriggerEvent(TriggerEvent.BlockTrigger,self.Handler)\n-- x,y,z ( 事件中的位置 ) , blockid ( 事件中的方块类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.BlockChangeColor","caption":"TriEvt$BlockChangeColor","value":"self:AddTriggerEvent(TriggerEvent.BlockChangeColor,self.Handler)\n-- x,y,z ( 事件中的位置 ) , blockid ( 事件中的方块类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.BlockChangeDir","caption":"TriEvt$BlockChangeDir","value":"self:AddTriggerEvent(TriggerEvent.BlockChangeDir,self.Handler)\n-- x,y,z ( 事件中的位置 ) , blockid ( 事件中的方块类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.BlockContainerChange","caption":"TriEvt$BlockContainerChange","value":"self:AddTriggerEvent(TriggerEvent.BlockContainerChange,self.Handler)\n-- x,y,z ( 事件中的位置 ) , blockid ( 事件中的方块类型 ) , itemid ( 事件中的道具类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.BlockContainerPutIn","caption":"TriEvt$BlockContainerPutIn","value":"self:AddTriggerEvent(TriggerEvent.BlockContainerPutIn,self.Handler)\n-- x,y,z ( 事件中的位置 ) , blockid ( 事件中的方块类型 ) , itemid ( 事件中的道具类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.BlockContainerTakeOut","caption":"TriEvt$BlockContainerTakeOut","value":"self:AddTriggerEvent(TriggerEvent.BlockContainerTakeOut,self.Handler)\n-- x,y,z ( 事件中的位置 ) , blockid ( 事件中的方块类型 ) , itemid ( 事件中的道具类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UILostFocus","caption":"TriEvt$UILostFocus","value":"self:AddTriggerEvent(TriggerEvent.UILostFocus,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , content ( 事件中的字符串 ) , uielement ( 事件中的元件 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UISpineComplete","caption":"TriEvt$UISpineComplete","value":"self:AddTriggerEvent(TriggerEvent.UISpineComplete,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , uielement ( 事件中的元件 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UIShow","caption":"TriEvt$UIShow","value":"self:AddTriggerEvent(TriggerEvent.UIShow,self.Handler)\n-- CustomUI ( 事件中的界面 ) , x,y,z ( 事件中的位置 ) , eventobjid ( 触发事件的对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UIHide","caption":"TriEvt$UIHide","value":"self:AddTriggerEvent(TriggerEvent.UIHide,self.Handler)\n-- CustomUI ( 事件中的界面 ) , x,y,z ( 事件中的位置 ) , eventobjid ( 触发事件的对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UIButtonClick","caption":"TriEvt$UIButtonClick","value":"self:AddTriggerEvent(TriggerEvent.UIButtonClick,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , uielement ( 事件中的元件 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UIButtonTouchBegin","caption":"TriEvt$UIButtonTouchBegin","value":"self:AddTriggerEvent(TriggerEvent.UIButtonTouchBegin,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , uielement ( 事件中的元件 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UIButtonTouchEnd","caption":"TriEvt$UIButtonTouchEnd","value":"self:AddTriggerEvent(TriggerEvent.UIButtonTouchEnd,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , uielement ( 事件中的元件 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UIButtonLongPress","caption":"TriEvt$UIButtonLongPress","value":"self:AddTriggerEvent(TriggerEvent.UIButtonLongPress,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , uielement ( 事件中的元件 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UIGLoader3DTouchClick","caption":"TriEvt$UIGLoader3DTouchClick","value":"self:AddTriggerEvent(TriggerEvent.UIGLoader3DTouchClick,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , uielement ( 事件中的元件 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UIGLoader3DTouchBegin","caption":"TriEvt$UIGLoader3DTouchBegin","value":"self:AddTriggerEvent(TriggerEvent.UIGLoader3DTouchBegin,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , uielement ( 事件中的元件 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UIGLoader3DTouchEnd","caption":"TriEvt$UIGLoader3DTouchEnd","value":"self:AddTriggerEvent(TriggerEvent.UIGLoader3DTouchEnd,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , uielement ( 事件中的元件 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.UIGLoader3DLongPress","caption":"TriEvt$UIGLoader3DLongPress","value":"self:AddTriggerEvent(TriggerEvent.UIGLoader3DLongPress,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , uielement ( 事件中的元件 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ParticlePosOnCreate","caption":"TriEvt$ParticlePosOnCreate","value":"self:AddTriggerEvent(TriggerEvent.ParticlePosOnCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , effectid ( 事件中的特效类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ParticleObjectOnCreate","caption":"TriEvt$ParticleObjectOnCreate","value":"self:AddTriggerEvent(TriggerEvent.ParticleObjectOnCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , effectid ( 事件中的特效类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ParticlePlayerOnCreate","caption":"TriEvt$ParticlePlayerOnCreate","value":"self:AddTriggerEvent(TriggerEvent.ParticlePlayerOnCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , effectid ( 事件中的特效类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ParticleMobOnCreate","caption":"TriEvt$ParticleMobOnCreate","value":"self:AddTriggerEvent(TriggerEvent.ParticleMobOnCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , effectid ( 事件中的特效类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ParticleProjectileOnCreate","caption":"TriEvt$ParticleProjectileOnCreate","value":"self:AddTriggerEvent(TriggerEvent.ParticleProjectileOnCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , effectid ( 事件中的特效类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ParticleItemOnCreate","caption":"TriEvt$ParticleItemOnCreate","value":"self:AddTriggerEvent(TriggerEvent.ParticleItemOnCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , effectid ( 事件中的特效类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ParticleEntityOnCreate","caption":"TriEvt$ParticleEntityOnCreate","value":"self:AddTriggerEvent(TriggerEvent.ParticleEntityOnCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , effectid ( 事件中的特效类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.DeveloperBuyItem","caption":"TriEvt$DeveloperBuyItem","value":"self:AddTriggerEvent(TriggerEvent.DeveloperBuyItem,self.Handler)\n-- itemid ( 事件中的道具类型 ) , eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerCollideToPlayer","caption":"TriEvt$PlayerCollideToPlayer","value":"self:AddTriggerEvent(TriggerEvent.PlayerCollideToPlayer,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerCollideToMob","caption":"TriEvt$PlayerCollideToMob","value":"self:AddTriggerEvent(TriggerEvent.PlayerCollideToMob,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerCollideToMissile","caption":"TriEvt$PlayerCollideToMissile","value":"self:AddTriggerEvent(TriggerEvent.PlayerCollideToMissile,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerCollideToDropItem","caption":"TriEvt$PlayerCollideToDropItem","value":"self:AddTriggerEvent(TriggerEvent.PlayerCollideToDropItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerCollideToEntity","caption":"TriEvt$PlayerCollideToEntity","value":"self:AddTriggerEvent(TriggerEvent.PlayerCollideToEntity,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerCollideToAreaObj","caption":"TriEvt$PlayerCollideToAreaObj","value":"self:AddTriggerEvent(TriggerEvent.PlayerCollideToAreaObj,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobCollideToPlayer","caption":"TriEvt$MobCollideToPlayer","value":"self:AddTriggerEvent(TriggerEvent.MobCollideToPlayer,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobCollideToMob","caption":"TriEvt$MobCollideToMob","value":"self:AddTriggerEvent(TriggerEvent.MobCollideToMob,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobCollideToMissile","caption":"TriEvt$MobCollideToMissile","value":"self:AddTriggerEvent(TriggerEvent.MobCollideToMissile,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobCollideToDropItem","caption":"TriEvt$MobCollideToDropItem","value":"self:AddTriggerEvent(TriggerEvent.MobCollideToDropItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobCollideToEntity","caption":"TriEvt$MobCollideToEntity","value":"self:AddTriggerEvent(TriggerEvent.MobCollideToEntity,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobCollideToAreaObj","caption":"TriEvt$MobCollideToAreaObj","value":"self:AddTriggerEvent(TriggerEvent.MobCollideToAreaObj,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MissileCollideToPlayer","caption":"TriEvt$MissileCollideToPlayer","value":"self:AddTriggerEvent(TriggerEvent.MissileCollideToPlayer,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MissileCollideToMob","caption":"TriEvt$MissileCollideToMob","value":"self:AddTriggerEvent(TriggerEvent.MissileCollideToMob,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MissileCollideToMissile","caption":"TriEvt$MissileCollideToMissile","value":"self:AddTriggerEvent(TriggerEvent.MissileCollideToMissile,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MissileCollideToDropItem","caption":"TriEvt$MissileCollideToDropItem","value":"self:AddTriggerEvent(TriggerEvent.MissileCollideToDropItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MissileCollideToEntity","caption":"TriEvt$MissileCollideToEntity","value":"self:AddTriggerEvent(TriggerEvent.MissileCollideToEntity,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MissileCollideToAreaObj","caption":"TriEvt$MissileCollideToAreaObj","value":"self:AddTriggerEvent(TriggerEvent.MissileCollideToAreaObj,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.DropItemCollideToPlayer","caption":"TriEvt$DropItemCollideToPlayer","value":"self:AddTriggerEvent(TriggerEvent.DropItemCollideToPlayer,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.DropItemCollideToMob","caption":"TriEvt$DropItemCollideToMob","value":"self:AddTriggerEvent(TriggerEvent.DropItemCollideToMob,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.DropItemCollideToMissile","caption":"TriEvt$DropItemCollideToMissile","value":"self:AddTriggerEvent(TriggerEvent.DropItemCollideToMissile,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.DropItemCollideToDropItem","caption":"TriEvt$DropItemCollideToDropItem","value":"self:AddTriggerEvent(TriggerEvent.DropItemCollideToDropItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.DropItemCollideToEntity","caption":"TriEvt$DropItemCollideToEntity","value":"self:AddTriggerEvent(TriggerEvent.DropItemCollideToEntity,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.DropItemCollideToAreaObj","caption":"TriEvt$DropItemCollideToAreaObj","value":"self:AddTriggerEvent(TriggerEvent.DropItemCollideToAreaObj,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.EntityCollideToPlayer","caption":"TriEvt$EntityCollideToPlayer","value":"self:AddTriggerEvent(TriggerEvent.EntityCollideToPlayer,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.EntityCollideToMob","caption":"TriEvt$EntityCollideToMob","value":"self:AddTriggerEvent(TriggerEvent.EntityCollideToMob,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.EntityCollideToMissile","caption":"TriEvt$EntityCollideToMissile","value":"self:AddTriggerEvent(TriggerEvent.EntityCollideToMissile,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.EntityCollideToDropItem","caption":"TriEvt$EntityCollideToDropItem","value":"self:AddTriggerEvent(TriggerEvent.EntityCollideToDropItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.EntityCollideToEntity","caption":"TriEvt$EntityCollideToEntity","value":"self:AddTriggerEvent(TriggerEvent.EntityCollideToEntity,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.EntityCollideToAreaObj","caption":"TriEvt$EntityCollideToAreaObj","value":"self:AddTriggerEvent(TriggerEvent.EntityCollideToAreaObj,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.AreaObjCollideToPlayer","caption":"TriEvt$AreaObjCollideToPlayer","value":"self:AddTriggerEvent(TriggerEvent.AreaObjCollideToPlayer,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.AreaObjCollideToMob","caption":"TriEvt$AreaObjCollideToMob","value":"self:AddTriggerEvent(TriggerEvent.AreaObjCollideToMob,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.AreaObjCollideToMissile","caption":"TriEvt$AreaObjCollideToMissile","value":"self:AddTriggerEvent(TriggerEvent.AreaObjCollideToMissile,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.AreaObjCollideToDropItem","caption":"TriEvt$AreaObjCollideToDropItem","value":"self:AddTriggerEvent(TriggerEvent.AreaObjCollideToDropItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.AreaObjCollideToEntity","caption":"TriEvt$AreaObjCollideToEntity","value":"self:AddTriggerEvent(TriggerEvent.AreaObjCollideToEntity,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.AreaObjCollideToAreaObj","caption":"TriEvt$AreaObjCollideToAreaObj","value":"self:AddTriggerEvent(TriggerEvent.AreaObjCollideToAreaObj,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerAreaIn","caption":"TriEvt$PlayerAreaIn","value":"self:AddTriggerEvent(TriggerEvent.PlayerAreaIn,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerAreaOut","caption":"TriEvt$PlayerAreaOut","value":"self:AddTriggerEvent(TriggerEvent.PlayerAreaOut,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobAreaIn","caption":"TriEvt$MobAreaIn","value":"self:AddTriggerEvent(TriggerEvent.MobAreaIn,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobAreaOut","caption":"TriEvt$MobAreaOut","value":"self:AddTriggerEvent(TriggerEvent.MobAreaOut,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MissileAreaIn","caption":"TriEvt$MissileAreaIn","value":"self:AddTriggerEvent(TriggerEvent.MissileAreaIn,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MissileAreaOut","caption":"TriEvt$MissileAreaOut","value":"self:AddTriggerEvent(TriggerEvent.MissileAreaOut,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.DropItemAreaIn","caption":"TriEvt$DropItemAreaIn","value":"self:AddTriggerEvent(TriggerEvent.DropItemAreaIn,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.DropItemAreaOut","caption":"TriEvt$DropItemAreaOut","value":"self:AddTriggerEvent(TriggerEvent.DropItemAreaOut,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.EntityAreaIn","caption":"TriEvt$EntityAreaIn","value":"self:AddTriggerEvent(TriggerEvent.EntityAreaIn,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.EntityAreaOut","caption":"TriEvt$EntityAreaOut","value":"self:AddTriggerEvent(TriggerEvent.EntityAreaOut,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.AreaObjAreaIn","caption":"TriEvt$AreaObjAreaIn","value":"self:AddTriggerEvent(TriggerEvent.AreaObjAreaIn,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.AreaObjAreaOut","caption":"TriEvt$AreaObjAreaOut","value":"self:AddTriggerEvent(TriggerEvent.AreaObjAreaOut,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobCreate","caption":"TriEvt$MobCreate","value":"self:AddTriggerEvent(TriggerEvent.MobCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的投掷物类型 ) , areaid ( 事件中的区域 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.EntityCreate","caption":"TriEvt$EntityCreate","value":"self:AddTriggerEvent(TriggerEvent.EntityCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的投掷物类型 ) , areaid ( 事件中的区域 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.AreaObjCreate","caption":"TriEvt$AreaObjCreate","value":"self:AddTriggerEvent(TriggerEvent.AreaObjCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的投掷物类型 ) , areaid ( 事件中的区域 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerBeHurt","caption":"TriEvt$PlayerBeHurt","value":"self:AddTriggerEvent(TriggerEvent.PlayerBeHurt,self.Handler)\n-- x,y,z ( 事件中的位置 ) , eventobjid ( 触发事件的对象 ) , toobjid ( 事件中的目标对象 ) , actorid ( 触发事件的生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerDie","caption":"TriEvt$PlayerDie","value":"self:AddTriggerEvent(TriggerEvent.PlayerDie,self.Handler)\n-- x,y,z ( 事件中的位置 ) , eventobjid ( 触发事件的对象 ) , toobjid ( 事件中的目标对象 ) , actorid ( 触发事件的生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobBeHurt","caption":"TriEvt$MobBeHurt","value":"self:AddTriggerEvent(TriggerEvent.MobBeHurt,self.Handler)\n-- x,y,z ( 事件中的位置 ) , eventobjid ( 触发事件的对象 ) , toobjid ( 事件中的目标对象 ) , actorid ( 触发事件的生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobDie","caption":"TriEvt$MobDie","value":"self:AddTriggerEvent(TriggerEvent.MobDie,self.Handler)\n-- x,y,z ( 事件中的位置 ) , eventobjid ( 触发事件的对象 ) , toobjid ( 事件中的目标对象 ) , actorid ( 触发事件的生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerAttack","caption":"TriEvt$PlayerAttack","value":"self:AddTriggerEvent(TriggerEvent.PlayerAttack,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , hurtlv ( 事件中的伤害值 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerAttackHit","caption":"TriEvt$PlayerAttackHit","value":"self:AddTriggerEvent(TriggerEvent.PlayerAttackHit,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , hurtlv ( 事件中的伤害值 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerDefeatActor","caption":"TriEvt$PlayerDefeatActor","value":"self:AddTriggerEvent(TriggerEvent.PlayerDefeatActor,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , hurtlv ( 事件中的伤害值 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerDamageActor","caption":"TriEvt$PlayerDamageActor","value":"self:AddTriggerEvent(TriggerEvent.PlayerDamageActor,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , hurtlv ( 事件中的伤害值 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobAttack","caption":"TriEvt$MobAttack","value":"self:AddTriggerEvent(TriggerEvent.MobAttack,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , hurtlv ( 事件中的伤害值 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobAttackHit","caption":"TriEvt$MobAttackHit","value":"self:AddTriggerEvent(TriggerEvent.MobAttackHit,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , hurtlv ( 事件中的伤害值 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobBeat","caption":"TriEvt$MobBeat","value":"self:AddTriggerEvent(TriggerEvent.MobBeat,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , hurtlv ( 事件中的伤害值 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobDamage","caption":"TriEvt$MobDamage","value":"self:AddTriggerEvent(TriggerEvent.MobDamage,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , hurtlv ( 事件中的伤害值 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerAddBuff","caption":"TriEvt$PlayerAddBuff","value":"self:AddTriggerEvent(TriggerEvent.PlayerAddBuff,self.Handler)\n-- x,y,z ( 事件中的位置 ) , buffid ( 事件中的状态 ) , eventobjid ( 触发事件的对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerRemoveBuff","caption":"TriEvt$PlayerRemoveBuff","value":"self:AddTriggerEvent(TriggerEvent.PlayerRemoveBuff,self.Handler)\n-- x,y,z ( 事件中的位置 ) , buffid ( 事件中的状态 ) , eventobjid ( 触发事件的对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobAddBuff","caption":"TriEvt$MobAddBuff","value":"self:AddTriggerEvent(TriggerEvent.MobAddBuff,self.Handler)\n-- x,y,z ( 事件中的位置 ) , buffid ( 事件中的状态 ) , eventobjid ( 触发事件的对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobRemoveBuff","caption":"TriEvt$MobRemoveBuff","value":"self:AddTriggerEvent(TriggerEvent.MobRemoveBuff,self.Handler)\n-- x,y,z ( 事件中的位置 ) , buffid ( 事件中的状态 ) , eventobjid ( 触发事件的对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerChangeAttr","caption":"TriEvt$PlayerChangeAttr","value":"self:AddTriggerEvent(TriggerEvent.PlayerChangeAttr,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobChangeAttr","caption":"TriEvt$MobChangeAttr","value":"self:AddTriggerEvent(TriggerEvent.MobChangeAttr,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ActorPickupActor","caption":"TriEvt$ActorPickupActor","value":"self:AddTriggerEvent(TriggerEvent.ActorPickupActor,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerAttrStateChange","caption":"TriEvt$PlayerAttrStateChange","value":"self:AddTriggerEvent(TriggerEvent.PlayerAttrStateChange,self.Handler)\n-- x,y,z ( 事件中的位置 ) , eventobjid ( 触发事件的对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobAttrStateChange","caption":"TriEvt$MobAttrStateChange","value":"self:AddTriggerEvent(TriggerEvent.MobAttrStateChange,self.Handler)\n-- x,y,z ( 事件中的位置 ) , eventobjid ( 触发事件的对象 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerMountActor","caption":"TriEvt$PlayerMountActor","value":"self:AddTriggerEvent(TriggerEvent.PlayerMountActor,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobMountActor","caption":"TriEvt$MobMountActor","value":"self:AddTriggerEvent(TriggerEvent.MobMountActor,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.PlayerDismountActor","caption":"TriEvt$PlayerDismountActor","value":"self:AddTriggerEvent(TriggerEvent.PlayerDismountActor,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MobDismountActor","caption":"TriEvt$MobDismountActor","value":"self:AddTriggerEvent(TriggerEvent.MobDismountActor,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.MissileCreate","caption":"TriEvt$MissileCreate","value":"self:AddTriggerEvent(TriggerEvent.MissileCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , itemid ( 事件中的道具类型 ) , actorid ( 触发事件的生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ProjectileHitBlock","caption":"TriEvt$ProjectileHitBlock","value":"self:AddTriggerEvent(TriggerEvent.ProjectileHitBlock,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , itemid ( 事件中的道具类型 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ProjectileHitPlayer","caption":"TriEvt$ProjectileHitPlayer","value":"self:AddTriggerEvent(TriggerEvent.ProjectileHitPlayer,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , itemid ( 事件中的道具类型 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ProjectileHitMob","caption":"TriEvt$ProjectileHitMob","value":"self:AddTriggerEvent(TriggerEvent.ProjectileHitMob,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , itemid ( 事件中的道具类型 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ProjectileHitProj","caption":"TriEvt$ProjectileHitProj","value":"self:AddTriggerEvent(TriggerEvent.ProjectileHitProj,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , itemid ( 事件中的道具类型 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ProjectileHitItem","caption":"TriEvt$ProjectileHitItem","value":"self:AddTriggerEvent(TriggerEvent.ProjectileHitItem,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , itemid ( 事件中的道具类型 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ProjectileHitEntity","caption":"TriEvt$ProjectileHitEntity","value":"self:AddTriggerEvent(TriggerEvent.ProjectileHitEntity,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , itemid ( 事件中的道具类型 ) , toobjid ( 事件中的目标对象 ) , targetactorid ( 事件中的目标生物类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ItemCreate","caption":"TriEvt$ItemCreate","value":"self:AddTriggerEvent(TriggerEvent.ItemCreate,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , x,y,z ( 事件中的位置 ) , itemid ( 事件中的道具类型 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.DropItemPickup","caption":"TriEvt$DropItemPickup","value":"self:AddTriggerEvent(TriggerEvent.DropItemPickup,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , itemid ( 事件中的道具类型 ) , x,y,z ( 事件中的位置 ) , "},
        {"meta":"Event","type":"local","score":6,"name":"TriggerEvent.ItemDisappear","caption":"TriEvt$ItemDisappear","value":"self:AddTriggerEvent(TriggerEvent.ItemDisappear,self.Handler)\n-- eventobjid ( 触发事件的对象 ) , itemid ( 事件中的道具类型 ) , x,y,z ( 事件中的位置 ) , "},

	]
	return jsonObj
}
$s('#loadPage>h3[data-v3]').remove();