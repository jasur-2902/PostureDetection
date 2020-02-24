import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function isMobileOrTablet() {
  return (/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
  );
}

function whatsappLink(url, _ref) {
  var title = _ref.title,
      separator = _ref.separator;

  assert(url, 'whatsapp.url');
  return 'https://' + (isMobileOrTablet() ? 'api' : 'web') + '.whatsapp.com/send' + objectToGetParams({
    text: title ? title + separator + url : url
  });
}

var WhatsappShareButton = createShareButton('whatsapp', whatsappLink, function (props) {
  return {
    title: props.title,
    separator: props.separator
  };
}, {
  title: PropTypes.string,
  separator: PropTypes.string
}, {
  separator: ' ',
  windowWidth: 550,
  windowHeight: 400
});

export default WhatsappShareButton;