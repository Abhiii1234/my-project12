// pages/AppointmentForm.jsx
import { useState } from 'react';

export default function AppointmentForm() {
  const [form, setForm] = useState({ doctor: '', date: '', time: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Appointment booked with ${form.doctor} on ${form.date} at ${form.time}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <select name="doctor" onChange={handleChange}>
        <option value="">Select Doctor</option>
        <option value="Dr. A">Dr. A</option>
        <option value="Dr. B">Dr. B</option>
      </select>
      <input type="date" name="date" onChange={handleChange} />
      <input type="time" name="time" onChange={handleChange} />
      <button type="submit">Book</button>
    </form>
  );
}