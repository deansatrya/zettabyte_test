// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
	// Your Code Here
	const res = [];
  
	var con1, con2;
  
	for(var i = 0; i < arr1.length; i++){
		if(arr1[i]<Math.max(...arr2)){
			con1 = false;
		}
	}
	
	for(var i = 0; i < arr2.length; i++){
		if(arr2[i]<Math.min(...arr1)){
			con2 = true;
		}
	}
	
	res.push(con1);
	res.push(con2);
	
	return res;
}

console.log(result(arr1, arr2));