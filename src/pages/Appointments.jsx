// pages/Appointments.jsx
export default function Appointments() {
    const data = [
      { id: 1, doctor: 'Dr. A', date: '2025-06-10', time: '10:00' },
      { id: 2, doctor: 'Dr. B', date: '2025-06-12', time: '11:30' },
    ];
  
    return (
      <section className="container">
        <h2>Appointments</h2>
        <table>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map(appt => (
              <tr key={appt.id}>
                <td>{appt.doctor}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }