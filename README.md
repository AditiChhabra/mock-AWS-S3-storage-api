# Mock AWS S3 Storage API

A simple REST API built with Node.js and Express to mimic the core functionality of AWS S3 (uploading and listing files) for local development and testing.

## So, What's This For? 🚀

It's a **DIY mini-S3!** 🗂️

Why? Because using the *real* AWS S3 for every tiny test is slow, needs an internet connection, and costs money. This mock server is 100% free, works completely offline, and shows how to build a clean RESTful API that mimics a core AWS service.

## Tech Stack
* **Backend:** Node.js, Express.js
* **Core Module:** Node.js `fs` (File System)

## How to Run

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/AditiChhabra/mock-AWS-S3-storage-API.git](https://github.com/AditiChhabra/mock-AWS-S3-storage-API.git)
    cd mock-AWS-S3-storage-API
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create the "bucket" folder:**
    (The server needs this folder to save files into)
    ```bash
    mkdir my-s3-bucket
    ```

4.  **Run the server:**
    ```bash
    npm start
    ```

5.  The server is now running at `http://localhost:3000`.

## API Endpoints

You can use a tool like **Postman** to test these endpoints.

### 1. Upload a File
"Uploads" a new text file to the `my-s3-bucket` directory.

* **Endpoint:** `POST /upload`
* **Body (JSON):**
    ```json
    {
      "filename": "testfile.txt",
      "content": "This is the content of my file."
    }
    ```
* **Success Response (201G):**
    ```json
    {
      "message": "File 'testfile.txt' uploaded successfully!"
    }
    ```

### 2. List All Files
"Lists" all the files currently in the `my-s3-bucket` directory.

* **Endpoint:** `GET /files`
* **Success Response (200):**
    ```json
    {
      "files": [
        "testfile.txt"
      ]
    }
    ```
