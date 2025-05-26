# 🐦 Bluejay Technology Group – Full Stack Project Overview

## 🌐 Website: [www.bluejaytg.com](https://www.bluejaytg.com)

---

## 📌 Project Summary
Bluejay Technology Group is a SaaS-powered consultancy that provides AI automation and AWS cloud solutions for wellness and aesthetic professionals. The site serves as a marketing platform, lead generation system, and service automation portal.

It is hosted on **AWS Amplify**, built with **React + TypeScript**, and integrates with **Stripe**, **AWS Lambda**, **DynamoDB**, and **Make.com** for automation and payment workflows.

---

## 🧱 Tech Stack

### Frontend (React + TypeScript)
- Framework: **React (with TSX)**
- Routing: **react-router-dom**
- Styling: **Tailwind CSS**
- Stripe Integration: **@stripe/stripe-js**
- Form Handling: **Custom useState hooks**
- Hosting: **AWS Amplify Hosting**

### Backend (Serverless)
- **AWS Lambda** (via Amplify CLI)
  - `createStripeCheckout`: creates a Stripe Checkout Session
- **AWS API Gateway**: exposes Lambda via REST endpoint
- **DynamoDB**: stores form submissions and leads
- **Stripe Webhooks** (Make.com powered)
  - Trigger actions post-payment

---

## 📦 Directory Structure

```bash
project/
├── amplify/
│   └── backend/
│       └── function/
│           └── createStripeCheckout/  # Lambda function for checkout
├── src/
│   ├── components/
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── automation_checkout_flow.tsx  # Stripe checkout form
│   │   ├── Success.tsx  # Confirmation page
│   │   └── AIWellnessFormPage.tsx
│   └── App.tsx  # Routes
├── amplify.yml  # Build instructions
├── package.json
└── README.md  # (This file)
```

---

## 🚀 Features & Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/services` | Overview of Bluejay’s consulting + AI services |
| `/ai-wellness-automation` | Sales page for automation offering |
| `/automation_checkout_flow` | Checkout form (Stripe) |
| `/success` | Confirmation page post-checkout |
| `/contact` | Contact form (email or DynamoDB) |

---

## 💳 Stripe Integration
- Stripe Checkout created via AWS Lambda function
- Checkout metadata includes:
  - name
  - email
  - Instagram
  - booking link
- Publishable key used in frontend
- Webhook automation runs in Make.com

---

## 🔁 Automation
### Make.com
- Trigger: Stripe `checkout.session.completed`
- Action: Send confirmation email to Bluejay admin
- Future Plans:
  - Auto-log to Google Sheets
  - Auto-send onboarding email to customer

---

## 🛠 To Do
- [ ] Add customer-facing confirmation email
- [ ] Hook Stripe to DynamoDB directly or via webhook
- [ ] Build admin dashboard for viewing orders
- [ ] Add AI onboarding agent (chat or email)

---

## 📫 Contact
Maintainer: Jared Thomas  
Email: contact@bluejaytg.com  
LinkedIn: [linkedin.com/in/bluejay-technology-group-482393268](https://www.linkedin.com/in/bluejay-technology-group-482393268)
