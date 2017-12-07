[{
    "group": "Main",
    "dataGroup": [{
        "apiGroup": "Fakultas",
        "apiData": [{
            "url": "/v1/thajaran",
            "side": "GET Tahun Akademik",
            "name": "GetThAjaran",
            "method": "GET",
            "description": "Mendapatkan data semua tahun akademik",
            "response": "{\n                                                \"jsonapi\": {\n                                                    \"version\": \"1.0\"\n                                                },\n                                                \"meta\": {\n                                                    \"authors\": \"unira\",\n                                                    \"copyright\": \"(2017) Universitas Madura\",\n                                                    \"count\": 25,\n                                                    \"page\": 1,\n                                                    \"limit\": 1\n                                                },\n                                                \"data\": [\n                                                    {\n                                                        \"id\": 1,\n                                                        \"type\": \"thajaran\",\n                                                        \"attributes\": {\n                                                            \"nama\": 1718,\n                                                            \"semester\": 1\n                                                        }\n                                                    }\n                                                ],\n                                                \"links\": {\n                                                    \"self\": \"/v1/thajaran?limit=1&page=1\",\n                                                    \"first\": \"/v1/thajaran?limit=1&page=1\",\n                                                    \"next\": \"/v1/thajaran?limit=1&page=2\",\n                                                    \"last\": \"/v1/thajaran?limit=1&page=25\"\n                                                }\n                                            }"
        }, {
            "url": "/v1/thajaran",
            "side": "POST Tahun Akademik",
            "name": "PostThAjaran",
            "method": "POST",
            "description": "Menambah data tahun akademik",
            "response": ""
        }, {
            "url": "/v1/thajaran/id",
            "side": "PUT Tahun Akademik",
            "name": "PutThAjaran",
            "method": "PUT",
            "description": "Mengubah data tahun akademik dengan id",
            "param": [{
                "name": "id",
                "type": "Number",
                "description": "Id tahun akademik"
            }],
            "response": ""
        }, {
            "url": "/v1/thajaran/id",
            "side": "DELETE Tahun Akademik",
            "name": "DeleteThAjaran",
            "method": "DELETE",
            "description": "Menghapus data tahun akademik dengan id",
            "param": [{
                "name": "id",
                "type": "Number",
                "description": "Id tahun akademik"
            }],
            "response": ""
        }]
    }, {
        "apiGroup": "Rumpun Mata Kuliah",
        "apiData": [{
            "url": "/v1/rmk",
            "side": "GET Rumpun Mata Kuliah",
            "name": "GetRmk",
            "method": "GET",
            "description": "Mendapatkan data rumpun mata kuliah",
            "response": "{\n                                                \"jsonapi\": {\n                                                    \"version\": \"1.0\"\n                                                },\n                                                \"meta\": {\n                                                    \"authors\": \"unira\",\n                                                    \"copyright\": \"(2017) Universitas Madura\"\n                                                },\n                                                \"data\": [\n                                                    {\n                                                        \"id\": 6,\n                                                        \"type\": \"rmk\",\n                                                        \"attributes\": {\n                                                            \"namaSingkat\": \"MI\",\n                                                            \"nama\": \"Matakuliah Institusional\"\n                                                        }\n                                                    }\n                                                ]\n                                            }"
        }]
    }, {
        "apiGroup": "Jabatan Struktural",
        "apiData": [{
            "url": "/v1/struktural",
            "side": "GET Jabatan Struktural",
            "name": "GetStruktural",
            "method": "GET",
            "description": "Mendapatkan data jabatan struktural",
            "response": "{\n                                                \"jsonapi\": {\n                                                    \"version\": \"1.0\"\n                                                },\n                                                \"meta\": {\n                                                    \"authors\": \"unira\",\n                                                    \"copyright\": \"(2017) Universitas Madura\"\n                                                },\n                                                \"data\": [\n                                                    {\n                                                        \"id\": 1,\n                                                        \"type\": \"struktural\",\n                                                        \"attributes\": {\n                                                            \"nama\": \"REKTOR\"\n                                                        }\n                                                    }\n                                                ]\n                                            }"
        }]
    }, {
        "apiGroup": "Daftar Hak akses",
        "apiData": [{
            "url": "/v1/akses",
            "side": "GET Daftar Hak akses",
            "name": "GetAkses",
            "method": "GET",
            "description": "Mendapatkan daftar hak akses",
            "response": "{\n                                                \"jsonapi\": {\n                                                    \"version\": \"1.0\"\n                                                },\n                                                \"meta\": {\n                                                    \"authors\": \"unira\",\n                                                    \"copyright\": \"(2017) Universitas Madura\"\n                                                },\n                                                \"data\": [\n                                                    {\n                                                        \"id\": 11,\n                                                        \"type\": \"akses\",\n                                                        \"attributes\": {\n                                                            \"nama\": \"ADMIN SIMAT\",\n                                                            \"prodi\": false\n                                                        }\n                                                    }\n                                                ]\n                                            }"
        }]
    }, {
        "apiGroup": "Data Pengumuman",
        "apiData": [{
            "url": "/v1/pengumuman",
            "side": "GET Data Pengumuman",
            "name": "GetPengumuman",
            "method": "GET",
            "description": "Mendapatkan data pengumuman",
            "response": "{\n                                                \"jsonapi\": {\n                                                    \"version\": \"1.0\"\n                                                },\n                                                \"meta\": {\n                                                    \"authors\": \"unira\",\n                                                    \"copyright\": \"(2017) Universitas Madura\",\n                                                    \"count\": 2,\n                                                    \"page\": 1,\n                                                    \"limit\": 1\n                                                },\n                                                \"data\": [\n                                                    {\n                                                        \"id\": 3,\n                                                        \"type\": \"pengumuman\",\n                                                        \"attributes\": {\n                                                            \"judul\": \"Informasi KRS\",\n                                                            \"isi\": \"Batas Pengisian KRS Online <b>diperpanjang</b> sampai tanggal <b>16 September 2017</b><br>\nBagi mahasiswa yang telat, dimohon untuk mengajukan <b>BSS (Berhenti Studi Sementara) </b> pada semester ini.\",\n                                                            \"user\": [\n                                                                11,\n                                                                12,\n                                                                13,\n                                                                14,\n                                                                15,\n                                                                16,\n                                                                21,\n                                                                22,\n                                                                31,\n                                                                32,\n                                                                1\n                                                            ],\n                                                            \"status\": 2\n                                                        }\n                                                    }\n                                                ],\n                                                \"links\": {\n                                                    \"self\": \"/v1/pengumuman?limit=1&page=1\",\n                                                    \"first\": \"/v1/pengumuman?limit=1&page=1\",\n                                                    \"next\": \"/v1/pengumuman?limit=1&page=2\",\n                                                    \"last\": \"/v1/pengumuman?limit=1&page=2\"\n                                                }\n                                            }"
        }, {
            "url": "/v1/pengumuman",
            "side": "POST Data Pengumuman",
            "name": "PostPengumuman",
            "method": "POST",
            "description": "Menyimpan data pengumuman baru",
            "response": ""
        }, {
            "url": "/v1/pengumuman/id",
            "side": "PUT Data Pengumuman",
            "name": "PutPengumuman",
            "method": "PUT",
            "description": "Mengubah data pengumuman",
            "response": ""
        }, {
            "url": "/v1/pengumuman/id",
            "side": "DELETE Data Pengumuman",
            "name": "DeletePengumuman",
            "method": "DELETE",
            "description": "Menghapus data pengumuman",
            "response": ""
        }]
    }, {
        "apiGroup": "Data Jenis Dokumen",
        "apiData": [{
            "url": "/v1/dokumen/jenis",
            "side": "GET Data Jenis Dokumen",
            "name": "GetDokumenJenis",
            "method": "GET",
            "description": "Mendapatkan data jenis dokumen",
            "response": "{\n                                                \"jsonapi\": {\n                                                    \"version\": \"1.0\"\n                                                },\n                                                \"meta\": {\n                                                    \"authors\": \"unira\",\n                                                    \"copyright\": \"(2017) Universitas Madura\"\n                                                },\n                                                \"data\": [\n                                                    {\n                                                        \"id\": 1,\n                                                        \"type\": \"jenisdokumen\",\n                                                        \"attributes\": {\n                                                            \"nama\": \"Rencana Pembelajaran Semester\",\n                                                            \"status\": 1\n                                                        }\n                                                    }\n                                                ]\n                                            }"
        }]
    }, {
        "apiGroup": "Data Dokumen Pengajaran",
        "apiData": [{
            "url": "/v1/dokumen/pengajaran",
            "side": "GET Data Dokumen Pengajaran",
            "name": "GetDokumenPengajaran",
            "method": "GET",
            "description": "Mendapatkan data dokumen pengajaran",
            "response": ""
        }, {
            "url": "/v1/dokumen/pengajaran",
            "side": "POST Data Dokumen Pengajaran",
            "name": "PostDokumenPengajaran",
            "method": "POST",
            "description": "Mengupload data dokumen pengajaran",
            "response": ""
        }, {
            "url": "/v1/dokumen/pengajaran/id",
            "side": "PUT Data Dokumen Pengajaran",
            "name": "PutDokumenPengajaran",
            "method": "PUT",
            "description": "PutDokumen data dokumen pengajaran",
            "response": ""
        }]
    }, {
        "apiGroup": "Data Jenis Pembayaran",
        "apiData": [{
            "url": "/v1/pembayaran/jenis",
            "side": "GET Data Jenis Pembayaran",
            "name": "GetPembayaranJenis",
            "method": "GET",
            "description": "Mendapatkan data jenis pembayaran",
            "response": "{\n                                            \"jsonapi\": {\n                                                \"version\": \"1.0\"\n                                            },\n                                            \"meta\": {\n                                                \"authors\": \"unira\",\n                                                \"copyright\": \"(2017) Universitas Madura\"\n                                            },\n                                            \"data\": [\n                                                {\n                                                    \"id\": \"02\",\n                                                    \"type\": \"jenisPembayaran\",\n                                                    \"attributes\": {\n                                                        \"nama\": \"UANG PEMBANGUNAN I (UP)\",\n                                                        \"status\": 1,\n                                                        \"statusWajib\": \"A\",\n                                                        \"statusDenda\": \"F\"\n                                                    }\n                                                }\n                                            ]\n                                        }"
        }]
    }]
}]