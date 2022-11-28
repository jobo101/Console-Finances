const array = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099]
  ];

let totalMonths = (array.length);  
// flatten the array so that the numbers are accesible
     newArray = array.flat();
// console.log(array.flat());
// initiate variables 

      let arrayTotal = 0;
      let nums = [];   
      let strings = [];
// create a function
   
function addElements(arr) {   
  for (let i = 0; i < newArray.length; i++) {
        if (isNaN(newArray[i])) {
              strings.push(newArray[i]);
          } else {
              nums.push(newArray[i])
          } 
  }
  //console.log(nums);
         arrayTotal = nums.reduce((a, b) => a + b, 0);  
   
  
     strings.forEach(i => {
      newArray.forEach( j => {
             if (i===j){
                  arrayTotal += newArray.indexOf(i)  - 2;
              }
  
          })
      })
// finding biggest increase/decrease
let biggestIncrease = Math.max(...nums)
let biggestDecrease = Math.min(...nums)

const indexMin = nums.indexOf(biggestDecrease);
const indexMax = nums.indexOf(biggestIncrease);

// finding the average
const average = (arrayTotal/nums.length);
const ex2 = average.toFixed(2);

//create a function to find max and min differences

function diff(arr) {
  let newA = [];
  for (let i = 1; i < arr.length; i++)  newA.push(nums[i] - arr[i -1]);
  // return newA;
} 

      // console.log(arrayTotal);
         //console.log("THIS IS STRINGS " + strings);
         //console.log("THIS IS NUMS " + nums);
         //console.log("Total Months: " + totalMonths);
         //console.log("Total: " + "$" + nums)

  // when adding the next funtion remember to use the correct
  // titles as the array has been flattened so it has a differenct 
  //name
      //console.log(diff("This is the array of just numbers:" + nums));
  //  alert(diff(nums))
      //console.log(biggestIncrease);
      //console.log(biggestDecrease);

       //console.log("This ia the index of the biggest Increase: " + indexMin);
       //console.log("This is the index of the biggest decrease: " + indexMax);
//-----------------------------------------------------------------------------------------------------
       console.log("Financial Analysis");
       console.log("----------------------------------------");
       console.log("Total Months: " + array.length);
       console.log("Total: $" + arrayTotal);
       console.log("Average Change: $" + ex2);
       console.log("Greatest Increase in Profits: "  + strings[44] +  "  ($"  +  biggestIncrease + ")");
       console.log("Greatest Decrease in Profits: "  + strings[25] +  "  ($"  +  biggestDecrease + ")");
//-------------------------------------------------------------------------------------------------------

       //console.log("THis is the number of items in the array of just numbers: " + nums.length);
       //console.log("This is the total: " + arrayTotal);
       //console.log("Total: " + "$" + arrayTotal);
      // console.log("The total number in new array is: " + array.length);
       //console.log("This is the biggest decrease: " + "$" + biggestDecrease);
      // console.log("The biggest increase: " + "$" + biggestIncrease);

       //find the index of the array of finace figures and insert into strings[] with the correct
       //index number.  Do the same for the decrease


      }
      addElements();

