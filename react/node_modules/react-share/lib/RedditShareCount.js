'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonp = require('jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

var _shareCountFactory = require('./utils/shareCountFactory');

var _shareCountFactory2 = _interopRequireDefault(_shareCountFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRedditShareCount(shareUrl, callback) {
  var endpoint = 'https://www.reddit.com/api/info.json?limit=1&url=' + shareUrl;

  (0, _jsonp2.default)(endpoint, { param: 'jsonp' }, function (err, response) {
    callback(!err && response && response.data && response.data.children.length > 0 && response.data.children[0].data.score ? response.data.children[0].data.score : undefined);
  });
}

exports.default = (0, _shareCountFactory2.default)(getRedditShareCount);