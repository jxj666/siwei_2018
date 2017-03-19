# DOM

# DOM Tree

### 网页中的一切内容都是节点(Node)对象

### 网页中的所有节点都是以树形结构存储

### 根节点:document

### 节点对象三大属性

#### nodeType:区分节点的类型

1. document         9
2. elem             1
3. attr                2
4. text               3

##### 何时

###### 仅区分元素节点还是文本节点时

##### 问题: 

###### 无法进一步判断元素节点的名称

#### nodeName:获取节点名称

1. document       #document
2. elem            全大写标签名
3. attr              属性名
4. text              #text

##### 何时

###### 只要判断元素的名称时

#### nodeValue

##### 节点值

1. document       null
2. elem            null
3. attr              属性值
4. text              文本内容



# DOM操作的固定套路

找触发事件的元素/绑事件

找要修改的元素/修改元素



# 查找

### 按节点间关系查找

#### 何时

##### 已经获得一个节点对象，要找周围的相关节点时

#### 节点树

##### 包含所有网页内容(元素和文本...)的树结构

##### 2大类关系

###### 1. 父子

-  parentNode

-  最靠谱

-  childNodes

-  所有直接子节点

-  firstChild

-  lastChild

###### 2. 兄弟

-  previousSibling

-  nextSibling

##### 优: 全

##### 问题: 

###### 受看不见的换行和空字符的干扰

##### 解决

#### 元素树

##### 仅包含元素节点的树结构

###### 不是一棵新树，仅是节点树的子集

##### 2大类关系

###### 1. 父子

-  parentElement

-  没有node结尾

-  children

-  所有直接子元素

-  IE8+

-  firstElementChild

-  lastElementChild

###### 2. 兄弟

-  previousElementSibling

-  nextElementSibling

##### 优: 不受看不见的换行和空字符的干扰

##### 缺: 不包含一切文本节点

###### 可用.innerHTML

##### 兼容性问题： IE9+

#### childNodes和children

##### 都返回动态集合（live collection）

###### 不实际存储数据，每次访问集合，都重新查找DOM树

###### 优: 

-  首次查找返回速度快

###### 缺: 

-  易造成反复查找DOM树

###### 遍历

```
for(var i=0,len=children.length;i<len;i++)   
```

### 用查找API

#### 何时:

##### 没有获得任何节点之前，在整个页面查找想要的元素

##### 已获得父元素，需要查找其下的符合条件的子元素

#### 按HTML查找

##### 按id

###### var elem=document.getElementById("id")

###### 强调: 只能用在document上

##### 按标签名

###### var elems=parent.getElementsByTagName("标签名")

###### 强调: 

-  可用在任意父元素上

-  返回动态集合

-  不仅查找直接子元素，且查找所有子代元素

##### 按name

###### var elems=document.getElementsByName("name")

###### 强调: 

-  只能在document上调用

##### 按class

###### var elems=parent.getElementsByClassName("class")

###### 强调: 

-  兼容性问题

-  IE9+

#### 按选择器查找

##### Selector API

###### jQuery的核心

##### 只找一个

###### var elem=parent.querySelector("selector")

##### 找所有符合条件的多个

###### var elems=parent.querySelectorAll("selector")

#### 按HTML vs 按选择器

##### 1. 返回值: 

###### getXXX

-  返回动态集合

###### selector API

-  返回非动态集合

-  直接存储所有数据，反复访问集合，不需要反复查找DOM树

##### 2. 首次查询效率

###### getXXX更高

-  仅返回需要的内容，不需要准备完整数据

###### selector API低

-  每次都要返回完整数据

##### 3. 难易: 

###### getXXX繁琐

-  何时

-  如果只找一次即可获得想要的元素时

###### selector API简单

-  何时

-  如果需要多级复杂条件查找才能获得想要的元素时

# 修改

### 内容

#### .innerHTML

##### 获取或设置开始标签到结束标签之间的html代码片段

#### .textContent

##### 获取或设置开始标签到结束标签之间的纯文本内容

###### 去掉所有标签

###### 翻译转义字符为原文

##### IE8: 

###### .innerText

### 属性

#### HTML标准属性

##### 核心DOM

###### 操作一切结构化文档的通用API

-  即可操作HTML，又可操作XML

###### 特点

-  优:万能

-  缺:繁琐

###### 获取

-  获得属性节点对象

-  var attrNode=elem.attributes[i/属性名]
                               .getAttributeNode("属性名")

-  var value=attrNode.value

-  var value=elem.getAttribute("属性名")

###### 修改

-  elem.setAttribute("属性名",属性值)

-  如果属性不存在，也可set

###### 判断是否包含

-  var bool=elem.hasAttribute("属性名")

###### 移除

-  elem.removeAttribute("属性名")

-  只移除开始标签中的attribute，不删除内存中对象的property

###### 问题:

-  只能操作出现在开始标签中的attribute

-  不能操作: 

-  .checked  .selected   .disabled

###### 解决

##### HTML DOM

###### 专门操作HTML文档的简化版API

-  只对部分常用API进行简化

###### 特点: 

-  优:简单

-  缺:不是万能

-  需要核心DOM的补充

###### 如何

-  elem.属性名

###### 优: 

-  直接访问内存中的property属性

-  还可操作: 

