const users = [{email: "myemail@mail.com", password: "securePassword", rol:"admin", intent:0},
    {email: "myemailTest@mail.com", password: "TestPassword", rol:"invitado", intent:0}] //arreglo de json

const tokens = ['e215ZW1haWxAbWFpbC5jb20sYWRtaW59'];    //arreglo de token


/*const login = (userCredentials) => {
    for (let i = 0; i < users.length; i++) {
        if (userCredentials.email === users[0].email && userCredentials.password === users[0].password) {
            return "Bienvenido al sistema";
        }
    }
}*/

const getToken = (userCredentials) => {
    for (let i = 0; i < users.length; i++) {

        if (userCredentials.email === users[i].email && userCredentials.password === users[i].password) {
            //return "Bienvenido al authentication";
            console.log("Bienvenido al getToken");
            // console.log(users[i].email);
            // console.log(users[i].password);
            // console.log(users[i].rol);
            var cadena= '{'+users[i].email+','+users[i].rol+'}';
            //  console.log(cadena);
            let buff= new Buffer(cadena);
            let encoded= buff.toString('base64');
            console.log(encoded);
            return encoded;
        }
        else if(userCredentials.email !== users[i].email || userCredentials.password !== users[i].password){

            if(users[i].intent === 3){
                return "Ha llegado al limite de intentos"
            }
            else{
                users[i].intent ++;

                return "Contraseña o usuario incorrecto"
            }

        }

    }
}
const authentication = (tokenReceived) => {
    console.log('Validating Token '+tokenReceived);

    for (let i = 0; i < tokens.length; i++) {  // para recorrer el arreglo de token
        if(tokens[i]===tokenReceived){
            return true;
        }
    }
    return false;
}
module.exports = {getToken, authentication};