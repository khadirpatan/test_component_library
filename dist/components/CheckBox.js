"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _core = require("@material-ui/core");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CustomisedCheckBox = props => {
  const {
    checked,
    onChange,
    color
  } = props;
  return /*#__PURE__*/_react.default.createElement(_core.Checkbox, {
    checked: checked || false,
    onChange: onChange,
    name: "checked",
    color: color || "secondary"
  });
};
var _default = CustomisedCheckBox;
exports.default = _default;