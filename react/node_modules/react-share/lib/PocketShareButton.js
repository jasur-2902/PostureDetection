'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _createShareButton = require('./utils/createShareButton');

var _createShareButton2 = _interopRequireDefault(_createShareButton);

var _objectToGetParams = require('./utils/objectToGetParams');

var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pocketLink(url, _ref) {
  var title = _ref.title;

  (0, _assert2.default)(url, 'pocket.url');

  return 'https://getpocket.com/save' + (0, _objectToGetParams2.default)({
    url: url,
    title: title
  });
}

var PocketShareButton = (0, _createShareButton2.default)('pocket', pocketLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: _propTypes2.default.string
}, {
  windowWidth: 500,
  windowHeight: 500
});

exports.default = PocketShareButton;