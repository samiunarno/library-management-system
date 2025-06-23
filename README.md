<div align="center">

<h1 style="color:#58d6ff; font-size:2.8rem;">📚 Library Management API</h1>

<p style="max-width:700px; font-size:1.1rem; color:#cccccc;">
A robust, RESTful API designed to streamline the operations of a digital library system.<br>
Built with <strong>Node.js, Express, TypeScript, and MongoDB</strong>.
</p>

<p align="center">
  <a href="https://library-management-system-one-red.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live-API-green?style=for-the-badge&logo=vercel" alt="Live API">
  </a>
 
</p>

<br>

<img src="https://raw.githubusercontent.com/samiun-404/assets/main/library-api-banner.gif" alt="Library Banner" width="80%" style="border-radius:12px; box-shadow:0 0 15px #00000055;">

</div>

---

## 📖 About the Project

The Library Management API is a robust, modular, and scalable backend application built for managing the core functionalities of a digital or physical library system. Designed with modern development best practices in mind, this API empowers organizations to seamlessly handle book inventory, user borrowing activity, return tracking, and data reporting with efficiency and clarity.

This API serves as a foundational service layer for full-stack applications such as library portals, student dashboards, admin panels, or mobile apps used in educational institutions, corporate learning centers, or public libraries.

🔧 Key Highlights:
Modular Code Architecture: The application is structured using domain-based module separation (Book, Borrow, etc.) allowing easy scaling and maintenance.

Type Safety & Scalability: Built with TypeScript for type safety, ensuring fewer runtime errors and a better developer experience.

MongoDB Aggregation Pipeline: Advanced reporting capabilities like summaries of borrowed books, availability stats, and return tracking are implemented using MongoDB's aggregation framework.

RESTful Design: Follows standard REST principles for endpoint consistency, allowing smooth integration with any frontend or third-party service.

Robust Validation & Error Handling: Every endpoint includes detailed request validation and a centralized error-handling mechanism for meaningful feedback.

Reusable Utility Patterns: Includes common response formatters, error classes, and custom middlewares for scalability and clean code.

---

## 🚀 Live API

> 🟢 [https://library-management-system-one-red.vercel.app/](https://library-management-system-one-red.vercel.app/)

---

## 🧩 Features

- ✅ CRUD operations for books  
- 📥 Borrow books with due dates and stock control  
- 📉 Real-time update of available copies  
- 📊 Summary reporting via aggregation  
- 🔍 Filtering & sorting support  
- ⚠️ Global error and validation system  

---

## 🛠 Tech Stack

| Tech         | Description                            |
|--------------|----------------------------------------|
| **Node.js**  | Runtime for server-side JavaScript     |
| **Express**  | Minimal and flexible web framework     |
| **TypeScript**| Typed superset of JavaScript           |
| **MongoDB**  | NoSQL database with flexible schemas   |
| **Mongoose** | Elegant MongoDB object modeling        |

---

## 📁 Folder Structure

```bash
src/
├── app/
│   ├── modules/
│   │   ├── book/
│   │   └── borrow/
│   └── routes/
├── config/
├── index.ts
├── app.ts
└── server.ts
```

---

## 📘 Sample Endpoint

### ➕ Create Book

```http
POST /api/books
```

#### 📦 Sample Payload

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}
```

---

## 🧪 Getting Started

### 🛠 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/library-management-api.git

# 2. Navigate into the project directory
cd library-management-api

# 3. Install dependencies
npm install

# 4. Configure environment variables
touch .env
# Add your MongoDB URI and other keys

# 5. Start development server
npm run dev
```

---

## ✅ Project Checklist

- [x] TypeScript + Express boilerplate  
- [x] MongoDB integration  
- [x] Book & Borrow modules  
- [x] Borrow logic & availability handling  
- [x] Aggregation for summary reports  
- [x] Global error formatter  

---

## 📌 Useful Links

| Resource        | Link                                                                 |
|-----------------|----------------------------------------------------------------------|
| 🧪 Postman Docs  | *Coming Soon*                                                        |
| 🧾 API Reference | *Swagger support planned*                                            |
| 🌐 Deployed On   | [Vercel](https://vercel.com/)                                       |
| 📂 GitHub Repo   | [library-management-api](https://github.com/samiunarno/library-management-system) |

---

<div align="center">
  <hr style="width:80%; border-top:1px solid #444;">
  <p style="color: #90caf9;">Made with 💙 by <strong>Samiun Mahmud</strong></p>
</div>
