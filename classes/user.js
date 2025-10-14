import { Role } from './roles.js'

class User {
    #name
    #lastName
    #number
    #age
    #password
    #role

    constructor(name, lastName, number, age, password, role){   
        this.setName(name)
        this.setLastName(lastName)
        this.setNumber(number)
        this.setAge(age)
        this.setPassword(password)
        this.role = new Role(role)
    }

    setName(name){
        const trimmed = String(name).trim()
        if (Number(name)){
            throw new Error("Names does not have numbers")
        }
        if (trimmed.length < 2){
            throw new Error("Names valid only over 2 letters long")
        }
        this.name = trimmed
    }

    setLastName(lastName){
        const trimmed = String(lastName).trim()
        
        if(trimmed.length < 2){
            throw new Error("Last name valid only over 2 letters long")
        }
        if(Number(trimmed)){
            throw new Error("Last name does not have numbers")
        }
        this.lastName = trimmed
    }

    setNumber(number){
        if(number === String(number)){
            throw new Error("Write a valid number")
        }
        if(Number(number).length <= 1){
            throw new Error("Number too short")
        }
        this.number = number
    }

    setAge(age){
        if(age > 90 & age < 13){   
            throw new Error("Not a valid age")
        }
        this.age = age
    }

    setPassword(password){
        if (String(password).length <= 5){
            throw new Error("Password too short or empty")
        }
        this.password = password
    }
}