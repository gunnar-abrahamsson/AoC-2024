const text = await Deno.readTextFile("./input_5.txt");

const testText = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

const star1 = (text: string) => {
  const lines = text.split("\n");
  const splitIndex = lines.indexOf("");
  const ruleLines = lines.slice(0, splitIndex);
  const pageLines = lines.slice(splitIndex + 1);

  let answer = 0;

  pageLines.forEach((line) => {
    const pages = line.split(",").map((page) => +page);
    const pagesSortedByRules = [...pages].sort((a, b) => {
      const matchedABeforeB = ruleLines.filter((rule) => rule === `${a}|${b}`);
      const matchedBBeforeA = ruleLines.filter((rule) => rule === `${b}|${a}`);
      if (matchedABeforeB.length) {
        return -1;
      }
      if (matchedBBeforeA.length) {
        return 1;
      }
      return 0;
    });

    if (pages.join(",") === pagesSortedByRules.join(",")) {
      answer = answer + pages[Math.floor(pages.length / 2)];
    }
  });

  return answer;
};

console.log(star1(text));

const star2 = (text: string) => {
  const lines = text.split("\n");
  const splitIndex = lines.indexOf("");
  const ruleLines = lines.slice(0, splitIndex);
  const pageLines = lines.slice(splitIndex + 1);

  let answer = 0;

  pageLines.forEach((line) => {
    const pages = line.split(",").map((page) => +page);
    const pagesSortedByRules = [...pages].sort((a, b) => {
      const matchedABeforeB = ruleLines.filter((rule) => rule === `${a}|${b}`);
      const matchedBBeforeA = ruleLines.filter((rule) => rule === `${b}|${a}`);
      if (matchedABeforeB.length) {
        return -1;
      }
      if (matchedBBeforeA.length) {
        return 1;
      }
      return 0;
    });

    if (pages.join(",") !== pagesSortedByRules.join(",")) {
      answer = answer + pagesSortedByRules[Math.floor(pages.length / 2)];
    }
  });

  return answer;
};

console.log(star2(text));
