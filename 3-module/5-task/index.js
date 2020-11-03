/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let formatted = str.split(',').join(' ').split(' ');
  let numbers = [];

  for (let item of formatted) {
    if (isFinite(item) && !!item) {
      numbers.push(+item);
    }
  }

  let result = {};

  result['min'] = Math.min(...numbers);
  result['max'] = Math.max(...numbers);

  return result;
}
