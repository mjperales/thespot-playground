export function isPalindrome(s: string): boolean {
  const clean = s
    .replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "")
    .toLowerCase();
  let pointer = 0; // beginning

  for (let x = clean.length - 1; x >= 0; x--) {
    // check the beginning and the end
    if (clean[x] !== clean[pointer]) {
      return false;
    }
    pointer += 1;
  }
  return true;
}
