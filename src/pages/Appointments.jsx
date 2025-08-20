// pages/Appointments.jsx
export default function Appointments() {
  const data = [
    {
      id: 1,
      patient: "Rahul Sharma",
      doctor: "Dr. Priya Mehta",
      department: "Cardiology",
      type: "Consultation",
      date: "2025-08-22",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: "Ananya Singh",
      doctor: "Dr. Arjun Kapoor",
      department: "Dermatology",
      type: "Follow-up",
      date: "2025-08-23",
      time: "12:15 PM",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Vikram Yadav",
      doctor: "Dr. Neha Verma",
      department: "Orthopedics",
      type: "Consultation",
      date: "2025-08-25",
      time: "9:00 AM",
      status: "Cancelled",
    },
    {
      id: 4,
      patient: "Sanya Malhotra",
      doctor: "Dr. Rakesh Nair",
      department: "Neurology",
      type: "Consultation",
      date: "2025-08-26",
      time: "3:00 PM",
      status: "Confirmed",
    },
    {
      id: 5,
      patient: "Kabir Khanna",
      doctor: "Dr. Sneha Rao",
      department: "Pediatrics",
      type: "Routine Checkup",
      date: "2025-08-27",
      time: "11:00 AM",
      status: "Pending",
    },
    {
      id: 6,
      patient: "Meera Joshi",
      doctor: "Dr. Sanjay Kulkarni",
      department: "ENT",
      type: "Follow-up",
      date: "2025-08-28",
      time: "2:30 PM",
      status: "Confirmed",
    },
    {
      id: 7,
      patient: "Arnav Patel",
      doctor: "Dr. Kavita Sharma",
      department: "General Medicine",
      type: "Consultation",
      date: "2025-08-29",
      time: "5:00 PM",
      status: "Confirmed",
    },
    {
      id: 8,
      patient: "Ishita Agarwal",
      doctor: "Dr. Manoj Sinha",
      department: "Gynecology",
      type: "Routine Checkup",
      date: "2025-08-30",
      time: "9:45 AM",
      status: "Pending",
    },
    {
      id: 9,
      patient: "Rohit Menon",
      doctor: "Dr. Shalini Desai",
      department: "Oncology",
      type: "Consultation",
      date: "2025-09-01",
      time: "1:15 PM",
      status: "Confirmed",
    },
    {
      id: 10,
      patient: "Nisha Bhatia",
      doctor: "Dr. Ajay Bansal",
      department: "Psychiatry",
      type: "Therapy Session",
      date: "2025-09-02",
      time: "4:00 PM",
      status: "Cancelled",
    },
    {
      id: 11,
      patient: "Aditya Verma",
      doctor: "Dr. Pooja Gupta",
      department: "Endocrinology",
      type: "Consultation",
      date: "2025-09-03",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: 12,
      patient: "Neelam Reddy",
      doctor: "Dr. Rajesh Khurana",
      department: "Ophthalmology",
      type: "Eye Checkup",
      date: "2025-09-04",
      time: "11:30 AM",
      status: "Confirmed",
    },
    {
      id: 13,
      patient: "Karan Mallick",
      doctor: "Dr. Ashwini Patil",
      department: "Dermatology",
      type: "Skin Treatment",
      date: "2025-09-05",
      time: "1:00 PM",
      status: "Confirmed",
    },
    {
      id: 14,
      patient: "Divya Nair",
      doctor: "Dr. Alok Jain",
      department: "Pulmonology",
      type: "Consultation",
      date: "2025-09-06",
      time: "2:15 PM",
      status: "Pending",
    },
    {
      id: 15,
      patient: "Saurabh Mishra",
      doctor: "Dr. Kavya Iyer",
      department: "Nephrology",
      type: "Consultation",
      date: "2025-09-07",
      time: "3:45 PM",
      status: "Confirmed",
    },
  ];

  return (
    <section className="container">
      <h2>Upcoming Appointments</h2>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Department</th>
            <th>Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((appt) => (
            <tr key={appt.id}>
              <td>{appt.patient}</td>
              <td>{appt.doctor}</td>
              <td>{appt.department}</td>
              <td>{appt.type}</td>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
              <td className={`status ${appt.status.toLowerCase()}`}>
                {appt.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .appointment-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          background: #1e1e2f;
          color: #e0e0e0;
          border-radius: 10px;
          overflow: hidden;
        }
        .appointment-table th, .appointment-table td {
          border: 1px solid #333;
          padding: 12px;
          text-align: center;
        }
        .appointment-table th {
          background: #2c2c44;
          color: #f5f5f5;
        }
        .appointment-table tr:nth-child(even) {
          background: #2a2a3a;
        }
        .status.confirmed {
          color: #4caf50;
          font-weight: bold;
        }
        .status.pending {
          color: #ff9800;
          font-weight: bold;
        }
        .status.cancelled {
          color: #f44336;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
