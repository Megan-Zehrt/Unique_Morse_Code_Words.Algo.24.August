// 804. Unique Morse Code Words



// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.








/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {

    let counter = new Map()
    
    let codeMap = new Map([
        ["a", ".-"],
        ["b", "-..."],
        ["c", "-.-."],
        ["d", "-.."],
        ["e", "."],
        ["f", "..-."],
        ["g", "--."],
        ["h", "...."],
        ["i", ".."],
        ["j", ".---"],
        ["k", "-.-"],
        ["l", ".-.."],
        ["m", "--"],
        ["n", "-."],
        ["o", "---"],
        ["p", ".--."],
        ["q", "--.-"],
        ["r", ".-."],
        ["s", "..."],
        ["t", "-"],
        ["u", "..-"],
        ["v", "...-"],
        ["w", ".--"],
        ["x", "-..-"],
        ["y", "-.--"],
        ["z", "--.."]
    ])

    for(let word of words){

        let string = ""

        for(let i = 0; i < word.length; i++){

            if(codeMap.has(word[i])){

                let c = codeMap.get(word[i])
                string += c
            }

        }


        if(counter.has(string)){
            let count = counter.get(string)
            counter.set(string, count + 1)
        }else{
            counter.set(string, 1)
        }
    }

    return counter.size
};