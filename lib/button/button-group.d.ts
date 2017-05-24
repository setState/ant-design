/// <reference types="react" />
import React from 'react';
export declare type ButtonSize = 'small' | 'large' | 'huge';
export interface ButtonGroupProps {
    size?: ButtonSize;
    style?: React.CSSProperties;
    className?: string;
    prefixCls?: string;
}
export default function ButtonGroup(props: ButtonGroupProps): JSX.Element;
