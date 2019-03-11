// @ts-check
/**
 * @param {string} string
 */
function getBase16IntFromString(string) {
  return parseInt('0x' + string, 16);
}

/**
 * @param {string} string
 */
function get360Module(string) {
  let base16Int = getBase16IntFromString(string);
  if (isNaN(base16Int)) {
    base16Int = getNewCandidateFromAlphabetPosition(string)[0];
  }
  return Math.ceil(360 / base16Int);
}

/**
 * @param {string} string
 * @returns {Array} Array of numbers
 */
function getNewCandidateFromAlphabetPosition(string) {
  const sample = string.length > 5 ? string.substring(0, 5) : string;
  return [...sample].map(char => Math.abs(Math.ceil((parseInt(char, 36) - 10))) + 1).filter(position => position >= 0);
}

/**
 * @param {string} string
 */
function getCharHex(string) {
  let hex = '';
  if (!string || string.length === 0) {
    return get360Module(' ');
  }
  try {
    const numberCandidate = getNewCandidateFromAlphabetPosition(string)[0];
    let strIn16 = numberCandidate.toString(16);
    hex = '' + get360Module(strIn16);
    return hex;
  } catch (error) {
    console.log({error});
  }
}

/**
 * Returns HSL/HSLA format color
 * @param {string} entryString
 * @param {number} [saturation]
 * @param {number} [light]
 * @param {number} [alpha]
 */
function gGetAvatarColor(entryString, saturation = 30, light = 50, alpha = 1) {
  let color = `hsl${ alpha !== 1 ? 'a' : '' }(`;
  entryString = ('' + entryString) || ' ';
  color += getCharHex(entryString);
  color += `, ${saturation}%, ${light}%${alpha !== 1 ? ', ' + alpha : ''})`;
  return color;
}

export default gGetAvatarColor;
