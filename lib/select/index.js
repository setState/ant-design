'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSelect = require('rc-select');

var _rcSelect2 = _interopRequireDefault(_rcSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

// => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };
var Select = function (_React$Component) {
    (0, _inherits3["default"])(Select, _React$Component);

    function Select() {
        (0, _classCallCheck3["default"])(this, Select);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.getValue = function () {
            // 禁止使用 this.refs.rcSelect.setValue()
            var rcValue = _this.refs.rcSelect.getValue();
            // 用副本吧，不要返回原对象
            return rcValue.map(function (item) {
                var key = item.key,
                    label = item.label;

                var result = {
                    value: key,
                    child: label,
                    extra: {}
                };
                if (item.extra) {
                    result.extra = __assign({}, item.extra);
                } else {
                    delete result.extra;
                }
                return result;
            });
        };
        return _this;
    }

    Select.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            _props$className = _props.className,
            className = _props$className === undefined ? '' : _props$className,
            size = _props.size,
            combobox = _props.combobox;
        var _props2 = this.props,
            _props2$notFoundConte = _props2.notFoundContent,
            notFoundContent = _props2$notFoundConte === undefined ? 'Not Found' : _props2$notFoundConte,
            optionLabelProp = _props2.optionLabelProp;

        var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-sm', size === 'small'), _classNames), className);
        var antLocale = this.context.antLocale;

        if (antLocale && antLocale.Select) {
            notFoundContent = 'notFoundContent' in this.props ? notFoundContent : antLocale.Select.notFoundContent;
        }
        if (combobox) {
            notFoundContent = null;
            // children 带 dom 结构时，无法填入输入框
            optionLabelProp = optionLabelProp || 'value';
        }
        return _react2["default"].createElement(_rcSelect2["default"], (0, _extends3["default"])({}, this.props, { className: cls, optionLabelProp: optionLabelProp || 'children', notFoundContent: notFoundContent, ref: 'rcSelect' }));
    };

    return Select;
}(_react2["default"].Component);

exports["default"] = Select;

Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
Select.defaultProps = {
    prefixCls: 'ant-select',
    showSearch: false,
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom'
};
Select.propTypes = {
    prefixCls: _react.PropTypes.string,
    className: _react.PropTypes.string,
    size: _react.PropTypes.oneOf(['default', 'large', 'small']),
    combobox: _react.PropTypes.bool,
    notFoundContent: _react.PropTypes.any,
    showSearch: _react.PropTypes.bool,
    optionLabelProp: _react.PropTypes.string,
    transitionName: _react.PropTypes.string,
    choiceTransitionName: _react.PropTypes.string
};
module.exports = exports['default'];