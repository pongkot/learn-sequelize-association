import {Department, Employee} from "../model/main.model.js";
import {departments} from "./data/departments.js";
import {employees} from "./data/employees.js";

const seed = async () => {
    await Department.bulkCreate(departments)
    await Employee.bulkCreate(employees)
}

await seed()

process.exit(0)
