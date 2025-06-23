<div align="center">

  <h1 style="color:#58d6ff; font-size:2.5rem;"> Library Management API</h1>

  <p style="max-width:700px; font-size:1.1rem; color:#cccccc;">
    A modern, RESTful API to manage a digital library system. Built with <strong>Node.js, Express, TypeScript, and MongoDB</strong>.
  </p>

  <br>

  <img src="https://raw.githubusercontent.com/samiun-404/assets/main/library-api-banner.gif" alt="Library Banner" width="80%" style="border-radius:12px; box-shadow:0 0 15px #00000055;">

  <br><br>

  <h2 style="color:#00e5ff;">🚀 Live API Base URL</h2>
  <code style="background:#1e1e2e; color:#80cbc4; padding:10px 16px; border-radius:6px;">https://library-management-system-one-red.vercel.app/</code>

  <br><br>

  <h2 style="color:#00e676;">🧩 Features</h2>
</div>

<ul align="left" style="max-width:800px; margin:auto; font-size:1rem;">
  <li>✅ CRUD operations on books</li>
  <li>📥 Borrow books with due date and quantity control</li>
  <li>🔄 Auto-update availability when copies run out</li>
  <li>📊 Aggregation-based summary of borrowed books</li>
  <li>🔍 Filter and sort book listings</li>
  <li>⚠️ Central error handling with validation messages</li>
</ul>

<div align="center">
  <br>

  <h2 style="color:#ffd54f;">🛠 Technologies Used</h2>
  <p style="color:#ffecb3;">Node.js · Express.js · TypeScript · MongoDB · Mongoose · REST API</p>

  <br>

  <h2 style="color:#64b5f6;">📁 Folder Structure</h2>
</div>

<pre style="background:#263238; color:#cfd8dc; padding:16px; border-radius:10px; max-width:700px; margin:auto; font-size:0.9rem;">
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

</pre>

<div align="center">
  <br>
  <h2 style="color:#f48fb1;">📘 Sample Endpoint</h2>
  <h4>➕ Create Book</h4>
  <code>POST /api/books</code>
</div>

<pre style="background:#1a237e; color:#bbdefb; padding:12px; border-radius:8px; max-width:700px; margin:auto;">
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}
</pre>

<div align="center">
  <br>
  <h2 style="color:#ff8a65;">🧪 Getting Started</h2>
</div>

<ol style="max-width:700px; margin:auto; color:#ffe0b2;">
  <li><code>git clone https://github.com/yourusername/library-management-api.git</code></li>
  <li><code>cd library-management-api</code></li>
  <li><code>npm install</code></li>
  <li>Create a <code>.env</code> file with DB settings</li>
  <li><code>npm run dev</code></li>
</ol>

<div align="center">
  <br>
  <h2 style="color:#ffd740;">Project Checklist</h2>
</div>

<ul align="left" style="max-width:800px; margin:auto; color:#fff9c4;">
  <li>[x] TypeScript + Express boilerplate</li>
  <li>[x] MongoDB connection</li>
  <li>[x] Book & Borrow models</li>
  <li>[x] Borrow logic and availability update</li>
  <li>[x] Aggregation for borrowed summary</li>
  <li>[x] Error formatting and validation</li>
</ul>

<div align="center">
  <br><br>
  <hr style="width:80%; border-top:1px solid #444;">
  <p style="color: #90caf9;">Made with 💙 by <strong>Samiun Mahmud</strong></p>
</div>
