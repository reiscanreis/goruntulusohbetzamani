import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=japkdd9v58tgexzg1wqzm5v0nvq8ewpf&file_id=f_2083850017981",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=japkdd9v58tgexzg1wqzm5v0nvq8ewpf&file_id=f_2083850017981",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=japkdd9v58tgexzg1wqzm5v0nvq8ewpf&file_id=f_2083850017981",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rwb322hd97yps2yw90blkwerwx6j04y8&file_id=f_2083850343681",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rwb322hd97yps2yw90blkwerwx6j04y8&file_id=f_2083850343681",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rwb322hd97yps2yw90blkwerwx6j04y8&file_id=f_2083850343681",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=7guqetx6129z2hblixg5giwtbc65x0ka&file_id=f_2083836422044",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=7guqetx6129z2hblixg5giwtbc65x0ka&file_id=f_2083836422044",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=7guqetx6129z2hblixg5giwtbc65x0ka&file_id=f_2083836422044",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=7qzz3pru7ow01su1w8v73t8du0ni2yi7&file_id=f_2083852228699",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=7qzz3pru7ow01su1w8v73t8du0ni2yi7&file_id=f_2083852228699",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=7qzz3pru7ow01su1w8v73t8du0ni2yi7&file_id=f_2083852228699",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=p7w8jd5f5t55ncjzqy93pr2y8om5pgtk&file_id=f_2083851726734",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=p7w8jd5f5t55ncjzqy93pr2y8om5pgtk&file_id=f_2083851726734",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=p7w8jd5f5t55ncjzqy93pr2y8om5pgtk&file_id=f_2083851726734",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=02z8yqa3ehtiovx4jl8unyh0t1emz1my&file_id=f_2083852022012",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=02z8yqa3ehtiovx4jl8unyh0t1emz1my&file_id=f_2083852022012",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=02z8yqa3ehtiovx4jl8unyh0t1emz1my&file_id=f_2083852022012",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rxz4fyd56m2aa4cmrabt1ivgp28su6ol&file_id=f_2083844509977",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rxz4fyd56m2aa4cmrabt1ivgp28su6ol&file_id=f_2083844509977",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=rxz4fyd56m2aa4cmrabt1ivgp28su6ol&file_id=f_2083844509977",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=94oqz2s19phkuf62wgpa9t4dukdapv8a&file_id=f_2083847819904",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=94oqz2s19phkuf62wgpa9t4dukdapv8a&file_id=f_2083847819904",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=94oqz2s19phkuf62wgpa9t4dukdapv8a&file_id=f_2083847819904"
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




