import citaModels from "../models/citaModels.js";

export const aviableDate = async (req, res, next) => {
  try {
    const busyDate = await citaModels.exists(req.body.ServiceName, req.body.AppointmentDate);
    if (busyDate) {
      return res.status(422).json({ error: "Validation Error" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

