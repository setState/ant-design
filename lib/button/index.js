'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = require('./button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _submitGroup = require('./submit-group');

var _submitGroup2 = _interopRequireDefault(_submitGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_button2["default"].Group = _buttonGroup2["default"];
_button2["default"].SubmitGroup = _submitGroup2["default"];
exports["default"] = _button2["default"];
module.exports = exports['default'];