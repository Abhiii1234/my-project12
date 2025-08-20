// pages/Prescription.jsx
export default function Prescription() {
  return (
    <section className="bg-gray-900 text-gray-100 min-h-screen p-6 flex justify-center items-start">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
        
        {/* Header */}
        <header className="text-center border-b border-gray-600 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-blue-400">City Care Clinic</h1>
          <p className="text-sm">123 MG Road, Delhi | Contact: +91 98765 43210</p>
          <p className="text-sm italic">"Your Health, Our Priority"</p>
        </header>

        {/* Patient & Doctor Details */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="font-semibold text-lg border-b border-gray-500 mb-2">Patient Details</h2>
            <p><strong>Name:</strong> Rohan Sharma</p>
            <p><strong>Age:</strong> 28</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Date:</strong> 20 Aug 2025</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="font-semibold text-lg border-b border-gray-500 mb-2">Doctor Details</h2>
            <p><strong>Dr. Anjali</strong></p>
            <p>MD - General Medicine</p>
            <p><strong>Reg. No:</strong> 20214589</p>
            <p><strong>Contact:</strong> +91 99887 77665</p>
          </div>
        </div>

        {/* Prescription Table */}
        <div className="overflow-x-auto">
          <h2 className="font-semibold text-lg mb-3">Medicines Prescribed</h2>
          <table className="w-full text-sm border border-gray-600 rounded-lg">
            <thead className="bg-gray-700 text-blue-300">
              <tr>
                <th className="border border-gray-600 px-3 py-2">Medicine</th>
                <th className="border border-gray-600 px-3 py-2">Dosage</th>
                <th className="border border-gray-600 px-3 py-2">Frequency</th>
                <th className="border border-gray-600 px-3 py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 px-3 py-2">Paracetamol 500mg</td>
                <td className="border border-gray-600 px-3 py-2">1 tablet</td>
                <td className="border border-gray-600 px-3 py-2">Twice daily</td>
                <td className="border border-gray-600 px-3 py-2">5 days</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-3 py-2">Amoxicillin 250mg</td>
                <td className="border border-gray-600 px-3 py-2">1 capsule</td>
                <td className="border border-gray-600 px-3 py-2">Three times daily</td>
                <td className="border border-gray-600 px-3 py-2">7 days</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-3 py-2">Vitamin C 1000mg</td>
                <td className="border border-gray-600 px-3 py-2">1 tablet</td>
                <td className="border border-gray-600 px-3 py-2">Morning only</td>
                <td className="border border-gray-600 px-3 py-2">10 days</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-3 py-2">Cough Syrup</td>
                <td className="border border-gray-600 px-3 py-2">10 ml</td>
                <td className="border border-gray-600 px-3 py-2">Twice daily</td>
                <td className="border border-gray-600 px-3 py-2">6 days</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">Doctor's Notes</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Drink at least 3 liters of water daily.</li>
            <li>Avoid oily and spicy food until recovery.</li>
            <li>Get adequate rest and avoid screen time at night.</li>
            <li>If fever persists beyond 5 days, revisit clinic immediately.</li>
          </ul>
        </div>

        {/* Follow up */}
        <div className="mt-6 text-center">
          <p className="text-sm">Next Appointment: <strong>27 Aug 2025</strong></p>
          <p className="text-gray-400 text-xs mt-2">* This is a computer-generated prescription, signature not required</p>
        </div>
      </div>
    </section>
  );
}
