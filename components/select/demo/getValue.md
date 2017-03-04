---
order: 12
title:
    zh-CN: 获取选中值
    en-US: getValue
---

## zh-CN

通过ref获取Select中的选中值。

`this.refs.select.getValue()`

## en-US


````jsx
import { Select, Button } from 'antd';
const Option = Select.Option;

class App extends React.Component {
  state = {
    value: '',
  };
  onClick = () => {
    this.setState({ value: JSON.stringify(this.refs.select.getValue()) });
  };
  render() {
    return (
      <div>
        <p style={{ marginBottom: '20px' }}>
          <span>结果: {this.state.value}</span>
        </p>
        <Select
          ref="select"
          style={{ width: 120 }}
          allowClear
        >
          <Option value="lucy" extra={{ mike: true }}>Lucy</Option>
        </Select>
        <Button type="primary" onClick={this.onClick}>
          获取值
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
