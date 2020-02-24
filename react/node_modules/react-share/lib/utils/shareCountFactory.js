'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

exports.default = shareCountFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMediaShareCount = function (_Component) {
  (0, _inherits3.default)(SocialMediaShareCount, _Component);

  function SocialMediaShareCount(props) {
    (0, _classCallCheck3.default)(this, SocialMediaShareCount);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SocialMediaShareCount.__proto__ || (0, _getPrototypeOf2.default)(SocialMediaShareCount)).call(this, props));

    _this._isMounted = false;
    _this.state = { count: 0 };
    return _this;
  }

  (0, _createClass3.default)(SocialMediaShareCount, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
      this.updateCount(this.props.url);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.url !== this.props.url) {
        this.updateCount(this.props.url);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'updateCount',
    value: function updateCount(url) {
      var _this2 = this;

      if (this.props.getCount) {
        this.setState({
          isLoading: true
        });

        this.props.getCount(url, function (count) {
          if (_this2._isMounted) {
            _this2.setState({
              count: count,
              isLoading: false
            });
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          count = _state.count,
          isLoading = _state.isLoading;
      var _props = this.props,
          children = _props.children,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('SocialMediaShareCount', className) },
        !isLoading && children(count || 0)
      );
    }
  }]);
  return SocialMediaShareCount;
}(_react.Component);

SocialMediaShareCount.propTypes = {
  children: _propTypes2.default.func,
  className: _propTypes2.default.string,
  getCount: _propTypes2.default.func,
  url: _propTypes2.default.string.isRequired
};

SocialMediaShareCount.defaultProps = {
  children: function children(shareCount) {
    return shareCount;
  }
};

function shareCountFactory(getCount) {
  return function (props) {
    return _react2.default.createElement(SocialMediaShareCount, (0, _extends3.default)({ getCount: getCount }, props));
  };
}