import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xdmnlet8mq2zij6cjw09dnolunfdmdg8&file_id=f_2106363003880",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xdmnlet8mq2zij6cjw09dnolunfdmdg8&file_id=f_2106363003880",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xdmnlet8mq2zij6cjw09dnolunfdmdg8&file_id=f_2106363003880",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xdmnlet8mq2zij6cjw09dnolunfdmdg8&file_id=f_2106363003880",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xdmnlet8mq2zij6cjw09dnolunfdmdg8&file_id=f_2106363003880",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xdmnlet8mq2zij6cjw09dnolunfdmdg8&file_id=f_2106363003880",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=cbif1vcf24x2kseuluy2qjupp58kymnc&file_id=f_2106359608535",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=cbif1vcf24x2kseuluy2qjupp58kymnc&file_id=f_2106359608535",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=cbif1vcf24x2kseuluy2qjupp58kymnc&file_id=f_2106359608535",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=cbif1vcf24x2kseuluy2qjupp58kymnc&file_id=f_2106359608535",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=cbif1vcf24x2kseuluy2qjupp58kymnc&file_id=f_2106359608535",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=cbif1vcf24x2kseuluy2qjupp58kymnc&file_id=f_2106359608535",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=yzf98rsbh6tjxei6a9h47mra9i916ni2&file_id=f_2106358650129",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=yzf98rsbh6tjxei6a9h47mra9i916ni2&file_id=f_2106358650129",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=yzf98rsbh6tjxei6a9h47mra9i916ni2&file_id=f_2106358650129",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=yzf98rsbh6tjxei6a9h47mra9i916ni2&file_id=f_2106358650129",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=yzf98rsbh6tjxei6a9h47mra9i916ni2&file_id=f_2106358650129",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=yzf98rsbh6tjxei6a9h47mra9i916ni2&file_id=f_2106358650129",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=73uipojns7kqtb97oi8oqsf2vt6q8jue&file_id=f_2106363882576",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=73uipojns7kqtb97oi8oqsf2vt6q8jue&file_id=f_2106363882576",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=73uipojns7kqtb97oi8oqsf2vt6q8jue&file_id=f_2106363882576",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=73uipojns7kqtb97oi8oqsf2vt6q8jue&file_id=f_2106363882576",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=73uipojns7kqtb97oi8oqsf2vt6q8jue&file_id=f_2106363882576",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=73uipojns7kqtb97oi8oqsf2vt6q8jue&file_id=f_2106363882576"
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















