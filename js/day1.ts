const text = await Deno.readTextFile("./input_1.txt");

const star1 = (input: string) => {
  const rows = input.split("\n");
  const list1: number[] = [];
  const list2: number[] = [];
  rows.forEach((row) => {
    const [first, second] = row.split("   ");
    if (+first) {
      list1.push(+first);
    }
    if (+second) {
      list2.push(+second);
    }
  });

  list1.sort();
  list2.sort();
  const total = list1.reduce((acc, value, index) => {
    const value2 = list2[index];
    return acc + Math.abs(value - value2);
  }, 0);

  return total;
};

console.log(star1(text));

const star2 = (input: string) => {
  const rows = input.split("\n");
  const list1: number[] = [];
  const occurence: { [value: number]: number } = {};
  rows.forEach((row) => {
    const [first, second] = row.trim().split("   ");
    if (+first) {
      list1.push(+first);
    }
    if (+second) {
      occurence[+second] = occurence[+second] ? 1 + occurence[+second] : 1;
    }
  });

  const total = list1.reduce((acc, value) => {
    const occurenceValue = occurence[value];
    const multi = occurenceValue ?? 0;
    return acc + value * multi;
  }, 0);

  return total;
};

console.log(star2(text));
