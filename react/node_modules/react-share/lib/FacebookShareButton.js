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

function facebookLink(url, _ref) {
  var quote = _ref.quote,
      hashtag = _ref.hashtag;

  (0, _assert2.default)(url, 'facebook.url');

  return 'https://www.facebook.com/sharer/sharer.php' + (0, _objectToGetParams2.default)({
    u: url,
    quote: quote,
    hashtag: hashtag
  });
}

var FacebookShareButton = (0, _createShareButton2.default)('facebook', facebookLink, function (props) {
  /* eslint-disable no-console */
  if (props.picture) {
    console.warn('FacebookShareButton warning: picture is a deprecated prop.');
  }

  if (props.title) {
    console.warn('FacebookShareButton warning: title is a deprecated prop. Use "quote" instead.');
  }

  if (props.description) {
    console.warn('FacebookShareButton warning: description is a deprecated prop.\n      Use "quote" instead.');
  }
  /* eslint-enable no-console */

  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  quote: _propTypes2.default.string,
  hashtag: _propTypes2.default.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

exports.default = FacebookShareButton;