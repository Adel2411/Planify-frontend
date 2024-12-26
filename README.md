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
| **Backend**        | Go                   |
| **AI Integration** | Python (LangChain)   |

---

## 📁 Project Structure

This project follows a **feature-based structure**, which organizes the codebase by grouping related functionalities together. Below is an overview of the main folders and their purposes:

```
.
├── components.json
├── docker-compose.yml
├── Dockerfile
├── next.config.ts
├── next-env.d.ts
├── node_modules/          # Project dependencies
├── package.json           # Project metadata and scripts
├── package-lock.json      # Dependency lock file
├── postcss.config.mjs     # PostCSS configuration
├── public/                # Static assets (images, icons, etc.)
├── README.md              # Project documentation
├── src/                   # Source code
│   ├── api/               # API request definitions
│   ├── app/               # Next.js app router pages
│   ├── components/        # Reusable UI components
│   ├── features/          # Feature-specific modules
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and libraries
│   ├── middleware.ts      # Middleware configurations
│   └── utils/             # General utility functions
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

---

## 🚧 Current Limitations

1. **Backend Integration**

   - Backend functionality is not yet connected. Roadmap generation is mocked on the frontend.

2. **Authentication Issue**
   - A cookies issue requires manual setup to simulate an authenticated state for accessing the `/dashboard` route.

---

## 🚚 Workaround: Setting Up Quick Access

To view the dashboard, you'll need to set a temporary cookie. Here's how:

1. Open your browser's Developer Tools (`F12`)
2. Go to the Application/Storage tab
3. Find Cookies > localhost
4. Add a new cookie:
   - Name: `accessToken`
   - Value: `dummyToken123`

Once done, refresh the page and you will be redirected to `/dashboard`.

---

## 🎨 Future Enhancements

- **Backend Integration**: Connect the frontend to the Go backend for real-time roadmap generation.
- **AI Implementation**: Use Python and LangChain to provide dynamic marketing strategies.
- **Improved Authentication**: Resolve cookie handling for seamless user experience.

---

## 🌐 Live Demo

Check out the live demo of Planify [here](https://planify-frontend.vercel.app/).

---

## 🔢 How to Run the Project (Optional)

### Method 1: Standard Installation

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

### Method 2: Using Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/Adel2411/Planify-frontend.git
   cd Planify-frontend
   ```

2. Start the container using Docker Compose:

   ```bash
   docker-compose up --build
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

To stop the Docker containers:

```bash
docker-compose down
```

---

We’re excited to continue improving Planify and making it a powerful tool for entrepreneurs. Contributions and feedback are welcome! Feel free to check out the [repository](https://github.com/Adel2411/Planify-frontend) and get involved.

Happy building! 🚀
