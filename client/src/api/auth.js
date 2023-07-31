export const registerRequest = async (userData) => {
  const url = "http://localhost:4001/api/auth/register";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();

    return responseData; // Devolver los datos obtenidos de la respuesta
  } catch (error) {
    // Aquí puedes manejar errores de red o problemas de solicitud
    console.error("Fetch error:", error);
    throw error; // Puedes relanzar el error si es necesario
  }
};

export const loginRequest = async (userData) => {
  const url = "http://localhost:4001/api/auth/login";

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

export const authenticateRequest = async () => {
  const url = "http://localhost:4001/api/auth/authenticated";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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


