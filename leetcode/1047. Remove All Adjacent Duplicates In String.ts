function removeDuplicates(s: string): string {
  let result: string[] = [];
  let size = 0;
  for (let i = 0; i < s.length; i++) {
    if (size === 0) {
      result.push(s[i]);
      size++;
    } else {
      if (result[size - 1] === s[i]) {
        result.pop();
        size--;
      } else {
        result.push(s[i]);
        size++;
      }
    }
  }
  return result.join("");
}
