
# **GameHub – Online Game Library 🎮**

GameHub is an interactive and vibrant online game library designed for discovering, exploring, and supporting indie game developers.
Users can browse games, view details, authenticate using Firebase, manage their profiles, and enjoy a smooth, responsive, single-page experience.

---

## 📌 **Purpose of the Project**

This project was built as part of an assignment to practice and demonstrate:

* Firebase Authentication
* React SPA development
* Protected routes
* JSON data integration
* Responsive Web Design
* Animation libraries
* Deployment & environment variable usage
* UI/UX design with a unique theme

---

# ✨ **Key Features**

### 🔒 **Authentication (Email/Password + Google Login)**

* User registration with: name, email, password & photo URL
* Strong password validation (uppercase, lowercase, 6+ characters)
* Login using email/password
* Google OAuth login
* Forgot Password feature – auto-fills email (if previously typed) and redirects user to Gmail after reset
* Protected routes (Game Details page)

---

### 🎮 **Game Library Features**

* Displays games from JSON data
* Cards show cover image, title, ratings & developer
* Game Details route shows full information
* Sorting by ratings
* Clickable cards navigate to details page
* Fully protected page – users must log in

---

### 🏙 **Vibrant Urban-Themed Design**

* Modern neon-accent UI
* Glassmorphism & urban street-style aesthetic
* Engaging animations powered by **Framer Motion / GSAP / React Spring**

---

### 🏡 **Homepage Sections**

* **Banner Slider:** Minimum 3 slides showcasing trending games
* **Popular Games:** Sorted by rating, displayed as cards
* **Newsletter Section:** Professional email subscription UI

---

### 🧭 **Navigation / Routing**

* Dynamic page titles
* 404 Not Found page
* Additional theme-related route (e.g., “Developers”, “Upcoming Games”, “Community”)
* Persistent header + footer across all pages
* SPA-friendly routing (no refresh errors)

---

### 👤 **Profile & Update**

**My Profile Page**

* Displays user name, photo, email
* Shows logout button

**Update Information Feature**

* A new route where user can update:

  * Name
  * Photo URL
* Saves updated info to Firebase

---

### 💾 **Environment Variables**

Firebase configuration is secured using a `.env.local` file such as:

```
VITE_apiKey=xxxx
VITE_authDomain=xxxx
VITE_projectId=xxxx
VITE_storageBucket=xxxx
VITE_messagingSenderId=xxxx
VITE_appId=xxxx
```

(Values must NOT be uploaded publicly.)

---

### 🌐 **Deployment**

The project is hosted using:
✔ Netlify / Surge / Firebase Hosting
✔ Firebase authorized domains are configured
✔ Client-side routing is fixed to avoid refresh errors

---

# 🛠 **Technologies Used**

### **Frontend**

* React.js (SPA)
* React Router DOM
* Tailwind CSS / DaisyUI (optional)
* Framer Motion / GSAP / React Spring for animation

### **Backend**

* Firebase Authentication
* Firebase Hosting (optional)

### **Tools & Packages**

| Package                             | Purpose                     |
| ----------------------------------- | --------------------------- |
| firebase                            | Authentication & deployment |
| react-router-dom                    | Routing                     |
| framer-motion / gsap / react-spring | Animations                  |
| swiper.js / react-slick             | Banner slider               |
| dotenv                              | Environment variables       |
| sweetalert2 / react-hot-toast       | Alerts & notifications      |

---

# 🗂 **Project Structure**

```
src/
 ├── components/
 ├── layouts/
 ├── pages/
 ├── hooks/
 ├── routes/
 ├── firebase/
 ├── assets/
 └── data/games.json
```

---

# 📑 **JSON Data Example**

```json
{
  "id": "1",
  "title": "Player Unknowns Battle Ground: PUBG",
  "coverPhoto": "https://example.com/images/pubg.png",
  "category": "FPS",
  "downloadLink": "https://www.pubgmobile.com/en-US/home.shtml",
  "description": "PUBG Mobile is a fast-paced battle royale game where players fight for survival, strategy, and victory on dynamic maps.",
  "ratings": "4.5",
  "developer": "Krafton"
}
```

---

# 🧪 **How to Run This Project Locally**

### **1. Clone the repository**

```
git clone https://github.com/tayeeb-office/ph-mil09-mod52.git
cd gamehub
```

### **2. Install dependencies**

```
npm install
```

### **3. Add Environment Variables**

Create `.env.local` file:

```
VITE_apiKey=your-key
VITE_authDomain=your-key
...
```

### **4. Run development server**

```
npm run dev
```

### **5. Build for production**

```
npm run build
```

---

# 🔄 **GitHub Commit Guidelines**

Your repo includes at least **10 meaningful commits**, e.g.:

* `Added Firebase authentication setup`
* `Created Header and Navbar with login state`
* `Added protected route for Game Details`
* `Implemented newsletter section`
* `Added profile update feature`
* `Integrated Framer Motion animations`

---

# 📸 **Screenshots (Add Yours Here)**

* Homepage
* Game Details
* Login & Register
* My Profile
* Update Info Page
* 404 Page

---

# 📬 **Contact**

For support or questions:
📧 **tayeeb.office@gmail.com**
💼 GitHub: *tayeeb-office*


