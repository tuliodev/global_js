import axios from 'axios';

const url = "http://localhost:3000/users";

export const validateLogin = async (email, password) => {
    const result = await axios.get(`${url}?email=${email}&password=${password}`);
    console.log(result);
    if (!result.data.length) {
        throw new Error("Usuário não foi encontrado");
    }

    return result;
};