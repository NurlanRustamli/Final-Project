// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'

// function LocalStorage() {
//     const { isLogin, userData } = useSelector(state => state);
//     const loginData = JSON.parse(localStorage.getItem("LoginInfo"));


//     useEffect(() => {
//         if (isLogin) {
//             localStorage.setItem("LoginInfo", JSON.stringify(userData));
//             localStorage.setItem("isLogin", isLogin)


//         } else {
//             localStorage.setItem("LoginInfo", JSON.stringify([]));

//         }
//     }, [isLogin, userData]);
//     return loginData;
// }

// export default LocalStorage