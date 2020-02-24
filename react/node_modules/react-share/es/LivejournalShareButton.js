import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function livejournalLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description;

  assert(url, 'livejournal.url');

  return 'https://www.livejournal.com/update.bml' + objectToGetParams({
    subject: title,
    event: description
  });
}

var LivejournalShareButton = createShareButton('livejournal', livejournalLink, function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: PropTypes.string,
  description: PropTypes.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

export default LivejournalShareButton;