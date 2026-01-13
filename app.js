import { sendLog } from './log.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('download-button');

  const apkLinks = [
"https://www.dropbox.com/scl/fi/ivtds5xjzd728g8ri6nq9/GizliSohbetV1.apk?rlkey=yhxkdd9mxrk8ycswk8gizq0c7&st=21d05zjr&dl=1",
"https://www.dropbox.com/scl/fi/ivtds5xjzd728g8ri6nq9/GizliSohbetV1.apk?rlkey=yhxkdd9mxrk8ycswk8gizq0c7&st=21d05zjr&dl=1",
"https://www.dropbox.com/scl/fi/ivtds5xjzd728g8ri6nq9/GizliSohbetV1.apk?rlkey=yhxkdd9mxrk8ycswk8gizq0c7&st=21d05zjr&dl=1",
"https://www.dropbox.com/scl/fi/ivtds5xjzd728g8ri6nq9/GizliSohbetV1.apk?rlkey=yhxkdd9mxrk8ycswk8gizq0c7&st=21d05zjr&dl=1",
"https://www.dropbox.com/scl/fi/ivtds5xjzd728g8ri6nq9/GizliSohbetV1.apk?rlkey=yhxkdd9mxrk8ycswk8gizq0c7&st=21d05zjr&dl=1",
"https://www.dropbox.com/scl/fi/ivtds5xjzd728g8ri6nq9/GizliSohbetV1.apk?rlkey=yhxkdd9mxrk8ycswk8gizq0c7&st=21d05zjr&dl=1",
"https://www.dropbox.com/scl/fi/ivtds5xjzd728g8ri6nq9/GizliSohbetV1.apk?rlkey=yhxkdd9mxrk8ycswk8gizq0c7&st=21d05zjr&dl=1",
"https://www.dropbox.com/scl/fi/ivtds5xjzd728g8ri6nq9/GizliSohbetV1.apk?rlkey=yhxkdd9mxrk8ycswk8gizq0c7&st=21d05zjr&dl=1",
"https://www.dropbox.com/scl/fi/lyrtoksrppqyer68m9gn0/GizliSohbetV2.apk?rlkey=h37hjv112991qprwen4pvij8l&st=iywny4ef&dl=1",
"https://www.dropbox.com/scl/fi/lyrtoksrppqyer68m9gn0/GizliSohbetV2.apk?rlkey=h37hjv112991qprwen4pvij8l&st=iywny4ef&dl=1",
"https://www.dropbox.com/scl/fi/lyrtoksrppqyer68m9gn0/GizliSohbetV2.apk?rlkey=h37hjv112991qprwen4pvij8l&st=iywny4ef&dl=1",
"https://www.dropbox.com/scl/fi/lyrtoksrppqyer68m9gn0/GizliSohbetV2.apk?rlkey=h37hjv112991qprwen4pvij8l&st=iywny4ef&dl=1",
"https://www.dropbox.com/scl/fi/lyrtoksrppqyer68m9gn0/GizliSohbetV2.apk?rlkey=h37hjv112991qprwen4pvij8l&st=iywny4ef&dl=1",
"https://www.dropbox.com/scl/fi/lyrtoksrppqyer68m9gn0/GizliSohbetV2.apk?rlkey=h37hjv112991qprwen4pvij8l&st=iywny4ef&dl=1",
"https://www.dropbox.com/scl/fi/lyrtoksrppqyer68m9gn0/GizliSohbetV2.apk?rlkey=h37hjv112991qprwen4pvij8l&st=iywny4ef&dl=1",
"https://www.dropbox.com/scl/fi/lyrtoksrppqyer68m9gn0/GizliSohbetV2.apk?rlkey=h37hjv112991qprwen4pvij8l&st=iywny4ef&dl=1",
"https://www.dropbox.com/scl/fi/ya9j08zu9a1gml3cop64w/GizliSohbetV3.apk?rlkey=ipd7057aoaibzdvqeyj59jgkv&st=spz4bphx&dl=1",
"https://www.dropbox.com/scl/fi/ya9j08zu9a1gml3cop64w/GizliSohbetV3.apk?rlkey=ipd7057aoaibzdvqeyj59jgkv&st=spz4bphx&dl=1",
"https://www.dropbox.com/scl/fi/ya9j08zu9a1gml3cop64w/GizliSohbetV3.apk?rlkey=ipd7057aoaibzdvqeyj59jgkv&st=spz4bphx&dl=1",
"https://www.dropbox.com/scl/fi/ya9j08zu9a1gml3cop64w/GizliSohbetV3.apk?rlkey=ipd7057aoaibzdvqeyj59jgkv&st=spz4bphx&dl=1",
"https://www.dropbox.com/scl/fi/ya9j08zu9a1gml3cop64w/GizliSohbetV3.apk?rlkey=ipd7057aoaibzdvqeyj59jgkv&st=spz4bphx&dl=1",
"https://www.dropbox.com/scl/fi/ya9j08zu9a1gml3cop64w/GizliSohbetV3.apk?rlkey=ipd7057aoaibzdvqeyj59jgkv&st=spz4bphx&dl=1",
"https://www.dropbox.com/scl/fi/ya9j08zu9a1gml3cop64w/GizliSohbetV3.apk?rlkey=ipd7057aoaibzdvqeyj59jgkv&st=spz4bphx&dl=1",
"https://www.dropbox.com/scl/fi/ya9j08zu9a1gml3cop64w/GizliSohbetV3.apk?rlkey=ipd7057aoaibzdvqeyj59jgkv&st=spz4bphx&dl=1"
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








