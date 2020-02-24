import PropTypes from 'prop-types';

import assert from 'assert';

import createShareButton from './utils/createShareButton';
import objectToGetParams from './utils/objectToGetParams';

function lineLink(url, _ref) {
  var title = _ref.title;

  assert(url, 'line.url');

  return 'https://social-plugins.line.me/lineit/share' + objectToGetParams({
    url: url,
    text: title
  });
}

var LineShareButton = createShareButton('line', lineLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: PropTypes.string
}, {
  windowWidth: 500,
  windowHeight: 500
});

export default LineShareButton;