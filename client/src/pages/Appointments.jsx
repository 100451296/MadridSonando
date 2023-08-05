import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getAppointments, postAppointments } from "../api/appointments";
import { useParams } from "react-router-dom";
import AuthButton from "../components/AuthButton";

export function Appointments() {
  const [date, setDate] = useState(new Date());
  const [notAviableDates, setNotAviableDates] = useState([]);
  const { service } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  const tileContent = ({ date, view }) => {
    if (view === "month" && isDateMarked(date)) {
      return "bg-gray-800 text-black"; // Personaliza el fondo de los días marcados
    }
    return null; // No mostrar contenido personalizado en otras vistas
  };

  const isDateMarked = (date) => {
    // Verificar si la fecha está en el array de fechas marcadas
    return notAviableDates.some(
      (notAviableDate) => notAviableDate.toDateString() === date.toDateString()
    );
  };

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const fetchData = async () => {
    try {
      // Obtener el mes y el año de la fecha seleccionada
      const month = date.getMonth() + 1; // El mes es devuelto como un valor entre 0 y 11, por lo que sumamos 1 para obtener el mes real (entre 1 y 12)
      const year = date.getFullYear();
  
      // Llamar a getAppointments con el servicio, el mes y el año
      const notDates = await getAppointments(service, month, year);
      console.log("Dates", notDates);
  
      // Convertir las fechas a objetos Date y guardarlas en el estado
      const dateObjects = notDates.appointments.map(
        ({ AppointmentDate }) => new Date(AppointmentDate)
      );
      setNotAviableDates(dateObjects);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickDay = (selectedDate) => {
    const formattedDate = formatDateToYYYYMMDD(selectedDate);
    console.log("Día seleccionado:", formattedDate);
    setSelectedDate((formattedDate))
  };


  const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };


  const handlePost = async () => {
    
    try {
      const response = await postAppointments(service, selectedDate);
      console.log(response);
      if (response.success === true){
        setNotAviableDates((prevDate) => [...prevDate, new Date(selectedDate)]);
      }
      else{
        throw Error("Error al cargar nuevo dia")
      }
    } catch (error) {
      console.error(error);      
    }
    

  }

  return (
    <div className="flex flex-col items-center min-h-screen lg:p-10 bg-cyan-800">
      <h1>Calendario</h1>
      <div className="flex items-center justify-center lg:w-3/5 h-96 bg-red-300 rounded-2xl">
        <Calendar
          className="bg-gray-900 w-full h-full rounded-2xl lg:p-10"
          onChange={onChange}
          onClickDay={onClickDay} // Agregar onClickDay para obtener la fecha seleccionada
          tileClassName={tileContent} // Usar tileContent en lugar de tileClassName
          value={date}
        />
      </div>
      <div>
        <AuthButton onClick={handlePost}>Reserva tu cita</AuthButton>
      </div>
    </div>
  );
}
