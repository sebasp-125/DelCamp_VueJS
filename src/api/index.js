import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const peticion = function (URL) {
    return new Promise((resolver, rechazar) => {
        Vue.http.get(URL)
            .then((response) => response.json())
            .then((data) => resolver(data))
            .catch((error) => rechazar(error));
    });
};


const enviar = function (URL, info) {
    const {id , NameFarmer , nameHause , phone_number , anddress ,  description , password , correo} = info
    return Vue.http.post(URL, {
        id, NameFarmer, nameHause, phone_number, anddress, description, password, correo
    })
        .then((response) => response.json())
        .then((data) => {
            console.warn("User already " , data);
        })
        .catch((error) => console.error(error))
}

const ValidationUser = function(URL, parameters, router) {
    return new Promise((resolve, reject) => {
        Vue.http.get(URL)
            .then(response => response.json())
            .then(data => {
                const user = data.find(user => 
                    user.correo === parameters.correoExt && 
                    user.password === parameters.passwordExt
                );
                if (user) {
                    let IdActuallyFound = user.id;
                    console.log(IdActuallyFound);
                    try {
                        router.push('/profile-farmer?IdActually=' + IdActuallyFound);
                        resolve(true);
                    } catch (error) {
                        console.error("Error during navigation:", error);
                        reject(error);
                    }
                } else {
                    console.log("Usuario no encontrado o contraseña incorrecta");
                    resolve(false);
                }
            })
            .catch(importError => {
                console.error("Error in the API: ", importError);
                reject(importError);
            });
    });
}


export default {
    peticion,
    enviar,
    ValidationUser,
}