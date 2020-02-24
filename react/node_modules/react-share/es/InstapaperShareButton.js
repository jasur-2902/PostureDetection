import PropTypes from 'prop-types';

import assert from 'assert';

import createShareButton from './utils/createShareButton';
import objectToGetParams from './utils/objectToGetParams';

function instapaperLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description;

  assert(url, 'instapaper.url');

  return 'http://www.instapaper.com/hello2' + objectToGetParams({
    url: url,
    title: title,
    description: description
  });
}

var InstapaperShareButton = createShareButton('instapaper', instapaperLink, function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: PropTypes.string,
  description: PropTypes.string
}, {
  windowWidth: 500,
  windowHeight: 500
});

export default InstapaperShareButton;