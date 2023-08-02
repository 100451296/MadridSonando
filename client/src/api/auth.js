const baseUrl = "http://192.168.1.37:4001/api"

export const registerRequest = async (userData) => {
  const url =  baseUrl + "/auth/register";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });

    if (response.status === 401) return "401"; 
    
    const responseData = await response.json();

    return responseData; // Devolver los datos obtenidos
  } catch (error) {
    // Aquí puedes manejar errores de red o problemas de solicitud
    console.error("Fetch error:", error);
    throw error; // Puedes relanzar el error si es necesario
  }
};

export const loginRequest = async (userData) => {
  const url =  baseUrl + "/auth/login";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });

    if (response.status === 401) return "401"; 
    
    const responseData = await response.json();

    return responseData; // Devolver los datos obtenidos
  } catch (error) {
    console.error("Fetch error", error);
    throw error;
  }
};

const getDataFromServer = () => {
  const url =  baseUrl + "/auth/authenticated";

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then(response => {
        if (response.status === 401) {
          resolve("401"); // Resolvemos la promesa con "401" para tratar el error en la función que llame a getDataFromServer
        } else {
          return response.json();
        }
      })
      .then(responseData => {
        resolve(responseData); // Resolvemos la promesa con los datos obtenidos
      })
      .catch(error => {
        console.error("Fetch error", error);
        reject(error); // Rechazamos la promesa con el error
      });
  });
};

export const authenticateRequest = () => {
  return new Promise((resolve, reject) => {
    getDataFromServer()
      .then(responseData => {
        resolve(responseData); // Resolvemos la promesa con los datos obtenidos
      })
      .catch(error => {
        reject(error); // Rechazamos la promesa con el error
      });
  });
};


