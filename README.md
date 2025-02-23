# Medical Emergency Response System

## 🚀 Project Overview
The **Medical Emergency Response System** is a web application designed to streamline emergency response services. It enables users to request emergency assistance, hospitals to manage bed and ambulance availability, and administrators to oversee operations.

## 🏗️ Tech Stack
- **Frontend**: Next.js (App Router), Tailwind CSS
- **Backend**: Express.js, MongoDB
- **Authentication**: NextAuth.js (JWT-based authentication)
- **Database**: MongoDB (Mongoose ORM)
- **Styling**: Tailwind CSS
- **File Upload**: Multer

---

## 📂 Folder Structure
```
medical-emergency-app/
│── backend/                      # Express.js backend
│   ├── models/                   # Mongoose models
│   ├── routes/                   # API routes for MongoDB operations
│   ├── config/                   # Database connection
│   ├── server.js                  # Express server
│
│── app/                           # Next.js frontend
│   ├── api/                        # API routes
│   │   ├── auth/                   # Authentication
│   │   ├── hospital/               # Hospital management
│   │   ├── patient/                # Patient emergency requests
│   │
│   ├── components/                 # Reusable UI components
│   │   ├── EmergencyForm.tsx       # Emergency request form
│   │   ├── HospitalCard.tsx        # Hospital data UI
│   │
│   ├── (auth)/                     # Authentication pages
│   │   ├── login/page.tsx           # Login Page
│   │   ├── register/page.tsx        # Register Page
│   │
│   ├── (dashboard)/                # Dashboard for roles
│   │   ├── patient/page.tsx        # Patient Dashboard
│   │   ├── hospital/page.tsx       # Hospital Dashboard
│   │
│   ├── (emergency)/                # Emergency response pages
│   │   ├── request/page.tsx        # Emergency Request Page
│
│── data/                           # JSON files for mock data (if needed)
│── .env                            # Environment variables
│── package.json                    # Dependencies & scripts
│── tailwind.config.ts               # Tailwind Config
│── next.config.js                   # Next.js Config
│── tsconfig.json                    # TypeScript Config
```

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/medical-emergency-app.git
cd medical-emergency-app
```

### 2️⃣ Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd ../app
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the **backend** folder:
```sh
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000
```

Create a `.env.local` file in the **frontend** folder:
```sh
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### 4️⃣ Start the Backend Server
```sh
cd backend
npm run dev
```

### 5️⃣ Start the Frontend Server
```sh
cd ../app
npm run dev
```

Now, open [http://localhost:3000](http://localhost:3000) in your browser! 🚀

---

## 🔥 Features
✅ **User Roles**: Patients, Hospitals, Admins
✅ **Emergency Request System**: Users can submit requests with issue details.
✅ **Real-time Hospital Availability**: Hospitals manage bed and ambulance availability.
✅ **Secure Authentication**: JWT-based login using NextAuth.js
✅ **Admin Dashboard**: Oversee and approve emergency requests.
✅ **File Upload**: Users can upload government ID proof.

---

## 📌 API Endpoints
| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| POST   | `/api/auth/login`       | User login                     |
| POST   | `/api/auth/register`    | User registration              |
| GET    | `/api/hospital/list`    | Fetch available hospitals       |
| POST   | `/api/emergency`        | Submit emergency request       |
| POST   | `/api/upload`           | Upload ID proof                |

---

## 🛠️ Future Enhancements
- **🔗 Google Maps Integration** for nearest hospitals
- **📱 Mobile App** (React Native)
- **💳 Payment Gateway** for emergency response charges
- **📊 AI-Powered Prediction** for high-risk emergencies

---

## 🤝 Contributing
Feel free to fork the repository and submit PRs!

---

## 📜 License
This project is licensed under the **MIT License**.

