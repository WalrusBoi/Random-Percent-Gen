var a = []; // array of displayed numbers

// function generate() { // it will start generating values when this function starts.
//     // if (yourNumber == null) {
//     //     alert("Please make sure to enter a number 1-10f0")
//     // }
//     if (yourNumber > 100 || yourNumber < 1) {
//         alert("Please make sure to enter a number 1-100")
//     }
//     else {
//             for (var  i = 0; i < 5; i++) {   
//             var x = Math.floor((Math.random() * 100) + 1); // generates the numbers here
//             a.push(x)   // places the numbers in the array
//             document.getElementById("generatedNumbers").innerHTML = a /*
//             changes the html text so you can view the numbers 
//             */
//            var yourNumber = document.getElementById("number").value /*
//            takes the value of the number you typed in */
//            document.getElementById("yooo").innerHTML = yourNumber
//            if (yourNumber == x) {
//                console.log("HELLO")               
//            }           
//         }
//     }
// }
var n = 0;
var high = [];
var i = 0;
var blank = 0;
var j = 0;
var averageoftotal = [];
function generate() {
    var yourNumber = document.getElementById("number").value
    i = 0;
    n = 0;
    if (yourNumber > 100 || yourNumber < 1) {
        alert("Please make sure to enter a number 1-100")
    }
    else if (yourNumber >= 1 && yourNumber <= 100) {
        var a = [];
    var usingLoop = true;
    while (usingLoop) { 
        var x = Math.floor((Math.random() * 100) + 1); // generates the numbers here
        a.push(x)   // places the numbers in the array
        document.getElementById("generatedNumbers").innerHTML = a /*
        changes the html text so you can view the numbers 
        */
       //takes the value of the number you typed in   
       i++  
       n++   
       document.getElementById("yooo").innerHTML = i 
       
       
               
           
         

       if (x == yourNumber) {
           usingLoop = false
           averageoftotal.push(n);  
           if (n > high) {
               high.push(n)
               if (blank == 1) {
                 high.shift(n)
               }
               blank = 1;         
           }           
        }
        document.getElementById("highscore").innerHTML = high
       let count = 0;   
       let total = 0; 
       for(let k = 0; k < averageoftotal.length; k++) {
       
           if(averageoftotal[k] !== undefined) {
               
               count++;
               total += averageoftotal[k];
            //    console.log (averageoftotal[k])
           }
        }
        let average = total / count;
        document.getElementById("average").innerHTML=average
        
    }    
}
    // else {
    //     alert("Please enter a number 1-100")
    // }   
}


// while (j < 10) {

//     j++
//     console.log("the code has ran again")
//     generate()
// }

    

console.log(i)


