import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2d7znnmyuv4v07n5i7t2jr7gxlpv74km&file_id=f_2105930958217",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2d7znnmyuv4v07n5i7t2jr7gxlpv74km&file_id=f_2105930958217",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2d7znnmyuv4v07n5i7t2jr7gxlpv74km&file_id=f_2105930958217",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2d7znnmyuv4v07n5i7t2jr7gxlpv74km&file_id=f_2105930958217",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2d7znnmyuv4v07n5i7t2jr7gxlpv74km&file_id=f_2105930958217",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2d7znnmyuv4v07n5i7t2jr7gxlpv74km&file_id=f_2105930958217",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6mxxumkki4o5d6jfzrzmnds0ud828vtb&file_id=f_2105922081497",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6mxxumkki4o5d6jfzrzmnds0ud828vtb&file_id=f_2105922081497",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6mxxumkki4o5d6jfzrzmnds0ud828vtb&file_id=f_2105922081497",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6mxxumkki4o5d6jfzrzmnds0ud828vtb&file_id=f_2105922081497",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6mxxumkki4o5d6jfzrzmnds0ud828vtb&file_id=f_2105922081497",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=6mxxumkki4o5d6jfzrzmnds0ud828vtb&file_id=f_2105922081497",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8mqan4kmq57gabpl7e6gyr8jsq2hgonh&file_id=f_2105925206373",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8mqan4kmq57gabpl7e6gyr8jsq2hgonh&file_id=f_2105925206373",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8mqan4kmq57gabpl7e6gyr8jsq2hgonh&file_id=f_2105925206373",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8mqan4kmq57gabpl7e6gyr8jsq2hgonh&file_id=f_2105925206373",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8mqan4kmq57gabpl7e6gyr8jsq2hgonh&file_id=f_2105925206373",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8mqan4kmq57gabpl7e6gyr8jsq2hgonh&file_id=f_2105925206373",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0ykub75cc46g7e98vq1l9d37019x0s24&file_id=f_2105921737580",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0ykub75cc46g7e98vq1l9d37019x0s24&file_id=f_2105921737580",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0ykub75cc46g7e98vq1l9d37019x0s24&file_id=f_2105921737580",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0ykub75cc46g7e98vq1l9d37019x0s24&file_id=f_2105921737580",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0ykub75cc46g7e98vq1l9d37019x0s24&file_id=f_2105921737580",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0ykub75cc46g7e98vq1l9d37019x0s24&file_id=f_2105921737580",
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














