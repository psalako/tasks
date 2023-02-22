/* eslint-disable no-extra-parens */
/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    return ((temperature - 32) * 5) / 9;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let sum = 0;
    // eslint-disable-next-line prettier/prettier
    first > 0 ? (sum += first) : (sum += 0);
    // eslint-disable-next-line prettier/prettier
    second > 0 ? (sum += second) : (sum += 0);
    // eslint-disable-next-line prettier/prettier
    third > 0 ? (sum += third) : (sum += 0);
    return sum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    return message.toUpperCase() + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    // eslint-disable-next-line prefer-const
    let res = message.lastIndexOf("?") === message.length - 1;
    // eslint-disable-next-line no-self-assign
    message.length === 0 ? (res = false) : (res = res);
    return res;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    let res = null;
    if (word === "yes") {
        res = true;
    } else if (word === "YES") {
        res = true;
    } else if (word === "NO") {
        res = false;
    } else if (word === "no") {
        res = false;
    }
    return res;
}
