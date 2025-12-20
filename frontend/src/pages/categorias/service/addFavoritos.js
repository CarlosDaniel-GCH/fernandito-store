export const addFavoritos = async (productId) => {
    try{
        const response = await fetch('http://localhost:8000/api/favoritos', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                id_producto: productId
            })
        });

        if(!response.ok){
            throw new Error("Error al agregar a favoritos");
        }

        const data = await response.json();
        // console.log("Agregando a favoritos", data);
        return data;
    }
    catch(error){
        console.log("Error: ", error);
    }
}