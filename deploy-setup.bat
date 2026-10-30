@echo off
echo === Cleaning dist folder... ===
if exist dist rd /s /q dist

echo === Building project... ===
call npm run build
if %errorlevel% neq 0 (
    echo Build failed! Aborting.
    exit /b 1
)

echo.
echo === Deploying dist/ to gh-pages branch... ===

cd dist
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/Sabih-sourcee/portfolio.git
git push origin gh-pages --force
cd ..

echo.
echo === Pushing source code to main... ===
git add .
git commit -m "Update source including new assets"
git push origin main

echo === DONE! ===
echo Your site will be live at:
echo https://sabih.is-a.dev
echo (also: https://sabih-sourcee.github.io/portfolio)
echo.
