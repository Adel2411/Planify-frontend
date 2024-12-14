# Planify - Hackathon Project 🚀

Planify is a SaaS platform designed to help entrepreneurs and business owners generate personalized, AI-driven marketing roadmaps for their businesses. This project was created for a hackathon and provides an intuitive workflow for creating and managing marketing plans.

## 🌟 Features - **Account Management:** Create or log in to an account to access the platform.

- **Business Dashboard:** Manage multiple businesses, each represented by a card in the dashboard.
- **AI-Driven Roadmaps:** Complete a multi-step form about your business, and Planify generates an initial marketing plan tailored to your inputs (no backend integration yet).
- **User-Friendly Interface:** A clean and responsive UI built with Next.js, inspired by tools like Vercel.

## 🔧 Tech Stack

- **Frontend:** Next.js with TypeScript for modern and efficient UI development.
- **Backend (Placeholder):** Go for server-side functionality.
- **AI Integration (Future Implementation):** Python with LangChain to generate marketing strategies (not yet connected).

## 🚧 Known Issues

1. **Backend Integration:**  
   Currently, there is no integration between the frontend and backend. All roadmap generation functionality is mocked on the frontend.

2. **Authentication:**
   - Planify uses cookie-based authentication, but due to a cookies issue, manual intervention is required to access the `/dashboard` route.
   - To bypass the issue and simulate an authenticated state, follow the steps below.

## 🛠️ Steps to Manually Set Authentication Cookie

To access the `/dashboard` route, manually set a cookie in your browser:

1. **Open Developer Tools:**

   - In your browser, press `F12` or right-click anywhere on the page and select **Inspect**.

2. **Navigate to the Application Tab:**

   - Go to the **Application** tab (in Chrome/Edge) or **Storage** tab (in Firefox).

3. **Set the `accessToken` Cookie:**

   - Locate the **Cookies** section under **Storage** in Developer Tools.
   - Select the domain of your running application (e.g., `localhost`).
   - Add a new cookie with the following details:
     - **Name:** `accessToken`
     - **Value:** Any string (e.g., `dummyToken123`).
     - **Domain:** Your app’s domain (e.g., `localhost`).
   - Save the cookie.

4. **Access the Dashboard:**
   - Refresh the page and navigate to `/dashboard` to view the mock dashboard.

## 🎯 How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/planify.git
   cd planify
   ```

   ```bash
   npm install
   ```

   ```bash
   npm run dev
   ```

```

```
