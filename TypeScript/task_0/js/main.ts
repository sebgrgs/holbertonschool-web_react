interface Student {
	firstname: string;
	lastname: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstname: 'Michele',
	lastname: 'Berger',
	age: 20,
	location: 'Paris'
};

const student2: Student = {
	firstname: 'Robert',
	lastname: 'Lamerand',
	age: 22,
	location: 'Lyon'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');
const firstNameHeader = document.createElement('th');
const lastNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
lastNameHeader.textContent = 'Last Name';
tbody.appendChild(firstNameHeader);
tbody.appendChild(lastNameHeader);

studentsList.forEach((student) => {
	const row = document.createElement('tr');
	const firstNameCell = document.createElement('td');
	const lastNameCell = document.createElement('td');
	
	
	firstNameCell.textContent = student.firstname;
	lastNameCell.textContent = student.lastname;

	row.appendChild(firstNameCell);
	row.appendChild(lastNameCell);
	tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
