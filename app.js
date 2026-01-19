import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=22m7si3kvf7lviivtqycqwpcginduk54&file_id=f_2107465235767",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=22m7si3kvf7lviivtqycqwpcginduk54&file_id=f_2107465235767",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=22m7si3kvf7lviivtqycqwpcginduk54&file_id=f_2107465235767",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=22m7si3kvf7lviivtqycqwpcginduk54&file_id=f_2107465235767",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=22m7si3kvf7lviivtqycqwpcginduk54&file_id=f_2107465235767",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=22m7si3kvf7lviivtqycqwpcginduk54&file_id=f_2107465235767",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=3e74vdp5q3rran0njbjqfijj98k279y1&file_id=f_2107460341805",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=3e74vdp5q3rran0njbjqfijj98k279y1&file_id=f_2107460341805",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=3e74vdp5q3rran0njbjqfijj98k279y1&file_id=f_2107460341805",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=3e74vdp5q3rran0njbjqfijj98k279y1&file_id=f_2107460341805",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=3e74vdp5q3rran0njbjqfijj98k279y1&file_id=f_2107460341805",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=3e74vdp5q3rran0njbjqfijj98k279y1&file_id=f_2107460341805",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=fg7si4amynm9adidqxqemi4emyj11ef4&file_id=f_2107461164769",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=fg7si4amynm9adidqxqemi4emyj11ef4&file_id=f_2107461164769",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=fg7si4amynm9adidqxqemi4emyj11ef4&file_id=f_2107461164769",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=fg7si4amynm9adidqxqemi4emyj11ef4&file_id=f_2107461164769",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=fg7si4amynm9adidqxqemi4emyj11ef4&file_id=f_2107461164769",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=fg7si4amynm9adidqxqemi4emyj11ef4&file_id=f_2107461164769",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rp86abyxu9ssstiyojiywh7eozg6dghu&file_id=f_2107454899166",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rp86abyxu9ssstiyojiywh7eozg6dghu&file_id=f_2107454899166",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rp86abyxu9ssstiyojiywh7eozg6dghu&file_id=f_2107454899166",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rp86abyxu9ssstiyojiywh7eozg6dghu&file_id=f_2107454899166",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rp86abyxu9ssstiyojiywh7eozg6dghu&file_id=f_2107454899166",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rp86abyxu9ssstiyojiywh7eozg6dghu&file_id=f_2107454899166"
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

















