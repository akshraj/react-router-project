export const setUserToLocalStorage = (user: { user: { id: string, name: string, email: string }, token: string }) => {
    return localStorage.setItem('user-token', JSON.stringify(user));
}

export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user-token');
    let token = ''
    if (user) {
        token = JSON.parse(user)?.token
    }

    return token;
}