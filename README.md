📚 Book Store Management API

A RESTful API for managing books built with Node.js, Express.js, and MongoDB.
This project follows the MVC architecture and supports full CRUD operations for managing books.

The API is tested using Postman and deployed on Render.

🚀 Live API

https://book-store-management-1-s7uh.onrender.com/

Test the server:

GET /

✨ Features

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

🛠 Tech Stack

| Technology | Usage                 |
| ---------- | --------------------- |
| Node.js    | Runtime Environment   |
| Express.js | Backend Framework     |
| MongoDB    | Database              |
| Mongoose   | MongoDB ODM           |
| dotenv     | Environment variables |
| Postman    | API Testing           |
| Render     | Deployment            |

📁 Project Structure

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

📌 API Endpoints

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/`          | Check server   |
| POST   | `/books`     | Create book    |
| GET    | `/books`     | Get all books  |
| GET    | `/books/:id` | Get book by ID |
| PATCH  | `/books/:id` | Update book    |
| DELETE | `/books/:id` | Delete book    |


🧪 API Testing (Postman)

📸 Screenshots

Server Check
<img src="screenshots/server-check.png" alt="Server Check" width="800"/>

Create Book
<img src="screenshots/create-book.png" alt="Create Book" width="800"/>

Get All Books
<img src="screenshots/get-books.png" alt="Get All Books" width="800"/>

Get Book by ID
<img src="screenshots/get-book-by-id.png" alt="Get Book by ID" width="800"/>

Update Book
<img src="screenshots/update-book.png" alt="Update Book" width="800"/>

Delete Book
<img src="screenshots/delete-book.png" alt="Delete Book" width="800"/>


⚙️ Installation

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



