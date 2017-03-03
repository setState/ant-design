import React from 'react';
import classNames from 'classnames';

export type ButtonSize = 'small' | 'large' | 'huge'

export interface ButtonGroupProps {
  size?: ButtonSize;
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
}

export default function ButtonGroup(props: ButtonGroupProps) {
  const {prefixCls = 'ant-btn-submit-group', size = '', className, ...others} = props;

  // large => lg
  // small => sm
  const sizeCls = ({
      huge: 'hg',
      large: 'lg',
      small: 'sm',
    })[size] || '';

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
  }, className);

  return <div {...others} className={classes}/>;
}
