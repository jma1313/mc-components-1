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

var ScaleContainer = function (_PureComponent) {
  _inherits(ScaleContainer, _PureComponent);

  function ScaleContainer() {
    _classCallCheck(this, ScaleContainer);

    var _this = _possibleConstructorReturn(this, (ScaleContainer.__proto__ || Object.getPrototypeOf(ScaleContainer)).call(this));

    _this.state = {
      hoverClass: '',
      zoomClass: '',
      hoverTimer: undefined,
      zoomTimer: undefined,
      scale: 1,
      style: {}
    };

    _this.onMouseEnter = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          timeToScale = _this$props.timeToScale,
          hoverClassDelay = _this$props.hoverClassDelay,
          onMouseEnter = _this$props.onMouseEnter;

      onMouseEnter();
      var hoverTimer = _this.state.hoverTimer;

      clearTimeout(hoverTimer);
      setTimeout(_this.addHoverClass, hoverClassDelay);
      var zoomTimer = setTimeout(_this.addZoomClass, timeToScale);
      _this.setState({ zoomTimer: zoomTimer });
    };

    _this.onMouseLeave = function (e) {
      e.preventDefault();
      var timeToScale = _this.props.timeToScale;
      var zoomTimer = _this.state.zoomTimer;

      clearTimeout(zoomTimer);
      _this.removeZoomClass();
      var hoverTimer = setTimeout(_this.removeHoverClass, timeToScale);
      _this.setState({ hoverTimer: hoverTimer });
    };

    _this.addHoverClass = function () {
      var hoverClass = _this.props.hoverClass;

      _this.setState({ hoverClass: hoverClass });
    };

    _this.removeHoverClass = function () {
      _this.setState({ hoverClass: '' });
    };

    _this.addZoomClass = function () {
      var containerWidth = _this.containerRef.current.clientWidth;
      var gridGutter = 30;
      var tileZoom = containerWidth + gridGutter * 2;
      // prevent window overflow
      var bodyWidth = document.getElementsByTagName('body')[0].clientWidth;
      var scaledWidth = bodyWidth > tileZoom ? tileZoom : bodyWidth;
      var scale = scaledWidth / containerWidth;
      var zoomClass = _this.props.zoomClass;

      _this.setState({
        zoomClass: zoomClass,
        scale: scale,
        style: { transform: 'scale(' + scale + ')' }
      });
    };

    _this.removeZoomClass = function () {
      _this.setState({
        zoomClass: '',
        scale: 1,
        style: {}
      });
    };

    _this.containerRef = _react2.default.createRef();
    return _this;
  }

  _createClass(ScaleContainer, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var zoomTimer = this.state.zoomTimer;

      clearTimeout(zoomTimer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;
      var _state = this.state,
          hoverClass = _state.hoverClass,
          zoomClass = _state.zoomClass,
          style = _state.style,
          scale = _state.scale;

      var reverseScale = 1 / scale;

      return _react2.default.createElement(
        'div',
        {
          className: className + ' ' + hoverClass + ' ' + zoomClass,
          style: style,
          ref: this.containerRef,
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave
        },
        children(Boolean(zoomClass), reverseScale)
      );
    }
  }]);

  return ScaleContainer;
}(_react.PureComponent);

ScaleContainer.propTypes = {
  children: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  hoverClass: _propTypes2.default.string,
  zoomClass: _propTypes2.default.string,
  timeToScale: _propTypes2.default.number,
  hoverClassDelay: _propTypes2.default.number,
  onMouseEnter: _propTypes2.default.func
};
ScaleContainer.defaultProps = {
  className: '',
  hoverClass: '',
  zoomClass: '',
  timeToScale: 500,
  hoverClassDelay: 200,
  onMouseEnter: function onMouseEnter() {}
};
exports.default = ScaleContainer;