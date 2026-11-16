# 📸 Post Images – Backend

A role-based image sharing REST API. People can register as either a **User** or a **Creator**:

- **Creators** can upload images and create collections.
- **Users** have read-only access: they can browse images and albums but cannot upload or create anything.

Passwords are hashed with **bcryptjs**, and protected routes are guarded by authentication middleware.

---

## ✨ Features

- 🔐 Secure registration & login (passwords hashed with `bcryptjs`)
- 👥 Two roles: `user` and `creator`
- 🛡️ Role-based access control via middleware
- 🖼️ Creators can upload images
- 📁 Creators can create collections and add images to them
- 👀 Users can view all images and albums
- ☁️ Image storage handled through a dedicated storage service
- 🧱 Clean MVC-style structure (routes → controllers → models)

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Auth | bcryptjs (password hashing) + JWT |
| File Uploads | Multer |
| Image Storage | Cloud storage via `storage.services.js` |
| Config | dotenv |

---

## 👤 Roles & Permissions

| Action | User | Creator |
|---|:---:|:---:|
| Register / Login | ✅ | ✅ |
| View images | ✅ | ✅ |
| View albums | ✅ | ✅ |
| Upload images | ❌ | ✅ |
| Create albums | ❌ | ✅ |
| Add images to albums | ❌ | ✅ |

---

## 📂 Project Structure

```
Backend/
├── src/
│   ├── controller/
│   │   ├── auth.controller.js         # Register & login logic
│   │   ├── collection.controller.js   # Create / manage albums
│   │   ├── getImages.controller.js    # Fetch images & albums
│   │   └── upload.controller.js       # Image upload logic
│   ├── db/
│   │   └── db.js                      # Database connection
│   ├── middleware/
│   │   └── auth.middleware.js         # Auth check + role check
│   ├── models/
│   │   ├── collection.model.js        # Album schema
│   │   ├── image.model.js             # Image schema
│   │   └── user.model.js              # User schema (with role)
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── collection.routes.js
│   │   ├── getImages.routes.js
│   │   └── upload.routes.js
│   ├── services/
│   │   └── storage.services.js        # Image storage provider logic
│   └── app.js                         # Express app setup
├── .env
├── .env.example
├── .gitignore
├── package.json
└── server.js                          # Entry point
```

---

