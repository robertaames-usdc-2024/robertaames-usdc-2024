/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var found = [];
    for (let book = 0; book < scannedTextObj.length; book++){
        for (let i = 0; i < scannedTextObj[book].Content.length; i++) {
            var superstring = scannedTextObj[book].Content[i].Text;

            if (superstring.includes(searchTerm)) {
                found.push({"ISBN": scannedTextObj[book].ISBN, "Page": scannedTextObj[book].Content[i].Page, "Line": scannedTextObj[book].Content[i].Line});
            }
        }
    }

    var result = {
        "SearchTerm": searchTerm,
        "Results": found
    };
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


/* My added examples. */

/* When multiple books provided. */
/* input object. */
const fakeBooks = [
    {
        "Title": "fakeBook1",
        "ISBN": "19182734908721309",
        "Content": [
            {
                "Page": 42,
                "Line": 42,
                "Text": "Example sentence, I am not sure what to write. What is the meaning of all of this?"
            },
            {
                "Page": 77,
                "Line": 7,
                "Text": "Maybe I should write about what I had for breakfast? "
            },
            {
                "Page": 310,
                "Line": 100,
                "Text": "Maybe I should write some random numbers 1346298."
            },
            {
                "Page": 311,
                "Line": 1001,
                "Text": "Example. All books will have this Example term."
            }  

        ] 
    }, 
    
    {
        "Title": "fakeBook2",
        "ISBN": "212874892137",
        "Content": [
            {
                "Page": 123,
                "Line": 456,
                "Text": "Testing testing, 1 2 3. Integers being tested."
            },
            {
                "Page": 124,
                "Line": 100,
                "Text": "123. No spaces."
            },
            {
                "Page": 1234,
                "Line": 1,
                "Text": "Unique random word: asdflkj."
            },
            {
                "Page": 1555,
                "Line": 100,
                "Text": "lowercase."
            },
            {
                "Page": 15556,
                "Line": 1006,
                "Text": "LOWERCASE that is actually all uppercase."
            },
            {
                "Page": 1234566,
                "Line": 1001,
                "Text": "Example."
            }   

        ] 
    }, 

    {
        "Title": "fakeBook3",
        "ISBN": "31287340921387",
        "Content": [
            {
                "Page": 1,
                "Line": 42,
                "Text": "I can reuse these books for other tests."
            },
            {
                "Page": 2,
                "Line": 7,
                "Text": "What happens if there are \"quotes\"?"
            },
            {
                "Page": 3,
                "Line": 100,
                "Text": "What happens if single \'quotes\'?"
            },
            {
                "Page": 12,
                "Line": 11,
                "Text": "Example."
            }    

        ] 
    } 

]
    
/* output objects */

/* test to see if all books show up, and each of their line matches of "Example" */
const exampleOut = {
    "SearchTerm": "Example",
    "Results": [
        {
            "ISBN": "19182734908721309",
            "Page": 42,
            "Line": 42
        },
        {
            "ISBN": "19182734908721309",
            "Page": 311,
            "Line": 1001
        },
        {
            "ISBN": "212874892137",
            "Page": 1234566,
            "Line": 1001
        },
        {
            "ISBN": "31287340921387",
            "Page": 12,
            "Line": 11
        }
    ]
}

/* test to see if all books show up, and each of their line matches of "Example." (with a period at end) */
const examplePeriodOut = {
    "SearchTerm": "Example.",
    "Results": [
        {
            "ISBN": "19182734908721309",
            "Page": 311,
            "Line": 1001
        },
        {
            "ISBN": "212874892137",
            "Page": 1234566,
            "Line": 1001
        },
        {
            "ISBN": "31287340921387",
            "Page": 12,
            "Line": 11
        }
    ]
}

const singleQuotesOut = {
    "SearchTerm": "'quotes'",
    "Results": [
        {
            "ISBN": "31287340921387",
            "Page": 3,
            "Line": 100
        }
    ]
}

const doubleQuotesOut = {
    "SearchTerm": '"quotes"',
    "Results": [
        {
            "ISBN": "31287340921387",
            "Page": 2,
            "Line": 7
        }
    ]
}

const randomNumOut = {
    "SearchTerm": "1346298",
    "Results": [
        {
            "ISBN": "19182734908721309",
            "Page": 310,
            "Line": 100
        }
    ]
}

const oneTwoThreeSpacesOut = {
    "SearchTerm": "1 2 3",
    "Results": [
        {
            "ISBN": "212874892137",
            "Page": 123,
            "Line": 456
        }
    ]
}

const oneTwoThreeNoSpacesOut = {
    "SearchTerm": "123",
    "Results": [
        {
            "ISBN": "212874892137",
            "Page": 124,
            "Line": 100
        }
    ]
}

const phraseOut = {
    "SearchTerm": "Maybe I should write about what I had for breakfast?",
    "Results": [
        {
            "ISBN": "19182734908721309",
            "Page": 77,
            "Line": 7
        }
    ]
}

const randomPhraseOut = {
    "SearchTerm": ": asdflkj.",
    "Results": [
        {
            "ISBN": "212874892137",
            "Page": 1234,
            "Line": 1
        }
    ]
}

