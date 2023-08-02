const baseUrl = "http://192.168.1.37:4001/api/products/";

export const getPageRequest = async (page) =>{
    const url = baseUrl + "?page=" + page;
    console.log("Obteniedno pagina", url)
    try {
        console.log("inciando")
        const response = await fetch(url,{method: "GET"});

        if (response.status != 200) throw Error("Error al obtener productos");

        return await response.json()
    } catch (error) {
        //console.error(error);
        throw Error("Error al obtener productos");
    }   
    
};


export const getPage = async (page) => {
    
    try {
        const response = await getPageRequest(page);
        return response;

    } catch (error) {
        //console.error(error);
        throw Error("Error al obtener productos")
    }
    
}
