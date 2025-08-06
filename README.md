<div align="center">

# 🧑‍🎓 Student Record Backend System  
### A backend API to manage student records using MongoDB, Express, and Node.js

</div>

---

## 📌 Overview

This project is a **RESTful API** built with **Node.js**, **Express**, and **MongoDB** for managing student records. It supports full **CRUD operations** including creating, reading, updating, and deleting student data.

---

## 🛠️ Tech Stack

- 🔧 **Node.js** – Runtime environment  
- 🚀 **Express.js** – Backend framework  
- 🛢️ **MongoDB** – NoSQL database  
- 🧩 **Mongoose** – ODM for MongoDB  
- 📮 **Postman** – API testing  

---

## ⚙️ Features

- 📝 Add new student records  
- 🔍 View all or single student details  
- ✏️ Update existing student data  
- ❌ Delete student record  
- 🛡️ Error handling and validations  

---

## 🔐 API Endpoints

| Method | Endpoint            | Description             |
|--------|---------------------|-------------------------|
| GET    | `/students`         | Get all students        |
| GET    | `/students/:id`     | Get a student by ID     |
| POST   | `/students`         | Add a new student       |
| PUT    | `/students/:id`     | Update student by ID    |
| DELETE | `/students/:id`     | Delete student by ID    |

---

## 🧾 Folder Structure

```
student-record-system/
│
├── config/
│   └── db.js              # MongoDB connection
│
├── controllers/
│   └── studentController.js  # Logic for each route
│
├── models/
│   └── Student.js         # Mongoose schema
│
├── routes/
│   └── studentRoutes.js   # API endpoints
│
├── index.js               # Entry point
└── README.md              # Project documentation
```

---

## 🚀 How to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/student-record-system.git
   cd student-record-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file:
   ```
   MONGODB_URI=mongodb://localhost:27017/studentdb
   PORT=5000
   ```

4. **Run the server**
   ```bash
   npm run dev
   ```

5. **Test APIs in Postman** using the endpoints listed above.

---

## 🧠 Sample Student Schema

```json
{
  "name": "John Doe",
  "rollNumber": "2025CS101",
  "department": "Computer Science",
  "email": "john@example.com"
}
```

---

## 🙌 Acknowledgements

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Docs](https://www.mongodb.com/docs/)
- [Mongoose Docs](https://mongoosejs.com/)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">Built with 💻 by Kartik Garg</div>
