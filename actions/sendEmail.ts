"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const sendEmail = async (formData: FormData) => {
  // window.alert(`Thank You ${formData.get("senderEmail")} for Contacting me.`);
  toast(`Thank You ${formData.get("senderEmail")} for Contacting me.`);
};
