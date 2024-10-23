interface User {
    id?: string
    username?: string
    [key: string]: any
}

interface ValidatedData{ 
    [key: string]: any

}

interface ValidationResult {
    validatedData: ValidatedData | null
    user: User
    message: string
}


export function validateTelegramWebAppData(telegramInitdata: string): ValidationResult {
    const BOT_TOKEN = process.env.BOT_TOKEN

    let validatedData: ValidatedData | null
    let user: User = {}
    let message: string = ""

    if (!BOT_TOKEN) {
        return { message:"Bot token is not set", validatedData:null, user:{}}
    }
    const initData = new URLSearchParams(telegramInitdata)
    const hash = initData.get("hash")

    if (!hash){
        return { message:"Hash is missingfrom initdata", validatedData:null, user:{}}
    }

    initData.delete('hash')

    const authData = initData.get("auth_data")

    if (!authData) {
        return { message:"auth_data is missing from initData", validatedData:null, user:{}}
    }
}