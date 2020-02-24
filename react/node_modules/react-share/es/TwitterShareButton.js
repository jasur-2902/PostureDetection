import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function twitterLink(url, _ref) {
  var title = _ref.title,
      via = _ref.via,
      _ref$hashtags = _ref.hashtags,
      hashtags = _ref$hashtags === undefined ? [] : _ref$hashtags;

  assert(url, 'twitter.url');
  assert(Array.isArray(hashtags), 'twitter.hashtags is not an array');

  return 'https://twitter.com/share' + objectToGetParams({
    url: url,
    text: title,
    via: via,
    hashtags: hashtags.join(',')
  });
}

var TwitterShareButton = createShareButton('twitter', twitterLink, function (props) {
  return {
    hashtags: props.hashtags,
    title: props.title,
    via: props.via
  };
}, {
  hashtags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  via: PropTypes.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

export default TwitterShareButton;