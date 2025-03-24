# Demo Repository for Azure OpenAI Services in GitHub Models

![Session Banner](Demo/banner.png)

Welcome to the **Demo Repository for Azure OpenAI Services in GitHub Models**! This repository is part of the GitHub Models session and is designed to help participants explore and understand GitHub Models. Follow the instructions below to set up and run this project.

---

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Setting Up the Environment](#setting-up-the-environment)
4. [Running the Project](#running-the-project)
5. [Closing Notes](#closing-notes)

---

## Introduction

This repository serves as a hands-on demo for participants to learn how to integrate and use GitHub Models. By following the steps below, you will:
- Fork and clone the repository.
- Set up the required environment.
- Run the demo successfully.

---

## Prerequisites

Before you begin, ensure you have the following:
- **GitHub Account** to fork the repository.
- **Git** installed on your local machine.
- **Node.js** (version 14 or higher) installed.
- **NPM** (Node Package Manager) installed (comes with Node.js).
- **GitHub Personal Access Token** with appropriate permissions.

---

## Setting Up the Environment

Follow these steps to set up the environment:

1. **Fork the Repository**:
    - Navigate to the repository on GitHub.
    - Click the "Fork" button in the top-right corner to create your own copy of the repository.

2. **Clone the Forked Repository**:
    ```bash
    git clone https://github.com/nisalgunawardhana/Github-Models-Demo.git
    cd Github-Models-Demo
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Set Up GitHub Token**:
    - Create an `.env` file in the root directory.
    - Add the following environment variable:
      ```env
      GITHUB_TOKEN="Your-Github-Token-Here"
      ```

---

## Running the Project

1. **Start the Application**:
    ```bash
    npm start-sample
    ```

2. **Access the Application**:
    Once the application starts, you will see prompts and responses directly in the terminal.

    
---

## Customizing Messages

You can customize the interaction by editing the messages in the following format:

```bash
# Open the `src/sample.js` file in the repository
nano src/sample.js

# Modify the `messages` array to include your own context and questions
# Example:
# messages = [
#     { role: "developer", content: "You are a helpful assistant" },
#     { role: "user", content: "<< - Your questions ->> "}
# ];

# Save the file and restart the application
npm start
```

This allows you to tailor the interaction to your specific needs.

## Trying the Chatbot Experience

If you want to try the chatbot experience, you can modify the `start` command in the `package.json` file as follows:

```bash
# Open the `package.json` file in the root directory
nano package.json

# Locate the `scripts` section and update the `start` command
# Example:
# "start": "node ./src/chatbot.js"

# Save the file and start the application
npm start
```

This will run the chatbot experience instead of the default sample application.


## Closing Notes

Once you have completed the demo:
1. Stop the application by pressing `Ctrl+C` in the terminal.
2. Clean up the repository if needed:
    ```bash
    cd ..
    rm -rf demo-repo
    ```

---

## A-Z Guideline Recap

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Install dependencies using `npm install`.
4. Add your GitHub token to the `.env` file.
5. Run the application using `npm start`.
6. Test and explore the demo.
7. Clean up after use if necessary.

Enjoy exploring GitHub Models! 🚀

