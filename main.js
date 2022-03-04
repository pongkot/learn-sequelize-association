import {Department, Employee} from "./src/model/main.model.js";

const main = async () => {
    const users = await Employee.findAll({
        attributes: ['id', 'name', 'Department.name'],
        include: [Department],
    })
    const result = users.map(user => {
        return {
            id: user.get('id'),
            name: user.get('name'),
            department: user.get('Department').name,
        }
    })
    console.log('result', result)
}

await main()

process.exit(0)
