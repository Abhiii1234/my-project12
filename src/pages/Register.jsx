import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', age: '', gender: '', contact: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) return alert('Please fill required fields');
    if (!validateEmail(form.email)) return alert('Invalid email format');
    alert('Registration Successful!');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input name="contact" placeholder="Contact" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}