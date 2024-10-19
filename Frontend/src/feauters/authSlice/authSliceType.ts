
export interface User {
    _id: string,
    fullName: string,
    email: string,
    phoneNumber: number,
    isAdmin: boolean,
    isBanned: boolean
}

//define auth state interface
export interface authState {
    user: User | null,
    isLoading: boolean,
    error: null | string,
    isLoggedIn : boolean,
}


//define login credentials interface
export interface loginCredentilas {
    email: string,
    password: string
}
