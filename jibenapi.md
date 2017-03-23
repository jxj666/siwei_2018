# 前端 js/dom/bom 必背的 api

```
var str=arr.toString()
var num=Number(numstr)
var num=parseInt(str)
var num=parseFloat(str)
var str=arr.join('')
var arrn=arr1.concat(arr2,值1,值2)
var arrn=arr1.slice(start,end+i)
arr1.splice(start,n)
arr1.splice(start,0,值1,值2)
arr1.splice(start,n,值1,值2)
var arrn=arr.splice(,)
var strn=str.replace(/ /,'')
var arr=str.split(//)
var arr=str.split('')
arr.reverse()
arr.sort()
arr.push(新值)
var last=arr.pop()
arr.unshift(新值)
var first=arr.shift()
var strn=str.toLowerCase()
var strn=str.toUpperCase()
var strn=str.charAt(i)
var i=str.indexOf('值',start)
var i=str.lastIndexOf('值',start)
\d \w \s . ^ $ * + ?
var i=str.search(//)
var kwords=str.match(//)
var arrn=str.split(//[,num])
var reg=new RegExp(str[,'ig'])
Math.floor(Math.radom()*(max-min+1)+min)
Math.ceil(num)
Math.floor(num)
Math.round(num)
Math.pow(底数,幕)
Math.sqrt(num)
var now=new Date()
var date=new Date('xxxx/xx/xx [xx:xx:xx]')
var h/m/s=new Date.getXXX()  
FullYear/Month/Day/Hours/Minutes/Seconds
throw new Error("")
Object.preventExtensions(obj)
Object.seal(obj)
Object.freeze(obj)
value/writable/enumerabale/configurable
```
```
element/attribute/text
nodeType:1/2/3/9
nodeName
nodeValue
parentNode
childNoses/firstChild/lastChild
PreviousSibling/nextSibling
parentElementNode
firstElementChild/lastElementChild
previousElementSibling/nextElementSibling
ele.innerHtml
ele.attributes
ele.getAttribute(属性名)
ele.setAttribute(属性名,属性值)
ele.removeAttribute(属性名)
onfocus/onblur
ele=document.createElement(标签名)
ele.innerHTML=""
parent.appendChild(ele)
parent.insertBefore(ele,现有)
parent.replaceChild(ele, 现有)
parent.removeChild(ele)
ele=document.querySelectorAll()
ele=document.querySelector('selector')
ele.className=''
select.add(new Option(innerHTML,value))
createTHead/TBody/TFoot
deleteTHead/TFoot
.tHead/tFoot.tBodies[i]
.insertRow/Cell(i)
.deleteRow/Cell(i)
var form=document.form[i/id/name]
form.elements[i/id/name]
onsubmit
```
```
outerWidth/outerHeight
innerWidth/innerHeight
resizeTo(width,height)
resizeBy(width,height)
e.screenX/e.screenY
e.clientX||e.x
e.clientY||e.y
e.offsetX/e.offsetY
history.go()
location.replace('url')
location.reload(false/true)
checkPlugin('name')
setInterval()/setTimeout()
clearInterval()
btn.addEventListener(事件,函数)
btn.removeEventListener(事件,函数)
e.stopPropagarion()
e.preventDefault()
document.cookie='变量名=值; expires='+date.toGMTString()
```



