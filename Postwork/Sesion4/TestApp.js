//PETICIONES

const axios = require('axios');
const {login} = require("./Login");

const executeTest = async (input, expectedOutput, functionToExecute) => {
    const actualOutput = await functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}

const makePostApiCall = async (userCredentials) => {
    const response = await axios.post('http://localhost:3000/login', userCredentials)
    return response.data
}
const makePostApiCallAuth = async (userCredentials) => {
    const response = await axios.post('http://localhost:3000/authentication', userCredentials)
    return response.data
}

consttestReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword = () => {
constuserCredentials = {email:"myemail@mail.com", password:"securePassword"}
constsuccessMessage = "e215ZW1haWxAbWFpbC5jb20sYWRtaW59"
    executeTest(userCredentials, successMessage, makePostApiCall)
}
consttestReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword = () => {
constuserCredentials = {email:"myemail@mail.com", password:"invalidPassword"}
constsuccessMessage = "Contraseña incorrecta"
    executeTest(userCredentials, successMessage, makePostApiCall)
}
consttestReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword = () => {
constuserCredentials = {email:"unregistered_user@mail.com", password:"securePassword"}
constsuccessMessage = "Usuario no registrado"
    executeTest(userCredentials, successMessage, makePostApiCall)
}
consttestReturnsValidTokenWhenUserAuthenticateWithValidToken = () => {
consttoken = {token:"e215ZW1haWxAbWFpbC5jb20sYWRtaW59"};
    constsuccessMessage = "Valid token"
    executeTest(token, successMessage, makePostApiCallAuth)
}

testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsValidTokenWhenUserAuthenticateWithValidToken()
