import PropTypes from 'prop-types';

import assert from 'assert';

import createShareButton from './utils/createShareButton';
import objectToGetParams from './utils/objectToGetParams';

function pocketLink(url, _ref) {
  var title = _ref.title;

  assert(url, 'pocket.url');

  return 'https://getpocket.com/save' + objectToGetParams({
    url: url,
    title: title
  });
}

var PocketShareButton = createShareButton('pocket', pocketLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: PropTypes.string
}, {
  windowWidth: 500,
  windowHeight: 500
});

export default PocketShareButton;