$(document).ready(function() {

	var number = prompt("Enter a number");
	// var number = $("input").val();
	if (number % 1 != 0) {
		alert("You fucked up, pick a number dumbass");
	} else {
		for (var i = 1; i <= parseInt(number); i++) {

			if(i % 3 == 0 && i % 5 == 0) {
				var output = `<li class="numbers">${"FizzBuzz"}</li>`
				$(".numbers-list").append(output);
			} else if (i % 3 == 0) {
				var output = `<li class="numbers">${"Fizz"}</li>`
				$(".numbers-list").append(output);
			} else if (i % 5 == 0) {
				var output = `<li class="numbers">${"Buzz"}</li>`
				$(".numbers-list").append(output);
			} else {
				var output = `<li class="numbers">${i}</li>`
				$(".numbers-list").append(output);
			}
		}

	}
	// console.log(number);
});





// var fizz = "fizz";
// 	var buzz = "buzz";
// 	for (var i = 0; i < 100; i++) {
// 		if(i % 3 == 0) {
// 			if(i % 5 == 0) {
// 				console.log("fizzBuzz");
// 			}
// 		} else if (i % 3 == 0) {
// 			console.log("fizz");
// 		} else if (i % 5 == 0) {
// 			console.log("buzz");
// 		} else {
// 			console.log(i);
// 		}
// 	}