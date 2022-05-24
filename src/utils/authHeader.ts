export function authHeader() {

    let userInfo: any = JSON.parse(localStorage.getItem('userInfo') as string);
    
    if (userInfo.jwtToken) {
        return { 'Authorization': 'Bearer ' + userInfo.jwtToken };
    } else {
        return {};
    }
}