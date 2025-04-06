# Maileon

A simple, lightweight Node.js email sending utility that makes it easy to send emails via Gmail's SMTP server.

## Overview

Maileon is a command-line tool that allows you to quickly send emails using your Gmail account. Built with Node.js, it uses Nodemailer package and dotenv for secure credential management.

## Features

- Send emails from the command line
- Simple interface with minimal dependencies
- Secure credential management using environment variables
- Error handling for failed email delivery

## Installation

1. Clone this repository:
```bash
git clone https://github.com/Elnop/Maileon.git cd maileon
```
2. Install dependencies:
```bash
npm install
```
3. Set up your environment variables:
- Copy `.env.exemple` to `.env`
- Add your Gmail credentials in the `.env` file

## Configuration

Before using Maileon, you need to:

1. Create a `.env` file based on the provided `.env.exemple`
2. Fill in your Gmail email address and password

**Note on Gmail security**: For security reasons, Gmail requires you to use an App Password instead of your regular password. To create an App Password:
1. Enable 2-Step Verification in your Google Account
2. Visit [App passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for Maileon
4. Use this generated password in your `.env` file

## Usage

To send an email:
```bash
npm run send -- recipient@example.com "Subject" "Message"
```

