# COLORS Web Application (LAMP Stack)

## Description
COLORS is a web application built using the LAMP stack (Linux, Apache, MySQL, PHP).  
The application provides a simple interface for interacting with color data through a PHP-based API and a browser-based frontend.

This project demonstrates:
- Backend API development in PHP
- Database interaction with MySQL
- Frontend integration using HTML, CSS, and JavaScript
- Version control best practices using Git and GitHub

---

## Technologies Used
- Apache Web Server
- MySQL
- PHP
- HTML5
- CSS3
- JavaScript
- Git / GitHub

---

## Project Structure

LAMPAPI/ → Backend PHP API files
css/ → Stylesheets
js/ → Client-side scripts
images/ → Static assets
index.html → Main frontend page
color.html → Secondary frontend page


---

## Setup Instructions

1. Install a local LAMP environment (XAMPP, WAMP, MAMP, or Linux LAMP).
2. Place this project folder inside your web server directory:
   - Example (XAMPP): `htdocs/`
3. Import the required MySQL database.
4. Update database credentials in the PHP API files (do not commit credentials).
5. Start Apache and MySQL.

---

## How to Run

Open your browser and navigate to:

http://localhost/colors-lamp/index.html

---

## Assumptions & Limitations

- Designed for a local development environment.
- No production security hardening.
- No authentication system implemented.
- Database credentials must be configured locally.
