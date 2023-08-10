let loremIpsun =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, natus!";

// lenght
console.log(loremIpsun.length);

// slice
const sliceString = loremIpsun.slice(6, 11);
console.log("slice ", sliceString);

// substring
const substring1 = loremIpsun.substring(6, 11);
const substring2 = loremIpsun.substring(6);
console.log("substring ", substring1);
console.log("substring ", substring2);

// substr
const substrUsage = loremIpsun.substr(6, 5);
console.log("substring ", substrUsage);

// toUpperCase
const toUpperCaseString = loremIpsun.toUpperCase();
console.log("toUpperCaseString : ", toUpperCaseString);

// toLowerCase
const toLowerCaseString = loremIpsun.toLowerCase();
console.log("toLowerCaseString : ", toLowerCaseString);

// includes
if (loremIpsun.toLowerCase().includes("consectetur")) {
  console.log("consectetur kelimesi loremIpsum variable'ında mevcut.");
}

// trim
const loremIpsumWithWhiteSpace = "     Lorem ipsum     ";
console.log("trim : ", loremIpsumWithWhiteSpace.trim());
// trimStart
const trimStartUsage = "     Lorem ipsum     ";
console.log("trimStart : ", loremIpsumWithWhiteSpace.trimStart());
// trimEnd
const trimEndUsage = "     Lorem ipsum     ";
console.log("trimEnd : ", loremIpsumWithWhiteSpace.trimEnd());

// replace
const replaceUsage = "I am using Twitter";
console.log("replace.: ", replaceUsage.replace("Twitter", "Threads"));

const splitUsage = "I am using Threads";
console.log("replace.: ", splitUsage.split(" "));

const ids = "id1,id2,id3";
console.log(ids.split(","));

// indexOf, lastIndexOf
const indexOfUsage = "Lorem ipsum dolor sit amet consectetur ipsum dolor";
console.log("indexof: ", indexOfUsage.indexOf("ipsum"));
console.log("Lastindexof: ", indexOfUsage.lastIndexOf("ipsum"));
console.log("indexof e: ", indexOfUsage.lastIndexOf("e"));
console.log("Lastindexof e: ", indexOfUsage.lastIndexOf("e"));
console.log("indexof e: ", indexOfUsage.lastIndexOf("e", 10));

// String Template Literal
let stringTemplateLiteral = `Split: ${splitUsage}, Ids: ${ids}`;
// stringTemplateLiteral = "Split:" + splitUsage + " Ids:" + ids;
// concat
stringTemplateLiteral = "Split:"
.concat(splitUsage)
.concat(" Ids: ")
.concat(ids);
console.log(stringTemplateLiteral);
