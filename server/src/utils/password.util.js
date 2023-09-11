import bcrypt from "bcrypt"

export const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        return hashedPassword
        
    } catch (error) {
        console.log('Error hashing password ', error);
        
    }
}

export const comparePassword = async (password, hashedPassword) => {
    try {
        const comparedPassword = await bcrypt.compare(password, hashedPassword)
        return comparedPassword
        
    } catch (error) {
        console.log('Error hashing password ', error);
        
    }
}

