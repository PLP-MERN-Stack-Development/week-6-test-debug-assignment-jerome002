# 🐞 MERN Bug Tracker

A full-stack Bug Tracking application built with the **MERN** stack:

- **MongoDB** – database for storing bugs
- **Express.js** – backend REST API
- **React (Vite)** – frontend user interface
- **Node.js** – server runtime

It includes **unit and integration tests**, error handling, and debugging tools for reliability.

---

## 📦 Features

- 🐛 Report new bugs via a form
- 📋 View list of all bugs
- 🔄 Update bug statuses (open, in-progress, resolved)
- ❌ Delete bugs
- 🧪 Unit + integration tests (frontend & backend)
- 🐞 Debugging with DevTools, console logs, and Node Inspector
- 🚨 Error handling with Express middleware & React Error Boundaries

---

## 🛠️ Technologies Used

| Stack      | Tool / Library                |
|------------|-------------------------------|
| Frontend   | React (Vite), Axios           |
| Backend    | Express, Mongoose, Dotenv     |
| Testing    | Jest, Supertest, React Testing Library |
| Debugging  | Chrome DevTools, Node.js Inspector |
| Dev Tools  | Nodemon, Vite                 |

---

## 🏁 Getting Started

### 📁 Project Structure

mern-bug-tracker/
├── backend/ # Express API
└── frontend/ # React Vite UI

yaml
Copy
Edit

---

## ⚙️ Backend Setup

### 1. Navigate to backend folder
```bash
cd backend
2. Install dependencies
bash
Copy
Edit
npm install
3. Create a .env file
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/bugtracker
4. Start development server
bash
Copy
Edit
npm run dev
⚛️ Frontend Setup (Vite + React)
1. Navigate to frontend folder
bash
Copy
Edit
cd ../frontend
2. Install dependencies
bash
Copy
Edit
npm install
3. Configure Vite proxy
In vite.config.js:

js
Copy
Edit
server: {
  proxy: {
    '/api': 'http://localhost:5000',
  }
}
4. Start React dev server
bash
Copy
Edit
npm run dev
Open in browser: http://localhost:5173

🧪 Testing Guide
🔬 Backend Testing
In /backend/tests/bug.test.js:

Uses Jest and Supertest

Covers:

Create bug

Get all bugs

Update/delete bugs

Run tests:

bash
Copy
Edit
cd backend
npm test
🧪 Frontend Testing
In /frontend/src/tests/:

Uses React Testing Library and Jest

Tests:

Form input and submit

API calls (mocked)

Rendering components and states

Run tests:

bash
Copy
Edit
cd frontend
npm test
🐞 Debugging Techniques Used
Type	Tools and Techniques
Frontend	console.log, React DevTools, Network tab
Backend	console.log, Node Inspector (node inspect)
API Errors	HTTP status checks, Axios error handling
UI Crashes	React Error Boundary Component
Testing Debug	--watch mode with detailed logs

❗ Error Handling
Backend
Custom Express middleware for error responses.

404 and 500 responses with JSON messages.

Frontend
React ErrorBoundary component to catch UI crashes.

Friendly fallback UI for broken components.

🚀 Deployment
You can deploy this app using:

Frontend: Vercel

Backend: Render

Make sure to:

Set MONGO_URI in Render environment settings

Configure Vercel proxy or use full backend URL

