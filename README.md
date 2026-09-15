# Ankush Poonia Portfolio

A responsive single-page React + Vite portfolio with motion effects, project showcases, and an EmailJS contact form.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it using `npm run preview`.

## Configure the contact form

1. Create an account at [EmailJS](https://www.emailjs.com/), add an email service, and create a template.
2. In `src/components/Contact.jsx`, replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` in `EMAILJS_CONFIG`.
3. Ensure the EmailJS template accepts `from_name`, `from_email`, `message`, and `to_name` variables.
4. Submit a message from the deployed site. Until the values are added, the form validates input and clearly explains that EmailJS still needs configuration.

## Content

Skills and project content live in `src/data.js`, making them quick to update. The profile image is at `public/profile.jpg`.
