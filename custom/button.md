# 定制

分为两种


## Button

- 添加了SubmitGroup，也要支持huge size）
- button添加promise属性  
- 添加了huge size
- 添加了warning,success x

```js
  // 未添加
  handleClick = (...args) => {
    // Add click effect
    const buttonNode = findDOMNode(this);
    if (buttonNode.disabled)
      return false;
``` 
