// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Function to prompt for user input and validate it
const promptForInput = (promptMessage, validator) => {
  while (true) {
    const input = prompt(promptMessage);
    if (input === null) {
      return null;
    }
    if (validator(input)) {
      return input;
    }
    alert('Invalid input, please try again.');
  }
}

// Collect employee data function
const collectEmployees = function () {
  const employeesArray = []; // initialize employee array
  let employeenumber = 0; // initialize employee number 
  while (true) {
    const employee = {}; // initialize employee object

    employee.firstName = promptForInput('Enter employee first name', input => input !== null && input !== '');
    // console.log(`First Name: ${employee.firstName}`);
    if (employee.firstName === null) break; // exit loop if user clicked "Cancel"

    employee.lastName = promptForInput('Enter employee last name', input => input !== null && input !== '');
    // console.log(`Last Name: ${employee.lastName}`);
    if (employee.lastName === null) break; // exit loop if user clicked "Cancel"

    const salary = promptForInput('Enter employee salary', input => input !== null && !isNaN(input));
    //    console.log(`Salary: ${salary}`);
    if (salary === null) break; // exit loop if user clicked "Cancel"
    employee.salary = Number(salary);
    employeesArray.push(employee); // add employee object to employee array

    console.log('employee number ' + employeenumber + " emtered") //debug
    employeenumber++;
  } // end of while loop - time to sort and display the employees

  employeesArray.sort((a, b) => {
    // ready to sort the array
    console.log("sorting array");
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  });
  // now to print the array to the console
  console.log("printing array"); //debug

  for (let i = 0; i < employeesArray.length; i++) {
    console.log(employeesArray[i]);
  }
  console.log("array printed");//debug
  return employeesArray;
}
// end of collectEmployees and sorted display function

// Function declaration to display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary;
  }
  const average = sum / employeesArray.length;
  console.log("There are " + employeesArray.length + " employees and the average salary is " + average);
}
// function to get random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log("Random Employee: " + randomEmployee.firstName + " " + randomEmployee.lastName + " " + randomEmployee.salary);
  return randomEmployee;
} // end of getRandomEmployee function


// Event Listeners

if (addEmployeesBtn !== null) {
  addEmployeesBtn.addEventListener('click', () => {
    const employees = collectEmployees();
    console.log(employees);
    displayAverageSalary(employees);
    console.log(getRandomEmployee(employees));
  });
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