const lowercaseOut = {
    "SearchTerm": "lowercase",
    "Results": [
        {
            "ISBN": "212874892137",
            "Page": 1555,
            "Line": 100
        }
    ]
}

const uppercaseOut = {
    "SearchTerm": "LOWERCASE",
    "Results": [
        {
            "ISBN": "212874892137",
            "Page": 15556,
            "Line": 1006
        }
    ]
}

const uppercaseNoMatchOut = {
    "SearchTerm": "LOWERCASE unmatch",
    "Results": []
}

const doubleTestingNoMatchOut = {
    "SearchTerm": "Testing Testing",
    "Results": []
}


/* My tests */

/* check if number of results as expected */
const test3result = findSearchTermInBooks("Example", fakeBooks); 
if (test3result.Results.length == 4) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", fakeBooks.Results.length);
    console.log("Received:", test3result.Results.length);
}

/* check if "Example" in as expected */
const test4result = findSearchTermInBooks("Example", fakeBooks);
if (JSON.stringify(exampleOut) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", exampleOut);
    console.log("Received:", test4result);
}

/* check if "Example." (with a period at end) in as expected */
const test5result = findSearchTermInBooks("Example.", fakeBooks);
if (JSON.stringify(examplePeriodOut) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", examplePeriodOut);
    console.log("Received:", test5result);
}


/* check if 'quotes' (with single quotes) in as expected */
const test6result = findSearchTermInBooks("'quotes'", fakeBooks);
if (JSON.stringify(singleQuotesOut) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", singleQuotesOut);
    console.log("Received:", test6result);
}

/* check if "quotes" (with double quotes) in as expected */
const test7result = findSearchTermInBooks('"quotes"', fakeBooks);
if (JSON.stringify(doubleQuotesOut) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", doubleQuotesOut);
    console.log("Received:", test7result);
}

/* check if "1346298" in as expected */
const test8result = findSearchTermInBooks("1346298", fakeBooks);
if (JSON.stringify(randomNumOut) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", randomNumOut);
    console.log("Received:", test8result);
}

/* check if "1 2 3" (has spaces) in as expected */
const test9result = findSearchTermInBooks("1 2 3", fakeBooks);
if (JSON.stringify(oneTwoThreeSpacesOut) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", oneTwoThreeSpacesOut);
    console.log("Received:", test9result);
}

/* check if "123" (no spaces) in as expected */
const test10result = findSearchTermInBooks("123", fakeBooks);
if (JSON.stringify(oneTwoThreeNoSpacesOut) === JSON.stringify(test10result)) {
    console.log("PASS: Test 10");
} else {
    console.log("FAIL: Test 10");
    console.log("Expected:", oneTwoThreeNoSpacesOut);
    console.log("Received:", test10result);
}

/* check if "Maybe I should write about what I had for breakfast?" (check phrase) in as expected */
const test11result = findSearchTermInBooks("Maybe I should write about what I had for breakfast?", fakeBooks);
if (JSON.stringify(phraseOut) === JSON.stringify(test11result)) {
    console.log("PASS: Test 11");
} else {
    console.log("FAIL: Test 11");
    console.log("Expected:", phraseOut);
    console.log("Received:", test11result);
}

/* check if ": asdflkj." (check phrase) in as expected */
const test12result = findSearchTermInBooks(": asdflkj.", fakeBooks);
if (JSON.stringify(randomPhraseOut) === JSON.stringify(test12result)) {
    console.log("PASS: Test 12");
} else {
    console.log("FAIL: Test 12");
    console.log("Expected:", randomPhraseOut);
    console.log("Received:", test12result);
}

/* check if "lowercase" in as expected */
const test13result = findSearchTermInBooks("lowercase", fakeBooks);
if (JSON.stringify(lowercaseOut) === JSON.stringify(test13result)) {
    console.log("PASS: Test 13");
} else {
    console.log("FAIL: Test 13");
    console.log("Expected:", lowercaseOut);
    console.log("Received:", test13result);
}

/* check if "LOWERCASE" in as expected */
const test14result = findSearchTermInBooks("LOWERCASE", fakeBooks);
if (JSON.stringify(uppercaseOut) === JSON.stringify(test14result)) {
    console.log("PASS: Test 14");
} else {
    console.log("FAIL: Test 14");
    console.log("Expected:", uppercaseOut);
    console.log("Received:", test14result);
}

/* check if "LOWERCASE unmatch" in as expected, should not match thus Results [] */
const test15result = findSearchTermInBooks("LOWERCASE unmatch", fakeBooks);
if (JSON.stringify(uppercaseNoMatchOut) === JSON.stringify(test15result)) {
    console.log("PASS: Test 15");
} else {
    console.log("FAIL: Test 15");
    console.log("Expected:", uppercaseNoMatchOut);
    console.log("Received:", test15result);
}

/* check if "Testing Testing" (note 2nd word is capital) in as expected, should not match thus Results [] */
const test16result = findSearchTermInBooks("Testing Testing", fakeBooks);
if (JSON.stringify(doubleTestingNoMatchOut) === JSON.stringify(test16result)) {
    console.log("PASS: Test 16");
} else {
    console.log("FAIL: Test 16");
    console.log("Expected:", doubleTestingNoMatchOut);
    console.log("Received:", test16result);
}