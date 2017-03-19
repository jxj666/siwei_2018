# Function

## 什么是

### 函数其实是一个封装一段代码段的对象

### 函数名其实仅是引用函数对象的一个普通变量

### function fun和var fun都是声明/创建一个变量的意思

## 创建

### 3种

#### 1. 声明

##### function 函数名(参数列表){函数体; return 返回值}

##### 会被声明提前

#### 2. 直接量

##### var 函数名=function(参数列表){函数体; return 返回值}

##### 不会被声明提前

#### 3. 用new

##### var 函数名=new Function("参数名1","参数名2",...,"函数体; return 返回值")

## 重载(overload)

### 什么是

#### 相同函数名，不同参数列表的多个函数

#### 在调用时

##### 根据传入参数的不同，自动选择匹配的函数执行

### 为什么

#### 减少API的数量，减轻调用者的负担

### 何时

#### 只要一项任务，需要根据不同的参数，执行不同的操作时

### 如何

#### 问题

##### js语法不支持重载

###### js不允许同时存在多个同名函数

#### 解决

##### 每一个函数内，都有一个arguments对象接住所有传入函数的参数值

##### 根据arguments的内容或元素个数，判断执行不同的操作

#### arguments

##### 函数调用时，自动创建的

##### 自动接收所有传入函数的参数值的

##### 类数组对象

###### 长的像数组的对象

###### vs 数组

####### 相同

######## 1. 下标

######## 2. length

######## 3. for遍历

####### 不同

######## 类型不同

######### 数组是Array类型

######### 类数组对象是Object类型

########## 类数组对象无法使用数组的API

## 匿名函数

### 什么是

#### 函数创建时，没有被任何变量引用

##### 使用后自动释放！

### 为什么

#### 节约内存

### 何时

#### 只要一个函数只用一次

##### 1. 回调callback

###### 将一个函数对象作为参数传入另一个函数内，被其他函数调用

###### 比如:

####### arr.sort(function(a,b){return a-b;})

####### str.replace(/reg/g, function(kw,$1,$2,...){return 替换值})

##### 2. 自调

###### 定义函数后自己调用自己，调用后，立刻释放

###### 何时

####### 定义一个临时作用域，减少使用全局变量, 避免全局污染

###### 如何

####### (function(参数列表){函数体; return 返回值})(参数值列表)

## 作用域(scope)和作用域链(scope chain)

### 函数的生命周期

#### 开始执行程序前

##### 创建ECS

##### 在ECS中压人第一个全局EC

##### 创建全局作用域对象window

###### 所有全局变量都是定义在window对象中

##### 全局EC引用window

#### 定义函数时

##### 用函数名声明全局变量

##### 创建函数对象，封装函数定义

##### 函数对象的scope属性，指回函数创建时的作用域

##### 函数名变量引用函数对象

#### 调用函数时

##### 向ECS中压入本次函数调用的EC

##### 创建本次函数调用时使用的函数作用域对象(AO)

##### 在AO中创建所有局部变量

##### 设置AO的parent属性引用函数的scope属性指向的父级作用域对象

##### 函数的EC引用AO

##### 变量的使用顺序

###### 先在AO中找局部变量

###### 找不到才去window中找全局变量

#### 调用后

##### 函数的EC出栈

###### 导致AO释放

####### 导致AO中的局部变量一同被释放

### 作用域

#### 变量的可用范围

##### 其实是一个对象

#### 包含

##### 全局作用域对象

###### window

##### 函数作用域对象

###### AO

### 作用域链

#### 由各级作用域逐级引用，形成的链式结构

#### 控制着

##### 变量的使用顺序

### 函数中，没有用任何对象/this就直接访问的变量，在作用域链中找

## 闭包(closure)

### 什么是

#### 即重用变量，又保护变量不被污染的机制

### 为什么

#### 全局变量

##### 优:

###### 可重用

##### 缺:

###### 易被污染

#### 局部变量

##### 缺:

###### 不可重用

##### 优: 

###### 不会被污染

### 何时:

#### 即重用变量，又保护变量不被污染

### 如何

#### 三特点

##### 1. 外层函数

###### 包裹受保护的变量和操作变量的内层函数

##### 2. 外层函数要返回内层函数的对象

###### 3种

####### 1. return function(){...}

####### 2. 直接给全局变量赋值

####### 3. 将函数保存在一个对象的属性或数组元素中

######## return [function,function,function]

######## return { fun:function(){...} }

##### 3. 调用外层函数，获得内层函数的对象，赋值给全局变量

### 闭包如何形成

#### 外层函数调用后，外层函数的作用域对象(AO)，无法释放

### 鄙视

#### 2步

##### 1. 找受保护的的变量，确定在外层函数调用后，变量的最终值

##### 2. 找操作受保护的变量的内层函数对象

### 缺:

#### 比普通函数占用更多内存

##### 多的是外层函数的作用域对象(AO)始终存在

#### 容易造成内存泄漏

##### 解决: 

###### 如何释放闭包

####### 将引用内层函数对象的全局变量置为null