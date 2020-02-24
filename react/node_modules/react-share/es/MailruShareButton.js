import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function mailruLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;

  assert(url, 'mailru.url');

  return 'https://connect.mail.ru/share' + objectToGetParams({
    url: url,
    title: title,
    description: description,
    imageurl: image
  });
}

var MailruShareButton = createShareButton('mailru', mailruLink, function (props) {
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

export default MailruShareButton;