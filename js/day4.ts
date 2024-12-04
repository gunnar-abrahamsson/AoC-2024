const text = await Deno.readTextFile("./input_4.txt");

const testText = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

// xmas
// [x,y]
const directions = {
  up: [
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  down: [
    [0, -1],
    [0, -2],
    [0, -3],
  ],
  right: [
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  left: [
    [-1, 0],
    [-2, 0],
    [-3, 0],
  ],
  upLeft: [
    [-1, 1],
    [-2, 2],
    [-3, 3],
  ],
  upRight: [
    [1, 1],
    [2, 2],
    [3, 3],
  ],
  downLeft: [
    [-1, -1],
    [-2, -2],
    [-3, -3],
  ],
  downRight: [
    [1, -1],
    [2, -2],
    [3, -3],
  ],
};
const star1 = (text: string) => {
  const rows = text.split("\n").filter((row) => row);
  let matches = 0;

  for (let rowY = 0; rowY < rows.length; rowY++) {
    for (let rowX = 0; rowX < rows[rowY].length; rowX++) {
      const currentChar = rows[rowY][rowX];
      if (currentChar !== "X") continue;
      Object.entries(directions).forEach(([_name, direction]) => {
        let start = "X";
        direction.forEach(([x, y]) => {
          const char = rows?.[rowY + y]?.[rowX + x];
          if (char) {
            start = start + char;
          }
        });
        if (start === "XMAS") {
          matches++;
        }
      });
    }
  }
  return matches;
};

console.log(star1(text));
// [x, y]
const directions2 = {
  upLeftToDownRight: [
    [1, -1],
    [0, 0],
    [-1, +1],
  ],
  downRightToUpRight: [
    [-1, -1],
    [0, 0],
    [1, 1],
  ],
};
const star2 = (text: string) => {
  const rows = text.split("\n").filter((row) => row);
  let matches = 0;

  for (let rowY = 0; rowY < rows.length; rowY++) {
    for (let rowX = 0; rowX < rows[rowY].length; rowX++) {
      const currentChar = rows[rowY][rowX];
      if (currentChar !== "A") continue;
      let MAS = 0;
      Object.entries(directions2).forEach(([_name, direction]) => {
        let start = "";
        direction.forEach(([x, y]) => {
          const char = rows?.[rowY + y]?.[rowX + x];
          if (char) {
            start = start + char;
          }
        });
        if (start === "MAS" || start === "SAM") {
          MAS++;
        }
      });
      if (MAS === 2) {
        matches++;
      }
    }
  }
  return matches;
};

console.log(star2(text));
