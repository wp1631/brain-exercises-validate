type integer = number;

function generateRandomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

function generateRandomIntegerSequence(length: number, min: number, max: number): Array<number> {
  const result = [];
  for (let i = length; i > 0; --i) result.push(Math.floor(Math.random() * (max - min + 1)) + min);
  return result;
}

function randomSequenceFromList<T>(list: Array<T>): Array<T> {
    const result = list.slice();
    for (let i = result.length - 1; i > 0; --i) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function samplingFromList<T>(list: Array<T>,num: integer, replace:boolean) {
    if (replace) {
        return generateRandomIntegerSequence(num, 0, list.length - 1).map((index) => list[index]);
    } else {
        return randomSequenceFromList(list.slice()).slice(0, num);
    }
}

export {
    generateRandomString,
    generateRandomIntegerSequence,
    randomSequenceFromList,
    samplingFromList
}