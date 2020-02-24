import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function okLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;

  assert(url, 'ok.url');

  return 'https://connect.ok.ru/offer' + objectToGetParams({
    url: url,
    title: title,
    description: description,
    imageUrl: image
  });
}

var OKShareButton = createShareButton('ok', okLink, function (props) {
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
  windowWidth: 588,
  windowHeight: 480,
  windowPosition: 'screenCenter'
});

export default OKShareButton;