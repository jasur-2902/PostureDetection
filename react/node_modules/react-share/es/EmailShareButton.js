import PropTypes from 'prop-types';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function emailLink(url, _ref) {
  var subject = _ref.subject,
      body = _ref.body,
      separator = _ref.separator;

  return 'mailto:' + objectToGetParams({ subject: subject, body: body ? body + separator + url : url });
}

var EmailShareButton = createShareButton('email', emailLink, function (props) {
  return {
    subject: props.subject,
    body: props.body,
    separator: props.separator
  };
}, {
  subject: PropTypes.string,
  body: PropTypes.string,
  separator: PropTypes.string
}, {
  separator: ' ',
  openWindow: false,
  onClick: function onClick(link) {
    window.location.href = link;
  }
});

export default EmailShareButton;