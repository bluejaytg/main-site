import React, { useState } from 'react';

export function AIWellnessFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    painPoint: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://xuyr19wyj8.execute-api.us-east-1.amazonaws.com/prod/submitWellnessLead', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});


      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          instagram: '',
          painPoint: '',
        });
      } else {
        const resData = await response.json();
        setError(resData.error || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section className="py-20 bg-white px-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Claim Your Free AI Setup</h1>

      {submitted ? (
        <p className="text-center text-green-600 text-lg">Thanks! We’ll follow up shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            name="instagram"
            placeholder="Instagram Handle"
            value={formData.instagram}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            name="painPoint"
            placeholder="What do you struggle with most?"
            value={formData.painPoint}
            onChange={handleChange}
            rows={4}
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
      )}
    </section>
  );
}
