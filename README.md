# Gebiya

Gebiya is a responsive Ethiopian cultural e-commerce app. The frontend is a static multi-page JavaScript app, and the backend is an Express/MongoDB API for authentication and order storage.

## Features

- Ethiopian cultural product catalog with matching cultural item images
- Product search, category filtering, sorting, wishlist, quick view, and cart
- Separate Shopping Cart page: `cart.html`
- Separate Secure Order page: `secure-order.html`
- Checkout flow with TeleBirr, Chapa, and SantimPay payment options
- Ethiopian Birr pricing using `ETB`
- Local language selector: English, Amharic, Afan Oromo, and Tigray/Tigrinya
- Dark mode, mobile bottom navigation, responsive mobile layout
- Backend order history and order status management through MongoDB

## Project Structure

```text
.
├── index.html              # Home, products, wishlist, orders
├── cart.html               # Shopping cart and order summary
├── secure-order.html       # Secure order / checkout form
├── style.css               # Shared frontend styles
├── script.js               # Shared frontend app logic
├── env-config.js           # Generated frontend API config, ignored by git
├── static-server.js        # Local static server
├── netlify.toml            # Netlify frontend deployment config
├── scripts/
│   ├── build-netlify.js    # Creates dist/ for Netlify
│   └── generate-env.js     # Writes env-config.js
└── backend/
    ├── server.js
    ├── models/
    └── package.json
```

## Run Locally

Start the frontend with a local HTTP server. Do not open `index.html` directly with `file://`.

```powershell
npm run dev
```

Open:

```text
http://127.0.0.1:5500
```

Start the backend separately:

```powershell
cd backend
node server.js
```

For local frontend API calls, the default backend URL is:

```text
http://localhost:5000
```

## Environment Variables

The frontend reads the backend API URL from `env-config.js`.

Local builds use this fallback when no frontend API variable is set:

```text
http://localhost:5000
```

For deployment, set this variable in Netlify:

```text
FRONTEND_API_URL=https://gebiya.netlify.app
```

The backend needs its own MongoDB connection in `backend/.env`:

```text
MONGO_URI=mongodb+srv://...
PORT=5000
```

Do not publish `backend/.env`.

## Deploy Frontend To Netlify

This project is configured so Netlify publishes only the generated `dist/` folder, not the full repository. That keeps backend files and private env files out of the deployed frontend.

Netlify settings:

```text
Build command: npm run build
Publish directory: dist
```

Or let Netlify read `netlify.toml`, which already uses:

```text
command = "node scripts/build-netlify.js"
publish = "dist"
```

Required Netlify environment variable:

```text
FRONTEND_API_URL=https://your-backend-api-url
```

## Backend API

The frontend expects these backend routes:

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/orders
POST /api/orders
GET  /api/orders/:id
PUT  /api/orders/:id
DELETE /api/orders/:id
```

## Build Check

Run:

```powershell
npm run build
```

This creates:

```text
dist/
├── index.html
├── cart.html
├── secure-order.html
├── style.css
├── script.js
├── env-config.js
└── _redirects
```
