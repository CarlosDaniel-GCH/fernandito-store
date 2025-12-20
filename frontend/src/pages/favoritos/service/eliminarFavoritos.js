export const eliminarFavoritos = async (productId) => {
    try{
        const response = await fetch(`http://localhost:8000/api/favoritos/${productId}`, { method: "DELETE" }
        );

        if (!response.ok) {
            throw new Error("Error al eliminar de favoritos");
        }

        return await response.json();
    }
    catch(error){
        console.log("Error: ", error);
    }
}