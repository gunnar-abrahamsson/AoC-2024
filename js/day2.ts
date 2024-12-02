const text = await Deno.readTextFile("./input_2.txt");

const isGradual = (a: number, b: number) => {
  const diff = Math.abs(a - b);
  return diff <= 3 && diff >= 1;
};

const checkIncOrDec = (a: number, b: number) => {
  if (a > b) return "dec";
  if (a < b) return "inc";
  return "invalid";
};

const checkReport = (report: number[]) => {
  let reportIncOrDec = "";

  for (let i = 1; i < report.length; i++) {
    const currentLevel = report[i];
    const prevLevel = report[i - 1];
    if (!isGradual(prevLevel, currentLevel)) return false;
    const incOrDec = checkIncOrDec(prevLevel, currentLevel);
    if (incOrDec === "invalid") return false;
    if (!reportIncOrDec) reportIncOrDec = incOrDec;
    if (reportIncOrDec !== incOrDec) return false;
  }

  return true;
};

const star1 = (input: string) => {
  const rows = input.split("\n").filter((row) => row);
  const reports = rows.map((row) => row.split(" ").map((text) => +text));
  return reports.filter(checkReport).length;
};

console.log(star1(text));

const star2 = (input: string) => {
  const rows = input.split("\n").filter((row) => row);
  const reports = rows.map((row) => row.split(" ").map((text) => +text));
  const successReports = reports.filter((report) => {
    const hasOneValid = report
      .map((_, i, array) => {
        const splicedRaport = [...array];
        splicedRaport.splice(i, 1);
        return checkReport(splicedRaport);
      })
      .includes(true);
    return hasOneValid;
  });
  return successReports.length;
};

console.log(star2(text));
