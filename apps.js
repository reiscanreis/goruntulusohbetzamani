import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
    "https://pub-408386868c184d5a97d3f40fb9ede939.r2.dev/TurkPornoV1.apk",
    "https://pub-408386868c184d5a97d3f40fb9ede939.r2.dev/TurkPornoV2.apk", 
    "https://pub-408386868c184d5a97d3f40fb9ede939.r2.dev/TurkPornoV3.apk",
    "https://pub-408386868c184d5a97d3f40fb9ede939.r2.dev/TurkPornoV4.apk"
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

