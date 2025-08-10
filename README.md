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
 <img width="1919" height="1021" alt="HomePage" src="https://github.com/user-attachments/assets/89015a77-1095-40b9-89c5-b06e6d43cd96" />

- **Adding Tasks**
 <img width="1919" height="1020" alt="AddingTask" src="https://github.com/user-attachments/assets/a54e233f-23ae-46e5-8521-6c3d338e714c" />   
 <img width="1919" height="1020" alt="AddingTask1" src="https://github.com/user-attachments/assets/90e0bd6e-065d-4f25-8cec-ac87c014d703" />

- **Marking Tasks Completed**
 <img width="1904" height="1023" alt="Image1" src="https://github.com/user-attachments/assets/dc844637-23bb-444e-a301-e22070836ad6" />
 <img width="1919" height="1013" alt="Image2" src="https://github.com/user-attachments/assets/9a8cb6ee-5082-4e99-98bf-e02c7393cb69" />

- **Empty List After Deleting Tasks**
 <img width="1919" height="1017" alt="EmptyList" src="https://github.com/user-attachments/assets/ef7112d5-7462-4575-bbb9-a9632e4ce928" />
 <img width="1919" height="1005" alt="EmptyList2" src="https://github.com/user-attachments/assets/a8870cca-668d-4eda-ba91-46301d410821" />


- **When the App Fails to Fetch Data**
<img width="1919" height="1015" alt="ErrorImage" src="https://github.com/user-attachments/assets/73b6778e-336e-44ea-b13b-0ffc81d224a4" />

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
