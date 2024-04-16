// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  let employeenumber = 0; // initialize employee number
  let employeesArray = []; // initialize employee array
  while (true) {
    let employee = {}; // initialize employee object
    console.log('prompting for first name') //debug
    employee.firstName = prompt('Enter employee first name');
    console.log("results of first name prompt" + employee.firstName); //debug 

    if (employee.firstName === null) break; // exit loop if user clicked "Cancel"
    console.log("first name prompt complete: " + employee.firstName) //debug

    employee.lastName = prompt('Enter employee last name');
    if (employee.lastName === null) break; // exit loop if user clicked "Cancel"

    let salary = prompt('Enter employee salary');
    if (salary === null) break; // exit loop if user clicked "Cancel"

    if (isNaN(salary)) {  // check if salary is not a number 
      alert('Please enter a valid number for the salary');
      continue; // skip to the next iteration of the loop
    }

    console.log('did we get here?') //debug

    employee.salary = Number(salary); // ensure salary is a number

    employeesArray.push(employee); // add employee object to employee array

    console.log('employee number ' + employeenumber + " emtered") //debug
    employeenumber++;

  } // end of while loop still in collectEmployees function
  console.log('exited loop') //debug

  // sort by last name
  employeesArray.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;

  })

  for (let i = 0; i < employeesArray.length; i++) {
    console.log(employeesArray[i]);
  }
} // end of collectEmployees function


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary;
  }
  const average = sum / employeesArray.length;
  console.log("There are " + employeesArray.length + " employees and the average salary is " + average);
} // end of displayAverageSalary


if (addEmployeesBtn !== null) {
  addEmployeesBtn.addEventListener('click', collectEmployees);
}



// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
