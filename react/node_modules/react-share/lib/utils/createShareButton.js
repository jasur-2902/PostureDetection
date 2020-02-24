'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isPromise = function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

var getBoxPositionOnWindowCenter = function getBoxPositionOnWindowCenter(width, height) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2
  };
};

var getBoxPositionOnScreenCenter = function getBoxPositionOnScreenCenter(width, height) {
  return {
    top: (window.screen.height - height) / 2,
    left: (window.screen.width - width) / 2
  };
};

function windowOpen(url, _ref, onClose) {
  var _ref$height = _ref.height,
      height = _ref$height === undefined ? 400 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 550 : _ref$width,
      configRest = (0, _objectWithoutProperties3.default)(_ref, ['height', 'width']);

  var config = (0, _extends3.default)({
    height: height,
    width: width,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes'
  }, configRest);

  var shareDialog = window.open(url, '', (0, _keys2.default)(config).map(function (key) {
    return key + '=' + config[key];
  }).join(', '));

  if (onClose) {
    var interval = window.setInterval(function () {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval);
          onClose(shareDialog);
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.error(e);
        /* eslint-enable no-console */
      }
    }, 1000);
  }

  return shareDialog;
}

var ShareButton = function (_PureComponent) {
  (0, _inherits3.default)(ShareButton, _PureComponent);

  function ShareButton() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ShareButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = ShareButton.__proto__ || (0, _getPrototypeOf2.default)(ShareButton)).call.apply(_ref2, [this].concat(args))), _this), _this.onClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          openWindow = _this$props.openWindow,
          beforeOnClick = _this$props.beforeOnClick;


      if (disabled) {
        return;
      }

      e.preventDefault();

      var link = _this.link();

      var clickHandler = openWindow ? function () {
        return _this.openWindow(link);
      } : function () {
        return onClick(link);
      };

      if (beforeOnClick) {
        var returnVal = beforeOnClick();

        if (isPromise(returnVal)) {
          returnVal.then(clickHandler);
        } else {
          clickHandler();
        }
      } else {
        clickHandler();
      }
    }, _this.onKeyPress = function (e) {
      if (e.key === 'Enter' || e.key === 13 || e.key === ' ' || e.key === 32) {
        _this.onClick(e);
      }
    }, _this.openWindow = function (link) {
      var _this$props2 = _this.props,
          windowPosition = _this$props2.windowPosition,
          onShareWindowClose = _this$props2.onShareWindowClose,
          windowWidth = _this$props2.windowWidth,
          windowHeight = _this$props2.windowHeight;


      var windowConfig = (0, _extends3.default)({
        height: windowHeight,
        width: windowWidth
      }, windowPosition === 'windowCenter' ? getBoxPositionOnWindowCenter(windowWidth, windowHeight) : getBoxPositionOnScreenCenter(windowWidth, windowHeight));

      windowOpen(link, windowConfig, onShareWindowClose);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ShareButton, [{
    key: 'link',
    value: function link() {
      var _props = this.props,
          url = _props.url,
          opts = _props.opts,
          networkLink = _props.networkLink;

      return networkLink(url, opts);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          additionalProps = _props2.additionalProps,
          children = _props2.children,
          className = _props2.className,
          disabled = _props2.disabled,
          disabledStyle = _props2.disabledStyle,
          network = _props2.network,
          role = _props2.role,
          style = _props2.style,
          tabIndex = _props2.tabIndex;


      var classes = (0, _classnames2.default)('SocialMediaShareButton', 'SocialMediaShareButton--' + network, {
        'SocialMediaShareButton--disabled': !!disabled,
        disabled: !!disabled
      }, className);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          'aria-label': network
        }, additionalProps, {
          role: role,
          tabIndex: tabIndex,
          onClick: this.onClick,
          onKeyPress: this.onKeyPress,
          className: classes,
          style: (0, _extends3.default)({}, style, disabled ? disabledStyle : {}) }),
        children
      );
    }
  }]);
  return ShareButton;
}(_react.PureComponent);

ShareButton.propTypes = {
  additionalProps: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  disabledStyle: _propTypes2.default.object,
  network: _propTypes2.default.string.isRequired,
  networkLink: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func,
  opts: _propTypes2.default.object,
  openWindow: _propTypes2.default.bool,
  url: _propTypes2.default.string.isRequired,
  role: _propTypes2.default.string,
  style: _propTypes2.default.object,
  windowWidth: _propTypes2.default.number,
  windowHeight: _propTypes2.default.number,
  windowPosition: _propTypes2.default.oneOf(['windowCenter', 'screenCenter']),
  beforeOnClick: _propTypes2.default.func,
  onShareWindowClose: _propTypes2.default.func,
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
ShareButton.defaultProps = {
  disabledStyle: {
    opacity: 0.6
  },
  openWindow: true,
  role: 'button',
  windowPosition: 'windowCenter',
  tabIndex: '0'
};


function createShareButton(network, link) {
  var optsMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return {};
  };
  var propTypes = arguments[3];
  var defaultProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var CreatedButton = _react2.default.forwardRef(function (props, ref) {
    return _react2.default.createElement(ShareButton, (0, _extends3.default)({}, props, {
      ref: ref,
      network: network,
      networkLink: link,
      opts: optsMap(props) }));
  });

  CreatedButton.propTypes = propTypes;
  CreatedButton.defaultProps = defaultProps;

  return CreatedButton;
}

exports.default = createShareButton;