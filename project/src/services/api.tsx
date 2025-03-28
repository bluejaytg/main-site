import axios from "axios";

const API_URL = "https://8zu0gx9lgd.execute-api.us-east-1.amazonaws.com/Stage1";

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  
  export const submitContactForm = async (formData: ContactFormData): Promise<string> => {
    try {
      const response = await axios.post(API_URL, formData);
      return response.data.message; // Expected response from Lambda
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return "Submission failed. Please try again.";
    }
  };