# Gemini AI Chatbot

Sebuah aplikasi web chatbot sederhana dan elegan yang didukung oleh Google Gemini AI. Proyek ini mendemonstrasikan cara mengintegrasikan model bahasa yang kuat ke dalam aplikasi obrolan real-time menggunakan Node.js, Express, dan JavaScript vanilla.

![Tampilan Chatbot](image/Screenshot%202025-06-21%20at%2012.09.52.png)

## 🌟 Fitur

- **Obrolan Real-time**: Dapatkan respons instan dari Gemini AI.
- **UI Modern**: Antarmuka obrolan yang bersih, responsif, dan menarik secara visual.
- **Backend Sederhana**: Backend ringan yang dibangun dengan Node.js dan Express untuk menangani permintaan API.
- **Pengaturan Mudah**: Jalankan chatbot secara lokal hanya dengan beberapa langkah sederhana.

## 🛠️ Teknologi yang Digunakan

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Model AI**: Google Gemini API
- **Dependensi**: `@google/generative-ai`, `cors`, `dotenv`, `express`

## 🚀 Memulai

Ikuti instruksi ini untuk mendapatkan salinan proyek dan menjalankannya di mesin lokal Anda untuk tujuan pengembangan dan pengujian.

### Prasyarat

- Node.js (v18 atau lebih baru direkomendasikan)
- npm (biasanya terinstal bersama Node.js)
- Kunci API Google Gemini. Anda bisa mendapatkannya dari [Google AI Studio](https://aistudio.google.com/app/apikey).

### Instalasi & Pengaturan

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/gustygnm/gemini-chatbot-api.git
    cd gemini-chatbot-api
    ```

2.  **Instal dependensi backend:**
    ```bash
    npm install
    ```

3.  **Siapkan variabel lingkungan:**
    Buat file `.env` di direktori root proyek dan tambahkan kunci API Gemini Anda:
    ```
    GEMINI_API_KEY=MASUKKAN_KUNCI_API_GEMINI_ANDA
    ```
    Ganti `MASUKKAN_KUNCI_API_GEMINI_ANDA` dengan kunci asli Anda.

### Menjalankan Aplikasi

1.  **Mulai server backend:**
    ```bash
    node index.js
    ```
    Server akan berjalan di `http://localhost:3000`.

2.  **Buka chatbot di browser Anda:**
    Buka alamat `http://localhost:3000` untuk mulai mengobrol dengan AI! 