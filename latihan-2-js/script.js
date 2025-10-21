function konversiNilai(nilai) {
      if (nilai >= 85 && nilai <= 100) return "A";
      else if (nilai > 80 && nilai < 84.9) return "A-";
      else if (nilai > 75 && nilai < 79.9) return "B+";
      else if (nilai > 70 && nilai < 74.9) return "B";
      else if (nilai > 65 && nilai < 69.9) return "B-";
      else if (nilai > 60 && nilai < 64.9) return "C+";
      else if (nilai > 55 && nilai < 59.9) return "C";
      else if (nilai > 40 && nilai < 54.9) return "D";
      else if (nilai >= 0 && nilai < 39.9) return "E";
      else return "Nilai tidak valid";
    }

    function tampilkanLog() {
      const namaDepan = document.getElementById("namaDepan").value;
      const namaBelakang = document.getElementById("namaBelakang").value;
      const nilaiAngka = parseFloat(document.getElementById("nilaiAngka").value);

      const namaLengkap = namaDepan + " " + namaBelakang;
      const nilaiHuruf = konversiNilai(nilaiAngka);

      const log = 
        `Nama Lengkap : ${namaLengkap}\n` +
        `Nilai Angka  : ${nilaiAngka}\n` +
        `Nilai Huruf  : ${nilaiHuruf}`;

      document.getElementById("outputLog").innerText = log;
    }