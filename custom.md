# 定制

分为两种

- HOC
- 原文件改写

## style

添加theme/custom

添加core/base-custom

## Button

>HOC

## Checkbox

添加`rcCheckbox`的ref,以及getValue

```jsx

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static Group = CheckboxGroup;
  static defaultProps = {
    prefixCls: 'ant-checkbox',
    indeterminate: false,
  };
  //ux start
  refs: {
    rcCheckbox: any;
  };
  //ux end
  getValue() {
    return this.refs.rcCheckbox.state.checked;
  }
  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }
  render() {
    const {
      prefixCls, style, children, className, indeterminate,
      onMouseEnter, onMouseLeave, ...restProps,
     } = this.props;
    const classString = classNames(className, {
      [`${prefixCls}-wrapper`]: true,
    });
    const checkboxClass = classNames({
      [`${prefixCls}-indeterminate`]: indeterminate,
    });
    return (
      <label
        className={classString}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <RcCheckbox
          {...restProps}
          prefixCls={prefixCls}
          className={checkboxClass}
          children={null}
          //ux
          ref="rcCheckbox"
        />
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    );
  }
}

```
