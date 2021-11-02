

for (i = 0; i <= 100; i++) {
    if (i % 3 == 0) // only if this returns "true" the next block will execute
      if (i % 5 == 0) {
        console.log("FizzBuzz " + i)
      } else if (i % 3 == 0) {
        console.log("Fizz " + i)
      } else if (i % 5 == 0) {
        console.log("Buzz " + i)
      } else {
        console.log(i)
      }
  }




function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];

    }
    console.log(newString)
    return newString;
}
reverseString('hello');


const str1 = 'wwwaabbbb';
const str2 = 'kkkkj';
const str3 = 'aab';
const compressString = (str = '') => {
   let res = '';
   let count = 1;
   for(let i = 0; i < str.length; i++){
      let cur = str[i];
      let next = str[i + 1];
      if(cur === next){
         count++;
      }else{
         res += cur + String(count);
         count = 1;
      };
   }
   return res.length < str.length ? res : str;
};
console.log(compressString(str1));
console.log(compressString(str2));
console.log(compressString(str3));




// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
            console.log("Nothing found!");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    }
    check_Palindrome('madam');
    check_Palindrome('nurses run');
    check_Palindrome('fox');