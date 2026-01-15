import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=jokq1eys6ekgwcnluppjpsuj0speofgf&file_id=f_2103971178069",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=jokq1eys6ekgwcnluppjpsuj0speofgf&file_id=f_2103971178069",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=jokq1eys6ekgwcnluppjpsuj0speofgf&file_id=f_2103971178069",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=jokq1eys6ekgwcnluppjpsuj0speofgf&file_id=f_2103971178069",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=jokq1eys6ekgwcnluppjpsuj0speofgf&file_id=f_2103971178069",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=jokq1eys6ekgwcnluppjpsuj0speofgf&file_id=f_2103971178069",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ymtpar0gvh8fuvbc6op8p46q9zrkimvu&file_id=f_2103970209392",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ymtpar0gvh8fuvbc6op8p46q9zrkimvu&file_id=f_2103970209392",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ymtpar0gvh8fuvbc6op8p46q9zrkimvu&file_id=f_2103970209392",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ymtpar0gvh8fuvbc6op8p46q9zrkimvu&file_id=f_2103970209392",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ymtpar0gvh8fuvbc6op8p46q9zrkimvu&file_id=f_2103970209392",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=ymtpar0gvh8fuvbc6op8p46q9zrkimvu&file_id=f_2103970209392",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8fjr0wilwvn7byc0qxn3tzng7wuc67sb&file_id=f_2103982125452",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8fjr0wilwvn7byc0qxn3tzng7wuc67sb&file_id=f_2103982125452",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8fjr0wilwvn7byc0qxn3tzng7wuc67sb&file_id=f_2103982125452",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8fjr0wilwvn7byc0qxn3tzng7wuc67sb&file_id=f_2103982125452",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8fjr0wilwvn7byc0qxn3tzng7wuc67sb&file_id=f_2103982125452",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=8fjr0wilwvn7byc0qxn3tzng7wuc67sb&file_id=f_2103982125452",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=roo25b7958ntbd2ziy1yaxzwhhq52tpm&file_id=f_2103979456515",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=roo25b7958ntbd2ziy1yaxzwhhq52tpm&file_id=f_2103979456515",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=roo25b7958ntbd2ziy1yaxzwhhq52tpm&file_id=f_2103979456515",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=roo25b7958ntbd2ziy1yaxzwhhq52tpm&file_id=f_2103979456515",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=roo25b7958ntbd2ziy1yaxzwhhq52tpm&file_id=f_2103979456515",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=roo25b7958ntbd2ziy1yaxzwhhq52tpm&file_id=f_2103979456515"
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











