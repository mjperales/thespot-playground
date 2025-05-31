export function isValid(s: string): boolean {
  const match: { [key: string]: string } = { ")": "(", "}": "{", "]": "[" };
  // stack to keep track of opened brackets
  let stack = [];
  for (let i = 0; i <= s.length - 1; i++) {
    const char: string = s[i]!;
    // if it's an opening bracket, push to stack
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      // if it's a closing bracket,
      // 1. check if stack is empty
      // 2. if it doesn't match or stack is empty -> invalid
      // 3. if it matches, pop it off
      // 🧠 Handle case where there's no match or stack is empty
      if (stack.length === 0 || stack[stack.length - 1] !== match[char]) {
        return false;
      }
      stack.pop();
    }
  }

  // ✅ If stack is empty, all brackets matched correctly
  return stack.length === 0;
}
