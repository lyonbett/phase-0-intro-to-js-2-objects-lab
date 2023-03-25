// Write your solution in this file!
const employee = {
    name: "lyon",
    streetAddress: "35488825",
}


//* returns an employee with the original key value
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee }
    newObj[key] = value
    return newObj
}

updateEmployeeWithKeyAndValue(employee, "sam", "1")

//* does not modify the original employee
function deleteFromEmployeeByKey(employee, key){
    const remEmployee = { ...employee }
    let name = key
    let newEmployee = delete remEmployee[name]
    return {newEmployee}
}

deleteFromEmployeeByKey(employee, "Juma")

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}