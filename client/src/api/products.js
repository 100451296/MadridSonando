const baseUrl = "http://192.168.1.37:4001/api/products/";

export const getPageRequest = async () =>{
    const url = baseUrl + "?page=1";
    try {
        console.log("inciando")
        const response = await fetch(url,{method: "GET"});

        if (response.status != 200) throw Error("Error al obtener productos");

        return await response.json()
    } catch (error) {
        console.error(error);
        throw Error("Error al obtener productos");
    }   
    
};


export const getPage = async () => {
    
    try {
        const response = await getPageRequest();
        return response;

    } catch (error) {
        console.error(error);
        throw Error("Error al obtener productos")
    }
    
}
