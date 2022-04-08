// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
    let opening = ["(", "{", "["];
    let closing = [")", "}", "]"];
  let check = []
  for ( v of s ){ 
      if(opening.includes(v)){
          check.push(opening.indexOf(v))
      }else if(closing.indexOf(v) === check.pop())
      { console.log(true)}
      else if(closing.indexOf(v) !== check.pop()) {
          console.log(false)
      }
  }


};

isValid('()')
