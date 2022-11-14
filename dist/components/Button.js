"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _core = require("@material-ui/core");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CustomizedButton = props => {
  const {
    variant,
    color,
    size,
    onClick,
    btnText
  } = props;
  return /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: variant || "outlined",
    color: color || "secondary",
    size: size || "medium",
    onClick: onClick
  }, "hard coded text ");
};
var _default = CustomizedButton;
exports.default = _default;