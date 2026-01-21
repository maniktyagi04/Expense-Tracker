# Expense Tracker

A full-stack expense tracking application built with React, Node.js, Express, and MongoDB. Track your income and expenses with beautiful visualizations and detailed analytics.

## Features

- 🔐 **User Authentication** - Secure login and registration with JWT
- 💰 **Income Tracking** - Add, edit, and delete income entries
- 💸 **Expense Management** - Track expenses with categories and descriptions
- 📊 **Dashboard Analytics** - Visual charts and statistics for financial insights
- 👤 **User Profile** - Manage profile with photo upload
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🎨 **Modern UI** - Built with React and Tailwind CSS

## Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Recharts (for data visualization)
- Axios
- React Hot Toast

### Backend
- Node.js
- Express 5
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing
- Multer for file uploads
- XLSX for Excel file processing

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```bash
git clone https://github.com/maniktyagi04/Expense-Tracker.git
cd Expense-Tracker
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend/expense
npm install
```

4. Set up environment variables

Create a `.env` file in the `backend` directory:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

5. Start the backend server
```bash
cd backend
npm run dev
```

6. Start the frontend development server
```bash
cd frontend/expense
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
expense-tracker/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Mongoose models
│   ├── server.js        # Express server setup
│   └── package.json
└── frontend/
    └── expense/
        ├── src/
        │   ├── components/  # React components
        │   ├── pages/       # Page components
        │   ├── context/     # React context
        │   └── utils/       # Utility functions
        └── package.json
```

## License

MIT

## Author

Manik Tyagi
