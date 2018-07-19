#!/usr/bin/js


function Node(value) {
	this.val = value;
	this.next = null;
}


function SinglyLinkedList(head_val) {
	this.head = new Node(head_val);
	this.head.next = null;
}


SinglyLinkedList.prototype.pushVal = function(value) {
	let curr = this.head;
	while (curr.next != null) {
		curr = curr.next;
	}
	curr.next = new Node(value);
}


SinglyLinkedList.prototype.popVal = function() {
	let curr = this.head;
	while (curr.next.next !== null) {
		curr = curr.next;
	}
	curr.next = null;
}


SinglyLinkedList.prototype.printVals = function() {
	console.log('\n');

	let curr = this.head;
	while (curr != null) {
		console.log(curr.val);
		curr = curr.next;
	}
}


SinglyLinkedList.prototype.search = function(key) {
	let curr = this.head;
	while (curr && curr.val !== key) {
		curr = curr.next;
	}
	
	return curr;
}


SinglyLinkedList.prototype.reverse = function(head) {
	// base case: sublist has two nodes
	if (head.next.next === null) {	
		nodeTwo = head.next;

		nodeTwo.next = head;	
		head.next = null;
		newHead = nodeTwo;
		
		return newHead;

	} else {
		newHead = this.reverse(head.next);
		curr = newHead;
		while (curr.next !== null) {
			curr = curr.next;
		}
		curr.next = head;
		head.next = null;

		return newHead;
	}
}


let my_list = new SinglyLinkedList(5);
my_list.pushVal(-23143);
my_list.pushVal("hello world!");
// should print the above three literals, in order
my_list.printVals();

my_list.popVal();
console.log(' ');
// should print "5" followed by "-23143"
my_list.printVals();

console.log('\n');

// should print "Node { val: -23143, next: null }"
console.log(my_list.search(-23143));
// should print "null" (value 1337 is not in the list)
console.log(my_list.search(1337));

my_list.pushVal(123);
my_list.pushVal(-2);

my_list.printVals();
my_list.head = my_list.reverse(my_list.head);
my_list.printVals();


