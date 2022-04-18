function titleToNumber(columnTitle: string): number {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  let multiplier = columnTitle.length - 1;
  let column = 0;
  
  for (let i = 0; i < columnTitle.length - 1; i++) {
      const position = alphabet.indexOf(columnTitle[i].toLowerCase());
      column += 26**multiplier*(position+1);
      multiplier--;
  }
  
  const lastChar = columnTitle[columnTitle.length - 1].toLowerCase();
  column += alphabet.indexOf(lastChar)+1;

  return column;
};

/*
A-Z 1-26
FOR AB:
26*1 + B => 28

FOR ZY:
26*26 + 25 => 701

for ABC
26*26*1 + 26*2 + (26*0 + C)
*/