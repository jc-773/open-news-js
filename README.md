# Open-News-Js Frontend
## What it does
The app walks the user through three small steps: 1. Enter email → the backend sends a one-time passcode (OTP) 2. Enter OTP → verify the email belongs to the user 3. Choose topics + news sources → subscribe to the daily newsletter

It connects to my Spring Boot backend through a couple of simple APIs. Nothing fancy yet, just clean HTTP calls and some basic user flow logic.

## The biggest thing I learned came from the newsletter itself:
There was an article explaining how large frontend projects use TypeScript’s static typing to prevent bugs before the code ever runs. I didn’t realize how powerful that could be until I started building this.

For example:
- when I passed props between components
- when I stored the user’s email in local storage
- when I built the payload for the subscription request

### Every file in this project taught me something new:
#### Components
Learning how React components work with TypeScript helped me understand how to structure interfaces and props. It’s similar to Java in a way — types describe what a function expects.

#### Routing
I learned how multi-page apps use React Router to move between screens. This made the UI much cleaner than the Streamlit version.

#### API Types
Calling my backend and defining types for the responses showed me how TypeScript eliminates “guessing” when dealing with data.

#### Static Typing
This was the most important lesson. Static typing prevents common mistakes before the application ever runs. It became clear how much this improves reliability, especially as a project grows.

## By far the biggest lesson:
Static typing saves you from yourself.

## There’s a lot of room to grow:
I am ambitious about learning TypeScript because it feels intuitive to me, and once I started working with it, I found that I could catch on quickly. But here are some areas I'd like to zimprove on:
- Adding full form validation
- Creating a cleaner TypeScript type system for subscriptions
- Improving UI (Tailwind, Material UI, etc.)
- Adding global state using Context or Zustand
- Integrating real news previews in the UI
- Fully replacing Streamlit with React controllers

## Running the proj
- npm install
- npm run dev
- VITE_API_BASE=
