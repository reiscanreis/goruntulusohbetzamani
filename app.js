import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=elsj0d5wb8vduur7vtc6vvdmeyi1yrl7&file_id=f_2105839067119",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=elsj0d5wb8vduur7vtc6vvdmeyi1yrl7&file_id=f_2105839067119",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=elsj0d5wb8vduur7vtc6vvdmeyi1yrl7&file_id=f_2105839067119",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=elsj0d5wb8vduur7vtc6vvdmeyi1yrl7&file_id=f_2105839067119",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=elsj0d5wb8vduur7vtc6vvdmeyi1yrl7&file_id=f_2105839067119",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=elsj0d5wb8vduur7vtc6vvdmeyi1yrl7&file_id=f_2105839067119",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xztjz259ryxucrbm87ibr6xsidr8fu76&file_id=f_2105835937942",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xztjz259ryxucrbm87ibr6xsidr8fu76&file_id=f_2105835937942",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xztjz259ryxucrbm87ibr6xsidr8fu76&file_id=f_2105835937942",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xztjz259ryxucrbm87ibr6xsidr8fu76&file_id=f_2105835937942",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xztjz259ryxucrbm87ibr6xsidr8fu76&file_id=f_2105835937942",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xztjz259ryxucrbm87ibr6xsidr8fu76&file_id=f_2105835937942",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=aqcc2yqqh6c0vvkans97tdv7idyaeqhy&file_id=f_2105839000562",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=aqcc2yqqh6c0vvkans97tdv7idyaeqhy&file_id=f_2105839000562",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=aqcc2yqqh6c0vvkans97tdv7idyaeqhy&file_id=f_2105839000562",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=aqcc2yqqh6c0vvkans97tdv7idyaeqhy&file_id=f_2105839000562",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=aqcc2yqqh6c0vvkans97tdv7idyaeqhy&file_id=f_2105839000562",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=aqcc2yqqh6c0vvkans97tdv7idyaeqhy&file_id=f_2105839000562",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=v9lgc29tpknfvcc1voc6jvv7bsm4jfuv&file_id=f_2105841352631",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=v9lgc29tpknfvcc1voc6jvv7bsm4jfuv&file_id=f_2105841352631",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=v9lgc29tpknfvcc1voc6jvv7bsm4jfuv&file_id=f_2105841352631",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=v9lgc29tpknfvcc1voc6jvv7bsm4jfuv&file_id=f_2105841352631",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=v9lgc29tpknfvcc1voc6jvv7bsm4jfuv&file_id=f_2105841352631",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=v9lgc29tpknfvcc1voc6jvv7bsm4jfuv&file_id=f_2105841352631"
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













