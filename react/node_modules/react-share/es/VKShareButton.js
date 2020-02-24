import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function vkLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;

  assert(url, 'vk.url');

  return 'https://vk.com/share.php' + objectToGetParams({
    url: url,
    title: title,
    description: description,
    image: image
  });
}

var VKShareButton = createShareButton('vk', vkLink, function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

export default VKShareButton;