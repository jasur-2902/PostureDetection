import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function redditLink(url, _ref) {
  var title = _ref.title;

  assert(url, 'reddit.url');

  return 'https://www.reddit.com/submit' + objectToGetParams({
    url: url,
    title: title
  });
}

var RedditShareButton = createShareButton('reddit', redditLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: PropTypes.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

export default RedditShareButton;