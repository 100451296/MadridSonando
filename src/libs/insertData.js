// insertData.mjs (Datos de ejemplo)
import Servicio from "../models/servicioModel.js";
import Plan from "../models/planModel.js";

const dataToInsert = {
    servicios: [
      { ServiceName: 'Sonido' },
      { ServiceName: 'Audiovisual' },
      { ServiceName: 'Marketing' },
      { ServiceName: 'Moda' }
    ],
    planes: [
        //SONIDO
      { ServiceName: 'Sonido', Price: 19.99, Description: 'Plan básico', Name: 'Plan A' },
      { ServiceName: 'Sonido', Price: 29.99, Description: 'Plan estándar', Name: 'Plan B' },
      { ServiceName: 'Sonido', Price: 24.99, Description: 'Plan premium', Name: 'Plan C' },

      // AUDIOVISUAL
      { ServiceName: 'Audiovisual', Price: 19.99, Description: 'Plan básico', Name: 'Plan A' },
      { ServiceName: 'Audiovisual', Price: 29.99, Description: 'Plan estándar', Name: 'Plan B' },
      { ServiceName: 'Audiovisual', Price: 24.99, Description: 'Plan premium', Name: 'Plan C' },

      // AUDIOVISUAL
      { ServiceName: 'Marketing', Price: 19.99, Description: 'Plan básico', Name: 'Plan A' },
      { ServiceName: 'Marketing', Price: 29.99, Description: 'Plan estándar', Name: 'Plan B' },
      { ServiceName: 'Marketing', Price: 24.99, Description: 'Plan premium', Name: 'Plan C' },

      // AUDIOVISUAL
      { ServiceName: 'Moda', Price: 19.99, Description: 'Plan básico', Name: 'Plan A' },
      { ServiceName: 'Moda', Price: 29.99, Description: 'Plan estándar', Name: 'Plan B' },
      { ServiceName: 'Moda', Price: 24.99, Description: 'Plan premium', Name: 'Plan C' }
    ],
  };

async function insertData() {
  try {
    /*
    // Crea servicios
    for (let servicioData of dataToInsert.servicios) {
      console.log(servicioData.ServiceName);
      await Servicio.createServicio(servicioData.ServiceName);
    }
    */
   
    // Crea un mapeo de servicios utilizando el ServiceName como clave
    const servicioMap = new Map();
    const servicios = await Servicio.getAllServicios();
    servicios.forEach((servicio) => {
      servicioMap.set(servicio.ServiceName, servicio);
    });

    // Crea planes
    for (const planData of dataToInsert.planes) {
      const servicio = servicioMap.get(planData.ServiceName);

      if (!servicio) {
        throw new Error(`Servicio ${planData.ServiceName} not found.`);
      }

      await Plan.createPlan(
        planData.Price,
        planData.Description,
        planData.Name,
        servicio.id
      );
    }
  } catch (err) {
    console.error("Error inserting data:", err);
  }
}

export default {insertData, dataToInsert}