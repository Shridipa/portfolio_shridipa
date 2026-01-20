@echo off
echo ========================================
echo Committing Music File to Git
echo ========================================
echo.

REM Add all files
git add .

REM Commit with message
git commit -m "Add ambient music file to public folder"

REM Push to GitHub
git push origin main

echo.
echo ========================================
echo Done! Check Vercel for redeployment
echo ========================================
pause
