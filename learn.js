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