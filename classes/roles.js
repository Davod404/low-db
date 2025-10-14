export class Role{
    #ROLES = ["USER", "ADMIN", "SUPER_ADMIN"]
    #role

    constructor(role){
        if (!this.#ROLES.includes(role)){
            throw new Error("This role does not match with any")
        }
        this.role = role
    }
}