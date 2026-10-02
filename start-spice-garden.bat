@echo off
title Spice Garden Launcher
echo.
echo  ==========================================
echo   Starting Spice Garden Restaurant App
echo  ==========================================
echo.

:: Set Node.js path
set "PATH=%PATH%;C:\Program Files\nodejs"

:: Start Backend in a new window
echo  [1/2] Starting Backend API on port 5000...
start "Spice Garden BACKEND" cmd /k "cd /d C:\Users\praveen\OneDrive\Desktop\aws\backend && set PATH=%PATH%;C:\Program Files\nodejs && npm run dev"

:: Wait 4 seconds for backend to connect to MongoDB
timeout /t 4 /nobreak >nul

:: Start Frontend in a new window
echo  [2/2] Starting Frontend on port 5173...
start "Spice Garden FRONTEND" cmd /k "cd /d C:\Users\praveen\OneDrive\Desktop\aws\spice-garden && set PATH=%PATH%;C:\Program Files\nodejs && npm run dev"

:: Wait for Vite to start
timeout /t 6 /nobreak >nul

:: Open the website in Chrome
echo  [3/3] Opening website in browser...
start chrome "http://localhost:5173"

echo.
echo  ==========================================
echo   Both servers are running!
echo   Frontend : http://localhost:5173
echo   Backend  : http://localhost:5000
echo  ==========================================
echo.
echo  Keep the two server windows open.
echo  Close them to stop the servers.
echo.
pause
