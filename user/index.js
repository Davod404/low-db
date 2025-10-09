    const { Role } = require("./role.js")

    class User{
        #name
        #lname
        #number
        #age
        #username
        #passwd
        #role

        constructor(name, lname, number, age, username, passwd, role){
            this.setName(name)
            this.setLname(lname)
            this.setNumber(number)
            this.setAge(age)
            this.setUsername(username)
            this.setPasswd(passwd)
            this.setRole(role)
        }

        setName(name){
            let noSpace = String(name).replaceAll("  ", "").trim()
                    
            if(noSpace.length < 2){
                throw new Error("Names valid only over 2 letters long")
            }
            if(Number(noSpace)){
                throw new Error("Names does not have numbers")
            }
            this.name = noSpace
        }

        setLname(lname){
            let noSpace = String(lname).replaceAll("  ", "").trim()
            
            if(noSpace.length < 2){
                throw new Error("Last name valid only over 2 letters long")
            }
            if(Number(noSpace)){
                throw new Error("Last name does not have numbers")
            }
            this.lname = noSpace
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
            if(age > 99 & age < 1){   
                throw new Error("Not a valid age")
            }
            this.age = age
        }

        setUsername(username){
            let noSpace = String(username).replaceAll("  ", "").trim()
                    
            if(noSpace.length < 4){
                throw new Error("Usernames valid only over 4 letters long")
            }

            this.username = noSpace
        }

        setPasswd(passwd){
            if (String(passwd).length <= 5){
                throw new Error("Password too short or empty")
            }

            this.passwd = passwd
        }

        setRole(role){
            this.role = new Role(role)
        }
    }