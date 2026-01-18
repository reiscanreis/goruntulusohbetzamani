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
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ds8gcqdwy86v0n3dmfzyuu8csy7k5bqm&file_id=f_2106454108095",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ds8gcqdwy86v0n3dmfzyuu8csy7k5bqm&file_id=f_2106454108095",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ds8gcqdwy86v0n3dmfzyuu8csy7k5bqm&file_id=f_2106454108095",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ds8gcqdwy86v0n3dmfzyuu8csy7k5bqm&file_id=f_2106454108095",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ds8gcqdwy86v0n3dmfzyuu8csy7k5bqm&file_id=f_2106454108095",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ds8gcqdwy86v0n3dmfzyuu8csy7k5bqm&file_id=f_2106454108095"
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
















