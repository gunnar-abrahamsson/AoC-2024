const text = await Deno.readTextFile("./input_3.txt");

const start1 = (text: string) => {
  const matches = text.match(/mul\(\d{1,3},\d{1,3}\)/gm);
  return matches?.reduce((acc, value) => {
    const match = value.match(/\d{1,3}/gm);
    if (!match) return acc;
    const [x, y] = match;

    return acc + +x * +y;
  }, 0);
};

console.log(start1(text));

const start2 = (text: string) => {
  const withoutDontDo = text.replace(/don\'t\(\)((.|\n)*?)do\(\)/gm, "");
  const withoutDont = withoutDontDo.replace(/don\'t\(\).*/gm, "");
  const matches = withoutDont.match(/mul\(\d{1,3},\d{1,3}\)/gm);
  return matches?.reduce((acc, value) => {
    const match = value.match(/\d{1,3}/gm);
    if (!match) return acc;
    const [x, y] = match;

    return acc + +x * +y;
  }, 0);
};

console.log(start2(text));
