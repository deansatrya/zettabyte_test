// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
	// Your Code Here
	
	var bin_number = (num >>> 0).toString(2);
	var count = bin_number.split('1').length - 1;
	
	return count;
}

console.log(result(number));