import jsonp from 'jsonp';

import shareCountFactory from './utils/shareCountFactory';

function getFacebookShareCount(shareUrl, callback) {
  var endpoint = 'https://graph.facebook.com/?id=' + shareUrl;

  jsonp(endpoint, function (err, data) {
    callback(!err && data && data.share && data.share.share_count ? data.share.share_count : undefined);
  });
}

export default shareCountFactory(getFacebookShareCount);