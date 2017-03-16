# BOM

## window

### 2个角色

#### 1. 代替global充当全局对象

#### 2. 封装BOM+DOM API

### 打开和关闭窗口

#### 打开

##### var pop=window.open("url","name",config)

##### name

###### 自定义名称

####### 在新窗口打开，只能打开一个

###### _blank, _self

##### 其中config:

###### “left=?,top=?,width=?,height=?”

####### 了解

#### 关闭

##### window.close()

### 窗口大小和窗口位置

#### 窗口大小

##### 属性

###### 完整大小: 

####### .outerWidth

####### .outerHeight

###### 文档显示区大小

####### .innerWidth

####### .innerHeight

##### 方法

###### pop.resizeTo(width, height)

###### pop.resizeBy(width的增量,height的增量)

#### 窗口定位

##### 属性

###### .screenLeft||.screenX

###### .screenTop||.screenY

##### 方法

###### pop.moveTo(left,top)

###### pop.moveBy(left的增量,top的增量)

### 定时器

#### 周期性定时器

##### 让程序每隔一段时间间隔反复执行一项任务

##### 何时

###### 只要任务需要反复执行时

##### 3件事

###### 1. 任务函数

####### function task(){...}

###### 2. 启动定时器

####### timer=setInterval(task, interval)

###### 3. 停止定时器

####### clearInterval(timer); timer=null

#### 一次性定时器

##### 让程序先等待一段时间，再执行一次，然后自动释放

##### 何时

###### 任务仅执行一次，就释放

##### 3件事

###### 1. 任务函数

####### function task(){...}

###### 2. 启动定时器

####### timer=setTimeout(task, wait)

###### 3. 停止定时器

####### clearTimeout(timer); timer=null

#### 定时器原理

##### 定时器中的回调函数必须在主程序最后一句话执行完才能开始执行

##### 回调函数中的this->window

#### 动画

##### 属性

###### 三要素

####### 总距离: DISTANCE; 总时间: DURATION; 总步数: STEPS

######## 时间间隔interval: DURATION/STEPS

######## 步长step: DISTANCE/STEPS

###### timer

####### 只要可能停止

###### moved

####### 记录已经移动的步数

######## 判断何时停止

##### 方法:

###### 动画启动

####### move:function(){
    setInterval(this.moveStep.bind(this), interval)
}

###### 移动一步

####### moveStep:function(){
    ...
    moved++;
    if(moved>=STEPS){
         clearInterval(timer)
    }
}

##### 让一项任务在动画结束后才执行: 

###### 动画启动

####### move:function(callback){
    setInterval(this.moveStep.bind(this,callback), interval)
}

###### 移动一步

####### moveStep:function(callback){
    ...
    moved++;
    if(moved>=STEPS){
         clearInterval(timer)
         callback();
    }
}

###### 启动动画

####### move(function(){...//在动画结束后才执行的代码段...})

#### 停止定时器

##### 1. 手动调用clearXXX(timer)

##### 2. 自动停止

###### 在task函数中判断临界值，只要达到临界值，就自动调用clearXXX(timer)

### screen

#### 完整大小：

##### screen.width/height

##### 媒体查询

###### lg

####### 1200

###### md

####### 992

###### sm

####### 768

###### xs

####### 480

#### 去掉任务栏之后剩余的可用大小

##### screen.availWidth/availHeight

### history

#### 保存当前窗口打开后成功访问过的url的历史记录栈

#### 前进: history.go(1)

#### 后退: history.go(-1)

#### 刷新: history.go(0)

### location

#### 属性

##### .href

###### 获取或设置完整url

##### .protocol

###### 协议

##### .host

###### 主机名+端口号

##### .hostname

###### 主机名

##### .port

###### 端口号

##### .pathname

###### 相对路径

##### .hash

###### #锚点

##### .search

###### ?查询字符串

#### 方法

##### 在当前窗口打开新页面

###### location.assign("url")

####### location.href="url"

######## location="url"

### navigator

#### .cookieEnabled

##### 判断是否启用cookie

#### .plugins

##### 封装所有插件对象的集合

#### .userAgent

##### 记录浏览器内核，名称，版本号的字符串

### event

#### 事件

##### 浏览器自动触发的或用户手动触发的页面(元素)状态的改变

#### 事件处理函数

##### 在事件发生时，自动调用的元素的特殊函数

##### .onXXX

###### 值都是一个函数对象

##### 事件处理函数中的this，都指事件绑定在的对象

#### 绑定事件处理函数

##### 3种

###### 在HTML中

####### <ANY on事件名="js语句(this)"

####### 问题:

######## 1. 无法给动态生成的元素绑定事件

######## 2. 不便于管理和维护

###### 在js中

####### 2种

######## ANY.on事件名=function(){
    this->ANY
}

######### 问题

########## 只能为一个事件处理函数绑定一个函数对象

######## ANY.addEventListener("事件名",fn[,capture])

######### 可为一个事件处理函数同时绑定多个函数对象

######### .removeEventListener("事件名",fn)

########## 如果可能解除绑定，则绑定时必须用有名的函数

######### IE8: .attachEvent("on事件名",fn)

#### 事件周期

##### DOM标准

###### 3阶段

####### 捕获

######## 由外向内，记录各级父元素绑定的事件处理函数

####### 目标触发

######## 首先触发目标元素上绑定的处理函数

######## 目标元素

######### 实际触发事件的元素

####### 冒泡

######## 由目标元素向外，按捕获顺序反向触发各级父元素上的处理函数

##### IE8

###### 2阶段

####### 没有捕获阶段

#### 事件对象

##### 什么是

###### 事件发生时自动创建

###### 封装事件信息，并提供操作事件的API

##### 何时

###### 获取事件信息

###### 操作事件

##### 如何获得

###### DOM标准

####### 事件对象默认作为处理函数的第一个参数自动传入

###### IE8

####### 将事件对象自动保存在全局变量window.event中

###### 兼容:

####### e=e||window.event

#### 事件操作

##### 取消冒泡

###### e.stopPropagation()

##### 利用冒泡

###### 问题

####### 每个事件监听都是一个对象

####### 事件触发时，浏览器会轮询每个事件监听对象，确定触发谁

####### 事件监听对象过多，导致响应速度降低

###### 优化:

####### 尽量少的添加事件监听对象

####### 如何

######## 如果多个平级子元素同时绑定相同事件处理函数时

######## 只要在父元素绑定一次，所有子元素共用即可

####### 问题:

######## 1. 如何获得目标元素

######### this->父元素 X

######### e.target

########## IE8: e.srcElement

########### 兼容: var target=e.target||e.srcElement

######## 2. 鉴别目标元素

######### 判断target的属性或标签名

##### 取消事件

###### e.preventDefault();

##### 事件坐标

###### 相对于屏幕左上角坐标

####### e.screenX/screenY

###### 相对于文档显示区左上角坐标

####### e.clientX||e.x

####### e.clientY||e.y

###### 相对于body左上角坐标

####### e.pageX/pageY

###### 相对于所在元素左上角坐标

####### e.offsetX/offsetY

##### 页面滚动

###### 事件

####### .onscroll

###### 滚动的距离

####### document.body.scrollTop||document.documentElement.scrollTop

###### 方法

####### window.scrollTo/By(left,top)

###### css

####### scrollTop

### document
