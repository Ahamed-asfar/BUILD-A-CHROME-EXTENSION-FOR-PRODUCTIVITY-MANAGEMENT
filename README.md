# BUILD-A-CHROME-EXTENSION-FOR-PRODUCTIVITY-MANAGEMENT

*COMPANY: CODTECH IT SOLUTIONS*

*NAME: AHAMED ASFAR*

*INTERN ID: CT04DH245*

*DOMAIN: MERN STACK*

*DURATION: 4 WEEKS*

*MENTOR: NEELA SANTHOSH*

📚 Chrome Productivity Extension using MERN Stack
🔧 Tools & Technologies Used:
MongoDB (v8.0.12) — Database for storing tasks

Express.js — Backend framework (REST API)

Node.js — JavaScript runtime for backend

React.js — Frontend UI (Create React App)

Axios — For frontend-backend communication

VS Code — Code editor

Microsoft Edge — Browser for extension testing

Command Prompt (CMD) — Terminal for server execution

Webpack Build (CRA) — Used to prepare production frontend

manifest.json (v3) — Chrome Extension config

Icons & CSS — For branding and UI styling

📜 Project Overview:
This project is a Productivity Chrome Extension built as part of the CodTech MERN Stack Internship Task 4. The goal was to develop a browser extension that allows users to create, store, and manage daily tasks using a persistent backend.

Unlike typical standalone web apps, this project was embedded as a popup extension in the browser. It combines a React frontend, a Node.js + Express backend, and MongoDB to store tasks — packaged together inside a Chrome-compatible build using manifest v3.

The project was successfully tested and installed as a live working Edge Extension using the “Load Unpacked” feature in Developer Mode.

⚙️ Functionality Breakdown:
✅ 1. Backend (Node.js + Express + MongoDB)
The backend is created inside the /backend directory.

API endpoints include GET /api/tasks and POST /api/tasks.

MongoDB stores each task in a Task model.

CORS is enabled for safe cross-origin usage.

Server runs on localhost:4000.

✅ 2. Frontend (React.js → Built for Chrome)
Frontend React app created via npx create-react-app frontend.

Axios used to send and fetch tasks from backend.

React hooks like useState and useEffect manage app state.

After npm run build, the final code is exported into the /build folder.

manifest.json was added inside public/ to register the React app as a Chrome extension.

Default popup height/width set for usable UI space.

🛠️ Procedure Followed:
🔹 Environment Setup:
Installed Node.js, MongoDB (v8+), and React.

Created two main folders: /backend and /frontend.

🔹 Backend Development:
Initialized Node project with npm init -y

Installed dependencies: express, cors, mongoose

Connected MongoDB locally using:

css
Copy code
mongod --dbpath C:\data\db
Created model Task.js inside /models

API routes tested using browser and Postman

🔹 Frontend Development:
Created React app in /frontend

Built React components to add and list tasks

Connected to backend using axios

Built final production files using:

arduino
Copy code
npm run build
🔹 Chrome Extension Integration:
Created manifest.json with correct default_popup, permissions, and version

Loaded extension into Edge using:

bash
Copy code
edge://extensions → Developer Mode ON → Load Unpacked → select /frontend/build
Extension appeared as “Asfar Productivity Extension” with working popup

Tasks persisted and UI fully functional

🧪 Testing & Debugging:
Backend tested via browser (localhost:4000/api/tasks)

Frontend tested in normal and extension mode

Solved 500 error by fixing payload format and model issues

MongoDB tested with live data read/write

Popup UI resized with custom CSS

🖌️ Customization:
Personal names (Ahamed Asfar) added to extension

manifest.json includes extension name and version

Icons added for polish

UI styling applied with modern font and layout

🏁 Conclusion:
This task successfully fulfilled the Task 4 requirement of creating a fully functional MERN Stack-powered Chrome Extension. It demonstrates strong capability in:

Frontend React app creation

Backend MongoDB + Express setup

Full data flow integration

Browser extension packaging

This proves my ability to not only build full-stack web apps but also convert them into cross-platform browser tools like Chrome/Edge extensions.
The entire flow — from terminal to browser to UI — was built, debugged, and shipped by me alone.

*OUTPUT:*

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/dd935ab0-4525-4990-b0a2-d87977995248" />
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/0604323b-df7d-411d-901f-1f3eeab8f603" />
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/eb7ff6d6-8732-4190-bc56-32f96aecf22f" />
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/441eaa5c-1006-4806-b404-2485e1af8c95" />
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/b89f82e6-d31a-4780-ab27-0821bc8b4ed7" />
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/10ab18bb-b126-4230-9ef2-c29273d19b3c" />
