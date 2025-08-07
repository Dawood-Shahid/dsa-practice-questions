export const checkIsPalindrome = (str: string): string => {
    console.log("\n================== CHECK IS PALINDROM ==================")
    let isPalindrome: boolean = false;
    let step: number = 1;
    const reverseString: string = str.split('').reverse().join('')
    console.log(`-> reverseString: ${reverseString}`);

    for (let i = 0; i < str.length; i++) {
        if (reverseString[i] !== str[i]) {
            console.log(`-> palindrome Step # ${step}: input string's character '${str[i]}', reverse string's character '${reverseString[i]}' is not same`);
            isPalindrome = false;
            break;
        }
        console.log(`-> palindrome Step # ${step}: input string's character '${str[i]}', reverse string's character '${reverseString[i]}' is same`);
        isPalindrome = true;
        step++;
    }

    return isPalindrome ? `${str} is Palindrome` : `${str} is not Palindrome`;
}