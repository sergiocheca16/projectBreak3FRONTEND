import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const userId = localStorage.getItem('userId');

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!token) return navigate('/login');

    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/appointments`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments(res.data);
      } catch {
        setError('Error al obtener citas');
      }
    };

    fetchAppointments();
  }, [navigate]);

  const handleCreateAppointment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/appointments`, { date, reason }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDate('');
      setReason('');
      setError('');
      setAppointments((prevAppointments) => [...prevAppointments, response.data]); // Añadir la cita recién creada
    } catch (err) {
      setError('Error al crear la cita');
    }
  };

  const handleUpdateAppointment = async (id, newStatus, newDate) => {
    try {
      await axios.put(`${API_URL}/api/appointments/${id}`, {
        status: newStatus,
        date: newDate,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setAppointments((prev) =>
        prev.map((appt) =>
          appt._id === id ? { ...appt, status: newStatus, date: new Date(newDate) } : appt
        )
      );
    } catch {
      setError('Error al actualizar cita');
    }
  };

  return (
    <div className="appointments-container">
      <h2>Citas</h2>
      <form className="create-appointment-form" onSubmit={handleCreateAppointment}>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Razón de la cita"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <button type="submit">Crear cita</button>
      </form>

      {error && <p className="auth-error">{error}</p>}

      <h3>Citas existentes</h3>
      <ul>
        {appointments.map((appointment) => (
          <li className="appointment-item" key={appointment._id}>
            <p><strong>Fecha:</strong> {new Date(appointment.date).toLocaleString()}</p>
            <p><strong>Razón:</strong> {appointment.reason}</p>
            <p><strong>Estado:</strong> {appointment.status}</p>
            {appointment.user?.name && <p><strong>Paciente:</strong> {appointment.user.name}</p>}

            {role === 'admin' && (
              <div className="appointment-controls" style={{ marginBottom: '10px' }}>
                <label>Nueva Fecha:</label>
                <input
                  type="datetime-local"
                  onChange={(e) => handleUpdateAppointment(appointment._id, appointment.status, e.target.value)}
                />
                <button
                  onClick={() => handleUpdateAppointment(appointment._id, 'pendiente', appointment.date)}>
                  Cambiar a Pendiente ❔
                </button>
                <button
                  onClick={() => handleUpdateAppointment(appointment._id, 'confirmada', appointment.date)}>
                  Cambiar a Confirmada ✅
                </button>
                <button
                  onClick={() => handleUpdateAppointment(appointment._id, 'cancelada', appointment.date)}>
                  Cambiar a Cancelada ❌
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;
