/**
 * 截取URL参数
 * @param {string} name 截取的key
 * @param {string} [url] 被截取的url
 * @returns {string} 截取的val
 */
let urlParam = (name:string, url:string) => {
  let reg = new RegExp(".*[&?]" + name + "=([^&]*)(&|$)");
  let r;
  if (!url) {
      r = window.location.search.match(reg);
  } else {
      r = url.match(reg);
  }
  if (r) return decodeURIComponent(r[1]);
  return '';
};
/**
* 判断是否是手机号
* @param {Object} val 传进来的字符串
*/
let removeUndefinedProps = (obj:Object) => {
  for (let key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
};
/**
* 判断是否是手机号
* @param {string} val 传进来的字符串
*/
let isMobile = (val:string) => {
  let reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
  return reg.test(val);
};
export default {
  "urlParam": urlParam,
  "isMobile": isMobile,
  "removeUndefinedProps":removeUndefinedProps
}