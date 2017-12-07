[{
    "group": "pmb",
    "dataGroup": [{
        "apiGroup": "PMB",
        "apiData": [{
            "url": "/v1/pmb",
            "side": "GET pmb",
            "name": "GetPmb",
            "method": "GET",
            "description": "Mengambil semua data PMB pada tahun ajaran aktif",
            "response": ""
        }]
    }, 
    {
        "apiGroup": "Pendaftar PMB",
        "apiData": [{
            "url": "/v1/pmb/pendaftar",
            "side": "GET Pendaftar PMB",
            "name": "GetPendaftar",
            "method": "GET",
            "description": "Mengambil data semua pendaftar pada tahun ajaran aktif",
            "permission": "adminPMB",
            "response": ""
        }, {
            "url": "/v1/pmb/pendaftar",
            "side": "POST Pendaftar PMB",
            "name": "PostPendaftar",
            "method": "POST",
            "description": "Menyimpan data pendaftar baru (public user)",
            "param": [{
                "name": "prodi",
                "type": "Number",
                "description": "Kode prodi"
                }, {
                    "name": "masuk",
                    "type": "Number",
                    "description": "Jenis masuk, 1 = Maba dan 2 = Transfer. <b>(Nilai yang Diijinkan : 1, 2)</b>"
                }, {
                    "name": "kelas",
                    "type": "Number",
                    "description": "Kelas pilihan, 1 = Pagi dan 2 = Sore. <b>(Nilai yang Diijinkan : 1, 2)</b>"
                }, {
                    "name": "nama",
                    "type": "String",
                    "description": "Nama pendaftar. <b>(Panjang Nilai : 3 sampai 30</b>)"
                }, {
                    "name": "ktp",
                    "type": "String",
                    "description": "Nomor ktp pendaftar. <b>(Nilai yang Diijinkan: \"([0-9.]+)\")</b>"
                }, {
                    "name": "agama",
                    "type": "Number",
                    "description": "Agama pendaftar, 1 = Maba dan 2 = Transfer. <b>(Nilai yang Diijinkan : 1, 2)</b>"
                }],
                "response": ""
        }]
    }, 
    {
        "apiGroup": "Pendaftar PMB Per Nomor",
        "apiData": [{
            "url": "/v1/pmb/pendaftar/nomor",
            "side": "GET Pendaftar PMB Per Nomor",
            "name": "GetPmbPendaftarPerNomor",
            "method": "GET",
            "description": "Mendapatkan data pendaftar sesuai nomor pendaftaran",
            "param": [{
                "name": "nomor",
                "type": "Number",
                "description": "Nomor pendaftaran"
            }],
            "response": ""
        }, {
            "url": "/v1/pmb/pendaftar/nomor",
            "side": "PUT Pendaftar PMB Per Nomor",
            "name": "PutPmbPendaftarPerNomor",
            "method": "PUT",
            "description": "Merubah data pendaftar sesuai nomor pendaftaran",
            "param": [{
                "name": "nomor",
                "type": "Number",
                "description": "Nomor pendaftaran"
            }],
            "response": ""
        }, {
            "url": "/v1/pmb/pendaftar/nomor",
            "side": "DELETE Pendaftar PMB Per Nomor",
            "name": "DeletePmbPendaftarPerNomor",
            "method": "DELETE",
            "description": "Menghapus data pendaftar sesuai nomor pendaftaran",
            "param": [{
                "name": "nomor",
                "type": "Number",
                "description": "Nomor pendaftaran"
            }],
            "response": ""
        }]
    }, {
        "apiGroup": "Gelombang Pendaftaran PMB",
        "apiData": [{
            "url": "/v1/pmb/gelombang",
            "side": "GET Gelombang Pendaftaran PMB",
            "name": "GetGelombangPMB",
            "method": "GET",
            "description": "Mendapatkan data semua gelombang pendaftaran PMB",
            "param": "",
            "response": "{\n                                                \"jsonapi\": {\n                                                    \"version\": \"1.0\"\n                                                },\n                                                \"meta\": {\n                                                    \"authors\": \"unira\",\n                                                    \"copyright\": \"(2017) Universitas Madura\"\n                                                },\n                                                \"data\": [\n                                                    {\n                                                        \"id\": 1,\n                                                        \"type\": \"gelombang\",\n                                                        \"attributes\": {\n                                                            \"thajaran\": 1,\n                                                            \"nomor\": 1,\n                                                            \"biaya\": 150000,\n                                                            \"mulai\": \"2017-05-08\",\n                                                            \"selesai\": \"2017-07-08\",\n                                                            \"ujian\": \"2017-07-11\",\n                                                            \"aktif\": false,\n                                                            \"lulus\": false,\n                                                            \"ketua\": \"196106131987031003\",\n                                                            \"hermulai\": \"2017-07-17\",\n                                                            \"herselesai\": \"2017-08-12\",\n                                                            \"nomorsurat\": \"150/PMB/VII/2017\",\n                                                            \"tandatangan\": \"img/pmb/tandatangan/160a205eb82a9dd0c86eb6648a60025b.jpg\"\n                                                        },\n                                                        \"relationship\": {\n                                                            \"thajaran\": {\n                                                                \"data\": {\n                                                                    \"id\": 1,\n                                                                    \"type\": \"thajaran\",\n                                                                    \"attributes\": {\n                                                                        \"nama\": 1718\n                                                                    }\n                                                                }\n                                                            },\n                                                            \"dosen\": {\n                                                                \"data\": {\n                                                                    \"id\": \"196106131987031003\",\n                                                                    \"type\": \"dosen\",\n                                                                    \"attributes\": {\n                                                                        \"nama\": \"IR. JOKO PURDIYANTO, MP.\"\n                                                                    }\n                                                                }\n                                                            }\n                                                        }\n                                                    }\n                                                ]\n                                            }"
        }, {
            "url": "/v1/pmb/gelombang",
            "side": "POST Gelombang",
            "name": "PostGelombang",
            "method": "POST",
            "description": "Menyimpan data gelombang baru",
            "permission": "adminPMB",
            "response": ""
        }, {
            "url": "/v1/pmb/gelombang/id",
            "side": "PUT Gelombang",
            "name": "PutGelombang",
            "method": "PUT",
            "description": "Mengubah data gelombang lama",
            "param": [{
                "name": "id",
                "type": "Number",
                "description": "Id Gelombang"
            }],
            "permission": "adminPMB",
            "response": ""
        }, {
            "url": "/v1/pmb/gelombang/id",
            "side": "DELETE Gelombang",
            "name": "DeleteGelombang",
            "method": "DELETE",
            "description": "Menghapus data gelombang PMB dengan ID :id",
            "param": [{
                "name": "id",
                "type": "Number",
                "description": "Id Gelombang"
            }],
            "permission": "adminPMB",
            "response": ""
        }]
    }, {
        "apiGroup": "Laporam PMB",
        "apiData": [{
            "url": "/v1/pmb/laporan",
            "side": "GET Laporan",
            "name": "GetLaporan",
            "method": "GET",
            "description": "Mendapatkan laporan pendaftaran PMB",
            "param": "",
            "response": "{\n                                                \"jsonapi\": {\n                                                    \"version\": \"1.0\"\n                                                },\n                                                \"meta\": {\n                                                    \"authors\": \"unira\",\n                                                    \"copyright\": \"(2017) Universitas Madura\"\n                                                },\n                                                \"data\": {\n                                                    \"id\": 1,\n                                                    \"type\": \"laporan pmb\",\n                                                    \"attributes\": {\n                                                        \"jumlahdaftar\": 838,\n                                                        \"jumlahher\": 718,\n                                                        \"kuliahpagi\": 647,\n                                                        \"kuliahsore\": 191,\n                                                        \"statusbaru\": 817,\n                                                        \"statustransfer\": 21\n                                                    }\n                                                },\n                                                \"included\": [\n                                                    {\n                                                        \"id\": 11,\n                                                        \"type\": \"prodi\",\n                                                        \"attributes\": {\n                                                            \"nama\": \"ILMU HUKUM\",\n                                                            \"daftarhariini\": \"0\",\n                                                            \"daftarkemarin\": \"0\",\n                                                            \"daftartahunini\": 125,\n                                                            \"daftartahunlalu\": 120,\n                                                            \"daftartahun2lalu\": 130,\n                                                            \"herhariini\": \"0\",\n                                                            \"herkemarin\": \"0\",\n                                                            \"hertahunini\": 101,\n                                                            \"hertahunlalu\": 120,\n                                                            \"hertahun2lalu\": 130\n                                                        }\n                                                    }\n                                                ]\n                                            }"
        }]
    }, {
        "apiGroup": "PDF Pendaftar",
        "apiData": [{
            "url": "/v1/pmb/pdf/nomor",
            "side": "GET PDF Pendaftar",
            "name": "GetPdfPendaftar",
            "method": "GET",
            "description": "Mendapatkan file PDF bukti pendaftaran",
            "param": [{
                "name": "nomor",
                "type": "Number",
                "description": "Nomor Pendaftaran"
            }],
            "response": ""
        }]
    }, {
        "apiGroup": "Kuitansi Pendaftar",
        "apiData": [{
            "url": "/v1/pmb/kuitansi/nomor",
            "side": "GET Kuitansi Pendaftar",
            "name": "GetKuitansiPendaftar",
            "method": "GET",
            "description": "Menghasilkan tampilan cetak kuitansi pendaftar",
            "permission": "adminPMB",
            "param": [{
                "name": "nomor",
                "type": "Number",
                "description": "Nomor Pendaftaran"
            }],
            "response": ""
        }]
    }, {
        "apiGroup": "Surat Kelulusan Pendaftar",
        "apiData": [{
            "url": "/v1/pmb/surat",
            "side": "GET Surat Kelulusan Pendaftar",
            "name": "GetSuratLulusPendaftar",
            "method": "GET",
            "description": "# (auth) Menghasilkan tampilan cetak surat kelulusan",
            "permission": "adminPMB",
            "response": ""
        }]
    }, {
        "apiGroup": "Surat Kelulusan Pendaftar Per Id",
        "apiData": [{
            "url": "/v1/pmb/surat/nomor",
            "side": "GET Surat Kelulusan Pendaftar Per Id",
            "name": "GetSuratLulusPendaftarPerId",
            "method": "GET",
            "description": "Menghasilkan tampilan cetak surat kelulusan dengan nomor pendaftaran tertentu",
            "permission": "adminPMB",
            "response": ""
        }]
    }, {
        "apiGroup": "KTM Sementara Id",
        "apiData": [{
            "url": "/v1/pmb/ktms/nomor",
            "side": "GET Sementara Id",
            "name": "GetKTMSPendaftarPerId",
            "method": "GET",
            "description": "Menghasilkan tampilan cetak KTM sementara",
            "permission": "adminPMB",
            "response": ""
        }]
    }]
}]