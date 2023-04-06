module.exports = function (string1, string2) {
  const stringresult = (str) => {
    return str
                /*Regex*/
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}
  return stringresult(string1) === stringresult(string2);
}
