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
    /* 
    * 1. Create a copy of the list  (list.slice())
    * 2. Create an empty array to hold the result (result = [])
    * 3. While the copy of the list is not empty
    * 4.     Generate a random index (Math.floor(Math.random() * list.length))
    * 5.     Push the element at the random index to the result array (result.push(list[index]))
    * 6.     Remove the element at the random index from the copy of the list (list.splice(index, 1))
    * 7. Return the result array
     */
    const result = [];
    while (list.length > 0) {
        const index = Math.floor(Math.random() * list.length);
        result.push(list[index]);
        list.splice(index, 1);
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