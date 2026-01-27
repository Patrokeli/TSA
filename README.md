# TSA – Student Management System

This is a simple **Student Management System** built for the Full-Stack JavaScript Developer task.

## 🎯 Goal

Create a small application that allows users to:

* Add students
* View a list of students
* Delete a student

## 🧰 Technologies Used

* **Backend:** Node.js, Express.js, MySQL
* **Frontend:** React.js, React Router, Tailwind CSS
* **Version Control:** GitHub

## 🗂 Folder Structure

```
TSA/
├── backend/        # Node.js + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── db.js       # MySQL connection
│   ├── server.js   # Entry point
│   └── README.md
├── frontend/       # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
│ 
└── README.md
```

## ⚙️ Setup Instructions

### Backend

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add MySQL credentials:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=tsa_db
PORT=5000
```

4. Start the server:

```bash
npm start
```

Backend runs on: **[http://localhost:5000](http://localhost:5000)**

---

### Frontend

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React app:

```bash
npm start
```

Frontend runs on: **[http://localhost:3000](http://localhost:3000)**

---

## 🧩 Features

* Add student (Name, Class, Year of Study)
* View list of students
* Delete student
* Frontend and backend connected via REST API

## 🔗 API Endpoints

**Base URL:** `http://localhost:5000/api/students`

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | /        | Get all students  |
| POST   | /        | Add a new student |
| DELETE | /:id     | Delete a student  |






