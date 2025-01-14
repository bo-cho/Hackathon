// const { Connection, Request } = require("tedious");

// // 接続設定
// const config = {
//   server: "localhost,1433",
//   // サーバー名
//   authentication: {
//     type: "default",
//     options: {
//       userName: "ayaka", // ユーザー名
//       password: "ayaka226", // パスワード
//     },
//   },
//   options: {
//     encrypt: true, // Azureの場合はtrue
//     trustServerCertificate: true, // 自己署名証明書を信頼
//     database: "siminapp", // データベース名
//   },
// };

// // 接続を作成
// const connection = new Connection(config);

// // 接続イベント
// connection.on("connect", (err) => {
//   if (err) {
//     console.error("Connection failed:", err);
//   } else {
//     console.log("Connected");
//     executeStatement();
//   }
// });

// // 接続開始
// connection.connect();

// // クエリ実行関数
// function executeStatement() {
//   const request = new Request("SELECT * FROM user", (err, rowCount) => {
//     if (err) {
//       console.error("Query failed:", err);
//     } else {
//       console.log(`${rowCount} rows returned`);
//     }
//     connection.close();
//   });

//   request.on("row", (columns) => {
//     columns.forEach((column) => {
//       console.log("%s\t%s", column.metadata.colName, column.value);
//     });
//   });

//   connection.execSql(request);
// }
