# Task Manager Backend

## Description

Backend API for a Task Manager application built with Node.js, Express.js, MongoDB, and Mongoose.

The API allows users to create, view, update, and delete tasks, with file upload support using Multer.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- dotenv

## Features

- Create a new task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- Upload an image/file related to a task
- Store the uploaded file path with the task data in MongoDB

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tasks` | Create a new task with an optional image |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a task by ID |
| PATCH | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## File Upload

The API uses Multer to upload files related to tasks.

Uploaded files are stored inside the `uploads` folder, and the file path is saved with the task data in MongoDB.

## How to Run

Install the dependencies:

```bash
npm install