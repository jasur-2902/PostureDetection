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

function telegramLink(url, _ref) {
  var title = _ref.title;

  (0, _assert2.default)(url, 'telegram.url');

  return 'https://telegram.me/share/' + (0, _objectToGetParams2.default)({
    url: url,
    text: title
  });
}

var TelegramShareButton = (0, _createShareButton2.default)('telegram', telegramLink, function (props) {
  return {
    title: props.title,
    via: props.via
  };
}, {
  title: _propTypes2.default.string,
  via: _propTypes2.default.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

exports.default = TelegramShareButton;