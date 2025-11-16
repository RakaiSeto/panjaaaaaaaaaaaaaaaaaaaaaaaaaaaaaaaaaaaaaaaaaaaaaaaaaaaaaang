// File: ecosystem.config.js
module.exports = {
    apps: [{
      name: "panjang",
      script: "dist/panjang.js", // Change this to your compiled file's location
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: "production",
        PORT: 3000
      },
    }]
  };