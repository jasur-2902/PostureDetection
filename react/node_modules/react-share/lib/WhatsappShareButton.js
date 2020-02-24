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

function isMobileOrTablet() {
  return (/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
  );
}

function whatsappLink(url, _ref) {
  var title = _ref.title,
      separator = _ref.separator;

  (0, _assert2.default)(url, 'whatsapp.url');
  return 'https://' + (isMobileOrTablet() ? 'api' : 'web') + '.whatsapp.com/send' + (0, _objectToGetParams2.default)({
    text: title ? title + separator + url : url
  });
}

var WhatsappShareButton = (0, _createShareButton2.default)('whatsapp', whatsappLink, function (props) {
  return {
    title: props.title,
    separator: props.separator
  };
}, {
  title: _propTypes2.default.string,
  separator: _propTypes2.default.string
}, {
  separator: ' ',
  windowWidth: 550,
  windowHeight: 400
});

exports.default = WhatsappShareButton;