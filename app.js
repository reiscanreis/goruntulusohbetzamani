import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0moy59i7osb3vy1v72yetkukaff9z7wl&file_id=f_2105311110384",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0moy59i7osb3vy1v72yetkukaff9z7wl&file_id=f_2105311110384",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0moy59i7osb3vy1v72yetkukaff9z7wl&file_id=f_2105311110384",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0moy59i7osb3vy1v72yetkukaff9z7wl&file_id=f_2105311110384",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0moy59i7osb3vy1v72yetkukaff9z7wl&file_id=f_2105311110384",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=0moy59i7osb3vy1v72yetkukaff9z7wl&file_id=f_2105311110384",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vhy1y4hajzrrfp0anmf9e0hz2rvj6ceq&file_id=f_2105311355258",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vhy1y4hajzrrfp0anmf9e0hz2rvj6ceq&file_id=f_2105311355258",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vhy1y4hajzrrfp0anmf9e0hz2rvj6ceq&file_id=f_2105311355258",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vhy1y4hajzrrfp0anmf9e0hz2rvj6ceq&file_id=f_2105311355258",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vhy1y4hajzrrfp0anmf9e0hz2rvj6ceq&file_id=f_2105311355258",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=vhy1y4hajzrrfp0anmf9e0hz2rvj6ceq&file_id=f_2105311355258",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=m3w8wbci5tow03lspaecd2f5x37lm1di&file_id=f_2105312917986",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=m3w8wbci5tow03lspaecd2f5x37lm1di&file_id=f_2105312917986",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=m3w8wbci5tow03lspaecd2f5x37lm1di&file_id=f_2105312917986",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=m3w8wbci5tow03lspaecd2f5x37lm1di&file_id=f_2105312917986",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=m3w8wbci5tow03lspaecd2f5x37lm1di&file_id=f_2105312917986",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=m3w8wbci5tow03lspaecd2f5x37lm1di&file_id=f_2105312917986",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=kx8l3dx7c0hmpvru434fd5h0pnic7tqi&file_id=f_2105316095157",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=kx8l3dx7c0hmpvru434fd5h0pnic7tqi&file_id=f_2105316095157",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=kx8l3dx7c0hmpvru434fd5h0pnic7tqi&file_id=f_2105316095157",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=kx8l3dx7c0hmpvru434fd5h0pnic7tqi&file_id=f_2105316095157",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=kx8l3dx7c0hmpvru434fd5h0pnic7tqi&file_id=f_2105316095157",
"https://app.box.com/index.php?rm=box_download_shared_file&shared_name=kx8l3dx7c0hmpvru434fd5h0pnic7tqi&file_id=f_2105316095157"
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












