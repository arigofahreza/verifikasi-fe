const http = require('http');
const url = require('url');

// Import the handler function
const verifikasiHandler = require('./api/verifikasi.js').default;

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  // Route to handle /api/verifikasi
  if (parsedUrl.pathname === '/api/verifikasi') {
    // Create a mock Vercel-like request/response object
    const mockReq = {
      query: parsedUrl.query,
      method: req.method,
      url: req.url
    };
    
    const mockRes = {
      status: (statusCode) => {
        res.statusCode = statusCode;
        return mockRes;
      },
      send: (data) => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(data);
      },
      json: (data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
      }
    };
    
    verifikasiHandler(mockReq, mockRes);
  } else {
    // Default response for other routes
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>404 - Not Found</title></head>
      <body>
        <h1>404 - Not Found</h1>
        <p>Try: <a href="/api/verifikasi?code=64804690-8bb3-4e8c-a93b-84deb4fefb91">
          /api/verifikasi?code=64804690-8bb3-4e8c-a93b-84deb4fefb91
        </a></p>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Test URL: http://localhost:${PORT}/api/verifikasi?code=64804690-8bb3-4e8c-a93b-84deb4fefb91`);
});
