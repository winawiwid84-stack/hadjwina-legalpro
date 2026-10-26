import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'oss-rba-pt-cv',
    category: 'usaha',
    categoryLabel: 'Perizinan Usaha',
    title: 'Perizinan Usaha (OSS RBA & Legalitas PT/CV)',
    subtitle: 'NIB, Pendirian PT/CV, Kemenkumham, SIUP, & KBLI',
    description: 'Pengurusan legalitas usaha terpadu berbasis risiko (OSS RBA) sesuai Peraturan Pemerintah No. 5 Tahun 2021. Kami membantu mulai dari penelusuran nama perusahaan, pembuatan akta notaris, pengesahan Kemenkumham, penerbitan Nomor Induk Berusaha (NIB), hingga sertifikat standar terverifikasi.',
    iconName: 'Building2',
    badge: 'Paling Banyak Dipilih',
    estimatedTime: '3 - 7 Hari Kerja',
    estimatedCost: 'Mulai Rp 1.500.000',
    coverage: [
      'Penerbitan Nomor Induk Berusaha (NIB) Berbasis Risiko',
      'Akta Pendirian Notaris & SK Pengesahan Kemenkumham',
      'Penetapan & Penyelarasan KBLI 2020 Sesuai Bidang Usaha',
      'NPWP Badan Usaha & Surat Keterangan Terdaftar (SKT)',
      'Aktivasi Hak Akses OSS RBA & Akun BPJS Ketenagakerjaan/Kesehatan'
    ],
    requirements: [
      'KTP & NPWP Pendiri / Pemegang Saham (Minimal 2 orang untuk PT Biasa, 1 orang untuk PT Perorangan)',
      'Rencana Nama Perusahaan (Minimal 3 kata dalam bahasa Indonesia)',
      'Alamat Domisili Usaha Lengkap (Termasuk bukti sewa atau sertifikat hak milik)',
      'Susunan Direksi & Komisaris serta persentase kepemilikan modal',
      'Bidang usaha yang akan dijalankan sesuai KBLI 5 digit'
    ],
    workflowSummary: [
      'Pengecekan ketersediaan nama PT/CV ke Kemenkumham',
      'Penyusunan draft akta & penandatanganan akta notaris',
      'Pengesahan SK Kemenkumham secara online',
      'Pendaftaran NPWP Badan & Konfirmasi Status Wajib Pajak (KSWP)',
      'Submit OSS RBA hingga NIB & Sertifikat Standar terbit'
    ],
    authorities: ['Kemenkumham RI', 'Kementerian Investasi / BKPM', 'Ditjen Pajak RI']
  },
  {
    id: 'pbg-slf-konstruksi',
    category: 'pbg',
    categoryLabel: 'Izin Bangunan',
    title: 'Izin Bangunan & PBG Gedung (Eks-IMB)',
    subtitle: 'Persetujuan Bangunan Gedung, Sertifikat Laik Fungsi (SLF) & KRK',
    description: 'Pengurusan Persetujuan Bangunan Gedung (PBG) resmi pengganti IMB lama sesuai UU Cipta Kerja dan PP No. 16/2021 melalui portal SIMBG PUPR. Meliputi pengurusan Keterangan Rencana Kota (KRK), dokumen gambar teknis arsitektur, perhitungan struktur, MEP (Mekanikal Elektrikal Plumbing), hingga Sertifikat Laik Fungsi (SLF).',
    iconName: 'Hammer',
    badge: 'Proses SIMBG PUPR',
    estimatedTime: '14 - 30 Hari Kerja',
    estimatedCost: 'Mulai Rp 5.000.000',
    coverage: [
      'Persetujuan Bangunan Gedung (PBG) Bangunan Baru & Renovasi',
      'Sertifikat Laik Fungsi (SLF) Bangunan Komersial & Kantor',
      'Pengurusan KRK / Informasi Tata Ruang (ITR) Kota/Kabupaten',
      'Pendampingan Sidang Teknis TPA (Tim Profesi Ahli) PUPR',
      'Penyusunan Gambar Teknis As-Built Drawing & Perhitungan Struktur'
    ],
    requirements: [
      'Sertifikat Kepemilikan Tanah (SHM / SHGB) & PBB tahun berjalan',
      'KTP & NPWP Pemilik Bangunan / Badan Usaha',
      'KRK (Keterangan Rencana Kota) dari Dinas Tata Ruang / Cipta Karya',
      'Gambar Teknis Arsitektur, Struktur & Utilitas (MEP) bersertifikat IPTB/SKA',
      'Kajian teknis kelayakan fungsi untuk perpanjangan SLF'
    ],
    workflowSummary: [
      'Survey lokasi & review dokumen legalitas kepemilikan tanah',
      'Penyusunan gambar teknis & perhitungan konstruksi bangunan',
      'Registrasi & upload berkas ke portal SIMBG Kementerian PUPR',
      'Pendampingan konsultasi teknis bersama Tim Penilai Teknis (TPT/TPA)',
      'Penerbitan Surat Ketetapan Retribusi Daerah (SKRD) & Penerbitan PBG resmi'
    ],
    authorities: ['Kementerian PUPR (SIMBG)', 'Dinas Cipta Karya & Tata Ruang', 'DPMPTSP Daerah']
  },
  {
    id: 'hotel-restoran-komersial',
    category: 'komersial',
    categoryLabel: 'Komersial & Pariwisata',
    title: 'Gedung Kantor, Hotel, Restoran & Komersial',
    subtitle: 'Izin Pariwisata, Andalalin, UKL-UPL, Sertifikat Higiene, & Reklame',
    description: 'Solusi perizinan lengkap dan menyeluruh bagi pemilik gedung perkantoran, hotel bintang, cafe, restoran waralaba, mall, serta pusat perbelanjaan. Memastikan seluruh regulasi keselamatan, lingkungan hidup, izin operasional pariwisata, dan perpajakan daerah terpenuhi 100%.',
    iconName: 'Hotel',
    badge: 'Solusi Lengkap Komersial',
    estimatedTime: '10 - 25 Hari Kerja',
    estimatedCost: 'Mulai Rp 3.500.000',
    coverage: [
      'Tanda Daftar Usaha Pariwisata (TDUP) / Izin Usaha Pariwisata OSS',
      'Analisis Dampak Lalu Lintas (Andalalin) Gedung Komersial',
      'Dokumen Lingkungan Hidup (SPPL / UKL-UPL / Persetujuan Teknis Limbah)',
      'Sertifikat Laik Higiene Sanitasi (SLHS) Dinkes untuk Makanan & Minuman',
      'Izin Penyelenggaraan Reklame, Billboards & Pajak Hiburan Daerah'
    ],
    requirements: [
      'NIB & Akta Legalitas Perusahaan',
      'Bukti Kepemilikan atau Sewa Tempat Usaha minimal 1-3 tahun',
      'Gambar Denah Layout Gedung / Ruang Makan / Dapur / Fasilitas Umum',
      'Surat pernyataan pengelolaan lingkungan & pengolahan limbah (IPAL/Grease Trap)',
      'Sertifikasi pelatihan higiene/sanitasi bagi pengelola restoran'
    ],
    workflowSummary: [
      'Audit kesiapan teknis lokasi & fasilitas operasional usaha',
      'Penyusunan dokumen lingkungan (SPPL/UKL-UPL) & Andalalin ke Dishub',
      'Uji kelayakan laboratorium air bersih & uji sampel sanitasi Dinkes',
      'Verifikasi lapangan bersama dinas pariwisata dan PTSP',
      'Penerbitan Izin Komersial Operasional terverifikasi'
    ],
    authorities: ['Dinas Pariwisata & Kebudayaan', 'Dinas Kesehatan', 'Dinas Lingkungan Hidup', 'Dinas Perhubungan']
  },
  {
    id: 'spbu-spbe-migas',
    category: 'spbu',
    categoryLabel: 'Izin Khusus SPBU & SPBE',
    title: 'Izin Khusus SPBU, SPBE, Agen LPG & Sektor Migas',
    subtitle: 'Rekomendasi ESDM, Ditjen Migas, Pertamina, K3LL, & Damkar',
    description: 'Jasa konsultasi perizinan spesialis untuk pembangunan dan operasional Stasiun Pengisian Bahan Bakar Umum (SPBU), SPBE (LPG 3kg & Non-Subsidi), pangkalan gas, depot tangki BBM industri, hingga perizinan transportir B3. Ditangani oleh tim konsultan senior berpengalaman menangani regulasi BUMN Pertamina dan ESDM.',
    iconName: 'Fuel',
    badge: 'Spesialis Migas Terakreditasi',
    estimatedTime: '30 - 60 Hari Kerja',
    estimatedCost: 'Mulai Rp 15.000.000',
    coverage: [
      'Surat Izin Usaha Niaga Umum / Terbatas Bahan Bakar Minyak & Gas',
      'Rekomendasi Teknis Kementerian ESDM & Ditjen Migas RI',
      'Proses Approval & Verifikasi Lokasi PT Pertamina Patra Niaga',
      'Sertifikasi K3LL & Rekomendasi Proteksi Kebakaran Damkar',
      'Izin Pengangkutan B3 & Tera Metrologi Legal Dispenser Tangki'
    ],
    requirements: [
      'Sertifikat Lahan Lokasi (Luas minimal sesuai kualifikasi SPBU/SPBE Pertamina)',
      'Peta Situasi Lahan, Akses Jalan Masuk-Keluar, & Uji Tanah (Soil Test)',
      'Akta Pendirian PT dengan KBLI khusus Perdagangan Eceran BBM / Gas',
      'Surat Dukungan / LOI dari Pertamina Patra Niaga',
      'Dokumen AMDAL / UKL-UPL khusus stasiun bahan bakar'
    ],
    workflowSummary: [
      'Survey kelayakan jalur jalan, radius aman, dan kepatuhan zonasi daerah',
      'Pengurusan dokumen teknis lingkungan & mitigasi kebakaran Damkar',
      'Pengajuan berkas izin ke Ditjen Migas & verifikasi teknis Pertamina',
      'Kalibrasi & pengujian instalasi pipa, tangki pendam, dispenser tera metrologi',
      'Penerbitan SK Operasional Resmi SPBU/SPBE'
    ],
    authorities: ['Kementerian ESDM & Ditjen Migas', 'PT Pertamina Patra Niaga', 'Dinas Pemadam Kebakaran', 'Badan Pengawas Perdagangan & Metrologi']
  },
  {
    id: 'perpanjangan-dokumen-kilat',
    category: 'perpanjangan',
    categoryLabel: 'Perpanjangan Kilat',
    title: 'Perpanjangan Legalitas & Dokumen Kedaluwarsa',
    subtitle: 'Layanan Cepat Pembaruan Izin Usaha, SLF, Izin Lingkungan, & Sertifikasi',
    description: 'Solusi kilat bagi perusahaan yang izin usahanya mendekati tenggat kadaluwarsa atau sudah tidak berlaku. Kami mencegah sanksi administratif, penyegelan, atau denda hukum dengan memperbarui seluruh izin secara terstruktur dan terjamin keabsahannya.',
    iconName: 'RotateCw',
    badge: 'Layanan Express Prioritas',
    estimatedTime: '2 - 5 Hari Kerja',
    estimatedCost: 'Mulai Rp 1.000.000',
    coverage: [
      'Perpanjangan Sertifikat Laik Fungsi (SLF) Gedung',
      'Pembaruan Sertifikat Standar & Izin Operasional OSS RBA',
      'Perpanjangan Izin Edar BPOM & Dinkes (P-IRT / MD)',
      'Perpanjangan Izin Pengelolaan Limbah B3 & TPS Limbah',
      'Migrasi Dokumen Legalitas Konvensional Lama ke Sistem Digital Nasional'
    ],
    requirements: [
      'Salinan dokumen izin lama yang akan diperpanjang',
      'Akta pendirian dan perubahan terakhir (jika ada)',
      'Laporan kegiatan berkala (LKPM OSS) untuk izin industri/komersial',
      'Bukti pembayaran PBB & pajak daerah tahun terakhir',
      'Dokumen identitas penanggung jawab perusahaan (KTP & NPWP)'
    ],
    workflowSummary: [
      'Pemeriksaan masa berlaku & rekam jejak kepatuhan izin lama',
      'Pengumpulan berkas pembaharuan & penyesuaian regulasi teranyar',
      'Pendaftaran ke portal dinas / kementerian terkait',
      'Follow-up harian prioritas hingga SK perpanjangan resmi terbit',
      'Penyerahan dokumen asli serta sertifikat digital ber-QR code'
    ],
    authorities: ['OSS BKPM', 'DPMPTSP Provinsi/Kabupaten/Kota', 'Kementerian Terkait']
  },
  {
    id: 'konsultasi-hukum-pajak',
    category: 'hukum',
    categoryLabel: 'Hukum & Pajak',
    title: 'Konsultasi Hukum Korporasi & Kepatuhan Pajak Badan',
    subtitle: 'Legal Due Diligence, Kontrak Bisnis, NPWP Badan, & Pendampingan Audit',
    description: 'Layanan konsultasi yuridis dan kepatuhan administratif perusahaan untuk menjaga kelangsungan bisnis Anda dari risiko sengketa perizinan, wanprestasi kontrak bisnis, serta sanksi denda perpajakan. Melayani audit legalitas (legal due diligence) sebelum merger, akuisisi, atau ekspansi cabang.',
    iconName: 'Scale',
    badge: 'Legal Due Diligence',
    estimatedTime: 'Fleksibel / Sesuai Kebutuhan',
    estimatedCost: 'Mulai Rp 2.000.000',
    coverage: [
      'Legal Due Diligence (Audit Menyeluruh Kepatuhan Hukum Perusahaan)',
      'Penyusunan & Review Kontrak Kerjasama Bisnis (MoU / SPK)',
      'Pendaftaran & Pembenahan Administrasi NPWP Badan serta PKP',
      'Pelaporan LKPM (Laporan Kegiatan Penanaman Modal) Berkala BKPM',
      'Pendampingan Mediasi Sengketa Perizinan & Ketenagakerjaan'
    ],
    requirements: [
      'Dokumen profil perusahaan & susunan pemegang saham',
      'Salinan izin operasional yang sedang berjalan',
      'Draft perjanjian atau perkara legal yang ingin dikonsultasikan',
      'Laporan keuangan atau berkas perpajakan terkait'
    ],
    workflowSummary: [
      'Sesi konsultasi privat dengan konsultan hukum senior Hadjwina Legalpro',
      'Analisis resiko hukum, regulasi sektoral, & celah kepatuhan administratif',
      'Penyusunan Legal Opinion resmi beserta rekomendasi langkah mitigasi',
      'Pendampingan implementasi perbaikan dokumen hingga tuntas'
    ],
    authorities: ['Pengadilan Negeri / Arbitrase', 'Direktorat Jenderal Pajak', 'Kementerian Ketenagakerjaan']
  }
];

