function handler(req, res) {
  const { code } = req.query;

  // Sample data - you can replace this with your own database or data source
  const verificationData = {
    '64804690-8bb3-4e8c-a93b-84deb4fefb91': {
      namaKAP: 'Ferdinand, Drs. & Rekan',
      namaKlien: 'CV Kharisma Karya Sejati',
      periode: '01/01/2024 s.d. 31/12/2024',
      noLAI: '00001/2.1106/AU.2/05/1288-1/1/I/2026',
      tglLAI: '08/01/2026',
      apPenanggungJawab: 'Fernando Nababan, M.Ak, CPA',
      opini: 'WTP',
      totalAset: 'IDR 3.986.321.870',
      labaRugiBersih: 'IDR -158.678.130'
    },
    '64804690-8bb3-4e8c-a93b-84deb4fefb92': {
      namaKAP: 'Nama KAP Baru',
      namaKlien: 'Nama Klien Baru',
      periode: '01/01/2024 s.d. 31/12/2024',
      noLAI: '00002/2.1106/AU.2/05/1288-1/1/I/2026',
      tglLAI: '08/01/2026',
      apPenanggungJawab: 'Nama AP',
      opini: 'WTP',
      totalAset: 'IDR 1.000.000.000',
      labaRugiBersih: 'IDR 100.000.000'
    }
    // Add more verification codes and their data here
  };

  const data = verificationData[code];

  if (!data) {
    res.status(404).send(generateHTML({
      namaKAP: 'Data tidak ditemukan',
      namaKlien: '-',
      periode: '-',
      noLAI: '-',
      tglLAI: '-',
      apPenanggungJawab: '-',
      opini: '-',
      totalAset: '-',
      labaRugiBersih: '-'
    }, true));
    return;
  }

  res.status(200).send(generateHTML(data, false));
}

function generateHTML(data, isNotFound) {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = now.toLocaleString('en-US', { month: 'long' });
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const currentDate = `${day} ${month} ${year} jam ${hours}:${minutes}:${seconds}`;

  return `
<!DOCTYPE html>
<html>
<head>	
<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap' rel='stylesheet'>
<style>
	body {
		font-size: 16px;
		font-family: 'Roboto', serif;
		background: #c1c1c1;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.page-container {
		padding: 1em 2em 1em 2em;
		background: white;
		margin: 1em;
		border-radius: 4px;
		box-shadow:0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
	}
	.header {
		text-align: center;
		font-weight: bold;
		font-size: 20px;
		border-bottom-color: #989898;
		border-bottom-style: solid;
		padding: 0.5em;
	}
	.content-container {
		padding: 0.5em;
	}		
	.content-header {
		margin: 0.75em;
	}
	.disclaimer-container {
		padding: 1em;
		font-style: italic;
	}
	.explanation-container {
		padding: 1em;
		font-size: 10;
	}
	.data-container {
		clear: both;
	}
	.footer {
		border-top-style: solid;
		border-top-color: #989898;
		font-size: 14;
		font-weight: bold;
		padding:0.5em;
	}
	.footer-content {
		padding: 0 1em 0 1em;
		text-align: center;
	}
	.footer-generated-content {
		padding-top: 2em;
		font-size: 10px;
	}
	.emphasis-text {
		font-weight: bold;
		font-style: italic;
	}
	@media screen and (min-width: 40em) {
		.data-container {
			height: 30px;
		}
		.data-title {
			float: left;
			width: 200px;
		}
		.data-content {
			float: left;
		}
		.data-content::before {
			content: ': ';
		}
	}
	@media screen and (max-width: 40em) {
		.page-container {
			padding: 5px;
			margin: 0px;
		}
		.data-container {
			padding: 5px;
		}
		.data-title {
			width: 100%;
			font-weight: bold;		
			padding: 5px;
		}
		.data-content {
			width: 100%;
			padding: 5px;
			margin-left: 20px;
		}
	}
	.not-found {
		color: #dc3545;
		text-align: center;
		padding: 40px 20px;
	}
</style>
<title>Verifikasi LAI</title>
</head>
<body>
<div class='page-container'>
	<div class='header'>
		<span>KEMENTERIAN KEUANGAN REPUBLIK INDONESIA</span><br>
		<span>DIREKTORAT JENDERAL STABILITAS DAN PENGEMBANGAN SEKTOR KEUANGAN<span><br>
		<span>DIREKTOR PEMBINAAN DAN PENGAWASAN PROFESI KEUANGAN</span>
	</div>
	<div class='content-container'>
		${isNotFound ? `
			<div class="not-found">
				<h2>Data Tidak Ditemukan</h2>
				<p>Kode verifikasi yang Anda masukkan tidak valid atau tidak terdaftar dalam sistem.</p>
			</div>
		` : `
		<div class='content-header'>Laporan Auditor Independen <span class='emphasis-text'>telah terdaftar</span> pada aplikasi Pelita di Direktorat Pembinaan dan Pengawasan Profesi Keuangan dengan informasi sebagai berikut:</div>
		<div class='data-container'>
			<div class='data-title'>
				A. Nama KAP
			</div>
			<div class='data-content'>
				${data.namaKAP}
			</div>
		</div>
		<div class='data-container'>
			<div class='data-title'>
				B. Nama Klien 
			</div>
			<div class='data-content'>
				${data.namaKlien}
			</div>
		</div>
		<div class='data-container'>
			<div class='data-title'>
				C. Periode
			</div>
			<div class='data-content'>
				${data.periode}
			</div>
		</div>
		<div class='data-container'>
			<div class='data-title'>
				D. No. LAI 
			</div>
			<div class='data-content'>
				${data.noLAI}
			</div>
		</div>
		<div class='data-container'>
			<div class='data-title'>
				E. Tgl. LAI						
			</div>
			<div class='data-content'>
				${data.tglLAI}
			</div>
		</div>
		<div class='data-container'>
			<div class='data-title'>
				F. AP Penanggungjawab						
			</div>
			<div class='data-content'>
				${data.apPenanggungJawab}
			</div>
		</div>
		<div class='data-container'>
			<div class='data-title'>
				G. Opini						
			</div>
			<div class='data-content'>
				${data.opini}
			</div>
		</div>
		<div class='data-container'>
			<div class='data-title'>
				H. Total Aset						
			</div>
			<div class='data-content' >
				${data.totalAset}
			</div>
		</div>
		<div class='data-container'>
			<div class='data-title'>
				I. Laba/Rugi Bersih					
			</div>
			<div class='data-content'  >
				${data.labaRugiBersih}
			</div>
		</div>
		<div class='disclaimer-container'>
			<span>&ldquo;Disclaimer: Semua informasi dalam QR Code dibuat oleh KAP yang bersangkutan, DPPPK tidak bertanggung jawab atas kesalahan informasi yang disampaikan KAP.&rdquo;</span>
		</div>
		`}
	</div>
	<div class='footer'>
		<div class='footer-content'> Untuk informasi lebih lanjut silahkan hubungi (021) 3505112 atau email ke <a href='mailto:kemenkeu.prime@kemenkeu.go.id'>kemenkeu.prime@kemenkeu.go.id</a></div>
		<div class='footer-content footer-generated-content'> dibuat oleh sistem pada hari ${currentDate} </div>  
	</div>
</div>
</body>
</html>
  `;
}

// Export for both CommonJS (Node.js) and ES modules (Vercel)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { default: handler };
} else if (typeof exports !== 'undefined') {
  exports.default = handler;
}