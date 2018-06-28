'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _AudioButton = require('../../AudioButton');

var _AudioButton2 = _interopRequireDefault(_AudioButton);

var _brightcove = require('../../../utils/brightcove');

var _brightcove2 = _interopRequireDefault(_brightcove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrightcoveVideo = function (_Component) {
  _inherits(BrightcoveVideo, _Component);

  function BrightcoveVideo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BrightcoveVideo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BrightcoveVideo.__proto__ || Object.getPrototypeOf(BrightcoveVideo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      opacity: 0,
      myPlayer: undefined,
      readyToPlay: false,
      isMuted: true
    }, _this.videoContainer = _react2.default.createRef(), _this.createPlayer = function () {
      var _this$props = _this.props,
          videoId = _this$props.videoId,
          progress = _this$props.progress,
          onVideoReady = _this$props.onVideoReady;

      var videoHtmlId = 'video-' + videoId + '-' + (0, _v2.default)();
      var playerHTML = _brightcove2.default.createPlayerHTML({
        id: videoId,
        htmlId: videoHtmlId
      });
      _this.videoContainer.current.innerHTML = playerHTML;
      _brightcove2.default.init().then(function () {
        var _window = window,
            videojs = _window.videojs;

        var myPlayer = videojs(videoHtmlId);
        myPlayer.ready(function () {
          myPlayer.on('loadedmetadata', function () {
            var currentTime = myPlayer.duration() * (progress / 100);
            myPlayer.currentTime(currentTime);
            _this.setState({ myPlayer: myPlayer });
          });
          myPlayer.on('canplay', function () {
            onVideoReady();
            myPlayer.play();
            _this.setState({ opacity: 1, readyToPlay: true });
          });
        });
      });
    }, _this.enableSound = function (e) {
      e.preventDefault();
      var isMuted = _this.state.isMuted;
      var myPlayer = _this.state.myPlayer;

      myPlayer.muted(!isMuted);
      _this.setState({ isMuted: !isMuted });
    }, _this.backgroundStyle = function () {
      var _this$props2 = _this.props,
          imageBackground = _this$props2.imageBackground,
          show = _this$props2.show,
          backgroundGradient = _this$props2.backgroundGradient;

      var backgroundImageStyle = 'url(\'' + imageBackground + '\')';
      if (backgroundGradient) {
        backgroundImageStyle = '\n        linear-gradient(to top, #000, rgba(0,0,0,.75) 20%, rgba(0,0,0, 0) 40%),\n        ' + backgroundImageStyle + '\n      ';
      }
      return {
        backgroundImage: backgroundImageStyle,
        opacity: show ? 0 : 1,
        transition: 'opacity .75s'
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BrightcoveVideo, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _state = this.state,
          myPlayer = _state.myPlayer,
          readyToPlay = _state.readyToPlay;
      var _props = this.props,
          show = _props.show,
          startLoading = _props.startLoading,
          saveVideoProgress = _props.saveVideoProgress;

      var shouldShow = !show && nextProps.show;
      var shouldHide = show && !nextProps.show;
      var shouldStartLoading = !startLoading && nextProps.startLoading;
      if (shouldStartLoading) {
        if (!myPlayer) {
          this.createPlayer();
        }
      }
      if (shouldShow) {
        if (myPlayer && readyToPlay) {
          this.setState({ opacity: 1 });
          myPlayer.play();
          myPlayer.show();
        }
      } else if (shouldHide && myPlayer) {
        this.setState({ opacity: 0 });
        // prettier-ignore
        var progress = myPlayer.currentTime() * 100 / myPlayer.duration();
        saveVideoProgress(progress);
        myPlayer.pause();
        myPlayer.hide();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          show = _props2.show,
          children = _props2.children;
      var _state2 = this.state,
          opacity = _state2.opacity,
          isMuted = _state2.isMuted;


      return _react2.default.createElement(
        'div',
        {
          className: 'tile tile--1000x609 tile--no-hover'
        },
        show && _react2.default.createElement(
          'div',
          { className: 'mc-brightcove__audio', onClick: this.enableSound },
          _react2.default.createElement(_AudioButton2.default, { isMuted: isMuted })
        ),
        _react2.default.createElement('div', {
          ref: this.videoContainer,
          className: 'mc-brightcove-container',
          style: {
            opacity: opacity,
            display: show ? 'block' : 'none',
            transition: 'opacity .75s'
          }
        }),
        _react2.default.createElement('div', {
          className: 'background',
          style: this.backgroundStyle()
        }),
        !show && _react2.default.createElement(
          'div',
          { className: 'content' },
          children
        )
      );
    }
  }]);

  return BrightcoveVideo;
}(_react.Component);

BrightcoveVideo.propTypes = {
  videoId: _propTypes2.default.string.isRequired,
  onVideoReady: _propTypes2.default.func.isRequired,
  saveVideoProgress: _propTypes2.default.func.isRequired,
  show: _propTypes2.default.bool,
  startLoading: _propTypes2.default.bool,
  progress: _propTypes2.default.number,
  children: _propTypes2.default.node,
  imageBackground: _propTypes2.default.string,
  backgroundGradient: _propTypes2.default.bool
};
BrightcoveVideo.defaultProps = {
  show: false,
  startLoading: false,
  progress: 0
};
exports.default = BrightcoveVideo;