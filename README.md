# Portfolio - Sandeep Singh (SS1010)

A modern, full-stack portfolio application showcasing my expertise in engineering, software development, and digital transformation. Built with React frontend and Node.js/Express backend with MongoDB integration for optimal performance and scalability.

![Portfolio Preview](./Branding/dp2-01_small.jpg)

## 🚀 Live Demo
[Visit Portfolio](https://ss1010.netlify.app/)

## 👨‍💻 About Me
I'm Sandeep Singh, a passionate engineer and software developer specializing in:
- **Digital Transformation & ERP Implementation**
- **CAD/CAM Automation & NX Open Development** 
- **CNC Programming & Arduino Integration**
- **Full-Stack Software Development**
- **Microsoft Azure & Cloud Technologies**

## 🛠️ Technologies & Skills

### Frontend Technologies
- React 18+, Vite, JavaScript (ES6+)
- HTML5, CSS3, React Router
- Responsive Design, CSS Grid/Flexbox

### Backend Technologies  
- Node.js, Express.js
- MongoDB Atlas, Mongoose ODM
- RESTful APIs, CRUD Operations
- bcryptjs, CORS, dotenv

### Programming Languages
- JavaScript, Java, C++, HTML5, CSS3
- NX Open API Development
- CNC G-code Programming

### Frameworks & Tools
- React 18+, Vite, Node.js, Express.js
- MongoDB, Mongoose, Postman
- CATIA, Mastercam, Siemens NX
- Microsoft Dynamics, Power BI
- Arduino, FEA Analysis

### Cloud & DevOps
- Microsoft Azure
- Git, GitHub Actions
- VS Code Extensions

## 🎯 Featured Projects

### 1. Digital Transformation & ERP Implementation
- **Status**: In Progress
- **Role**: Subject Matter Expert (SME)
- **Technologies**: Microsoft Dynamics, NX OPEN, Java, Azure
- **Impact**: 20% reduction in engineering time through process optimization

### 2. CNC Plotter – CATIA & Arduino
- **Status**: Completed
- **Role**: Lead Developer & Designer
- **Technologies**: CATIA, Mastercam, Arduino, C++, CAD/CAM
- **Deliverables**: Working prototype with complete documentation
- [📄 View Project Report](./Project_CNC_plotter/CNC_Plotter.pdf)

### 3. Automated Design Process with NX Open
- **Status**: In Progress  
- **Role**: Lead Developer & Implementation Support
- **Technologies**: Siemens NX, NX Open, Java, CAD Automation
- **Focus**: Injection mold design process automation

## 🏆 Certifications
- **Microsoft Certified: Azure Fundamentals (AZ-900)**
  - [Verify Certification](https://learn.microsoft.com/api/credentials/share/en-us/SandeepSingh-1010/4F5E1852E0EA26B3?sharingId=1C758ADEF0F2C35)

## 🏗️ Technical Architecture

### Frontend Stack
- **React 18+** - Modern component-based architecture
- **Vite** - Lightning-fast build tool and dev server
- **React Router** - Client-side routing for SPA
- **CSS3** - Custom styling with Flexbox/Grid layouts

### Backend Stack (Assignment 2)
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB Atlas** - Cloud-based NoSQL database
- **Mongoose** - MongoDB object modeling for Node.js
- **bcryptjs** - Password hashing library
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

### API Architecture
- **RESTful Design** - Clean, predictable API endpoints
- **CRUD Operations** - Complete Create, Read, Update, Delete functionality
- **Error Handling** - Comprehensive error responses
- **Data Validation** - Schema validation with Mongoose
- **Security** - Password hashing and data sanitization

### Features
- ✅ Responsive design across all devices
- ✅ Interactive project showcase with alternating layouts
- ✅ Contact form with validation
- ✅ Microsoft Bookings integration
- ✅ Performance optimized with Vite
- ✅ SEO friendly structure
- ✅ RESTful API backend with MongoDB
- ✅ Complete CRUD operations for contacts and users
- ✅ Secure password hashing
- ✅ Environment-based configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB Atlas account (for backend)

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sandeepsingh1010/Portfolio-app.git
   cd Portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Backend Setup (Assignment 2)

1. **Switch to backend branch**
   ```bash
   git checkout assignment-2-backend
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   # Create server/.env file with:
   MONGODB_URI=mongodb+srv://username:****@cluster.mongodb.net/Skeleton
   PORT=3000
   NODE_ENV=development
   ```

4. **Start backend server**
   ```bash
   npm run server
   ```

5. **Access API endpoints**
   - Welcome: `http://localhost:3000/`
   - Contacts API: `http://localhost:3000/api/contacts`
   - Users API: `http://localhost:3000/api/users`

## 📁 Project Structure
```
Portfolio-app/
├── public/                 # Static assets
│   ├── project-images/    # Project screenshots
│   └── resume.pdf         # Resume document
├── src/                   # Frontend React source
│   ├── components/        # Reusable React components
│   │   ├── Navigation.jsx # Site navigation
│   │   └── Navigation.css
│   ├── pages/             # Route components
│   │   ├── Home.jsx       # Landing page
│   │   ├── About.jsx      # About me section
│   │   ├── Projects.jsx   # Project showcase
│   │   ├── Services.jsx   # Services offered
│   │   └── Contact.jsx    # Contact form & booking
│   ├── assets/            # Images and media
│   └── App.jsx           # Main application component
├── server/                # Backend implementation (Assignment 2)
│   ├── config/           
│   │   └── database.js    # MongoDB connection
│   ├── models/           
│   │   ├── Contact.js     # Contact schema
│   │   └── User.js        # User schema
│   ├── controllers/      
│   │   ├── contactController.js # Contact CRUD operations
│   │   └── userController.js    # User CRUD operations
│   ├── routes/           
│   │   ├── contactRoutes.js     # Contact API routes
│   │   └── userRoutes.js        # User API routes
│   └── .env              # Environment variables
├── server.js             # Main Express server
├── dist/                 # Built React app for production
├── Branding/             # Brand assets and logos
├── Project_CNC_plotter/  # CNC project documentation
├── Project_ERP/          # ERP project assets
└── Project_NX_Open/      # NX Open project files
```

## 🔌 API Endpoints (Assignment 2)

### Welcome Route
- `GET /` - Returns welcome message in JSON format

### Contacts API
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get contact by ID
- `POST /api/contacts` - Create new contact
- `PUT /api/contacts/:id` - Update contact by ID
- `DELETE /api/contacts/:id` - Delete contact by ID
- `DELETE /api/contacts` - Delete all contacts

### Users API
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID
- `DELETE /api/users` - Delete all users

### Example Request Bodies

**Create Contact:**
```json
{
  "firstname": "John",
  "lastname": "Doe", 
  "email": "john.doe@example.com"
}
```

**Create User:**
```json
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "password": "securepassword123"
}
```

## 🔧 Development Scripts

### Frontend Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Scripts (Assignment 2)
```bash
npm run server   # Start Express server with nodemon
npm start       # Start production server
```

## 🗄️ Database Schema

### Contact Model
```javascript
{
  firstname: String (required, max: 50)
  lastname: String (required, max: 50)
  email: String (required, unique, validated)
  createdAt: Date (auto-generated)
  updatedAt: Date (auto-generated)
}
```

### User Model
```javascript
{
  name: String (required, max: 100)
  email: String (required, unique, validated)
  password: String (required, hashed, min: 6)
  created: Date (default: now)
  updated: Date (default: now)
}
```

## 🔒 Security Features
- **Password Hashing**: bcryptjs with salt rounds
- **Data Validation**: Mongoose schema validation
- **Email Validation**: Regex pattern validation
- **Error Handling**: Comprehensive error responses
- **Environment Variables**: Sensitive data protection

## 📱 Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: < 768px

## 📞 Contact & Collaboration

**Let's connect and discuss opportunities:**

- 📧 **Email**: [ssin1949@my.centennialcollege.ca](mailto:ssin1949@my.centennialcollege.ca)
- 📱 **Phone**: [(437) 779-2324](tel:+14377792324)
- 💼 **LinkedIn**: [linkedin.com/in/sandeep-singh-1010](https://www.linkedin.com/in/sandeep-singh-1010)
- 💻 **GitHub**: [github.com/Sandeepsingh1010](https://github.com/Sandeepsingh1010)
- 📍 **Location**: Toronto, ON, Canada

### Book a Meeting
Schedule a direct consultation through Microsoft Bookings integrated into the portfolio contact page.

## 🌟 Project Branches
- **`main`** - Production frontend portfolio
- **`assignment-2-backend`** - Complete full-stack implementation with backend API

## 🧪 Testing
- **Frontend**: Manual testing across devices and browsers
- **Backend**: API testing with Postman
- **Database**: MongoDB Atlas with Mongoose validation
- **Integration**: Full-stack testing with frontend and backend communication

## 🤝 Contributing
While this is a personal portfolio, feedback and suggestions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments
- Built with React and Vite
- Icons from SVG Repo
- Microsoft Learn for certification resources
- Centennial College for educational foundation

---

**Sandeep Singh - Engineering Excellence Through Innovation**  
*Transforming ideas into reality with cutting-edge technology and engineering expertise.*
