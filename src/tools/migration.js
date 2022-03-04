import {Employee, Department} from '../model/main.model.js'

const migration = async () => {
    // Subjective entity
    await Department.sync()

    // Relative entity
    await Employee.sync()
}

await migration()

process.exit(0)
