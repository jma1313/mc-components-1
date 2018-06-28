'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoProgress = function VideoProgress(_ref) {
  var _ref$progress = _ref.progress,
      progress = _ref$progress === undefined ? 30 : _ref$progress;
  return _react2.default.createElement(
    'div',
    { className: 'video-progress' },
    _react2.default.createElement('div', {
      style: { width: progress + '%' },
      className: 'video-progress__completed'
    })
  );
};

VideoProgress.propTypes = {
  progress: _propTypes2.default.number
};

exports.default = VideoProgress;