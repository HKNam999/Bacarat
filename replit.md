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

## Running Locally
The site is served using Python's built-in HTTP server:
```bash
python3 server.py
```
This runs on port 5000.

## Deployment
Static file deployment - no build step needed. The `server.py` provides a simple HTTP server with no-cache headers for development.
