Smoothflight - Visa & Immigration Agency Website
Travisa is a modern, fully-responsive website designed for a visa and immigration consultancy agency. The project focuses on providing a seamless and professional user experience, guiding potential clients from initial inquiry to contact. The site features a clean, brand-consistent design and is packed with interactive elements to engage users.

The application includes a secure and functional backend built with Node.js and MongoDB that captures user data from the contact and newsletter forms. Upon submission, the system saves the information to a database and sends an instant email notification to the site administrator.

Export to Sheets
Features
Fully Responsive Design: Looks great on all devices, from mobile phones to desktops.

Multi-Page Architecture: Includes Home, About, Services, FAQ, and Contact pages.

Interactive UI/UX:

Animated hero slider using react-slick.

Dynamic number counters that animate when scrolled into view.

Interactive modal popups for detailed service information.

Smooth page transitions with a custom-branded preloader.

Sticky & Animated Header: A navigation bar that becomes sticky on scroll for easy access.

Functional Backend:

API endpoints for handling contact form and newsletter submissions.

Saves all submissions to a MongoDB database.

Sends instant email notifications to the site owner upon new submissions.

Technologies Used
Frontend
Framework: Next.js

Language: TypeScript

Styling: Tailwind CSS

Animation & Interactivity:

Framer Motion

React CountUp

React Intersection Observer

Components:

React Slick (for carousels)

React Icons

Backend
Environment: Node.js

Framework: Express.js

Database: MongoDB (with Mongoose)

Email Service: Nodemailer

Templating: EJS

Local Setup and Installation
Prerequisites
Node.js (v18 or later)

npm or yarn

MongoDB (running locally or a connection string from a cloud provider like MongoDB Atlas)

1. Frontend Setup
Bash

# 1. Navigate to the frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
The frontend will be available at http://localhost:3000.

2. Backend Setup
Bash

# 1. Navigate to the backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Create an environment file
# Create a file named.env in the root of the /backend folder and add the following variables:
MONGO_URI=your_mongodb_connection_string_here
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
WEBSITE_OWNER_EMAIL=the_email_address_to_receive_notifications@example.com

# 4. Run the backend server
npm start
The backend server will be running on http://localhost:5000.

API Endpoints
The backend exposes the following endpoints:

POST /api/contact: Handles submissions from the main contact form.

POST /api/newsletter: Handles signups from the footer newsletter form.
