import { Auth } from "aws-amplify"

export const useAuthStore = defineStore('auth', {
    state: () => ({}),
    actions: {
        login:async (username:string, password: string) => {
            try {
            const res = await Auth.signIn(username, password)
            console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
    }
})

