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

function tumblrLink(url, _ref) {
  var title = _ref.title,
      caption = _ref.caption,
      tags = _ref.tags,
      posttype = _ref.posttype;

  (0, _assert2.default)(url, 'tumblr.url');

  return 'https://www.tumblr.com/widgets/share/tool' + (0, _objectToGetParams2.default)({
    canonicalUrl: url,
    title: title,
    caption: caption,
    tags: tags,
    posttype: posttype
  });
}

var TumblrShareButton = (0, _createShareButton2.default)('tumblr', tumblrLink, function (props) {
  return {
    title: props.title,
    tags: props.tags.join(','),
    caption: props.caption,
    posttype: props.posttype
  };
}, {
  title: _propTypes2.default.string,
  caption: _propTypes2.default.string,
  posttype: _propTypes2.default.string,
  tags: _propTypes2.default.arrayOf(_propTypes2.default.string)
}, {
  tags: [],
  posttype: 'link',
  windowWidth: 660,
  windowHeight: 460
});

exports.default = TumblrShareButton;