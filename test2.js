// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
	// Your Code Here
	
	const res = arr1;
	
	for(var i = 0; i < arr2.length; i++){
		if(!arr1.includes(arr2[i])){
			if(arr2[i]%2===0){
				res.push(arr2[i]);
			}else{
				res.unshift(arr2[i]);
			}
		}
	}
	
	return res;
}

console.log(result(arr1, arr2));