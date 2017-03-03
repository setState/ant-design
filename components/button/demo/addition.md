---
order: 9
title:
  zh-CN: 补充功能
  en-US: Addition
---

## zh-CN

可以将多个 `Button` 放入 `Button.SubmitGroup` 的容器中。

通过设置 `size` 为 `huge` `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。

## en-US


````jsx
import { Button } from 'antd';
const SubmitGroup = Button.SubmitGroup;

ReactDOM.render(
  <div>
    <h4>Huge Size</h4>
    <Button type="primary" size="huge">Huge</Button>

    <h4>SubmitGroup</h4>
    <Button type="primary" promise>promise</Button>

    <h4>SubmitGroup</h4>
    <SubmitGroup size="huge">
      <Button size="huge">返回</Button>
      <Button size="huge" type="primary">提交</Button>
    </SubmitGroup>

  </div>,
  mountNode
);
````

<style>
#components-button-demo-addition h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-addition h4:first-child {
  margin-top: 0;
}
#components-button-demo-addition .ant-btn-group {
  margin-right: 8px;
}
</style>
