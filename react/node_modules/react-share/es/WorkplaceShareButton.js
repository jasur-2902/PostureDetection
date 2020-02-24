import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function workplaceLink(url, _ref) {
  var quote = _ref.quote,
      hashtag = _ref.hashtag;

  assert(url, 'workplace.url');

  return 'https://work.facebook.com/sharer.php' + objectToGetParams({
    u: url,
    quote: quote,
    hashtag: hashtag
  });
}

var WorkplaceShareButton = createShareButton('workplace', workplaceLink, function (props) {
  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  quote: PropTypes.string,
  hashtag: PropTypes.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

export default WorkplaceShareButton;