@echo off
title Enjoy Holidays Tour and Travel - Katra (J&K)
color 0B

echo ======================================================================
echo    ENJOY HOLIDAYS TOUR AND TRAVEL - KATRA, JAMMU & KASHMIR
echo    Opening Premium Travel Website...
echo ======================================================================
echo.

cd /d "%~dp0"

REM Try launching through Python HTTP server if available
python --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Starting Python Local Server on port 3000...
    start http://localhost:3000
    python server.py
) else (
    echo Python not found in PATH. Opening index.html directly in your default browser...
    start "" "%~dp0index.html"
)

pause
