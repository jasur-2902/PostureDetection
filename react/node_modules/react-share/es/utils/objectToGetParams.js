import _Object$keys from 'babel-runtime/core-js/object/keys';
/* eslint-disable prefer-template */
export default function objectToGetParams(object) {
  return '?' + _Object$keys(object).filter(function (key) {
    return !!object[key];
  }).map(function (key) {
    return key + '=' + encodeURIComponent(object[key]);
  }).join('&');
}
/* eslint-enable prefer-template */