#!/usr/bin/js

function insertionSort(arr) {
	for (let i = 1; i <= arr.length - 1; i++) {
		let key = arr[i];
		let j = i - 1;

		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j -= 1;
		}

		arr[j + 1] = key;
	}
}


let array = [43, -231, 53844, 0, 123, -4382425, 15];
console.log(array)

console.log('\n');

insertionSort(array);
console.log(array);