export const ESTIMATOR_CONFIG = {
  usaha: {
    baru: {
      title: 'Perizinan Usaha (NIB & OSS RBA) - Baru',
      desc: 'Pengurusan NIB, Akta Notaris PT/CV, KBLI 2020, NPWP Badan & SK Kemenkumham.',
      time: '3 - 7 Hari Kerja',
      cost: 'Mulai Rp 1.500.000',
      included: ['NIB OSS RBA Terbit', 'SK Kemenkumham Asli', 'Akta Notaris Resmi', 'NPWP Badan & SKT Pajak']
    },
    perpanjangan: {
      title: 'Perpanjangan Perizinan Usaha',
      desc: 'Pembaruan masa berlaku dokumen usaha, verifikasi sertifikat standar, dan pelaporan LKPM.',
      time: '2 - 5 Hari Kerja',
      cost: 'Mulai Rp 1.000.000',
      included: ['Update Akun OSS RBA', 'Pembaruan Sertifikat Standar', 'Pelaporan LKPM Terkini']
    },
    perubahan: {
      title: 'Perubahan Data Usaha / Akta Perusahaan',
      desc: 'Perubahan alamat kantor, penambahan pemegang saham, ganti direksi, atau penambahan KBLI.',
      time: '5 - 10 Hari Kerja',
      cost: 'Mulai Rp 2.500.000',
      included: ['Akta Perubahan Notaris', 'Persetujuan Kemenkumham Baru', 'Update Data NIB OSS']
    }
  },
  pbg: {
    baru: {
      title: 'Izin Bangunan & PBG Gedung - Baru',
      desc: 'Persetujuan Bangunan Gedung (pengganti IMB) untuk ruko, kantor, pabrik, atau gudang komersial.',
      time: '14 - 30 Hari Kerja',
      cost: 'Mulai Rp 5.000.000',
      included: ['Pengurusan KRK / Tata Ruang', 'Pendampingan Sidang TPA PUPR', 'Dokumen Gambar Teknis & Struktur', 'SK PBG Resmi Terbit']
    },
    perpanjangan: {
      title: 'Penerbitan / Perpanjangan Sertifikat Laik Fungsi (SLF)',
      desc: 'Pemeriksaan kelayakan fungsi keselamatan, kesehatan, dan kenyamanan bangunan gedung.',
      time: '10 - 20 Hari Kerja',
      cost: 'Mulai Rp 4.000.000',
      included: ['Inspeksi Visual & Struktur', 'Uji Proteksi Kebakaran', 'Penerbitan Sertifikat SLF PUPR']
    },
    perubahan: {
      title: 'Perubahan Desain & Renovasi PBG Gedung',
      desc: 'Penyesuaian dokumen PBG akibat perluasan lantai, renovasi fasad, atau alih fungsi bangunan.',
      time: '14 - 25 Hari Kerja',
      cost: 'Mulai Rp 4.500.000',
      included: ['Revisi Gambar Arsitektur', 'Analisis Beban Tambahan', 'Pembaruan SIMBG PUPR']
    }
  },
  komersial: {
    baru: {
      title: 'Izin Gedung Kantor, Hotel & Restoran - Baru',
      desc: 'Pengurusan izin operasional pariwisata, sertifikasi hotel, kelayakan restoran, & Andalalin.',
      time: '10 - 25 Hari Kerja',
      cost: 'Mulai Rp 3.500.000',
      included: ['Izin Usaha Pariwisata (TDUP)', 'Kajian Lingkungan (SPPL/UKL)', 'Sertifikat Laik Higiene Sanitasi', 'Rekomendasi Dishub / Damkar']
    },
    perpanjangan: {
      title: 'Perpanjangan Izin Operasional Hotel & Restoran',
      desc: 'Pembaruan sertifikasi uji sanitasi air, izin reklame berkala, dan evaluasi kepatuhan pariwisata.',
      time: '5 - 12 Hari Kerja',
      cost: 'Mulai Rp 2.000.000',
      included: ['Uji Lab Higiene Terbaru', 'Perpanjangan Izin Reklame', 'Sertifikat Kepatuhan Terbarui']
    },
    perubahan: {
      title: 'Perubahan Klasifikasi / Kepemilikan Bisnis Pariwisata',
      desc: 'Upgrade bintang hotel, perluasan kapasitas restoran, atau pengalihan manajemen operasional.',
      time: '7 - 15 Hari Kerja',
      cost: 'Mulai Rp 3.000.000',
      included: ['Re-audit Klasifikasi Bintang', 'Penyesuaian NIB & Sistem OSS', 'Pembaruan NPWPD']
    }
  },
  spbu: {
    baru: {
      title: 'Izin Khusus Pendirian SPBU / SPBE Baru',
      desc: 'Pengurusan rekomendasi ESDM, Ditjen Migas, persetujuan lokasi Pertamina, dan K3LL industri.',
      time: '30 - 60 Hari Kerja',
      cost: 'Mulai Rp 15.000.000',
      included: ['Rekomendasi Ditjen Migas', 'Approval Pertamina Patra Niaga', 'Kajian K3LL & Damkar Industri', 'Uji Tera Metrologi Dispenser']
    },
    perpanjangan: {
      title: 'Perpanjangan Izin Operasional SPBU / SPBE',
      desc: 'Pembaruan izin berkala keselamatan tangki pendam, dispenser tera, dan evaluasi operasional.',
      time: '14 - 30 Hari Kerja',
      cost: 'Mulai Rp 7.500.000',
      included: ['Inspeksi Ulang Tangki BBM/LPG', 'Perpanjangan SK Operasional', 'Uji Tera Ulang Resmi']
    },
    perubahan: {
      title: 'Perubahan Kapasitas / Penambahan Dispenser SPBU',
      desc: 'Penambahan nozel/dispenser BBM non-subsidi, pengalihan PT pengelola, atau renovasi layout kanopi.',
      time: '20 - 40 Hari Kerja',
      cost: 'Mulai Rp 10.000.000',
      included: ['Kajian Teknis Tambahan', 'Surat Persetujuan Pertamina Baru', 'Update Dokumen Keselamatan Kerja']
    }
  },
  perpanjangan: {
    baru: {
      title: 'Pengurusan Dokumen Pendukung Baru',
      desc: 'Penerbitan dokumen legalitas pelengkap seperti KSWP, Izin Reklame, atau Sertifikat ISO.',
      time: '3 - 7 Hari Kerja',
      cost: 'Mulai Rp 1.200.000',
      included: ['Pengurusan Berkas Cepat', 'Pengecekan Keabsahan Sistem', 'Dokumen Sah Ber-QR Code']
    },
    perpanjangan: {
      title: 'Perpanjangan Kilat Dokumen Legalitas Kedaluwarsa',
      desc: 'Layanan express perpanjangan izin yang mendesak untuk tender atau kelangsungan operasional.',
      time: '2 - 5 Hari Kerja',
      cost: 'Mulai Rp 1.000.000',
      included: ['Fast-track Processing', 'Pendampingan Langsung ke Dinas', 'Garansi Dokumen Resmi']
    },
    perubahan: {
      title: 'Perubahan Legalitas & Pembaruan Data Usaha',
      desc: 'Sinkronisasi menyeluruh antara Akta, Kemenkumham, NPWP, dan akun OSS RBA.',
      time: '5 - 10 Hari Kerja',
      cost: 'Mulai Rp 2.000.000',
      included: ['Audit Selisih Data', 'Penyelarasan Seluruh Database', 'Penerbitan Lembar Pengesahan']
    }
  }
};
