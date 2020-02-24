import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function pinterestLink(url, _ref) {
  var media = _ref.media,
      description = _ref.description;

  assert(url, 'pinterest.url');
  assert(media, 'pinterest.media');

  return 'https://pinterest.com/pin/create/button/' + objectToGetParams({
    url: url,
    media: media,
    description: description
  });
}

var PinterestShareButton = createShareButton('pinterest', pinterestLink, function (props) {
  return {
    media: props.media,
    description: props.description
  };
}, {
  media: PropTypes.string.isRequired,
  description: PropTypes.string
}, {
  windowWidth: 1000,
  windowHeight: 730
});

export default PinterestShareButton;