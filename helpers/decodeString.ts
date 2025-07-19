export function decodeString(s: string): string {
  function helper(index: number): [string, number] {
    let result = "";
    let num = 0;

    while (index < s.length) {
      const char = s[index];
      if (isDigit(char!)) {
        // build the full number (e.g. "12")
        num = num * 10 + parseInt(char!);
        index++;
      } else if (char === "[") {
        // recurse into substring
        const [decoded, nextIndex] = helper(index + 1); // points to the next item
        // append repeated decoded string
        result += decoded.repeat(num);
        // reset num and go into nextIndex
        num = 0;
        index = nextIndex;
      } else if (char === "]") {
        // end recursion
        return [result, index + 1];
      } else {
        // regular char, just append
        result += char;
        index++;
      }
    }
    return [result, index];
  }

  return helper(0)[0];
}

function isDigit(char: string): boolean {
  return /\d/.test(char);
}
