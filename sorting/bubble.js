

function swap(array, index1, index2) {
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;

	return array;
}

function bubbleSort(array) {
	let swapped;	
	do {
		swapped = false;
		for (let i = 0; i < (array.length - 1); i++) {
			if (array[i] > array[i + 1]) {
				array = swap(array, i, i + 1);
				swapped = true
			}
		}
	} while (swapped);
}
		

let arr = [5, 4, 3, 2, 1];
for (el of arr) {
	console.log(el + '\n');
}

console.log('\n');

bubbleSort(arr);

for (el of arr) {
	console.log(el + '\n');
}
