/** @todo Consider getting a math library or check out lodash stuff */


/** Handles modulo for negative numbers */
const modulo = function ( num, modulo ) {
    return ((num % modulo) + modulo) % modulo;
};


export {
    modulo
}
