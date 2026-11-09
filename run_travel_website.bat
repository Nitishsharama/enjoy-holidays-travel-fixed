@echo off
title Enjoy Holidays Travel - Local Server
color 0B

echo ======================================================================
echo    ENJOY HOLIDAYS TOUR AND TRAVEL - KATRA, JAMMU & KASHMIR
echo    Starting local server...
echo ======================================================================

REM Check if Python is available
python -c "import sys" >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Python found. Starting http.server on port 8000.
    start "" http://localhost:8000
    python -m http.server 8000
) else (
    echo Python not found. Opening index.html directly.
    start "" "%~dp0index.html"
)

pause