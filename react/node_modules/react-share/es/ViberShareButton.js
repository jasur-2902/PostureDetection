import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function viberLink(url, _ref) {
  var title = _ref.title,
      separator = _ref.separator;

  assert(url, 'viber.url');
  return 'viber://forward' + objectToGetParams({
    text: title ? title + separator + url : url
  });
}

var ViberShareButton = createShareButton('viber', viberLink, function (props) {
  return {
    title: props.title,
    separator: props.separator
  };
}, {
  title: PropTypes.string,
  separator: PropTypes.string
}, {
  separator: ' ',
  windowWidth: 660,
  windowHeight: 460
});

export default ViberShareButton;