
//js에서 ts사용하기
//@ts-check
/**
 * Initializes the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url       
 * @returns {boolean}
 */
export function init(config) {
    return true;
}
/**
 * Exits the program
 * @param {number} code 
 * @returns 
 */
export function exit(code) {
    return code + 1;
}