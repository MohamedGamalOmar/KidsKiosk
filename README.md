# KidsKiosk 🛒
**A Premium Full-Stack E-commerce Experience & Admin Management Suite.**

KidsKiosk is a high-performance, responsive web application built with **React.js**, **TypeScript**, **Tailwind Css**, **Shadcn** and **Redux**. It features a dual-interface system: a polished, feature-rich storefront for customers and a data-driven administrative powerhouse for business management.

---

## 🌟 Core Features

### 🛍️ Customer Storefront
* **Full Authentication Flow:** * Login & Signup or Continue with Google => **Google OAuth** integration.
    * Secure **OTP (One-Time Password) Verification**.
    * Password recovery/reset and profile management (Show/Edit).
* **Premium Shopping Experience:**
    * Dynamic product browsing with **Pagination**.
    * Deep-link Product Details pages.
    * **Advanced Variants:** Purchase by specific quantity, color, and size.
    * Interactive **Wishlist (Add to Fav)** and persistent Shopping Cart.
* **Secure Checkout:** Integrated **Stripe Payments** for a seamless, industry-standard transaction flow.
* **Order Tracking:** Dedicated "My Orders" page with full status details and history.
* **Modern UI/UX:**
    * **Light & Dark Mode** support (via `next-themes`).
    * **AOS (Animate On Scroll)** for fluid, professional entry animations.
    * Responsive Contact Us system.

### 🛡️ Admin Dashboard (The Command Center)
* **Real-time Analytics:** Interactive **Charts and Statistics** for products, payments, and orders using **Recharts**.
* **Full CRUD Operations:**
    * **Product Management:** Handle descriptions (via TinyMCE), multi-image uploads, and complex variants.
    * **Category Management:** Organize the store hierarchy.
    * **Customer Insights:** Access and manage customer details.
    * **Order Fulfillment:** Comprehensive view of order details and payment statuses.

---

## 🛠️ Technical Tech Stack

### **Frontend Architecture**
* **Core:** React.js (Vite + TypeScript)
* **State Management:** Redux Toolkit & React-Auth-Kit.
* **Data Fetching:** **TanStack Query (React Query)** for high-performance caching and server-state synchronization.
* **Styling & UI:** Tailwind CSS + **Radix UI** primitives + Lucide Icons.
* **Forms & Validation:** **React Hook Form** with **Yup** and `@hookform/resolvers` for advanced form logic.

### **Key Libraries**
* **Payments:** `@stripe/stripe-js`
* **Editor:** `@tinymce/tinymce-react` for rich product descriptions.
* **Carousel:** `embla-carousel-react`.
* **Animations:** `aos`, `tailwindcss-animate`.

---

## 🚀 Installation & Local Development

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/MohamedGamalOmar/KidsKiosk.git](https://github.com/MohamedGamalOmar/KidsKiosk.git)
    cd KidsKiosk
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory:
    ```env
    VITE_GOOGLE_CLIENT_ID=your_google_id
    VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
    VITE_TINY_API_KEY=your_tinymce_key
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

This project adopts a professional modular architecture for scalability and clear separation of concerns:

- **`app/`**: Redux Toolkit slices and global state configuration.
- **`auth/`**: Protected route components and authorization logic.
- **`components/`**: Atomic and reusable UI components.
- **`config/`**: Global configurations for Stripe, Google OAuth, and Axios.
- **`data/`**: Static project data, including dynamic form field definitions and navigation links.
- **`hooks/`**: Custom React hooks for shared logic.
- **`interfaces/`**: TypeScript interfaces for complex object definitions.
- **`layouts/`**: Master layouts (Auth, Main App, and Admin Dashboard).
- **`Pages/`**: Main application modules and view components.
- **`router/`**: Centralized routing logic using React Router.
- **`services/`**: API service layer for clean data fetching.
- **`types/`**: TypeScript type aliases and Enums.
- **`utils/`**: Reusable utility functions (formatting, calculations).
- **`validations/`**: Centralized Yup/Zod schemas for form validation.

---

## 👤 Author

**Mohamed Gamal Omar**
* **GitHub:** [@MohamedGamalOmar](https://github.com/MohamedGamalOmar)
