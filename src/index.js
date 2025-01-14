const sql = require("mssql");
const config = require("../config/dbConfig");

async function testConnection() {
  try {
    // データベースに接続
    let pool = await sql.connect(config);

    // 簡単なクエリを実行
    let result = await pool.request().query("SELECT 1 AS number"); // テスト用のクエリ

    console.log("Connection successful:", result.recordset); // 取得したデータを表示
  } catch (err) {
    console.error("SQL error", err); // エラーメッセージを表示
  } finally {
    // 接続を閉じる
    sql.close();
  }
}

testConnection();
