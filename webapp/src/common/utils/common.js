/**
 * products generator for stories
 *
 * @param {Number} quantity - quantity of products
 * @param {Function} callback - callback func which is similiar to 'mapFunction'
 * aims to customize product format
 *
 * @return {Array} - products array
 */
export const productsGenerator = (quantity = 5, callback) => {
  if (callback) return Array.from({ length: quantity }, callback);

  // if no given callback, retrun default product format.
  return (
    Array.from({ length: quantity }, (value, index) => ({
      id: index,
      name: `Item name ${index}`,
      price: 2100 + index,
    }))
  );
};

export const productsQualityGenerator = (quantity = 5) =>
  Array.from({ length: quantity }, (value, index) => ({
    id: index,
    name: `Item name ${index}`,
    quality: index % 3,
  }));

export const jobsGenerator = (quantity = 5) =>
  Array.from({ length: quantity }, (value, index) => ({
    id: index,
    name: `Job name ${index}`,
    owner: Math.floor(Math.random() * 3),
    type: Math.floor(Math.random() * 5),
  }));

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


/**
 * output integers with leading zeros.
 * source: http://stackoverflow.com/questions/2998784/how-to-output-integers-with-leading-zeros-in-javascript
 * @params num : number wants to add leading zeros.
 *         size: how many leading zeros.
 *
 * notice: only max 10 leading zeros.
 * @returns {string}
 */

export function pad(num, size) {
  const s = `0000000000${num}`;
  return s.substr(s.length - size);
}


/**
 * getFormattedDate(input)
 * convert 'YYYY-MM-DD' to 'DD MMM YYYY'
 *         'YYYY-M-D' to 'DD MMM YYYY'
 *
 * @params input 'YYYY-MM-DD' 'YYYY-M-D'
 * @returns {string} 'DD MMM YYYY'
 *
 * created by Matt@25-Nov-2016.
 *
*/
export function getFormattedDate(input) {
  const pattern = /(.*?)\-(.*?)\-(.*?)$/;
  const result = input.replace(pattern, (match, p1, p2, p3) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${p3 < 10 ? `0${Math.abs(p3)}` : p3} ${months[(p2 - 1)]}, ${p1}`;
  });

  return (result);
}

/**
 * Function getFullStringDate
 * getFullStringDate()
 * Get date of now
 * @returns {string}
 * return 'YYYY-MM-DD' of TODAY
 * return 'YYYY-MM-DD'
 *
 * created by Matt@16-Jan-2017.
 *
*/
export function getFullStringDate() {
  const today = new Date();

  const stoday = `${today.getFullYear()}-${pad((today.getMonth() + 1), 2)}-${pad(today.getDate(), 2)}`;

  return stoday;
}

