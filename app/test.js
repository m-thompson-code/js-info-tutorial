
// <!-- add mocha css, to show results -->
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">

// <!-- add mocha framework code -->
// <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>

// <script>
//     mocha.setup('bdd'); // minimal setup
// </script>

// <!-- add chai -->
// <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>

// ...

// <!-- the element with id="mocha" will contain test results -->
//     <div id="mocha"></div>

//     <script src="/tutorial.js"></script>

//     <!-- <script src="/test.js"></script> -->

//     <!-- run tests! -->
//     <script>
//         mocha.run();
//     </script>



// let assert = chai.assert;

// describe("pow", function() {

//     it("2 raised to power 3 is 8", function() {
//         assert.equal(pow(2, 3), 8);
//     });

//     it("3 raised to power 4 is 81", function() {
//         assert.equal(pow(3, 4), 81);
//     });

//     describe("raises x to power 3", function() {

//         function makeTest(x) {
//             let expected = x * x * x;
    
//             it(`${x} in the power 3 is ${expected}`, function() {
//                 assert.equal(pow(x, 3), expected);
//             });
//         }
    
//         for (let x = 1; x <= 5; x++) {
//             makeTest(x);
//         }
    
//     });

//     it("for negative n the result is NaN", function() {
//         assert.isNaN(pow(2, -1));
//     });

//     it("for non-integer n the result is NaN", function() {
//         assert.isNaN(pow(2, 1.5));
//     });
  
// });

// // describe("test", function() {

// //     before(() => alert("Testing started – before all tests"));
// //     after(() => alert("Testing finished – after all tests"));
  
// //     beforeEach(() => alert("Before a test – enter a test"));
// //     afterEach(() => alert("After a test – exit a test"));
  
// //     it('test 1', () => alert(1));
// //     it('test 2', () => alert(2));
  
// // });