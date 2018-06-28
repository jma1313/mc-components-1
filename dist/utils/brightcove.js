'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var accountId = process.env.BRIGHTCOVE_ACCOUNT_ID;
var playerId = process.env.BRIGHTCOVE_PLAYER_ID;

var brightcove = function () {
  function brightcove() {
    _classCallCheck(this, brightcove);
  }

  _createClass(brightcove, null, [{
    key: 'init',
    value: function init() {
      return new Promise(function (resolve) {
        var s = document.createElement('script');
        s.src = '//players.brightcove.net/' + accountId + '/' + playerId + '_default/index.min.js';
        // Add the script tag to the document
        document.body.appendChild(s);
        s.onload = resolve;
      });
    }
  }, {
    key: 'createPlayerHTML',
    value: function createPlayerHTML(_ref) {
      var id = _ref.id,
          htmlId = _ref.htmlId;

      var playerHTML = '\n      <video\n        id=' + htmlId + '\n        data-video-id="' + id + '"\n        data-account="' + accountId + '"\n        data-player="' + playerId + '"\n        data-embed="default"\n        class="video-js mc-brightcove-player brightcove-default-theme"\n        data-application-id\n        autoplay\n        muted\n      >\n      </video>\n    ';
      return playerHTML;
    }
  }]);

  return brightcove;
}();

exports.default = brightcove;