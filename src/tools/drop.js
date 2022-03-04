import {Department, Employee} from "../model/main.model.js";

const drop = async () => {
    // Subjective entity
    await Department.drop()

    // Relative entity
    await Employee.drop()
}

await drop()

process.exit(0)
