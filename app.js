import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=wvjn986j7iqrba6hxx0iykri2egh6tlv&file_id=f_2107557491667",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=wvjn986j7iqrba6hxx0iykri2egh6tlv&file_id=f_2107557491667",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=wvjn986j7iqrba6hxx0iykri2egh6tlv&file_id=f_2107557491667",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=wvjn986j7iqrba6hxx0iykri2egh6tlv&file_id=f_2107557491667",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=wvjn986j7iqrba6hxx0iykri2egh6tlv&file_id=f_2107557491667",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=wvjn986j7iqrba6hxx0iykri2egh6tlv&file_id=f_2107557491667",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xbfdjmoyph1r3fc19y7xpf9ca0jawhau&file_id=f_2107560066063",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xbfdjmoyph1r3fc19y7xpf9ca0jawhau&file_id=f_2107560066063",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xbfdjmoyph1r3fc19y7xpf9ca0jawhau&file_id=f_2107560066063",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xbfdjmoyph1r3fc19y7xpf9ca0jawhau&file_id=f_2107560066063",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xbfdjmoyph1r3fc19y7xpf9ca0jawhau&file_id=f_2107560066063",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xbfdjmoyph1r3fc19y7xpf9ca0jawhau&file_id=f_2107560066063",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=5o7uyjukv7g71rz6u9lc3estgsdwaiy2&file_id=f_2107559361315",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=5o7uyjukv7g71rz6u9lc3estgsdwaiy2&file_id=f_2107559361315",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=5o7uyjukv7g71rz6u9lc3estgsdwaiy2&file_id=f_2107559361315",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=5o7uyjukv7g71rz6u9lc3estgsdwaiy2&file_id=f_2107559361315",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=5o7uyjukv7g71rz6u9lc3estgsdwaiy2&file_id=f_2107559361315",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=5o7uyjukv7g71rz6u9lc3estgsdwaiy2&file_id=f_2107559361315",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=qfe0ryb6xhqq6cr9g19jmt4coyywewk1&file_id=f_2107558566977",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=qfe0ryb6xhqq6cr9g19jmt4coyywewk1&file_id=f_2107558566977",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=qfe0ryb6xhqq6cr9g19jmt4coyywewk1&file_id=f_2107558566977",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=qfe0ryb6xhqq6cr9g19jmt4coyywewk1&file_id=f_2107558566977",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=qfe0ryb6xhqq6cr9g19jmt4coyywewk1&file_id=f_2107558566977",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=qfe0ryb6xhqq6cr9g19jmt4coyywewk1&file_id=f_2107558566977"
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


















