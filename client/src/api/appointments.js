const baseUrl = "http://192.168.1.37:4001/api/appointments/";

export const getAppointmentsRequest = async (service, month, year) =>{
    const url = baseUrl + service + "?year=" + year + "&month=" + month;
    
    try {
        const response = await fetch(url,{method: "GET", credentials: "include"});

        if (response.status != 200) throw Error("Error al obtener citas");

        return await response.json()
    } catch (error) {
        //console.error(error);
        throw Error("Error al obtener productos");
    }   
    
};


export const getAppointments = async (service, month, year) => {
    
    try {
        const response = await getAppointmentsRequest(service, month, year);
        return response;

    } catch (error) {
        //console.error(error);
        throw Error("Error al obtener productos")
    }
    
}

export const postAppointmentsRequest = async (service, date) =>{
    const url = baseUrl;
    
    try {
        const appointmentData = {
            ServiceName: service,
            AppointmentDate : date,
        };
        const response = await fetch(url,{
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(appointmentData),
            credentials: "include",

        });

        if (response.status != 201) throw Error("Error al obtener citas");

        return await response.json()
    } catch (error) {
        //console.error(error);
        throw Error("Error al obtener productos");
    }   
    
};


export const postAppointments = async (service, date) => {
    
    try {
        const response = await postAppointmentsRequest(service, date);
        return response;

    } catch (error) {
        //console.error(error);
        throw Error("Error al obtener productos")
    }
    
}

