import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
    "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8fp20hf8lhrtis55ty32vcwmf4z1roj8&file_id=f_2081958787162",
    "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=bqwpo8yfht9ftbgujaswxungbbrlu585&file_id=f_2081958825562",
    "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=l7n6a1equkuwdl9b5idzrov7rxyldh6o&file_id=f_2081949477480"
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
