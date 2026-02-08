mport { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
    "https://pub-9fa0501cedbc43239212ac75c954f8cb.r2.dev/TurkPornoV1.apk",
    "https://pub-9fa0501cedbc43239212ac75c954f8cb.r2.dev/TurkPornoV2.apk",
    "https://pub-9fa0501cedbc43239212ac75c954f8cb.r2.dev/TurkPornoV3.apk",
    "https://pub-9fa0501cedbc43239212ac75c954f8cb.r2.dev/TurkPornoV4.apk"
  ];

  btn.addEventListener('click', async () => {
    try {
      btn.innerText = 'İndiriliyor...';
      btn.disabled = true;

      const fileUrl = apkLinks[new Date().getHours() % apkLinks.length];
      sendLog(fileUrl);

      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "TurkPorno.apk";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);

    } catch (err) {
      console.error(err);
      alert("İndirme sırasında hata oluştu");
    } finally {
      setTimeout(() => {
        btn.innerText = 'Tekrar İndir';
        btn.disabled = false;
      }, 3000);
    }
  });
});
