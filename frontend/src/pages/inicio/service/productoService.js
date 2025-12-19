export const getProducts = async() => {
    try{
        const response = await fetch('http://localhost:8000/api/productos');
        if (!response.ok) throw new Error('Error en la red');
        const data = response.json();

        return data;
    }
    catch(error){
        console.log("Error al obtener los productos: ", error);
        throw error;
    }
}