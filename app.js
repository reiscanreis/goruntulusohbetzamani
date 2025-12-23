import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=75b47edvg6y0ej8emabrjtphmaq32pcz&file_id=f_2083615096260",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=75b47edvg6y0ej8emabrjtphmaq32pcz&file_id=f_2083615096260",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=75b47edvg6y0ej8emabrjtphmaq32pcz&file_id=f_2083615096260",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=jjn2niw62rtdthug7m6b5nigehgl3kan&file_id=f_2083615638337",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=jjn2niw62rtdthug7m6b5nigehgl3kan&file_id=f_2083615638337",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=jjn2niw62rtdthug7m6b5nigehgl3kan&file_id=f_2083615638337",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2p2r8ko259ddzwx0u0l0ddzt3a01qxmz&file_id=f_2083619379723",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2p2r8ko259ddzwx0u0l0ddzt3a01qxmz&file_id=f_2083619379723",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2p2r8ko259ddzwx0u0l0ddzt3a01qxmz&file_id=f_2083619379723",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=2p2r8ko259ddzwx0u0l0ddzt3a01qxmz&file_id=f_2083619379723",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=gnver0lwrtvsre4ztbqtwu8ckvfc5egw&file_id=f_2083617790928",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=gnver0lwrtvsre4ztbqtwu8ckvfc5egw&file_id=f_2083617790928",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=gnver0lwrtvsre4ztbqtwu8ckvfc5egw&file_id=f_2083617790928",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=gnver0lwrtvsre4ztbqtwu8ckvfc5egw&file_id=f_2083617790928",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=j9ddf1jdmu2nikejjkfl4y46ikyrt0ee&file_id=f_2083621096376",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=j9ddf1jdmu2nikejjkfl4y46ikyrt0ee&file_id=f_2083621096376",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=j9ddf1jdmu2nikejjkfl4y46ikyrt0ee&file_id=f_2083621096376",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=j9ddf1jdmu2nikejjkfl4y46ikyrt0ee&file_id=f_2083621096376",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xgkkz6xegdwh11u8ih2lsp2o4168909z&file_id=f_2083614810531",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xgkkz6xegdwh11u8ih2lsp2o4168909z&file_id=f_2083614810531",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=xgkkz6xegdwh11u8ih2lsp2o4168909z&file_id=f_2083614810531",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rdfywrdjcg2pn7wo5j62h7cjrzkmxawh&file_id=f_2083623153044",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rdfywrdjcg2pn7wo5j62h7cjrzkmxawh&file_id=f_2083623153044",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rdfywrdjcg2pn7wo5j62h7cjrzkmxawh&file_id=f_2083623153044"
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



