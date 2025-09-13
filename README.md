# 🛒 Product Store

![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-4.3-green) ![Chakra UI](https://img.shields.io/badge/Chakra_UI-2.10.0-purple) ![Node.js](https://img.shields.io/badge/Node.js-18-brightgreen) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

A fullstack **Product Management application** built with **React + Vite frontend** and **Express + MongoDB backend**. Users can **view**, **add**, **edit**, and **delete products** through a clean, responsive UI.

**Repository:** [https://github.com/Yashuchirag/product-store](https://github.com/Yashuchirag/product-store)

---

## ✨ Features

* 🌓 Dark & light mode support (Chakra UI)
* 📦 Product list page with dynamic data
* ➕ Create new product form with validation
* ✏️ Edit & delete products
* 🔄 State management with **Zustand**
* 🎨 Modern UI with **Chakra UI + Framer Motion animations**
* 🔗 Routing with **React Router v6+**
* 🌐 Fully deployable: frontend and backend on Render

---

## 🛠 Tech Stack

### Frontend

* React 18
* Vite (build tool)
* Chakra UI (UI components)
* Zustand (state management)
* React Router v6+ (client-side routing)
* Framer Motion (animations)

### Backend

* Node.js + Express 5
* MongoDB Atlas
* Mongoose (ODM)
* CORS enabled for cross-domain requests

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* npm or yarn
* MongoDB Atlas account (or existing cluster)

---

## 🔹 Backend Setup (Express + MongoDB)

1. Go to backend folder:

```bash
cd backend
npm install
```

2. Create `.env` file:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/product-store
NODE_ENV=development
```

3. Run the backend locally:

```bash
npm run dev
```

4. Backend API endpoints:

* `GET /api/products` → Get all products
* `POST /api/products` → Create a product
* `PUT /api/products/:id` → Update a product
* `DELETE /api/products/:id` → Delete a product

---

### 🔹 Deploy Backend on Render

1. Push backend to GitHub.
2. Go to [Render](https://render.com/) → New → Web Service.
3. Connect your GitHub repo, select backend folder.
4. Set environment variables (`MONGO_URI`, `PORT`).
5. Deploy → You’ll get a URL like:

```
https://product-store.onrender.com
```

6. Enable CORS for your frontend domain:

```js
import cors from "cors";
app.use(cors({ origin: "https://product-store.netlify.app" }));
```

---

## 🔹 Frontend Setup (React + Vite)

1. Go to frontend folder:

```bash
cd frontend
npm install
```

2. Create `.env` file:

```env
VITE_API_URL=https://product-store.onrender.com/api
```

3. Run locally:

```bash
npm run dev
```

4. Frontend routes:

* `/` → Home Page (list of products)
* `/create` → Create Product Page

---

### 🔹 Deploy Frontend on Render.com

1. Push frontend folder to GitHub.
2. Go to [Render](https://render.com/) → New site → Import from Git.
3. Set build settings:

```
Base directory: frontend
Build command: npm run build
Publish directory: frontend/dist
```

4. Add `_redirects` file in `frontend/public/`:

```
/* /index.html 200
```

5. Add environment variable `VITE_API_URL=https://product-store.onrender.com/api` in Netlify settings.
6. Deploy → You’ll get a URL like:

```
https://product-store.netlify.app
```

---

## 🌐 Custom Domain Setup
  * In Render, add custom domain → update DNS CNAME in your domain registrar.
* **Frontend domain** (Render): `product-store.chiragch.com` 


> Note: You can host frontend and backend on different servers under subdomains.

---

## 🗂 Folder Structure

```
product-store/
├─ backend/
│  ├─ config/        # DB connection
│  ├─ models/        # Mongoose schemas
│  ├─ routes/
│  ├─ controller
│  ├─ server.js
├─ frontend/
│  ├─ public/        # Static assets + _redirects
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ store/
│  │  └─ App.jsx
│  └─ package.json
├─ package.json
```

---


## 💡 Notes / Best Practices

* Always prefix environment variables for frontend with `VITE_` to expose them to Vite.
* Use `mx="auto"` or `Flex justify="center"` to center images in cards.
* Use `_redirects` in Netlify to handle React Router routes.
* CORS must be enable