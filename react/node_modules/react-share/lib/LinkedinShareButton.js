'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _objectToGetParams = require('./utils/objectToGetParams');

var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);

var _createShareButton = require('./utils/createShareButton');

var _createShareButton2 = _interopRequireDefault(_createShareButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linkedinLink(url) {
  (0, _assert2.default)(url, 'linkedin.url');

  return 'https://linkedin.com/shareArticle' + (0, _objectToGetParams2.default)({ url: url });
}

var LinkedinShareButton = (0, _createShareButton2.default)('linkedin', linkedinLink, undefined, undefined, {
  windowWidth: 750,
  windowHeight: 600
});

exports.default = LinkedinShareButton;