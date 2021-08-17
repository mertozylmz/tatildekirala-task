import testuser from '../test/user.test'

export const signinAPI = async (data) => {
    return new Promise((resolve, reject) => {
        if (data.email === testuser.email && data.password === testuser.password) {
            resolve({ user: testuser })
        } else {
            reject(new Error("E-posta veya şifre geçersiz"))
        }
    })
}