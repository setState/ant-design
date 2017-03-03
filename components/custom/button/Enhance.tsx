import React, {Component} from 'React';
import classNames from 'classnames';

export type ButtonType = 'primary' | 'ghost' | 'dashed' | 'danger'
export type ButtonShape = 'circle' | 'circle-outline'
export type ButtonSize = 'small' | 'large' | 'huge'

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  promise?: boolean;
}

export default (ComposedComponent) => class Button extends Component<ButtonProps, any> {
  static Group: any;

  static SubmitGroup: any;

  static defaultProps = {
    prefixCls: 'ant-btn',
    loading: false,
    clicked: false,
    ghost: false,
  };

  static propTypes = Object.assign({}, ComposedComponent.propTypes, {
    size: React.PropTypes.oneOf(['huge', 'large', 'default', 'small']),
    promise: React.PropTypes.bool,
  });

  constructor(props) {
    super(props);
  }

  render() {
    const {
      size = '', className, prefixCls, promise,
    } = this.props;

    // huge => hg
    // large => lg
    // small => sm
    const sizeCls = ({
        huge: 'hg',
        large: 'lg',
        small: 'sm',
      })[size] || '';

    const classes = classNames(prefixCls, {
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      'promise-button': promise,
    }, className);

    const props = Object.assign({}, this.props, {className: classes});

    return <ComposedComponent {...props}/>;
  }
};
