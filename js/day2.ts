const text = await Deno.readTextFile("./input_2.txt");

const checkReport = (report: number[]) => {
  const diffs: number[] = [];
  for (let i = 0; i < report.length - 1; i++) {
    diffs.push(report[i] - report[i + 1]);
  }
  const allInc = diffs.every((value) => value > 0 && value < 4);
  const allDec = diffs.every((value) => value < 0 && value > -4);
  return allInc || allDec;
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
