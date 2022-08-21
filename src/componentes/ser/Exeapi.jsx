import axios from 'axios'

const Exeapi = async (state,options) => {
    const peticion = await axios.request(options);
    state(peticion.data);
}

const ExecuteAplication = async (state,options) => {
    const peticion = await axios.request(options);
    state(peticion.data.data);
}
export {
    Exeapi,
    ExecuteAplication,
} ;