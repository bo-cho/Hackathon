const config = {
  user: "ayaka",
  password: "ayaka226",
  server: "localhost", // 例: 'localhost'
  database: "siminapp",
  options: {
    encrypt: false, // Azureの場合はtrueに設定
    trustServerCertificate: true, // 開発環境ではtrueに設定
  },
};

module.exports = config;
