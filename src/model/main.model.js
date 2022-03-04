import {Sequelize, DataTypes} from 'sequelize'

// Initial database session
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'password',
    database: 'acme',
})

// Initial database table
export const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    department: {
        type: DataTypes.STRING(2),
        allowNull: false,
    }
}, {
    timestamps: true,
})

export const Department = sequelize.define('Department', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
    },
    initial: {
        type: DataTypes.STRING(2),
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
})

// Initial association
Employee.belongsTo(Department, {
    foreignKey: 'department',
})

Department.hasOne(Employee, {
    foreignKey: 'department',
})
