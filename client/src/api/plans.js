const baseUrl = "http://192.168.1.37:4001/api/plans/";

export const getPlansRequest = async (service) =>{
    const url = baseUrl + service ;
    console.log("Obteniedno pagina", url)
    try {
        const response = await fetch(url,{method: "GET"});

        if (response.status != 200) throw Error("Error al obtener productos");

        return await response.json()
    } catch (error) {
        //console.error(error);
        throw Error("Error al obtener productos");
    }   
    
};


export const getPlans = async (service) => {
    
    try {
        const response = await getPlansRequest(service);
        return response;

    } catch (error) {
        //console.error(error);
        throw Error("Error al obtener productos")
    }
    
}
