---
order: 0
title:
    zh-CN: 基本
    en-US: Basic
---

## zh-CN

数字输入框(无操作按钮,可以添加前置、后置addon)。

## en-US

Numeric-only input box.

````jsx
import { Number } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div>
    <h4>Addon</h4>
    <Number size="large" min={1} max={10} addonBefore="最多" addonAfter="元" defaultValue={3} onChange={onChange} />
  </div>
, mountNode);
````

<style>
#components-number-demo-basic h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-number-demo-addition h4:first-child {
  margin-top: 0;
}
</style>
