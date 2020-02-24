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

function livejournalLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description;

  (0, _assert2.default)(url, 'livejournal.url');

  return 'https://www.livejournal.com/update.bml' + (0, _objectToGetParams2.default)({
    subject: title,
    event: description
  });
}

var LivejournalShareButton = (0, _createShareButton2.default)('livejournal', livejournalLink, function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

exports.default = LivejournalShareButton;