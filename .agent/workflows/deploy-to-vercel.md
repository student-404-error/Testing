---
description: Deploy to Vercel
---

# Deploy to Vercel

The easiest way to deploy your Vite project is using the Vercel CLI.

1.  **Login to Vercel** (if not already logged in)
    ```bash
    npx vercel login
    ```

2.  **Deploy**
    Run the following command in your project root:
    ```bash
    npx vercel
    ```
    -   Set up and deploy? **Yes**
    -   Which scope? **(Select your account)**
    -   Link to existing project? **No**
    -   Project name? **(Press Enter for default)**
    -   Directory? **(Press Enter for default `.` )**

3.  **Production Deployment**
    The previous step deploys a "Preview" version. To deploy to **Production**:
    ```bash
    npx vercel --prod
    ```
