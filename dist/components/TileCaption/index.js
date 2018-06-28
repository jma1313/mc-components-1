'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TileCaption = function (_PureComponent) {
  _inherits(TileCaption, _PureComponent);

  function TileCaption() {
    _classCallCheck(this, TileCaption);

    return _possibleConstructorReturn(this, (TileCaption.__proto__ || Object.getPrototypeOf(TileCaption)).apply(this, arguments));
  }

  _createClass(TileCaption, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle,
          position = _props.position,
          animated = _props.animated,
          style = _props.style,
          comingSoon = _props.comingSoon;


      return _react2.default.createElement(
        'div',
        {
          className: '\n          tile-caption\n          tile-caption--' + position + '\n          ' + (animated ? 'tile-caption--animated' : '') + '\n        ',
          style: style
        },
        _react2.default.createElement(
          'div',
          { className: 'tile-caption__container' },
          comingSoon && _react2.default.createElement(
            'p',
            { className: 'tile-caption__coming-soon' },
            'Coming soon'
          ),
          _react2.default.createElement(
            'h3',
            { className: 'tile-caption__title' },
            title
          ),
          subtitle && _react2.default.createElement(
            'h4',
            { className: 'tile-caption__subtitle' },
            subtitle
          )
        )
      );
    }
  }]);

  return TileCaption;
}(_react.PureComponent);

TileCaption.propTypes = {
  title: _propTypes2.default.string.isRequired,
  subtitle: _propTypes2.default.string,
  position: _propTypes2.default.string,
  comingSoon: _propTypes2.default.bool,
  animated: _propTypes2.default.bool,
  style: _propTypes2.default.object
};
TileCaption.defaultProps = {
  comingSoon: false,
  animated: false
};
exports.default = TileCaption;