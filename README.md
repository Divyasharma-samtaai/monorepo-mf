#  Micro Frontend Monorepo

This project demonstrates a scalable **Micro Frontend architecture** implemented inside a **Turborepo-based Monorepo** using React, Vite, and Module Federation.

---

## Architecture Overview

This repository follows a **Monorepo structure** managed using npm Workspaces and Turborepo.

### Applications

-  **shell-mf** → Host application
-  **product-micro-frontend** → Remote application

```
apps/
 ├── shell-mf
 └── product-micro-frontend
```

---

##  Micro Frontend Integration

The project uses `@originjs/vite-plugin-federation` for Module Federation.

### Remote (product-micro-frontend)
- Exposes: `./App`
- Served using: `build + preview`
- Runs on: `http://localhost:5176`

### Host (shell-mf)
- Dynamically loads remote module:

```js
const ProductApp = React.lazy(() => import("productMF/App"));
```

- Runs on: `http://localhost:5173`

---

##  Tech Stack

- React 19
- Vite 5
- Turborepo 2.x
- npm Workspaces
- Module Federation
- TypeScript

---

##  Getting Started

### 1️⃣ Install Dependencies (from root)

```bash
npm install
```

### 2️⃣ Start Remote (Product)

```bash
cd apps/product-micro-frontend
npm run serve
```

### 3️⃣ Start Host (Shell)

```bash
cd apps/shell-mf
npm run dev
```

---

## 📦 Available Scripts

From root:

```bash
npm run dev
npm run build
```

From product (remote):

```bash
npm run serve
```

---

##  Key Concepts Demonstrated

- Monorepo architecture using Turborepo
- Micro Frontend integration with Vite Module Federation
- Host–Remote runtime communication
- Dev vs Build behavior in Module Federation

---



##  Author

Divya Sharma
