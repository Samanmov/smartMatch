import { TextRange } from "../model/TextRange";

/**
 * Searches for occurrences of a substring within a string and returns the start and end indices of each match.
 * The function is case-insensitive and expects words in the string to be separated by spaces.
 *
 * @param {string} input - The string to search.
 * @param {string} searchText - The searchText to find.
 * @returns {TextRange[]} An array of TextRange objects with 'from' and 'to' properties indicating the indices of matches.
 * If no matches are found, returns null.
 *
 * @example
 * // Example 1: Finding a simple match.
 * const matchRanges1 = smartMatch("Hello World", "hello"); // Returns [{ from: 0, to: 4 }]
 *
 * // Example 2: Finding a match that includes part of a word.
 * const matchRanges2 = smartMatch("Checking the checklist", "check"); // Returns [{ from: 0, to: 4 }, { from: 13, to: 17 }]
 *
 * // Example 3: Finding multiple separate matches.
 * const matchRanges3 = smartMatch("Repeat, repeat, repeat this again", "repeat");
 * // Returns [{ from: 0, to: 5 }, { from: 8, to: 13 }, { from: 16, to: 21 }]
 *
 * // Example 4: Case where no match is found.
 * const matchRanges4 = smartMatch("Mismatch", "text"); // Returns null
 *
 * // Example 5: Demonstrating case insensitivity.
 * const matchRanges5 = smartMatch("Case Insensitive", "CASE"); // Returns [{ from: 0, to: 3 }]
 */

export const smartMatch = (input: string, searchText: string): TextRange[] | null => {
    // Step 1: Find the words and their start and end indices
    let result: TextRange[] = [];
    const lowerStr = input.toLowerCase();
    const lowerChar = searchText.toLowerCase();
    let startIndex = 0;

    // Scan the whole string for the pattern
    while ((startIndex = lowerStr.indexOf(lowerChar, startIndex)) !== -1) {
        let endIndex = startIndex + searchText.length - 1;
        result.push({ from: startIndex, to: endIndex });
        startIndex = endIndex + 1; // Move past the current match
    }

    return result.length > 0 ? result : null;
};

