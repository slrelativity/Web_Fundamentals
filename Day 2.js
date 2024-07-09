var wordArray = [
    "shawn",
    "jim",
    "tyler",
    "heidi",
    "john",
    "alfredo",
    "michael",
  ];
  
  /**
   * Determines the average length of the words in the given array.
   * @returns {number} The average length of the given words.
   */
  function avgWordLength(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i].length;
    }
    return sum / arr.length;
  }
  console.log(avgWordLength(wordArray));
  
  /**
   * Finds the longest word in the given array of words.
   * @returns {string} The longest word. If there are multiple words with the same
   *    length, this should be the last word in the array with that length.
   */
  function findLongestWord(arr) {
    var longest ="";
      for(let i = 0; i < arr.length; i++) {
    
        if (arr[i].length >= longest.length){
            longest = arr[i];
        }
        
      }
      return longest;

  }
  console.log(findLongestWord(wordArray));
  
  /************************************************************************************************/
  
  var rangeA1 = 10;
  var rangeB1 = 15;
  var rangeExpected = 75;
  /**
   * Calculates the sum of the given range, inclusive. I.e., the sum of the first
   * number through the last number, inclusive.
   * @returns {number} The sum of the given range, inclusive.
   */
  function inclusiveRangeSum(start, stop) {}
  
  console.log(inclusiveRangeSum(rangeA1, rangeB1));