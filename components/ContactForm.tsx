"use client";
import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="max-w-xl mx-auto bg-black/80 border border-orange-600 rounded-2xl p-8 shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center bg-linear-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text uppercase">Online Coaching</h2>
      <p className="text-orange-400 text-center mb-6 font-semibold">Train anywhere. Get expert guidance.</p>
      {submitted ? (
        <div className="text-green-400 text-center font-semibold py-8">
          Thank you for reaching out! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-black/30 border border-orange-600 text-white placeholder:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-black/30 border border-orange-600 text-white placeholder:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="px-4 py-3 rounded-lg bg-black/30 border border-orange-600 text-white placeholder:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
          />
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;