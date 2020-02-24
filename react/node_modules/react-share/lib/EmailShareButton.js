'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectToGetParams = require('./utils/objectToGetParams');

var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);

var _createShareButton = require('./utils/createShareButton');

var _createShareButton2 = _interopRequireDefault(_createShareButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function emailLink(url, _ref) {
  var subject = _ref.subject,
      body = _ref.body,
      separator = _ref.separator;

  return 'mailto:' + (0, _objectToGetParams2.default)({ subject: subject, body: body ? body + separator + url : url });
}

var EmailShareButton = (0, _createShareButton2.default)('email', emailLink, function (props) {
  return {
    subject: props.subject,
    body: props.body,
    separator: props.separator
  };
}, {
  subject: _propTypes2.default.string,
  body: _propTypes2.default.string,
  separator: _propTypes2.default.string
}, {
  separator: ' ',
  openWindow: false,
  onClick: function onClick(link) {
    window.location.href = link;
  }
});

exports.default = EmailShareButton;