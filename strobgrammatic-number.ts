function isStrobogrammatic(num: string): boolean {
  let strgbototic = "";
  const strNum =  num.toString();

  for (let i of strNum) {
      const flipped = upsideDownMap[i];
      if (flipped === false) {
          return false;
      }
      strgbototic = `${flipped}${strgbototic}`;
  }
  console.log(strgbototic)
  return strgbototic === strNum;
};

const upsideDownMap = {
  "1": 1,
  "2": false,
  "3": false,
  "4": false,
  "5": false,
  "6": 9,
  "7": false,
  "8": 8,
  "9": 6,
  '0': 0
}
