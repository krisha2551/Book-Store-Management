# 📚 Book Store Management API

A RESTful API for managing books built with Node.js, Express.js, and MongoDB.
This project follows the MVC architecture and supports full CRUD operations for managing books.

The API is tested using Postman and deployed on Render.

---

## 🚀 Live API

https://book-store-management-1-s7uh.onrender.com/

Test the server:

GET /

---

## ✨ Features

📚 Create a new book

📖 Get all books

🔎 Get book by ID

✏️ Update book details

❌ Delete a book

⚠️ Centralized error handling

🧩 MVC project structure

🗄️ MongoDB database integration

🧪 API testing with Postman

☁️ Deployment on Render

---

## 🛠 Tech Stack

| Technology | Usage                 |
| ---------- | --------------------- |
| Node.js    | Runtime Environment   |
| Express.js | Backend Framework     |
| MongoDB    | Database              |
| Mongoose   | MongoDB ODM           |
| dotenv     | Environment variables |
| Postman    | API Testing           |
| Render     | Deployment            |

---

## 📁 Project Structure

BOOK-STORE-MANAGEMENT<br>
│<br>
├── controller<br>
│   └── BookController.js<br>
│<br>
├── db<br>
│   └── mongoose.js<br>
│<br>
├── middleware<br>
│   └── HttpError.js<br>
│<br>
├── model<br>
│   └── BookModel.js<br>
│<br>
├── routes<br>
│   └── BookRoute.js<br>
│<br>
├── .env<br>
├── app.js<br>
├── package.json<br>
└── README.md<br>

---

## 📌 API Endpoints

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/`          | Check server   |
| POST   | `/books`     | Create book    |
| GET    | `/books`     | Get all books  |
| GET    | `/books/:id` | Get book by ID |
| PATCH  | `/books/:id` | Update book    |
| DELETE | `/books/:id` | Delete book    |

---

## 🧪 API Testing (Postman)

## 📸 Screenshots


**Server Check**


<img width="1918" height="1020" alt="server-check" src="https://github.com/user-attachments/assets/63b5dc76-fd69-4c04-b952-16686e274fcf" />





**Create Book**


<img width="1917" height="1021" alt="create-book" src="https://github.com/user-attachments/assets/5516b437-c857-4973-8bfc-975e341b0890" />




**Get All Books**


<img width="1916" height="1017" alt="get-books" src="https://github.com/user-attachments/assets/2cbd3f71-4b88-421a-a241-b7f5d11bff39" />




**Get Book by ID**




<img width="1917" height="1020" alt="get-book-by-id" src="https://github.com/user-attachments/assets/3a536d46-1d25-4155-ab2f-8ed58a3bf403" />


**Update Book**




<img width="1919" height="1022" alt="update-book" src="https://github.com/user-attachments/assets/b691d3d8-957b-494c-b8a9-46dc85a2bbb0" />




**Delete Book**


<img width="1919" height="1024" alt="delete-book" src="https://github.com/user-attachments/assets/4952ecf4-398f-46c8-82a6-f8210e9fbd8a" />

---

## ⚙️ Installation

1️⃣ Clone the repository

git clone https://github.com/your-username/book-store-management.git

2️⃣ Go to project folder

cd book-store-management

3️⃣ Install dependencies

npm install

4️⃣ Create .env file

PORT=5000

MONGO_URL=your_mongodb_connection_string

5️⃣ Run the server

npm run dev

or

node app.js

Server runs on:

http://localhost:5000








