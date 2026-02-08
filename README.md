# Verifikasi LAI Clone

A clone of the Indonesian Ministry of Finance's LAI (Laporan Auditor Independen) verification API, deployable on Vercel.

## Features

- Clone of the original verification page design
- Serverless API route compatible with Vercel
- Responsive HTML output
- Dynamic date/time stamp
- Easy to customize with your own data

## Project Structure

```
.
├── api/
│   └── verifikasi.js       # Main API endpoint
├── package.json            # Project configuration
├── vercel.json            # Vercel routing configuration
└── README.md              # This file
```

## Local Development

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Run the development server:
```bash
vercel dev
```

3. Visit `http://localhost:3000/api/VerifikasiLai?code=64804690-8bb3-4e8c-a93b-84deb4fefb91` in your browser

## Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI if you haven't:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

## Usage

After deployment, access your API at:
```
https://your-project.vercel.app/api/VerifikasiLai?code=64804690-8bb3-4e8c-a93b-84deb4fefb91
```

## Adding More Verification Codes

Edit `api/verifikasi.js` and add more entries to the `verificationData` object:

```javascript
const verificationData = {
  'your-code-1': {
    namaKAP: 'KAP Name',
    namaKlien: 'Client Name',
    periode: '01/01/2024 s.d. 31/12/2024',
    noLAI: 'LAI Number',
    tglLAI: '08/01/2026',
    apPenanggungJawab: 'Auditor Name',
    opini: 'WTP',
    totalAset: 'IDR 1.000.000',
    labaRugiBersih: 'IDR 500.000'
  },
  'your-code-2': {
    // ... more data
  }
};
```

## Connecting to a Database

To use a real database instead of hardcoded data, you can:

1. **Use Vercel's built-in databases:**
   - Vercel Postgres
   - Vercel KV (Redis)

2. **Connect to external databases:**
   - MongoDB
   - MySQL
   - PostgreSQL
   - Firebase

Example with environment variables:

```javascript
// In vercel.json, add environment variables
// Then use them in your code:
const dbUrl = process.env.DATABASE_URL;
```

## Environment Variables

If you need to add sensitive data or configuration:

1. Create a `.env.local` file for local development
2. Add variables in Vercel Dashboard under Project Settings → Environment Variables

## License

MIT

## Disclaimer

This is a clone for educational/development purposes. Make sure you have the right to replicate and host such content.