# Memopin - AI-Enhanced Memory Recall Tool (Mongodb setup)

## Project Description

Memopin is an AI-enhanced memory recall tool designed to address the challenges of fragmented memories and forgetfulness in the digital age. People often struggle to recall meaningful moments as photos, conversations, and videos are scattered across various platforms, making retrieval difficult. For individuals with Alzheimer's and other memory impairments, this struggle becomes even more pronounced, leading to confusion, disorientation, and emotional distress.

Memopin solves these challenges by providing a unified platform to store and retrieve key moments. Using advanced AI technologies like Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), and Natural Language Processing (NLP), it helps users retrieve detailed, context-rich memories from multimedia content like audio, video, and photos. Memopin's video analysis adds an extra layer of depth to memory recall, ensuring a comprehensive understanding of multimedia content.

The solution organizes memories into a searchable, context-aware database, making it easy to reflect on past experiences and improve cognitive health, emotional well-being, and memory management.

## Tech Stack

- **React**: Frontend framework for building the user interface and managing user interactions.
- **ReactDOM**: Renders the React components in the browser.
- **NLP (Natural Language Processing)**: Analyzes speech and text within recorded content to enhance memory context and improve relevance.
- **Retrieval-Augmented Generation (RAG) AI**: Combines memory storage and querying to generate contextually accurate responses to user queries.
- **Large Language Models (LLMs)**: Understands and contextualizes user queries, offering detailed and relevant memories reflecting personal experiences.
- **Vector Databases**: Efficiently stores and retrieves multimedia data, ensuring structured organization for quick access.

## Setup Instructions 

Follow these steps to set up the **Node Backend** project locally:

1. **Navigate to the Folder Where ai-app and ai-backend Are Cloned**:
   - Make sure that you have already cloned the **ai-app** and **ai-backend** repositories as mentioned in their respective setup instructions.
   - Navigate to the directory where both **ai-app** and **ai-backend** are located.

2. **Open a New Terminal for Node Backend**:
   - Open a new terminal or command prompt for the **node-backend** setup and follow these steps.

3. **Initialize Git**:
   - Inside your project folder, initialize a Git repository:
     ```bash
     git init
     ```

4. **Clone the Node Backend Repository**:
   - Clone the **node-backend** repository to your local machine using the URL:
     ```bash
     git clone <this repository url>
     ```

5. **Navigate to the Node Backend Directory**:
   - Change to the **node-backend** directory:
     ```bash
     cd node-backend
     ```

6. **Install Dependencies**:
   - Install the required dependencies using npm:
     ```bash
     npm install
     ```

7. **Build the Node Backend**:
   - Once the dependencies are installed, run the build process:
     ```bash
     npm run build
     ```

8. **Create a `.env` File**:
   - Create a `.env` file in the root directory of **node-backend** with the following key:
     ```
     MONGODB_URI=<mongodb connection url>
     ```

9. **Run the Node Backend**:
   - Start the **node-backend** service by running:
     ```bash
     node index.js
     ```

10. **Run the AI Backend**:
    - Now, go to the **ai-backend** directory and run the backend as described in the **ai-backend setup** instructions.

11. **Run the AI App**:
    - Go to the **ai-app** directory and run the frontend:
      ```bash
      npm start
      ```

12. **Access the Application**:
    - Open your browser and go to `http://localhost:5173/`. You should now be able to interact with the Memopin application.

---

### Summary of Repositories

Once you have the **ai-app** and **node-backend** set up, you will have a fully functional application where the **frontend** interacts with both the **AI backend** and **Node backend**:

### **AI Frontend**: The user interface of the Memopin project.
   - Repository URL: [ai-backend](https://github.com/Yash8745/ai-app)

### 2. **AI Backend** Repository
The AI backend is responsible for handling audio processing, Pinecone integration, and memory-related functionality.

- Repository URL: [ai-backend](https://github.com/Yash8745/ai-backend)

### Run this node index.js first

