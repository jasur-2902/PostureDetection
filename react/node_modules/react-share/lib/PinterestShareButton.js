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

function pinterestLink(url, _ref) {
  var media = _ref.media,
      description = _ref.description;

  (0, _assert2.default)(url, 'pinterest.url');
  (0, _assert2.default)(media, 'pinterest.media');

  return 'https://pinterest.com/pin/create/button/' + (0, _objectToGetParams2.default)({
    url: url,
    media: media,
    description: description
  });
}

var PinterestShareButton = (0, _createShareButton2.default)('pinterest', pinterestLink, function (props) {
  return {
    media: props.media,
    description: props.description
  };
}, {
  media: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string
}, {
  windowWidth: 1000,
  windowHeight: 730
});

exports.default = PinterestShareButton;