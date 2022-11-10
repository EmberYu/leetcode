var makeGood = function (s: string): string {
  for (var i = 0; i <= s.length - 2; i++) {
    if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) === 32) {
      return makeGood(s.slice(0, i) + s.slice(i + 2));
    }
  }
  return s;
};
