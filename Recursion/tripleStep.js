/**
 * Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 
 * 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the 
 * child can run up the stairs.
 * examples 
 * Base cases
 * n = 1 => 1
 * n = 2 => 2
 * n = 3 => 3
 * 
 * n = 4 => 7
 * 1111
 * 121
 * 112
 * 211
 * 22
 * 13
 * 31
 * 
 */

 const tripleSteps = n => {
     if(n < 0) return 0
     if(n === 1 || n === 0) return n
     return 1 + tripleSteps(n-1) + tripleSteps(n-2) + tripleSteps(n-3)
 }
 // with memoization

 /**
  * 3
  * 21
  * 12
  * 1111
  */

 console.log(tripleSteps(3))