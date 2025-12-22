import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
   "https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2r7t5t55ko7m7dsgxg5cjtjbqibgxjix&file_id=f_2082078899648",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2r7t5t55ko7m7dsgxg5cjtjbqibgxjix&file_id=f_2082078899648",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2r7t5t55ko7m7dsgxg5cjtjbqibgxjix&file_id=f_2082078899648",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=yzyz3i29s2gxfiimcvxj1132l8yuzc5c&file_id=f_2082063285265",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=yzyz3i29s2gxfiimcvxj1132l8yuzc5c&file_id=f_2082063285265",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=yzyz3i29s2gxfiimcvxj1132l8yuzc5c&file_id=f_2082063285265",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8att8p4dvlpbxux9zh2ohizlzve78h7n&file_id=f_2082068770951",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8att8p4dvlpbxux9zh2ohizlzve78h7n&file_id=f_2082068770951",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8att8p4dvlpbxux9zh2ohizlzve78h7n&file_id=f_2082068770951",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=q5tgkbr42h9cbli8bz3o2kfcv6lr2uz0&file_id=f_2082078870081",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=q5tgkbr42h9cbli8bz3o2kfcv6lr2uz0&file_id=f_2082078870081",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=q5tgkbr42h9cbli8bz3o2kfcv6lr2uz0&file_id=f_2082078870081",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=lw4a51ssipgq5e52n3rcl38kcbbhzwny&file_id=f_2082056917208",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=lw4a51ssipgq5e52n3rcl38kcbbhzwny&file_id=f_2082056917208",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=lw4a51ssipgq5e52n3rcl38kcbbhzwny&file_id=f_2082056917208",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ie4x07ajz9x09b86eeyy265yraewwily&file_id=f_2082079105213",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ie4x07ajz9x09b86eeyy265yraewwily&file_id=f_2082079105213",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ie4x07ajz9x09b86eeyy265yraewwily&file_id=f_2082079105213",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=z5htbzwt6opu7gh0da4xq3yt5o7q3wud&file_id=f_2082063896675",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=z5htbzwt6opu7gh0da4xq3yt5o7q3wud&file_id=f_2082063896675",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=z5htbzwt6opu7gh0da4xq3yt5o7q3wud&file_id=f_2082063896675",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ghkkmz2afsh881hx8bylec8q365g3qbt&file_id=f_2082072525285",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ghkkmz2afsh881hx8bylec8q365g3qbt&file_id=f_2082072525285",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ghkkmz2afsh881hx8bylec8q365g3qbt&file_id=f_2082072525285"
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

