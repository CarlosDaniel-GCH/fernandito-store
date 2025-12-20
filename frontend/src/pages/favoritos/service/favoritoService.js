export const getFavoritos = async() => {
    try{
        const response = await fetch('http://localhost:8000/api/favoritos');
        if(!response.ok) throw new Error('Error en la red');
        const data = response.json();

        return data;
    }
    catch(error){
        console.log('Error al traer los datos: ', error);
        throw error;
    }
}