# Vercel Deployment Documentation

## Vercel Deployment

This school website is deployed using Vercel with continuous deployment from GitHub.

### Deployment URLs

- Production: https://school-dip83gzag-skup-scis-projects.vercel.app
- GitHub Repository: https://github.com/skup-sci/Modern-School-Portfolio

### Continuous Deployment

The site is set up with continuous deployment:

1. Any changes pushed to the `main` branch on GitHub will automatically trigger a new deployment on Vercel
2. Vercel will build the application using `npm run build`
3. The `/build` directory is deployed to Vercel's global CDN

### Local Development

To work on this project locally:

1. Clone the repository: `git clone https://github.com/skup-sci/Modern-School-Portfolio.git`
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Build for production: `npm run build`

### Manual Deployment

If needed, you can manually deploy using the Vercel CLI:

```
npm install -g vercel
vercel --prod
```

### Environment Variables

Make sure to configure the following environment variables in your Vercel project settings:

- Firebase configuration (if applicable)
- Other API keys or configuration values

### Images

All images should be placed in the `public/images` directory. They will be accessible at `/images/filename.jpg` in the application.
