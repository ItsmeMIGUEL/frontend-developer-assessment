// a function that uses reduce to group employee names by department from an array of employee objects. Return the result.
function groupByDepartment(employees) {
  return employees.reduce((grouped, employee) => {
    const { name, department } = employee;
    if (!grouped[department]) {
      grouped[department] = [];
    }
    grouped[department].push(name);
    return grouped;
  }, {});
}

const employees = [
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "Finance" },
  { name: "Charlie", department: "HR" },
];

console.log(groupByDepartment(employees));
