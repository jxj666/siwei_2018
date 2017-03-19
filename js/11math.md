# Math

## 不能new

### 所有API都用Math.直接调用

## API

### 1. 取整

#### 上取整

##### Math.ceil(num)

#### 下取整

##### Math.floor(num)

###### 只能对纯数字内容下取整

##### vs parseInt(str)

###### 先去掉字符串后非数字字符，再省略小数部分

###### 问题:

####### 多数情况下，只去单位，还要保留小数

###### 解决:

####### 如果只是去单位，首选parseFloat

#### 四舍五入取整

##### Math.round(num)

###### 返回值是number

###### 不能指定小数位数

##### vs num.toFixed(d)

###### 返回值string

###### 可以按任意小数位数四舍五入

##### 自定义round

###### function round(num,d){
    num*=Math.pow(10,d);
    num=Math.round(num);
    num/=Math.pow(10,d);
    return num;
}

### 2. 乘方和开平方

#### 乘方

##### Math.pow(底数,幂)

#### 开平方

##### Math.sqrt(num)

###### for(var i=0;i<Math.sqrt(num);i++){
    if(num%i==0){不是质数，return}
}
是质数

### 3. 最大值和最小值

#### Math.max/min(值1,值2,..)

#### 问题:

##### 不支持查找一个数组中的最大值／最小值

#### 解决: 

##### Math.max/min.apply(null,arr)

### 4. 随机数

#### 默认

##### 0<=Math.random()<1

#### 在任意min~max之间生成随机整数

##### Math.floor(Math.random()*(max-min+1)+min)

#### 在0~max之间生成随机整数

##### Math.floor(Math.random()*(max+1))
