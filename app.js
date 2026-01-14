import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=909a26df1qq291vb8gtmxrbzcp3ybzz8&file_id=f_2102390043704",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=909a26df1qq291vb8gtmxrbzcp3ybzz8&file_id=f_2102390043704",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=909a26df1qq291vb8gtmxrbzcp3ybzz8&file_id=f_2102390043704",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=909a26df1qq291vb8gtmxrbzcp3ybzz8&file_id=f_2102390043704",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=909a26df1qq291vb8gtmxrbzcp3ybzz8&file_id=f_2102390043704",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=909a26df1qq291vb8gtmxrbzcp3ybzz8&file_id=f_2102390043704",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=909a26df1qq291vb8gtmxrbzcp3ybzz8&file_id=f_2102390043704",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=909a26df1qq291vb8gtmxrbzcp3ybzz8&file_id=f_2102390043704",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vjrs0h3psh9tgrrvkvkvtopqkss0653a&file_id=f_2102389734348",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vjrs0h3psh9tgrrvkvkvtopqkss0653a&file_id=f_2102389734348",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vjrs0h3psh9tgrrvkvkvtopqkss0653a&file_id=f_2102389734348",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vjrs0h3psh9tgrrvkvkvtopqkss0653a&file_id=f_2102389734348",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vjrs0h3psh9tgrrvkvkvtopqkss0653a&file_id=f_2102389734348",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vjrs0h3psh9tgrrvkvkvtopqkss0653a&file_id=f_2102389734348",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vjrs0h3psh9tgrrvkvkvtopqkss0653a&file_id=f_2102389734348",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vjrs0h3psh9tgrrvkvkvtopqkss0653a&file_id=f_2102389734348",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ahfb4nh94dsnrghd0m177mu7zsumrmyf&file_id=f_2102388885062",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ahfb4nh94dsnrghd0m177mu7zsumrmyf&file_id=f_2102388885062",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ahfb4nh94dsnrghd0m177mu7zsumrmyf&file_id=f_2102388885062",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ahfb4nh94dsnrghd0m177mu7zsumrmyf&file_id=f_2102388885062",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ahfb4nh94dsnrghd0m177mu7zsumrmyf&file_id=f_2102388885062",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ahfb4nh94dsnrghd0m177mu7zsumrmyf&file_id=f_2102388885062",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ahfb4nh94dsnrghd0m177mu7zsumrmyf&file_id=f_2102388885062",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ahfb4nh94dsnrghd0m177mu7zsumrmyf&file_id=f_2102388885062"
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









