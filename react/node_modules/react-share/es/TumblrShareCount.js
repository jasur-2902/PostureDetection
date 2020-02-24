import jsonp from 'jsonp';

import objectToGetParams from './utils/objectToGetParams';
import shareCountFactory from './utils/shareCountFactory';

function getTumblrShareCount(shareUrl, callback) {
  var endpoint = 'https://api.tumblr.com/v2/share/stats';

  return jsonp(endpoint + objectToGetParams({
    url: shareUrl
  }), function (err, data) {
    callback(data ? data.note_count : undefined);
  });
}

export default shareCountFactory(getTumblrShareCount);