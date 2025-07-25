# GoalSetter - Goal Tracking Application

A full-stack MERN application for setting, tracking, and managing personal goals with user authentication.

## Features

- User Authentication: Secure registration and login with JWT tokens
- Goal Management: Create, view, and delete personal goals
- Responsive Design: Beautiful gradient UI with glassmorphism effects
- Real-time Feedback: Toast notifications for user actions
- Protected Routes: Authentication-based access control
- Persistent Sessions: User sessions maintained with localStorage

## Tech Stack

#### Backend

- Node.js - Runtime environment
- Express.js - Web framework
- MongoDB - NoSQL database
- Mongoose - ODM for MongoDB
- JWT - Authentication tokens
- bcryptjs - Password hashing
- CORS - Cross-origin resource sharing
- express-async-handler - Error handling middleware

#### Frontend

- React 19 - UI library
- React Router DOM - Client-side routing
- Axios - HTTP client
- React Toastify - Notification system
- React Icons - Icon components

#### Development Tools

- Nodemon - Development server auto-restart
- Colors - Terminal output styling

## Project Structure
goalsetter/ <br />
|── backend/ <br />
│ &nbsp; |── config/ <br />
│ &nbsp; │ &nbsp;└── db.js              # Database connection <br />
│ &nbsp; |── controllers/ <br />
│ &nbsp; │ &nbsp; |── goalController.js  # Goal CRUD operations <br />
│ &nbsp; │ &nbsp;└── userController.js  # User authentication <br />
│ &nbsp; |── middleware/ <br />
│ &nbsp; │ &nbsp; |── authMiddleware.js  # JWT protection <br />
│ &nbsp; │ &nbsp;└── errorMiddleware.js # Error handling <br />
│ &nbsp; |── models/ <br />
│ &nbsp; │ &nbsp; |── goalModel.js       # Goal schema <br />
│ &nbsp; │ &nbsp;└── userModel.js       # User schema <br />
│ &nbsp; |── routes/ <br />
│ &nbsp; │ &nbsp; |── GoalRoutes.js      # Goal API routes <br />
│ &nbsp; │ &nbsp;└── UserRoutes.js      # User API routes <br />
│ &nbsp;└── server.js              # Express server setup <br />
|── frontend/ <br />
│ &nbsp; |── public/ <br />
│ &nbsp; │ &nbsp;└── index.html         # HTML template <br />
│ &nbsp; |── src/ <br />
│ &nbsp; │ &nbsp; |── components/ <br />
│ &nbsp; │ &nbsp; │ &nbsp; |── GoalForm.js    # Goal creation form <br />
│ &nbsp; │ &nbsp; │ &nbsp; |── GoalItem.js    # Individual goal display <br />
│ &nbsp; │ &nbsp; │ &nbsp; |── Header.js      # Navigation header <br />
│ &nbsp; │ &nbsp; │ &nbsp;└── Spinner.js     # Loading spinner <br />
│ &nbsp; │ &nbsp; |── features/ <br />
│ &nbsp; │ &nbsp; │ &nbsp; |── auth/ <br />
│ &nbsp; │ &nbsp; │ &nbsp; │ &nbsp;└── authService.js  # Authentication API calls <br />
│ &nbsp; │ &nbsp; │ &nbsp;└── goals/ <br />
│ &nbsp; │ &nbsp; │ &nbsp; | &nbsp;└── goalService.js  # Goal API calls <br />
│ &nbsp; │ &nbsp; |── pages/ <br />
│ &nbsp; │ &nbsp; │ &nbsp; |── Dashboard.js   # Main dashboard <br />
│ &nbsp; │ &nbsp; │ &nbsp; |── Login.js       # Login page <br />
│ &nbsp; │ &nbsp; │ &nbsp;└── Register.js    # Registration page <br />
│ &nbsp; │ &nbsp; |── App.css           # Global styles <br />
│ &nbsp; │ &nbsp; |── App.js            # Main app component <br />
│ &nbsp; │ &nbsp;└── index.js          # React entry point <br />└── package.json              # Root package configuration <br />

## Installation & Setup

#### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

#### Environment Variables
- Create a .env file in the root directory:
```env
NODE_ENV=development
PORT=your_port_here
MONGO_URI=your_mongo_uri_here
JWT_SECRET=your_jwt_secret_key_here
```

#### Installation Steps
1. Clone the repository
```bash
git clone <repository-url>
cd goalsetter
```

2. Install backend dependencies
```bash
npm install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
cd ..
```

4. Set up MongoDB
- Install MongoDB locally or create a MongoDB Atlas account
- Update the MONGO_URI in your .env file

5. Start the application Development Mode (Recommended):
```bash
# Terminal 1 - Start backend server
npm run server

# Terminal 2 - Start frontend development server
npm run client
```

6. Production Mode:
```bash
npm start
```

#### Default Ports

- Backend API: http://localhost:8000
- Frontend: http://localhost:3000

## API Endpoints

#### Authentication Routes

- POST /api/users - Register new user
- POST /api/users/login - User login
- GET /api/users/me - Get user profile (protected)

#### Goal Routes (All Protected)

- GET /api/goals - Get user's goals
- POST /api/goals - Create new goal
- PUT /api/goals/:id - Update goal
- DELETE /api/goals/:id - Delete goal

## How It Was Built
#### Backend Architecture

1. Express Server Setup: Configured with CORS, JSON parsing, and error handling
2. Database Integration: MongoDB connection with Mongoose ODM
3. Authentication System: JWT-based authentication with bcrypt password hashing
4. RESTful API: CRUD operations for users and goals
5. Middleware Protection: Route protection with JWT verification
6. Error Handling: Centralized error handling with custom middleware

#### Frontend Architecture

1. React Components: Modular component structure with hooks
2. State Management: Local state with useState for component-level data
3. Routing: React Router for navigation and protected routes
4. API Integration: Axios for HTTP requests with token-based authentication
5. UI/UX: Modern glassmorphism design with CSS3 features
6. User Feedback: Toast notifications for user actions

#### Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Input validation and sanitization
- CORS configuration for secure cross-origin requests

## Design Features

- Gradient Background: Modern purple gradient design
- Glassmorphism UI: Translucent cards with backdrop blur effects
- Responsive Layout: Mobile-first responsive design
- Smooth Animations: Hover effects and transitions
- Modern Typography: Clean, readable font choices

## Contributing

- Fork the repository
- Create a feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## License
This project is licensed under the MIT License.

## 👨‍💻 Author

Vineet Panchal
Built with ❤️ using the MERN stack