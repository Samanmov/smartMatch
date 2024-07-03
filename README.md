# SmartMatch Function

## Overview
The `smartMatch` function provides a robust tool for searching occurrences of a substring within a string. It is designed to handle case-insensitive searches, efficiently locating all matches and returning their start and end indices. This function is ideal for parsing text where finding every occurrence of a pattern is necessary, such as in text editors or processing markup languages.

## Features
- **Case Insensitivity:** Ignores case differences between the search text and the input string.
- **Comprehensive Matching:** Returns the starting and ending indices of each match found in the input string.
- **Multi-match Capability:** Can find and return multiple occurrences of the search text within the input string.

## Usage

### Parameters
- **input (string):** The string in which to search for the substring.
- **searchText (string):** The substring to search for within the input string.

### Returns
- **Array of TextRange objects:** Each `TextRange` object contains `from` and `to` properties indicating the start and end indices of a match.
- **null:** Returns `null` if no matches are found.

### Examples

1. **Finding a Simple Match:**
   ```typescript
   const matchRanges1 = smartMatch("Hello World", "hello");
   // Returns [{ from: 0, to: 4 }]

2. **Finding a Match that Includes Part of a Word:**
   ```typescript
   const matchRanges2 = smartMatch("Checking the checklist", "check");
   // Returns [{ from: 0, to: 4 }, { from: 13, to: 17 }]

3. **Finding Multiple Separate Matches:**
   ```typescript
   const matchRanges3 = smartMatch("Repeat, repeat, repeat this again", "repeat");
   // Returns [{ from: 0, to: 5 }, { from: 8, to 13 }, { from: 16, to 21 }]

4. **Case Where No Match Is Found::**
   ```typescript
   const matchRanges4 = smartMatch("Mismatch", "text");
   // Returns null

5. **Case Where No Match Is Found::**
   ```typescript
   const matchRanges5 = smartMatch("Case Insensitive", "CASE");
   // Returns [{ from: 0, to: 3 }]
