# AJAX知识点整理

## 数据库服务器

### SQL

#### SET NAMES UTF8;

#### DROP DATABASE IF EXISTS jd;

#### CREATE DATABASE jd CHARSET=UTF8;

#### USE jd;

#### CREATE TABLE product( pid INT, pname VARCHAR(32));

#### INSERT INTO product VALUES(10, 'xxx');

#### DELETE FROM product WHERE pid=10;

#### UPDATE product SET pname='xxx' WHERE pid=10;

#### SELECT pid, pname FROM product;

#### 语句的分类

##### DDL

###### CREATE

###### DROP

###### ALTER

###### TRUNCATE

##### DML

###### INSERT

###### DELETE

###### UPDATE

##### DQL

###### SELECT

##### DCL

###### GRANT

###### REVOKE

## Web服务器

### 静态Web服务器

#### HTML

#### CSS

#### JS

#### 图片

#### Flash

#### 视频音频

### 动态Web服务器

#### JSP

#### ASP.NET

#### PHP

##### 背景知识

##### 环境搭建

##### 数据类型

###### 值类型

####### int

####### float

####### string

######## ‘’

######## “”

####### boolean

###### 复合类型

####### object

####### array

######## 索引

######## 关联

###### 特殊类型

####### null

####### resource

##### 变量常量

##### 运算符

###### 字符串拼接

####### .

##### 逻辑结构

###### 选择结构

###### 循环结构

####### foreach($list as $k=>$v){  }

##### 函数和对象

###### function add($n1, $n2){ ... }

##### 预定义函数和对象

###### require()

###### die()

###### @

###### mysqli_connect()

###### mysqli_query()

###### mysqli_insert_id()

###### mysqli_affected_rows()

###### mysqli_fetch_row()

###### mysqli_fetch_assoc()

###### mysqli_fetch_all()

###### substr()

###### rand()

###### time()

###### .....

#### Node.js

## HTTP协议

### 请求消息

#### 起始行

##### 请求方法

##### 空格

##### URI

##### 空格

##### 协议版本

#### 请求头

##### Content-Type

###### text/plain

###### application/x-www-form-urlencoded

###### multipart/form-data

#### CRLF

#### 请求主体

### 响应消息

#### 起始行

##### 协议版本

##### 空格

##### 响应状态码

###### 1xx

###### 2xx

###### 3xx

###### 4xx

###### 5xx

##### 空格

##### 原因短句

#### 响应头

##### Content-Type

###### text/plain

###### text/html

###### application/javascript

###### application/xml

###### application/json

###### image/png

###### audio/mpeg3

###### ....

#### CRLF

#### 响应主体

## 原生AJAX

### 概述

### 发起两种请求消息

#### GET

##### //1

##### //2

##### //3

##### //4

#### POST

##### //1

##### //2

##### //3

##### //3.5

##### //4

### 接收四种响应消息

#### text/plain

##### xhr.responseText

#### text/html

##### parent.innerHTML = xhr.responseText

#### application/javascript

##### eval( xhr.responseText )

#### application/xml

##### xhr.responseXML

#### application/json

##### JSON.parse(xhr.responseText)

## jQuery中AJAX

### load()

#### $('div#header').load('h.php')

### $.get()

#### $.get('suggest.php', {kw: 'abc'}, function(data){  })

### $.post()

#### $.post('register.php', {uname:'tom', upwd:'123'}, function(data){  })

### $.getScript()

#### $.getScript('i18n.php')

### $.getJSON()

#### $.getJSON('product.php', function(data){  })

### $.ajax()

#### $.ajax( {
  type: 'GET',
  url: 'x.php',
  data: 'k=v',
  beforeSend: fn,
  success: fn,
  error: fn,
  complete: fn
} )
