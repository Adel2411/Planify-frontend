# Planify - Hackathon Project 🚀

[Planify Frontend Repository](https://github.com/Adel2411/Planify-frontend)

Planify is a SaaS platform designed to empower entrepreneurs and business owners by generating personalized, AI-driven marketing roadmaps. Built for a hackathon, Planify simplifies the process of creating and managing business marketing plans through an intuitive and modern interface.

---

## 🌟 Features

### 🔐 Account Management

- **Secure Authentication**: Create or log in to an account to access your dashboard.

### 📊 Business Dashboard

- **Manage Multiple Businesses**: Each business is represented as a card in your dashboard for easy access and organization.

### 🤖 AI-Driven Roadmaps

- **Tailored Marketing Plans**: Fill out a multi-step form about your business, and Planify generates a marketing roadmap customized to your needs (mocked functionality).

### 🔄 User-Friendly Interface

- **Clean and Responsive Design**: Built with Next.js, drawing inspiration from platforms like Vercel to ensure an intuitive user experience.

---

## 🔧 Tech Stack

| Layer              | Technology           |
| ------------------ | -------------------- |
| **Frontend**       | Next.js (TypeScript) |
| **Backend**        | Go (Placeholder)     |
| **AI Integration** | Python (LangChain)   |

---

## 🚧 Current Limitations

1. **Backend Integration**

   - Backend functionality is not yet connected. Roadmap generation is mocked on the frontend.

2. **Authentication Issue**
   - A cookies issue requires manual setup to simulate an authenticated state for accessing the `/dashboard` route.

---

## 🚚 Workaround: Manually Set Authentication Cookie

To access the `/dashboard` route, follow these steps to set an `accessToken` cookie in your browser:

1. **Open Developer Tools**

   - Press `F12` or right-click anywhere on the page and select **Inspect**.

2. **Go to Application/Storage Tab**

   - Navigate to the **Application** tab (Chrome/Edge) or **Storage** tab (Firefox).

3. **Set the Cookie**

   - Locate the **Cookies** section under **Storage**.
   - Choose the domain of your app (e.g., `localhost`).
   - Add a new cookie with these details:
     - **Name:** `accessToken`
     - **Value:** Any string (e.g., `dummyToken123`)
     - **Domain:** Your app’s domain (e.g., `localhost`).

4. **Refresh the Page**
   - Navigate to `/dashboard` to view the mock dashboard.

---

## 🔢 How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/Adel2411/Planify-frontend.git
   cd Planify-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🎨 Future Enhancements

- **Backend Integration**: Connect the frontend to the Go backend for real-time roadmap generation.
- **AI Implementation**: Use Python and LangChain to provide dynamic marketing strategies.
- **Improved Authentication**: Resolve cookie handling for seamless user experience.

---

We’re excited to continue improving Planify and making it a powerful tool for entrepreneurs. Contributions and feedback are welcome! Feel free to check out the [repository](https://github.com/Adel2411/Planify-frontend) and get involved.

Happy building! 🚀
