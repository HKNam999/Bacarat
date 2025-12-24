# ToolBCR - Static Website

## Overview
This is a static HTML/CSS/JavaScript website for an online casino tool interface. The site is multilingual (Vietnamese, English, Thai, Chinese, Korean) using i18next for internationalization.

## Project Structure
- `index.html` - Main homepage
- `Account/Login/index.html` - Login page
- `css/` - Custom stylesheets
- `js/` - JavaScript files including localization
- `lib/` - Third-party libraries (Bootstrap, jQuery, FontAwesome, i18next, SweetAlert2)
- `image/` - Image assets
- `fonts/` - Custom fonts
- `new_theme/` - Additional theme files

## Technology Stack
- Pure HTML/CSS/JavaScript (no build step required)
- Bootstrap 5 for responsive design
- jQuery for DOM manipulation
- FontAwesome for icons
- i18next for internationalization
- SweetAlert2 for modals

## Features
- **Loading Dialog on Game Selection**: Clicking on any game logo displays a loading progress dialog with a 4-second countdown timer before navigating to the game page
- **Multilingual Support**: Full i18next integration with Vietnamese, English, Thai, Chinese, and Korean language options
- **Responsive Design**: Bootstrap-based responsive layout for desktop and mobile

## Running Locally
The site is served using Python's built-in HTTP server:
```bash
python3 server.py
```
This runs on port 5000.

## Recent Changes
- Fixed UTF-8 encoding issues with Vietnamese game names ("Tài Xỉu")
- Added SweetAlert2 loading dialog for game selection with 4-second loading timer

## Deployment
Static file deployment - no build step needed. The `server.py` provides a simple HTTP server with no-cache headers for development.
