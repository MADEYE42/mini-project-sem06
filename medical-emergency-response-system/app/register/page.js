"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Phone, BriefcaseMedical, FileText, ShieldCheck } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    contact: "",
    altContact: "",
    address: "",
    medicalCondition: "No",
    medicalDetails: "",
    medications: "No",
    medicationDetails: "",
    allergies: "No",
    allergyDetails: "",
    surgeries: "No",
    surgeryDetails: "",
    emergencyIssue: "",
    conscious: "Yes",
    emergencyCondition: "No",
    emergencyConditionDetails: "",
    specialAssistance: "",
    additionalSymptoms: "",
    insurance: "No",
    insuranceDetails: "",
    consent: "Yes",
    idProof: null,
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", formData);
      router.push("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-green-700">
      <div className="w-full max-w-lg p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg animate-fadeIn">
        <h2 className="text-3xl font-bold text-white text-center mb-6 flex items-center justify-center gap-2">
          🏥 Register for Emergency Care
        </h2>

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-xl text-green-300 font-semibold">👤 Personal Information</h3>
            <div className="mt-2 space-y-2">
              <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="input-field" />
              <input type="number" name="age" placeholder="Age" onChange={handleChange} className="input-field" />
              <select name="gender" onChange={handleChange} className="input-field">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} className="input-field" />
              <input type="text" name="altContact" placeholder="Emergency Contact" onChange={handleChange} className="input-field" />
              <input type="text" name="address" placeholder="Address" onChange={handleChange} className="input-field" />
            </div>
          </div>

          {/* Medical History */}
          <div>
            <h3 className="text-xl text-green-300 font-semibold">🩺 Medical History</h3>
            <div className="mt-2 space-y-2">
              <select name="medicalCondition" onChange={handleChange} className="input-field">
                <option value="No">Do you have any pre-existing conditions? (Yes/No)</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {formData.medicalCondition === "Yes" && (
                <input type="text" name="medicalDetails" placeholder="Specify conditions (Diabetes, Asthma, etc.)" onChange={handleChange} className="input-field" />
              )}
            </div>
          </div>

          {/* Emergency Details */}
          <div>
            <h3 className="text-xl text-green-300 font-semibold">🚨 Emergency Details</h3>
            <div className="mt-2 space-y-2">
              <select name="emergencyIssue" onChange={handleChange} className="input-field">
                <option value="">Select Emergency Type</option>
                <option value="Cardiac Arrest">Cardiac Arrest</option>
                <option value="Stroke">Stroke</option>
                <option value="Accident">Accident</option>
                <option value="Trauma">Trauma</option>
                <option value="Respiratory Issue">Respiratory Issue</option>
                <option value="Severe Allergic Reaction">Severe Allergic Reaction</option>
                <option value="Other">Other (Specify)</option>
              </select>
              <select name="conscious" onChange={handleChange} className="input-field">
                <option>Are you conscious? (Yes/No)</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <textarea name="additionalSymptoms" placeholder="Any additional symptoms?" onChange={handleChange} className="input-field h-20"></textarea>
            </div>
          </div>

          {/* Insurance */}
          <div>
            <h3 className="text-xl text-green-300 font-semibold">🛡️ Insurance</h3>
            <select name="insurance" onChange={handleChange} className="input-field">
              <option>Do you have medical insurance? (Yes/No)</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            {formData.insurance === "Yes" && (
              <input type="text" name="insuranceDetails" placeholder="Insurance Provider & Policy Number" onChange={handleChange} className="input-field" />
            )}
          </div>

          {/* Consent & Verification */}
          <div>
            <h3 className="text-xl text-green-300 font-semibold">✅ Consent & Verification</h3>
            <select name="consent" onChange={handleChange} className="input-field">
              <option>Do you give consent for doctors to access your records? (Yes/No)</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <input type="file" name="idProof" onChange={handleChange} className="input-field bg-white text-black" />
          </div>

          {/* Register Button */}
          <button type="submit" className="w-full py-2 flex items-center justify-center gap-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:scale-105">
            <BriefcaseMedical size={18} /> Register
          </button>
        </form>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-in-out;
          }
          .input-field {
            width: 100%;
            padding: 10px;
            background: transparent;
            border: 1px solid gray;
            border-radius: 8px;
            color: white;
            outline: none;
            transition: 0.3s;
          }
          .input-field:focus {
            border-color: green;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
          }
        `}
      </style>
    </div>
  );
}
