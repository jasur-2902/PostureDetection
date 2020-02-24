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

function redditLink(url, _ref) {
  var title = _ref.title;

  (0, _assert2.default)(url, 'reddit.url');

  return 'https://www.reddit.com/submit' + (0, _objectToGetParams2.default)({
    url: url,
    title: title
  });
}

var RedditShareButton = (0, _createShareButton2.default)('reddit', redditLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

exports.default = RedditShareButton;