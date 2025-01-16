# Node Mailer Demonstration

## About
This repository provides a simple demonstration of sending emails using Node.js with the **Node Mailer** library and Gmail.

## Features
- Sends email messages using Gmail.
- Demonstrates environment variable management for secure credentials.

## Tools Used
- **Node.js**: Runtime for building server-side applications.
- **Node Mailer**: Library for sending emails.
- **Gmail**: Email service provider.

## Prerequisites
- **Node.js** installed on your machine.
- A Gmail account for sending emails.
- **App Password** generated for Gmail (if 2-step verification is enabled).

## Installation

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd <repository_folder>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your email credentials:
    ```env
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASSWORD=your_app_password
    ```

## Usage

1. Run the script:
    ```bash
    node index.js
    ```

2. Check the console output for email sending status. If successful, you will receive an email in your inbox.

## Code Overview

- **`index.js`**: Contains the logic for sending emails.
- **Environment Variables**: Used to securely store email credentials.

## Key Code Snippet

```javascript
require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const emailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Test Email from Node Mailer!',
    text: 'Hello, this is a test email from Node.js using Nodemailer.',
};

transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
        return console.log('Error:', err.message);
    }
    console.log('Email sent successfully:', info.response);
});
```

## Troubleshooting

- **Error: Missing credentials for 'PLAIN'**
    - Ensure your `.env` file contains valid credentials.
    - Check if the `dotenv` package is properly loaded.

- **Email Not Sent**
    - Make sure you generated an App Password in Gmail settings if 2-Step Verification is enabled.

## Contributions
Contributions are welcome! Feel free to fork this repository and submit pull requests.

## License
This project is licensed under the MIT License.
