# SurveySage

SurveySage is a full-stack web application that enables users to create and send customized surveys to their audience, collect feedback, and manage responses. With features like Google OAuth login, payment integration via Stripe, and automated email handling using Mailgun, SurveySage provides a comprehensive platform for managing surveys and insights effectively.

## Features

- **User Authentication with Google OAuth**: Secure and easy user login and registration using Google OAuth.
- **Survey Creation and Management**: Users can create customized surveys and send them to their audience via email.
- **Email Feedback Collection**: Send surveys to recipients' emails and collect feedback responses.
- **Real-Time Feedback Tracking**: Track who responded and who didn't, with detailed insights and analytics on user engagement.
- **Integrated Payment System with Stripe**: Users can purchase credits via Stripe to create and send surveys.
- **Development and Production Environments**: Configured for both development and production setups.
- **Webhook Integration**: Handling webhook data for automated updates from third-party services.
- **Seamless Frontend and Backend Routing**: Smooth transitions between frontend and backend routing for a seamless user experience.

## Tech Stack

- **Frontend**: React.js, Redux
- **Backend**: Node.js, Express.js, Passport.js
- **Database**: MongoDB and Mongoose
- **Authentication**: Google OAuth 2.0
- **Payments**: Stripe API Integration
- **Email Handling**: Mailgun API
- **Hosting**: Heroku
- **Build Tools**: Webpack, Babel

## Installation

Follow these steps to get a local copy of SurveySage up and running:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/riannalei/Emaily-app.git
   cd Emaily-app

2. **Install Dependencies for Both Server and Client**:

   ```bash
   npm install          # For server-side
   npm run client-install   # For client-side

3. **Set Up Environment Variables**:

   ```bash
   Create a .env file in the root directory and add your configurations:
    GOOGLE_CLIENT_ID=<Your-Google-Client-ID>
    GOOGLE_CLIENT_SECRET=<Your-Google-Client-Secret>
    MONGO_URI=<Your-MongoDB-URI>
    COOKIE_KEY=<Your-Cookie-Key>
    STRIPE_SECRET_KEY=<Your-Stripe-Secret-Key>
    STRIPE_PUBLISHABLE_KEY=<Your-Stripe-Publishable-Key>
    SENDGRID_API_KEY=<Your-SendGrid-API-Key>

4. **Run the Application in Development Mode**:
    
    ```bash
    npm run dev
    The application should now be running on http://localhost:3000 for the client and http://localhost:5000 for the server.

## Usage
- **Login with Google OAuth:** Users can sign up or log in with their Google account.
- **Purchase Credits:** Users can purchase credits through Stripe to create surveys.
- **Create and Send Surveys:** Users can create surveys, add recipients, and send them via email.
- **Track Responses:** View who opened the survey and track responses in real-time.
- **Analyze Feedback:** Get detailed insights and analytics on survey responses to make data-driven decisions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


