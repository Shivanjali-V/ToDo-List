# To-Do List Application  

A simple and interactive **To-Do List** application built using **React.js**.  
This app helps users manage tasks efficiently with features like adding, deleting, searching, and tracking completed tasks.  
Data is persisted using a mock API server (`json-server`).  

---

## Features  
- **Add Tasks:** Quickly add new tasks to the list.  
- **Mark as Complete:** Check and uncheck tasks easily.  
- **Delete Tasks:** Remove tasks from the list with one click.  
- **Search Tasks:** Find specific tasks using the search bar.  
- **Task Statistics:** Displays the total number of tasks and checked tasks.  
- **Persistent Data:** Stores tasks on a mock REST API server (`localhost:3500/items`).  

---

## Tech Stack  
- **Frontend:** React.js  
- **Backend (Mock API):** JSON Server  
- **Styling:** CSS  

---

## Screenshots  
- **Home Page**
 <img width="1919" height="1021" alt="Screenshot 2025-07-27 131054" src="https://github.com/user-attachments/assets/fd365062-fc35-42ba-9054-c93218bdd3b8" />

- **Adding Tasks**
 <img width="1919" height="1020" alt="Screenshot 2025-07-27 131156" src="https://github.com/user-attachments/assets/4bd0e611-f34f-40dc-9af3-e83570dee75c" />
 <img width="1919" height="1020" alt="Screenshot 2025-07-27 131206" src="https://github.com/user-attachments/assets/21ca687d-5ab4-4a07-9787-dd17c5ec1e52" />

- **Marking Tasks Completed**
 <img width="1904" height="1023" alt="Screenshot 2025-07-27 131606" src="https://github.com/user-attachments/assets/7f43004c-35a7-43e2-b605-f579f569ad81" />
 <img width="1919" height="1013" alt="Screenshot 2025-07-27 131621" src="https://github.com/user-attachments/assets/86eade8c-4038-448f-b266-84376bdc093f" />

- **Empty List After Deleting Tasks**
 <img width="1919" height="1017" alt="Screenshot 2025-07-27 130957" src="https://github.com/user-attachments/assets/4070f317-fab3-448a-bfe6-aaa1006feb36" />
 <img width="1919" height="1005" alt="Screenshot 2025-07-27 131013" src="https://github.com/user-attachments/assets/9f246a0b-da2c-472b-9060-0c7862a784ef" />

- **When the App Fails to Fetch Data**
 <img width="1919" height="1015" alt="Screenshot 2025-07-27 140004" src="https://github.com/user-attachments/assets/2e49adb1-7325-4d2d-b763-e5eb47d9cb2d" />

---

## Installation  

### Clone the repository:  
```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list

Install & Run the Project
Run the following commands in order:

npm install
npx json-server --watch db.json --port 3500
npm start
