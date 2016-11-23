# Directive的命名和使用规则

对`Directive`的命名，AngularJS是有特殊的规则需求的。
并且，在JavaScript中的命名，与在HTML对应使用时的名称不一样！
* **注意`Directive`的命名和使用规则**

## 命名规则
AngularJS要求Directive的命名使用**驼峰式语法**
* 从第二个单词开始，每个单词的首字母大写，并且不使用连接符号

## 使用规则
- 命名和使用的对应字符串的例子

| 命名  |	使用 |
|:-----|:--------|
| people  |	people |
| peopleList | 	people-list |
| peopleListArray | 	people-list-array |

- 实际使用举例
```javascript
<people-list> </people-list>

<div people-list-array> </div>
```

## 为什么会有这种差异
- 因为`HTML`对大小写**不敏感**，而`JavaScript`对大小写**敏感**

> **Notes**
> - 为了保证`HTML`和`JavaScript`都能按原有模式正常工作，`AngularJS`提出了这套解决方法

## 怎么实现的？
AngularJS在解析HTML时，会将名称取出（如`people-list-array`)，并进行一下两个方面的处理：
1. 去除字段的 `x-`或 `data-` 头。(`people-list-array`)
2. 将字段中的连接符号去除，并将第二个单词开始改为首字母大写，其他字母小写。(`[people,List,Array]`)
3. 然后合并起来。（`peopleListArray`)

## 连接符
- AngularJS支持的连接符

| 符号 | 	示例 |
|:------:|:--------:|
| 减号( `- `)  |	`people-list` |
| 冒号( `:` )  |	`people:list` |
| 下划线(` _` ) | 	`people_list` |

> **Notes**
> - 实际使用中，推荐使用减号作为连接符。其他的两种符号，只是因为历史原因提供了支持，但是并**不推荐使用**

## 为什么要先去除data-/x-部分
- `data-/x-` 存在的原因是需要符合HTML5标准
- 我们在`ng-app`和`ng-controller`前加上`data-`前缀，则可以通过HTML5的验证
