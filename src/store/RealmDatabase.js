import Realm from 'realm';

const EmployeeSchema = {
  name: 'Employee',
  properties: {
    employeeId: 'int',
    name: 'string',
    designation: 'string',
    salary: 'int',
  },
};

let realm;

// let realm = Realm.open({
//   schema: [EmployeeSchema],
//   schemaVersion: 1,
// });

// const realm = new Realm({schema: [EmployeeSchema], schemaVersion: 1});

const openRealm = async () => {
  realm = new Realm({schema: [EmployeeSchema], schemaVersion: 3});
};

const addEmployee = (empData) => {
  realm.write(() => {
    const emp = realm.create('Employee', empData);
  });
};

const getAllEmployees = () => {
  return realm.objects('Employee');
};

const sortAllEmployees = (order) => {
  const employees = getAllEmployees();

  if (order === 'asc') {
    return employees.sorted('salary');
  } else {
    return employees.sorted('salary', true);
  }
};

const searchData = (name) => {
  const employees = getAllEmployees();
  return employees.filtered(`name BEGINSWITH '${name}'`);
};

const deleteAllEmployees = () => {
  realm.write(() => {
    realm.deleteAll();
  });
};

export {
  getAllEmployees,
  deleteAllEmployees,
  openRealm,
  addEmployee,
  sortAllEmployees,
  searchData,
};

export default realm;
