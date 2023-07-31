import citaModel from "../models/citaModels.js";

export const getAppoinment = async (req, res) => {
  try {
    const appointments = await citaModel.getMonth(
      req.params.servicio,
      req.query.year,
      req.query.month
    );

    // Crear un nuevo arreglo solo con el atributo AppointmentDate
    const simplifiedAppointments = appointments.map((appointment) => {
      return { AppointmentDate: appointment.AppointmentDate };
    });

    return res.status(200).json({ appointments: simplifiedAppointments });
  } catch (error) {
    return res.status(500).json({ message: "Internal Error" });
  }
};

export const postAppointment = async (req, res) => {
  try {
    await citaModel.createCita(
      req.user.id,
      req.body.ServiceName,
      req.body.AppointmentDate
    );
    res.status(201).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
