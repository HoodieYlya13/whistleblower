# WhistleBlower 🌿

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.14-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4.7-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![License](https://img.shields.io/badge/License-Academic-blue?style=flat-square)](LICENSE)

> **WhistleBlower** is a premium, full-stack ecological monitoring and data visualization platform designed to help modern industries audit their energy footprints, track monthly greenhouse gas emissions, and execute data-backed transitions toward environmental sustainability.

---

## 🌎 Cross-Continental Academic Collaboration

This project was built as a high-stakes, collaborative 4th-year engineering school project. It was developed in partnership with an **American Business & Project Management School**, combining international technical development with cross-cultural product leadership.

### The Dynamics of our Collaboration:
* **The American Team (Chief Project Officers & Product Owners):** Acted as the CPOs, Product Owners, and Project Managers. They established the business requirements, designed the functional backlog, defined user personas, analyzed compliance models, and set the strategic product direction.
* **The Engineering Team (Technical Developers):** Designed, implemented, and deployed the full-stack architecture (React frontend + PHP API backend) ensuring high performance, responsive aesthetics, and robust file parsing pipelines that fulfilled the CPOs' exact business vision.

---

## ✨ Core Features

* 🔐 **Secure Corporate Authentication & Registration:** Streamlined onboarding for enterprise clients. Companies register with precise parameters (name, location, sector, selected operational plan, and billing options) and login securely.
* 📂 **Smart Excel Spreadsheet Parsing (`.xlsx`/`.xls`):** Powered by `react-dropzone`. Corporate users drag and drop their raw monthly energy logging spreadsheets directly into the dashboard.
* 📊 **Dynamic Visualizations (Consumption vs. Emissions):** Beautiful interactive charts powered by `Chart.js` and `react-chartjs-2`. Allows real-time toggling between:
  * **Consumptions (kWh):** Month-by-month electricity and heating consumption logs.
  * **Emissions (g CO₂):** Calculated environmental impact translated into greenhouse gas equivalence.
* 🎨 **Bespoke, Responsive UX/UI:** Designed with custom Tailwind CSS values and styled-geometry layouts:
  * Sleek geometric designs including custom **trapezoid** and **parallelogram** clip-path masks.
  * Curated CSS color tokens matching an ecological and industrial aesthetic.
  * Customized, fluid scrollbars for consistent branding across browsers.
* 📬 **Interactive Communications Engine:** FAQ dropdown interface with dynamic transitions and a contact request form supporting local and global inquiry routing.

---

## 🛠️ Technology Stack & Architecture

The **WhistleBlower** ecosystem is split into a modern decoupled architecture:

### Frontend Layer
* **Core Library:** React 18 (using modern hooks like `useState`, `useEffect`, `useRef`)
* **Routing:** React Router v7 (`react-router-dom` for client-side navigation)
* **Styling & UI Engine:** Tailwind CSS v3 & PostCSS for a responsive, utility-first UI
* **Spreadsheet Dropzone:** `react-dropzone` for dragging, dropping, and parsing validation
* **Data Visualization:** Chart.js, `react-chartjs-2`, and ApexCharts

### Backend Integration Layer (PHP API)
The React client communicates with a robust backend service designed to parse data structures, perform emission-factor multiplications based on regions, and manage data persistency:
* **Authentication API:** `POST /api/login` & `POST /api/entreprises`
* **Parsing Engine API:** `POST /api/upload` (accepts `.xlsx`/`.xls` uploads, processes rows, and outputs monthly aggregates for consumptions and emissions)

---

## 🎨 Design Tokens & Aesthetic System

The application uses custom-curated design variables defined in `src/index.css` and bound to Tailwind's configuration:

| Variable | Color Token | Visual Purpose |
| :--- | :--- | :--- |
| `--primary-color` | `#4FBC46` (Emerald Green) | Call-to-actions, successes, and brand highlights |
| `--secondary-color` | `#003838` (Deep Forest Teal) | High-contrast headers, dark elements, and primary text |
| `--tertiary-color` | `#7A7A7A` (Muted Slate Grey) | Body text, explanations, and secondary details |
| `--neutral-color` | `#FBFBFB` (Off-White) | Clean card backgrounds and scroll tracks |
| `--primary-light-color` | `#98E3CD87` (Soft Mint Green tint) | Hero section backgrounds and highlight cards |

---

## 🚀 Getting Started

To run the React frontend locally on your machine, follow these instructions:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) along with standard package managers like `npm` or `bun`.

### 1. Clone the Repository
```bash
git clone https://github.com/HoodieYlya13/whistleblower.git
cd whistleblower
```

### 2. Install Dependencies
Install all required UI and utility packages:
```bash
npm install
# or if you use bun
bun install
```

### 3. Run the Development Server
```bash
npm start
# or if you use bun
bun dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser. The page will hot-reload dynamically when changes are made.

### 4. Build for Production
To bundle and optimize the application for production hosting (Vercel, Netlify, or static server):
```bash
npm run build
```

---

## 📂 Project Structure

```text
whistleblower/
├── public/                 # Static assets (images, icons, etc.)
└── src/
    ├── components/         # Reusable React UI Components
    │   ├── utils/          # Mock data structures and helpers
    │   │   └── utils.js
    │   ├── Dashboard.css   # Dashboard layout overrides
    │   ├── Dashboard.jsx   # Ecological dashboard & Chart UI
    │   ├── Footer.jsx      # Dynamic site footer with social mappings
    │   ├── Home.jsx        # Landing page with CTA, FAQ accordion, & contact form
    │   ├── LoginPage.css   # Authentication styles
    │   ├── LoginPage.jsx   # Enterprise Login & Registration flows
    │   └── Navbar.jsx      # Navigation bar with responsive mobile drawer
    ├── App.js              # Client-side router layout
    ├── index.css           # Base Tailwind directives & custom CSS tokens
    └── index.js            # React DOM mounting & entry point
```

---

## 🤝 Project Credits & Partners

This platform was developed as part of a joint collaborative curiculum in 4th year:
* **Engineering & Architecture:** Developed by the engineering students.
* **Product Management & Product Ownership:** Led and defined by the American school CPOs.
