function pyramid(char, height, upsideDown) {
  let result = "\n";
  if (upsideDown) {
    for (let i = height - 1; i >= 0; i--) {
      let spaces = " ".repeat(height - i - 1);
      let chars = char.repeat(2 * i + 1);
      result += spaces + chars + "\n";
    }
  } else {
    for (let i = 0; i < height; i++) {
      let spaces = " ".repeat(height - i - 1);
      let chars = char.repeat(2 * i + 1);
      result += spaces + chars + "\n";
    }
  }
  return result;
}

console.log(pyramid("o", 4, true));
