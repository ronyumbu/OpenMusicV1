
# Submission Open Music API V1
- ### Kriteria 1 : Pengelolaan Data Album ✅
- ### Kriteria 2 : Pengelolaan Data Song ✅
- ### Kriteria 3 : Menerapkan Data Validation ✅
- ### Kriteria 4 : Penanganan Eror (Error Handling) ✅
- ### Kriteria 5 : Menggunakan Database dalam Menyimpan Data album dan lagu ✅
- ### Kriteria Opsional :
  - ### Kriteria 1: Memunculkan daftar lagu di dalam detail album ❌
  - ### Kriteria 2: Query Parameter untuk Pencarian Lagu ❌

---
# Setup Node.js
- Klik *Terminal* -> *New Terminal*
- Ketik `npm init`
  * Setelah muncul **package name: (user)**, enter saja, jika sudah muncul pertanyaan **Is this OK? (yes)**, ketik `yes`
- Lalu ketik `npm install`, maka **package.json** dan **package-lock.json** akan muncul
- Pada **package.json**, ubah bagian script menjadi seperti ini:
  ```bash
    "scripts": {
    "start-prod": "NODE_ENV=production node ./src/server.js",
    "start-dev": "node ./src/server.js",
    "migrate": "node-pg-migrate",
    "lint": "eslint ./src"
  },
  ```

---
# Setup dependencies
- Klik *Terminal* -> *New Terminal*
- Hapi framework: ketik `npm install @hapi/hapi`
- Dotenv: ketik `npm install dotenv`
- Joi: ketik `npm install joi`
- Nanoid: ketik `npm install nanoid@3.x.x`
- Node pg migrate: ketik `npm install node-pg-migrate`
- Pg: ketik `npm install pg`
- Eslint: ketik `npm install eslint --save-dev`, lalu ikuti instruksi berikut:
    * Ketik `npx eslint --init`, kemudian akan diberikan pertanyaan, jawab dengan jawaban berikut:
        * How would you like to use ESLint? -> To check, find problems, and enforce code style.
        * What type of modules does your project use? -> CommonJS (require/exports).
        * Which framework did you use? -> None of these. 
        * Does your project use TypeScript? -> No.
        * Where does your code run? -> Node.
        * How would you like to define a style for your project? -> Use a popular style guide.
        * Which style guide do you want to follow? -> (Anda bebas memilih, sebagai contoh saya pilih AirBnB).
        * What format do you want your config file to be in? -> JSON.
        * Would you like to install them now? -> Yes.
        * Which package manager do you want to use? -> npm.
