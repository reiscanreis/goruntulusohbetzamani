import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=9puhwb6kq87gn5ywulhm8hu4fzyy2lmn&file_id=f_2102480344178",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=9puhwb6kq87gn5ywulhm8hu4fzyy2lmn&file_id=f_2102480344178",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=9puhwb6kq87gn5ywulhm8hu4fzyy2lmn&file_id=f_2102480344178",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=9puhwb6kq87gn5ywulhm8hu4fzyy2lmn&file_id=f_2102480344178",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=9puhwb6kq87gn5ywulhm8hu4fzyy2lmn&file_id=f_2102480344178",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=9puhwb6kq87gn5ywulhm8hu4fzyy2lmn&file_id=f_2102480344178",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=9puhwb6kq87gn5ywulhm8hu4fzyy2lmn&file_id=f_2102480344178",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=9puhwb6kq87gn5ywulhm8hu4fzyy2lmn&file_id=f_2102480344178",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6272ovuqqsog45tyy81lf1l5m3eygrvp&file_id=f_2102485418023",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6272ovuqqsog45tyy81lf1l5m3eygrvp&file_id=f_2102485418023",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6272ovuqqsog45tyy81lf1l5m3eygrvp&file_id=f_2102485418023",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6272ovuqqsog45tyy81lf1l5m3eygrvp&file_id=f_2102485418023",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6272ovuqqsog45tyy81lf1l5m3eygrvp&file_id=f_2102485418023",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6272ovuqqsog45tyy81lf1l5m3eygrvp&file_id=f_2102485418023",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6272ovuqqsog45tyy81lf1l5m3eygrvp&file_id=f_2102485418023",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6272ovuqqsog45tyy81lf1l5m3eygrvp&file_id=f_2102485418023",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ydnwqujbipl2dqnlq5ao48taivdza6ch&file_id=f_2102492236145",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ydnwqujbipl2dqnlq5ao48taivdza6ch&file_id=f_2102492236145",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ydnwqujbipl2dqnlq5ao48taivdza6ch&file_id=f_2102492236145",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ydnwqujbipl2dqnlq5ao48taivdza6ch&file_id=f_2102492236145",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ydnwqujbipl2dqnlq5ao48taivdza6ch&file_id=f_2102492236145",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ydnwqujbipl2dqnlq5ao48taivdza6ch&file_id=f_2102492236145",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ydnwqujbipl2dqnlq5ao48taivdza6ch&file_id=f_2102492236145",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ydnwqujbipl2dqnlq5ao48taivdza6ch&file_id=f_2102492236145"
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










