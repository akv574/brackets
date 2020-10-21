module.exports = function check(str, bracketsConfig) {
  let mapBrackets = new Map(bracketsConfig);
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    str[i] === mapBrackets.get(stack[stack.length-1]) ? stack.pop() : stack.push(str[i]);

    
  }
  return stack.length===0;


  
  // your solution
}
