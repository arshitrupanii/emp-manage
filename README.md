# Task Management System

This is a Task Management System built with React. It allows administrators to create tasks and assign them to employees. Employees can view their tasks and update their status.

## Features

- Admin login and employee login
- Create and assign tasks to employees
- View tasks assigned to employees
- Update task status
- Logout functionality

## Technologies Used

- React
- Vite
- CSS (TailwindCSS)
- Local Storage

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/task-management-system.git

npm install
npm run dev


src/
├── components/
│   ├── Auth/
│   │   └── LoginPage.jsx
│   ├── Dashboard/
│   │   ├── Admin_dash.jsx
│   │   └── Emp_dash.jsx
│   └── Tasklist/
│       └── Tasklist.jsx
├── context/
│   └── Authprovidor.jsx
├── other/
│   ├── Alltask.jsx
│   ├── Createtask.jsx
│   ├── Header.jsx
│   └── Tasklist.jsx
├── utils/
│   └── Localstorage.js
├── App.jsx
├── main.jsx
└── index.css