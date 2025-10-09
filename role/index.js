export class Role{
    #role

    constructor(role){
        this.setRole(role)
    }

    setRole(role){
        switch (role){
            case "USER": 
            case "ADMIN":
            case "SUPER_ADMIN":
                this.role = role
            default:
                console.error("USER, ADMIN or SUPER_ADMIN")
        }   
    }
}
