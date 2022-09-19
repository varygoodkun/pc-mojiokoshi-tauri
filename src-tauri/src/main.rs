#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use reqwest;
use std::fs;

#[tauri::command]
async fn submit_image(docType: String, path: String) -> Result<String, String> {
    let file = fs::read(&path).expect("file not found");
    // let file = fs::File::open(path).expect("file not found");
    let part = reqwest::multipart::Part::bytes(file);
    let form = reqwest::multipart::Form::new()
        .text("type", docType)
        .part("file", part);

    let client = reqwest::Client::new();
    let res = client
        .post("https://asia-northeast1-varygoodkun-line-bot.cloudfunctions.net/apiPcMojiokoshi")
        .multipart(form)
        .send()
        .await
        .unwrap();

    let text = res.text().await.unwrap();

    Ok(text)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![submit_image])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
