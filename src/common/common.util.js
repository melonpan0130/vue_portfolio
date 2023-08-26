const CommonUtil = {
  SECTION_NAME_PREV: 'section_',
};

/**
 * 연차 계산
 * @param {string} periodStart 기간 시작일(yyyy.MM.dd)
 * @returns 연차 문자열(yy년 MM개월)
 */
const getWorkPeriod = function (periodStart) {
  var startDate = new Date(periodStart);
  var today = new Date();

  var diffTime = today.getTime() - startDate.getTime();
  var diffYear = diffTime / (1000 * 3600 * 24 * 365);
  diffYear = Math.floor(diffYear);

  var diffMonth = (today.getFullYear() - startDate.getFullYear()) * 12;
  diffMonth -= startDate.getMonth();
  diffMonth += today.getMonth();
  diffMonth %= 12;

  var util = require('util');
  var result = util.format('%d년 %d개월', diffYear, diffMonth);
  return result;
};

export { CommonUtil, getWorkPeriod };
