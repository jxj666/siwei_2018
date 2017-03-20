# Date

# 创建

## 4种

### 1. 获得客户端当前系统时间

#### var now=new Date()

### 2. 创建日期对象保存自定义时间

#### var date=new Date("yyyy/MM/dd hh:mm:ss")

#### var date=new Date(yyyy,MM-1,dd,hh,mm,ss)

### 3. 复制一个日期对象

#### 为什么

##### 日期的计算都是直接修改原日期对象，计算后，原日期无法保留

#### 何时

##### 只要需要同时保存开始和结束时间时，都要先将开始时间复制一个副本，再用副本计算截止时间

#### var date2=new Date(date1)

### 4. 用毫秒数

#### var date=new Date(ms)

# 本质

## 日期对象中存储的是1970年1月1日0点至今的毫秒数

## var ms=date.getTime();

# API

## 单位

### FullYear,  Month,  Date,   Day

### Hours,  Minutes,   Seconds   Milliseconds

## 每个单位都有一个对儿getXXX/setXXX方法

### date.getXXX()负责获取指定单位的数值

### date.setXXX(num)负责设置指定单位的数值

### 特例:

#### Day没有setXXX()方法

## 取值范围: 

### 只有日Date，从1开始到31结束

### 其余都从0~进制-1结束

### 只有月份需要修正:0~11/计算机中的月份比现实中的月份至小1

### 其余都不需要修正

# 计算

## 两日期对象可相减

### 得到ms差

## 对任意分量做加减

### date.setXXX(date.getXXX()+n)

### 强调: 

#### 1. 直接修改原日期对象

##### 如果需要同时保存新旧两个时间，就要先将旧时间复制一个副本，再用副本计算

#### 2. setXXX() 可自动调整时间进制

# 格式化

## toString()

### 中国标准时间(+8区)

## toLocaleString()

### 当前系统本地的时间格式

## toLocaleDateString()

### 当前系统本地的时间格式:仅保留日期部分:有兼容性问题

## toLocaleTimeString()

### 当前系统本地的时间格式:仅保留时间部分

## toGMTString()

### 国际标准时间(0时区)
