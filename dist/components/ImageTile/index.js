'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageTile = function (_PureComponent) {
  _inherits(ImageTile, _PureComponent);

  function ImageTile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageTile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageTile.__proto__ || Object.getPrototypeOf(ImageTile)).call.apply(_ref, [this].concat(args))), _this), _this.backgroundStyle = function (imagePath) {
      var backgroundGradient = _this.props.backgroundGradient;

      var backgroundImageStyle = 'url(\'' + imagePath + '\')';
      if (backgroundGradient) {
        backgroundImageStyle = '\n        linear-gradient(to top, #000, rgba(0,0,0,.75) 20%, rgba(0,0,0, 0) 40%),\n        ' + backgroundImageStyle + '\n      ';
      }
      return {
        backgroundImage: backgroundImageStyle
      };
    }, _this.animationStyles = function (style) {
      switch (style) {
        case 'hover-zoom':
          return 'tile--hover-zoom';
        default:
          return 'tile--no-hover';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageTile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          animationStyle = _props.animationStyle,
          aspectRatio = _props.aspectRatio,
          className = _props.className,
          children = _props.children,
          imageUrl = _props.imageUrl,
          width = _props.width;

      var classNames = (0, _classnames2.default)('tile', 'tile--' + aspectRatio, this.animationStyles(animationStyle), _defineProperty({}, className, Boolean(className)));

      var style = width ? {
        width: width + 'px',
        height: function () {
          var aspectRatioArr = aspectRatio.split('x');
          var widthRatio = aspectRatioArr[0];
          var heigthRatio = aspectRatioArr[1];

          return width * heigthRatio / widthRatio;
        }()
      } : null;

      return _react2.default.createElement(
        'div',
        {
          className: classNames,
          style: style },
        _react2.default.createElement('div', {
          className: 'background',
          style: this.backgroundStyle(imageUrl)
        }),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          children
        )
      );
    }
  }]);

  return ImageTile;
}(_react.PureComponent);

ImageTile.propTypes = {
  animationStyle: _propTypes2.default.string,
  aspectRatio: _propTypes2.default.oneOf(['4x3', '16x9', '100x65', '1000x609', '519x187']),
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  imageUrl: _propTypes2.default.string.isRequired,
  backgroundGradient: _propTypes2.default.bool,
  width: _propTypes2.default.number
};
ImageTile.defaultProps = {
  aspectRatio: '16x9',
  className: '',
  backgroundGradient: true
};
exports.default = ImageTile;