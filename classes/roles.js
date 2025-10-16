export class Role{
    #ROLES = ["USER", "ADMIN", "SUPER_ADMIN"]
    #role

    constructor(role){
        this.assertRole(role)
        
        this.role = role
    }

    assertRole(role){
        if (!this.#ROLES.includes(role)){
            throw new Error("This role does not match with any")
        }
    }
}