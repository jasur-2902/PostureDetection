'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonp = require('jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

var _objectToGetParams = require('./utils/objectToGetParams');

var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);

var _shareCountFactory = require('./utils/shareCountFactory');

var _shareCountFactory2 = _interopRequireDefault(_shareCountFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPinterestShareCount(shareUrl, callback) {
  var url = 'https://api.pinterest.com/v1/urls/count.json';

  return (0, _jsonp2.default)(url + (0, _objectToGetParams2.default)({
    url: shareUrl
  }), function (err, data) {
    callback(data ? data.count : undefined);
  });
}

exports.default = (0, _shareCountFactory2.default)(getPinterestShareCount);