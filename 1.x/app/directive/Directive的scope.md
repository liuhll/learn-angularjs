# Directive的scope

`Directive`在默认情况下，是没有自动绑定一个`$scope`的。也就是说，在默认情况下，`Directive`无法在JavaScript中接收传入的数据（因为缺少一个存储信息的载体），形成我们期望的效果

## scope中的配置
[JavaSciprt文件](../js/app.js)中，我们对`scope`的定义使用了如下结构

```json
scope:{
    info: "="
}
```
> **Notes**(如何达到存储数据的效果)
> -  `scope:{}`是告诉这个`Directive`它需要自己存储信息（类似于建立一个基于这个`Directive`的`$scope`)
> - `info: "="` 这段配置，告诉`Directive`从`HTML`标签中，获取名为`info`的属性，并将它的值存储在`scope.info`中

## 在Directive中修改控制器中的数据
- 指令模板中使用`<input>`元素

## 以**只读**的方式传入数据
- 除了以等号`=`直接传入对象之外
- Directive也支持直接传入文本，使用`@`符号

## 在Directive中进行函数回调
- 使用到`&`符号
