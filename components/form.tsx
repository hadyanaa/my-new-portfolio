import React, { useState, FormEvent } from 'react';
import Button from './button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add logic to send form data to your server or API
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-background border border-primary text-primary shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-normal mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-primary bg-background rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-normal mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-primary bg-background rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-normal mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-primary bg-background rounded"
          rows={4}
          required
        />
      </div>
      <button type="submit" className="w-full border border-primary hover:border-secondary text-white hover:text-secondary py-2 px-4 rounded transition duration-200">Submit</button>
    </form>
  );
};

export default Form;