"use strict";
let student = {
	Name: 'Bunny',
	Year: 4,
	Branch: 'CSE',
	Section: 'A',
	Subjects: ['data structures', 'Java', 'M1', 'Physics', 'Machine learning'],
	Enter: function(){
		console.log('inside a method which lets you enter');
	},
	Exit: function(){
		console.log('inside a method which lets you exit');
		console.log("hey");
		console.log(`Branch of ${this.Name} is ${this.Branch}`);
		this.Subjects.forEach(subject => {
			console.log(`my subjects are ${subject}`);
		});
	}
};
student.Exit();