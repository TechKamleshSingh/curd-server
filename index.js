import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import routes from './routes/route.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/', routes);

// Database Connection
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// Establish database connection
Connection(username, password)
  .then(() => {
    // Start the server after successful database connection
    app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    // If database connection fails, exit the application
    process.exit(1);
  });

// Error handling middleware for routes
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Error handling middleware for other unhandled errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});


export default  app;