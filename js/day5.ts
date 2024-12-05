const text = await Deno.readTextFile("./input_5.txt");

const lines = text.split("\n");
const splitIndex = lines.indexOf("");
const ruleLines = lines.slice(0, splitIndex);
const pageLines = lines.slice(splitIndex + 1);
const rules = new Set<string>();

ruleLines.forEach((rule) => rules.add(rule));

const star1 = () => {
  let answer = 0;
  pageLines.forEach((line) => {
    const pages = line.split(",").map((page) => page);
    const pagesSortedByRules = [...pages].sort((a, b) => {
      if (rules.has(`${a}|${b}`)) {
        return -1;
      }
      if (rules.has(`${b}|${a}`)) {
        return 1;
      }
      return 0;
    });

    if (pages.join(",") === pagesSortedByRules.join(",")) {
      answer = answer + +pagesSortedByRules[Math.floor(pages.length / 2)];
    }
  });

  return answer;
};

console.log(star1());

const star2 = () => {
  let answer = 0;
  pageLines.forEach((line) => {
    const pages = line.split(",").map((page) => page);
    const pagesSortedByRules = [...pages].sort((a, b) => {
      if (rules.has(`${a}|${b}`)) {
        return -1;
      }
      if (rules.has(`${b}|${a}`)) {
        return 1;
      }
      return 0;
    });

    if (pages.join(",") !== pagesSortedByRules.join(",")) {
      answer = answer + +pagesSortedByRules[Math.floor(pages.length / 2)];
    }
  });

  return answer;
};

console.log(star2());
