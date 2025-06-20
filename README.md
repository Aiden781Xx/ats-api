
> 📄 Create a new file in your project root called:
> `README.md`

```markdown
# 📝 ATS API Backend

An Applicant Tracking System (ATS) backend API built with **Node.js**, **Express.js**, and **MongoDB**. It supports user registration, login with JWT, and profile updates.

---

## 🚀 Features

- ✅ User Registration
- 🔐 User Login with JWT
- 📄 Profile Update
- 🧩 Modular MVC Structure
- 🌐 MongoDB Atlas Integration
- 📦 Ready for frontend connection (React.js)

---

## 📁 Folder Structure

```

ats-api/
├── controllers/         # API logic
│   └── userController.js
├── models/              # Mongoose schemas
│   └── User.js
├── routes/              # Express routes
│   └── userRoutes.js
├── .env                 # Environment variables
├── server.js            # Main entry point
├── package.json
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/Aiden781Xx/ats-api.git
cd ats-api
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Add `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Run the Server

```bash
node server.js
```

---

## 🧪 API Endpoints

| Method | Endpoint                   | Description            |
| ------ | -------------------------- | ---------------------- |
| POST   | `/api/user/register`       | Register new user      |
| POST   | `/api/user/login`          | Login & get token      |
| PUT    | `/api/user/update-profile` | Update profile details |

---

## 📌 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB Atlas**
* **Mongoose**
* **JWT (jsonwebtoken)**
* **bcrypt.js**

---

## ✍️ Author

**Shivam Bhardwaj**
B.Tech CSE @ G. L. Bajaj Institute, Greater Noida
Skills: MERN Stack | Java | DSA | REST API
🔗 [LinkedIn](http://www.linkedin.com/in/shivam-sharma-193226311)
🌐 [Portfolio](https://personalshivamglbajaj.netlify.app/)

---

## 📦 Deployment Ready

You can easily deploy it to:
* 🔹 [Netlify](https://app.netlify.com/)
* 🔹 [Render](https://render.com/)
* 🔹 [Railway](https://railway.app/)
* 🔹 [Vercel (with frontend)](https://vercel.com/)