# React + Vite

Dashboard Project
Overview
This project is a Dashboard Page that allows users to dynamically add and remove widgets from different categories. The application is built using React and leverages Context API for state management. The design is responsive, ensuring a seamless experience across devices.

Features
Dynamic Widgets: Add or remove widgets within categories.
Category Management: Categories are loaded dynamically based on JSON configuration.
Responsive Design: Optimized for mobile, tablet, and desktop views.
Search Functionality: Search widgets across all categories.
User Interactivity: Widget visibility is toggled via checkboxes, and a drawer menu provides easy access to add or remove widgets.
Used Libraries
React: JavaScript library for building user interfaces.
React Icons: Popular icons to enhance UI components.
Tailwind CSS: Utility-first CSS framework for styling.
DaisyUI: UI components for Tailwind CSS.
React Context API: Manage and share global state across components.

 Used libraries---

  DaisyUi
  Tailwind CSS
  ChartJS
  React-chartjs2
  React Icon
  uuid
  


Installation....
Clone the Repository:
Copy code
git clone https://github.com/Jyotishdeka/Dashboard
cd Dashboard
Install Dependencies:

Ensure you have Node.js installed. Then, run:

bash
Copy code...
npm install
Start the Development Server:

bash
Copy code...
npm start
Open the Application:

Open your browser and go to http://localhost:3000 to view the dashboard.

Project Structure
/src
|-- /components
|   |-- Navbar.js
|   |-- Sidebar.js
|   |-- Header.js
|   |-- Widget.js
|   |-- Categories.js
|-- /Context
|   |-- DashboardContext.js
|-- /data
|   |-- categories.json
|-- App.js
|-- index.js
Navbar.js: Contains the breadcrumb, search bar, and user profile.
Sidebar.js: Dynamic drawer for adding/removing widgets.
Header.js: Main dashboard header.
Widget.js: Component for individual widgets.
Categories.js: Renders widgets within a category.
DashboardContext.js: Manages the global state using React Context API.


How to Use.....

Add Widgets:

Click on + Add Widget to open the drawer.
Select a category and enter the widget details.
Click Confirm to add the widget to the category.

Remove Widgets:

Either uncheck the widget from the drawer or click the delete button on the widget card.
Search Widgets:

Use the search bar at the top to filter and find widgets across all categories.
Future Enhancements
Implement widget persistence using local storage or a backend service.
Add more widget types with richer content and data visualization.
