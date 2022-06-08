
/**
 * It takes an object, iterates over its properties, capitalizes the first letter of each property's
 * value, and returns a new object with the capitalized values.
 * @param object - the object you want to capitalize the values of
 * @returns {
 *   name: 'John',
 *   lastName: 'Doe',
 *   age: '30'
 * }</code>
 */
const capitalizaValueObj = (object) => {
  let resp = {};
  for (const property in object) {
    let value = object[property];
    resp[property] = value.slice(0, 1).toUpperCase() + value.slice(1);
  }
  return resp;
}

export default capitalizaValueObj;