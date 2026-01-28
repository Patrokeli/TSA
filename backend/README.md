# Backend – Student Management System

This is the backend for the Student Management System built using **Node.js**, **Express**, and **MySQL**.

## 🧰 Technologies
- Node.js
- Express.js
- MySQL
- dotenv
- cors

## 📂 Folder Structure

backend/
├── controllers/
├── models/
├── routes/
├── db.js
├── server.js
├── package.json
└── .env


## ⚙️ Setup Instructions

### 1. Install dependencies
```bash
npm install

2. Environment variables

Create a .env file and add:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=tsa_db
PORT=5000

3. Database setup
CREATE DATABASE tsa_db;

USE tsa_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  class VARCHAR(50) NOT NULL,
  year INT NOT NULL
);

4. Run the server

npm start

Server will run on:

http://localhost:5000

🔗 API Endpoints

Base URL: /api/students

Method	Endpoint	Description
GET	/	Get all students
POST	/	Add a student
DELETE	/:id	Delete a student