import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function weiboLink(url, _ref) {
  var title = _ref.title,
      image = _ref.image;

  assert(url, 'weibo.url');

  return 'http://service.weibo.com/share/share.php' + objectToGetParams({
    url: url,
    title: title,
    pic: image
  });
}

var WeiboShareButton = createShareButton('weibo', weiboLink, function (props) {
  return {
    title: props.title,
    image: props.image
  };
}, {
  title: PropTypes.string,
  image: PropTypes.string
}, {
  windowWidth: 650,
  windowHeight: 350,
  windowPosition: 'screenCenter'
});

export default WeiboShareButton;