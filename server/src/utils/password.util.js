import bcrypt from "bcrypt"

export const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        // return await hashedPassword.json()
        return hashedPassword
        
    } catch (error) {
        console.log('Error hashing password ', error);
        
    }
}

