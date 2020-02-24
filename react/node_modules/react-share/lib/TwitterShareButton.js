'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _objectToGetParams = require('./utils/objectToGetParams');

var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);

var _createShareButton = require('./utils/createShareButton');

var _createShareButton2 = _interopRequireDefault(_createShareButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function twitterLink(url, _ref) {
  var title = _ref.title,
      via = _ref.via,
      _ref$hashtags = _ref.hashtags,
      hashtags = _ref$hashtags === undefined ? [] : _ref$hashtags;

  (0, _assert2.default)(url, 'twitter.url');
  (0, _assert2.default)(Array.isArray(hashtags), 'twitter.hashtags is not an array');

  return 'https://twitter.com/share' + (0, _objectToGetParams2.default)({
    url: url,
    text: title,
    via: via,
    hashtags: hashtags.join(',')
  });
}

var TwitterShareButton = (0, _createShareButton2.default)('twitter', twitterLink, function (props) {
  return {
    hashtags: props.hashtags,
    title: props.title,
    via: props.via
  };
}, {
  hashtags: _propTypes2.default.arrayOf(_propTypes2.default.string),
  title: _propTypes2.default.string,
  via: _propTypes2.default.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

exports.default = TwitterShareButton;