function chunkString(str, chunkLength) {
  // If input string is null or undefined, return empty array
  if (str == null) {
    return [];
  }

  const result = [];

  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }

  return result;
}