-  .checked   .selected   .disabled

#### 扩展(自定义)属性

##### 核心DOM

##### HTML5

###### 定义属性时: 

-  data-属性名="值"

###### 访问: 

-  elem.dataset.属性名

##### HTML DOM无法访问扩展属性

#### property vs attribute

##### attribute

###### 出现在开始标签中的属性

##### property

###### 保存在内存中对象中的属性

##### 标准属性

###### 绝大多数标准属性（除三个状态外）都即是attribute又是property

##### 自定义扩展属性

###### 只是attribute:不能用HTML DOM访问

### 样式

#### 内联样式： 

##### 特点

###### 1. 不重用

###### 2. 优先级最高

##### elem.style.样式属性名

##### 强调: 

###### 样式属性名要去横线变驼峰

##### 问题:

###### 只能获得内联样式:无法访问从样式表层叠或继承来的完整样式

##### 解决

###### 今后只要修改一个元素的样式: elem.style.css属性名=值

###### 今后只要获取一个元素的样式:getComputedStyle(elem).css属性名

-  只读

#### 内部/外部样式表

##### 获取一个元素计算后的完整样式:

###### var style=getComputedStyle(elem对象)

###### var value=style.样式属性名

###### 强调: 通过getComputedStyle获得的样式对象是只读

##### 修改样式表中的样式

###### var sheet=document.styleSheets[i]

###### var rule=sheet.cssRules[i]

###### rule.style.样式属性=值

#### 总结

##### 修改一个元素的样式都是先定义一套class，再按照需要设置元素的class属性

# 添加和删除

### 3步

#### 创建新元素对象

##### var elem=document.createElement("标签名")

#### 设置关键属性

#### 将元素添加到DOM树

##### parent.appendChild(child)

##### parent.insertBefore(child,oldChild)

##### parent.replaceChild(child,oldChild)

### 问题: 

#### 每操作一次DOM树，都会导致重新layout

### 解决

#### 优化

##### 尽量少的操作DOM树

###### 如果同时添加父元素和子元素

在内存中将子元素添加到父元素/再将父元素一次性添加到DOM树上

###### 如果同时添加多个平级子元素

-  使用文档片段

-  3步:

-  创建文档片段

  var frag=document.createDocumentFragment();

-  将子元素临时添加到frag中

 frag.appendChild(child)

-  将frag添加到DOM树

 parent.appendChild(frag)

-  强调: frag不会成为页面元素，添加子元素后，frag自动释放

### 删除

#### parent.removeChild(child)





# HTML DOM常用对象

### Image

#### var img=new Image();

### Select/Option

#### 属性

##### options

###### 获得当前select下所有option的集合

###### Option

-  创建

-  var opt=new Option(text,value)

-  属性

-  text,value,index

##### length

###### 等效于

-  .options.length

-  清除所有option

-  .length=0

##### selectedIndex

###### 当前选中项的下标

##### value

###### 当前选中项的value

-  如果选中项没有value，则使用text

#### 事件

##### onchange

#### 方法

##### sel.add(option)

##### sel.remove(i)

### Table/...

#### 创建

##### var thead=.createTHead()

###### tHead

-  创建

 var tr=.insertRow(i)

 省略i，默认表示末尾追加

 tr

 创建

 var td=.insertCell(i)

 删除

 .deleteCell(i)

 获取

 .cells

-  删除

 .deleteRow(i)

-  获取

 .rows

##### var tbody=.createTBody()

##### var tfoot=.createTFoot()

#### 删除

##### .deleteTHead()

##### .deleteTFoot()

#### 获取

##### .tHead

##### .tBodies[i]

###### tBody

##### .tFoot

#### .rows

##### 删除行

###### 行分组.deleteRow(i)

-  i是相对于当前行分组内的位置

###### table.deleteRow(tr.rowIndex)

-  rowIndex是相对于整个表中的位置

### Form

#### 获取:

##### var form=document.forms[i/id/name]

#### 属性:

##### .elements

###### 获得所有*表单*元素的集合

##### .length

###### 获得所有表单元素的个数

#### 方法:

##### form.submit()

###### 手动提交

-  一般放在 input type="button" onclick="..."

#### 事件

##### form.onsubmit()

###### 无论以任何方式提交表单之前，都自动触发

-  专门用于验证所有！

-  不同调用submit()

-  如果未通过，就取消事件e.preventDefault()

#### 获得表单中的元素

##### 获得任意表单元素: 

###### form.elements[i/id/name]

##### 只获得带name属性的某个元素

###### form.name

##### element

###### .focus()

###### .blur()

# 在html中绑定事件

### 在HTML中绑定事件

#### <ANY onclick="js语句(this)"

##### 当单击ANY元素时，自动执行js语句

##### 问题: 

###### 经常需要快速获得当前元素

##### 解决: 

###### <button onclick="calc(this)"

-  this指事件绑定所在的当前元素对象

-  function calc(btn){ btn->当前点击的按钮对象 }

##### 问题: 

###### 1. 不符合内容与行为分离的原则

-  不便于维护

###### 2. 如果动态生成的元素，无法手动添加事件绑定

##### 解决:

###### 所有事件绑定，必须在js中集中完成

### 在js中动态绑定事件

ANY.on事件名=function(){
    this->ANY元素
}
