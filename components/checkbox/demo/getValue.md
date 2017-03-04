---
order: 5
title:
    zh-CN: 获取是否选中
    en-US: getValue
---

## zh-CN

通过ref获取checkbox的值。

## en-US


````jsx
import { Checkbox, Button } from 'antd';

class App extends React.Component {
  state = {
    checked: true,
  };
  onClick = () => {
    this.setState({ checked: this.refs.cBox.getValue() });
  };
  render() {
    return (
      <div>
        <p style={{ marginBottom: '20px' }}>
          <Checkbox ref="cBox">
            checkbox
          </Checkbox>
        </p>
        <p>
          <span>{this.state.checked ? 'checked' : 'uncheked'}</span>
          <Button type="primary" size="small"
            onClick={this.onClick}
          >
            获取值
          </Button>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
