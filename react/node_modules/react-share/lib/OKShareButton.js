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

function okLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;

  (0, _assert2.default)(url, 'ok.url');

  return 'https://connect.ok.ru/offer' + (0, _objectToGetParams2.default)({
    url: url,
    title: title,
    description: description,
    imageUrl: image
  });
}

var OKShareButton = (0, _createShareButton2.default)('ok', okLink, function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string
}, {
  windowWidth: 588,
  windowHeight: 480,
  windowPosition: 'screenCenter'
});

exports.default = OKShareButton;