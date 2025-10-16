import { Role } from './roles.js'

export class User {
    #name
    #lastName
    #number
    #age
    #password
    #role

    constructor(name, lastName, number, age, password, role){   
        this.assertName(name)
        this.assertLastName(lastName)
        this.assertNumber(number)
        this.assertAge(age)
        this.assertPassword(password)

        this.name = name
        this.lastName = lastName
        this.number = number
        this.age = age
        this.password = password
        this.role = new Role(role)
    }

    assertName(name){
        const trimmed = String(name).trim()
        if (Number(name)){
            throw new Error("Names does not have numbers")
        }
        if (trimmed.length < 2){
            throw new Error("Names valid only over 2 letters long")
        }
    }

    assertLastName(lastName){
        const trimmed = String(lastName).trim()
        
        if(trimmed.length < 2){
            throw new Error("Last name valid only over 2 letters long")
        }
        if(Number(trimmed)){
            throw new Error("Last name does not have numbers")
        }
    }

    assertNumber(number){
        if(number === String(number)){
            throw new Error("Write a valid number")
        }
        if(Number(number).length <= 1){
            throw new Error("Number too short")
        }
    }

    assertAge(age){
        if(age > 90 & age < 13){   
            throw new Error("Not a valid age")
        }
    }

    assertPassword(password){
        if (String(password).length <= 5){
            throw new Error("Password too short or empty")
        }
    }
}