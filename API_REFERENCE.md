# Portfolio API Reference

## Base URL
`http://localhost:5000`

---

## Projects API

### Get All Projects
- **GET** `/api/projects`
- **Response**: `{ success: true, data: [projects] }`

### Get Single Project
- **GET** `/api/projects/:id`
- **Response**: `{ success: true, data: project }`

### Create Project
- **POST** `/api/projects`
- **Body**:
```json
{
  "title": "Project Title",
  "description": "Project description",
  "image": "https://image-url.com/image.jpg",
  "technologies": ["React", "Node.js", "MongoDB"],
  "githubLink": "https://github.com/username/repo",
  "liveLink": "https://project-demo.com",
  "featured": true
}
```
- **Response**: `{ success: true, data: newProject }`

### Update Project
- **PUT** `/api/projects/:id`
- **Body**: Same as create (any fields to update)
- **Response**: `{ success: true, data: updatedProject }`

### Delete Project
- **DELETE** `/api/projects/:id`
- **Response**: `{ success: true, message: 'Project deleted' }`

---

## Skills API

### Get All Skills
- **GET** `/api/skills`
- **Response**: `{ success: true, data: [skills] }`

### Get Skills by Category
- **GET** `/api/skills/category/:category`
- **Categories**: Frontend, Backend, Database, Tools, Other
- **Response**: `{ success: true, data: [skills] }`

### Create Skill
- **POST** `/api/skills`
- **Body**:
```json
{
  "name": "React",
  "category": "Frontend",
  "proficiency": 4,
  "icon": "https://icon-url.com/react.png"
}
```
- **Response**: `{ success: true, data: newSkill }`

### Update Skill
- **PUT** `/api/skills/:id`
- **Body**: Same as create (any fields to update)
- **Response**: `{ success: true, data: updatedSkill }`

### Delete Skill
- **DELETE** `/api/skills/:id`
- **Response**: `{ success: true, message: 'Skill deleted' }`

---

## Contact API

### Get All Messages
- **GET** `/api/contact`
- **Response**: `{ success: true, data: [messages] }`

### Submit Contact Form
- **POST** `/api/contact`
- **Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to get in touch!"
}
```
- **Response**: `{ success: true, message: 'Message sent successfully!', data: newMessage }`

### Mark Message as Read
- **PUT** `/api/contact/:id/read`
- **Response**: `{ success: true, data: updatedMessage }`

### Delete Message
- **DELETE** `/api/contact/:id`
- **Response**: `{ success: true, message: 'Message deleted' }`

---

## Models Schema

### Project
- `title` (String, required)
- `description` (String, required)
- `image` (String, required)
- `technologies` (Array of Strings)
- `githubLink` (String)
- `liveLink` (String)
- `featured` (Boolean, default: false)
- `createdAt`, `updatedAt` (auto-generated)

### Skill
- `name` (String, required)
- `category` (String, required - enum: Frontend, Backend, Database, Tools, Other)
- `proficiency` (Number, 1-5, default: 3)
- `icon` (String)
- `createdAt`, `updatedAt` (auto-generated)

### Contact
- `name` (String, required)
- `email` (String, required)
- `message` (String, required)
- `read` (Boolean, default: false)
- `createdAt`, `updatedAt` (auto-generated)
