'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _VideoProgress = require('../VideoProgress');

var _VideoProgress2 = _interopRequireDefault(_VideoProgress);

var _BrightcoveVideo = require('../Video/BrightcoveVideo');

var _BrightcoveVideo2 = _interopRequireDefault(_BrightcoveVideo);

var _ScaleContainer = require('../ScaleContainer');

var _ScaleContainer2 = _interopRequireDefault(_ScaleContainer);

var _playWithCircle = require('../../assets/play-with-circle.svg');

var _playWithCircle2 = _interopRequireDefault(_playWithCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoTile = function (_PureComponent) {
  _inherits(VideoTile, _PureComponent);

  function VideoTile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoTile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoTile.__proto__ || Object.getPrototypeOf(VideoTile)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      startLoadingVideo: false,
      videoReady: false
    }, _this.onMouseEnter = function () {
      _this.setState({ startLoadingVideo: true });
    }, _this.onVideoReady = function () {
      _this.setState({ videoReady: true });
    }, _this.handleClick = function () {
      if (_this.props.onClick) {
        _this.props.onClick();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoTile, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          showPlayIcon = _props.showPlayIcon,
          showBackgroundGradient = _props.showBackgroundGradient,
          slug = _props.slug,
          brightcoveVideoId = _props.brightcoveVideoId,
          progress = _props.progress,
          imageUrl = _props.imageUrl,
          saveVideoProgress = _props.saveVideoProgress,
          children = _props.children;
      var _state = this.state,
          startLoadingVideo = _state.startLoadingVideo,
          videoReady = _state.videoReady;


      return _react2.default.createElement(
        _ScaleContainer2.default,
        {
          className: 'video-tile',
          hoverClass: 'video-tile--hover',
          zoomClass: 'video-tile--zoom',
          onMouseEnter: this.onMouseEnter
        },
        function (isScaled, reverseScale) {
          return _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'a',
              { href: slug, onClick: _this2.handleClick },
              _react2.default.createElement(
                _BrightcoveVideo2.default,
                {
                  onVideoReady: _this2.onVideoReady,
                  startLoading: startLoadingVideo,
                  show: videoReady && Boolean(isScaled),
                  imageBackground: imageUrl,
                  backgroundGradient: showBackgroundGradient,
                  videoId: brightcoveVideoId,
                  progress: progress,
                  saveVideoProgress: saveVideoProgress
                },
                showPlayIcon && _react2.default.createElement(
                  _react.Fragment,
                  null,
                  _react2.default.createElement('img', {
                    src: _playWithCircle2.default,
                    className: 'play-center-image',
                    alt: 'play'
                  }),
                  _react2.default.createElement(_VideoProgress2.default, { progress: progress })
                )
              )
            ),
            children(isScaled, reverseScale)
          );
        }
      );
    }
  }]);

  return VideoTile;
}(_react.PureComponent);

VideoTile.propTypes = {
  slug: _propTypes2.default.string.isRequired,
  brightcoveVideoId: _propTypes2.default.string.isRequired,
  imageUrl: _propTypes2.default.string.isRequired,
  saveVideoProgress: _propTypes2.default.func,
  showPlayIcon: _propTypes2.default.bool,
  showBackgroundGradient: _propTypes2.default.bool,
  progress: _propTypes2.default.number,
  children: _propTypes2.default.func,
  onClick: _propTypes2.default.func
};
VideoTile.defaultProps = {
  showPlayIcon: true,
  showBackgroundGradient: false,
  progress: 0,
  saveVideoProgress: function saveVideoProgress() {}
};
exports.default = VideoTile;