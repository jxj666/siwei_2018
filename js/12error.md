# Error

## try{
    可能出错的代码
}catch(err){
    只有出错才执行的错误处理代码
    比如: 错误提示，记录日志
}finally{
    无论是否出错都必须执行的代码
    释放资源
}

## err错误对象

### 什么是

#### 在发生错误时自动创建的封装错误信息的对象

### name

#### 错误类型

##### SyntaxError,  ReferenceError,  TypeError,  RangeError,   EvalError， URIError

### message

#### 错误提示信息

### String(err)

#### 错误类型:错误提示信息

## 优化

### 如果可以提前预知错误的原因

#### 建议用if...else...代替try...catch

## 抛出自定义错误

### throw new Error("自定义错误信息")
