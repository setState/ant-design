# 定制

分为两种

- HOC
- 原文件改写

## Button

> HOC

- 添加了SubmitGroup，也要支持huge size
- button添加promise属性
- 添加了huge size
- 添加了warning,success

```js
  handleClick = (...args) => {
    // Add click effect
    const buttonNode = findDOMNode(this);
    if (buttonNode.disabled)
      return false;
``` 
