'use strict';

function get360Module(string) {
  return parseInt('0x' + string, 16) % 360; // radix 16, then module of 360
}

function getCharHex(string) {
  let hex = '';
  if (!string || string.length === 0) {
    return get360Module(' ')
  }
  try {
    let strIn16 = string.charCodeAt(0).toString(16);
    hex = get360Module(strIn16);
    if (isNaN(hex)) {
      throw new Error('Not a Number')
    }
    return hex
  } catch (_error) {
    try {
      getCharHex(' ' + string);
    } catch (error) {
      getCharHex(' ');
    }
  }
}

function gGetAvatarColor(name, saturation = 30, light = 50) {
  let color = 'hsl(';
  name = ('' + name) || ' ';
  color += getCharHex(name);
  color += `, ${saturation}%, ${light}%)`;
  return color;
}

module.exports = gGetAvatarColor;
