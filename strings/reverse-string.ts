export const findReverseSrtring = (str: string): string => {
    console.log("\n================== FIND REVERSE STRING ==================")
    let reverseString: string = ''
    let step: number = 1;

    for (let i = str.length - 1; i >= 0; i--) {
        console.log(`-> reverseString Step # ${step}: ${str[i]} -- ASSIGN TO REVERSE STRING VARIABLE --> ${reverseString.length ? reverseString : 'EMPTY STRING'}`,
        );

        //* Combining two strings creates a new string each time 
        //* By copy the entire previous string and append a new character
        //! so its TIME complexity O(n²)
        reverseString = `${reverseString}${str[i]}`
        // reverseString = reverseString+str[i]
        step++;
    }

    console.log(`-> reverseString Step # ${step}: -- REVERSE STRING WILL BE --> ${reverseString}`,
    );

    return reverseString
    // return str.split('').reverse().join('')
}
