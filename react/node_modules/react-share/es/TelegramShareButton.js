import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function telegramLink(url, _ref) {
  var title = _ref.title;

  assert(url, 'telegram.url');

  return 'https://telegram.me/share/' + objectToGetParams({
    url: url,
    text: title
  });
}

var TelegramShareButton = createShareButton('telegram', telegramLink, function (props) {
  return {
    title: props.title,
    via: props.via
  };
}, {
  title: PropTypes.string,
  via: PropTypes.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

export default TelegramShareButton;