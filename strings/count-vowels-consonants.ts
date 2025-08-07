export const countVowelsAndConsonants = (str: string): string => {
    console.log("\n================== CHECK VOWELS AND CONSONANTS ==================")
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let step: number = 1
    const count = {
        vowels: 0,
        consonants: 0,
    }

    for (let i = 0; i < str.length; i++) {
        console.log(`-> palindrome Step # ${step}: input string's character '${str[i]}' is vowel`);
        if (vowels.includes(str[i])) {
            count.vowels = count.vowels + 1;
        } else {
            count.consonants = count.consonants + 1;
        }
        step++;
    }
    return `Input string contain ${count.vowels} vowels and ${count.consonants} consonants`
}