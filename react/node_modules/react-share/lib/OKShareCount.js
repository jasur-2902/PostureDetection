'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonp = require('jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

var _objectToGetParams = require('./utils/objectToGetParams');

var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);

var _shareCountFactory = require('./utils/shareCountFactory');

var _shareCountFactory2 = _interopRequireDefault(_shareCountFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOKShareCount(shareUrl, callback) {
  if (!window.OK) {
    window.OK = {
      Share: {
        count: function count(index, _count) {
          return window.OK.callbacks[index](_count);
        }
      },
      callbacks: []
    };
  }

  var url = 'https://connect.ok.ru/dk';
  var index = window.OK.callbacks.length;

  window.ODKL = {
    updateCount: function updateCount(a, b) {
      window.OK.callbacks[index](b);
    }
  };
  window.OK.callbacks.push(callback);

  return (0, _jsonp2.default)(url + (0, _objectToGetParams2.default)({
    'st.cmd': 'extLike',
    uid: 'odklcnt0',
    ref: shareUrl
  }));
}

exports.default = (0, _shareCountFactory2.default)(getOKShareCount);