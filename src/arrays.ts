/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newer: number[] = [];
    numbers.length > 0
        ? (newer = [numbers[0], numbers[numbers.length - 1]])
        : (newer = []);
    return newer;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((numbers: number): number => numbers * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((numberr: string): number =>
        Number.isNaN(Number(numberr)) ? 0 : Number(numberr)
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const place = amounts.map((numberr: string): string =>
        numberr.substring(0, 1) === "$"
            ? numberr.substring(1, numberr.length)
            : (numberr += "")
    );
    const ints = place.map((numberr: string): number =>
        Number.isNaN(Number(numberr)) ? 0 : Number(numberr)
    );
    return ints;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const ups = messages.map((a: string): string =>
        a.charAt(a.length - 1) === "!" ? a.toUpperCase() : (a += "")
    );
    const ques = ups.filter(
        (b: string): boolean => b.charAt(b.length - 1) !== "?"
    );
    return ques;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const count = words.filter((c: string): boolean => c.length < 4);
    return count.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const like = colors.filter(
        (d: string): boolean => d === "red" || d === "blue" || d === "green"
    );
    return like.length === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const add = addends.reduce((total: number, num: number) => total + num, 0);
    add.toString;
    const p = [...addends];
    let o = "";
    p.length === 0 ? (o += "0") : (o = p.join("+"));
    return add + "=" + o;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const ind = values.findIndex((p: number): boolean => p < 0);
    console.log(ind);
    const a = [...values];
    ind >= 0 ? a.splice(ind, a.length - ind) : null;
    const add = a.reduce((total: number, num: number) => total + num, 0);
    const v = [...values];
    ind >= 0 ? v.splice(ind + 1, 0, add) : v.splice(a.length, 0, add);
    return v;
}
