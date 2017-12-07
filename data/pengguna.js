[{
    "group": "Pengguna",
    "dataGroup": [{
        "apiGroup": "Saya",
        "apiData": [{
            "url": "/v1/saya",
            "side": "GET Saya",
            "name": "GetSaya",
            "method": "GET",
            "description": "Mendapatkan data pengguna aktif",
            "permission": "user",
            "response": ""
        }, {
            "url": "/v1/saya",
            "side": "PUT Saya",
            "name": "PutSaya",
            "method": "PUT",
            "description": "Mengubah data pengguna aktif",
            "permission": "user",
            "response": ""
        }]
    }, {
        "apiGroup": "Dokar",
        "apiData": [{
            "url": "/v1/dokar",
            "side": "GET Dokar",
            "name": "GetDokar",
            "method": "GET",
            "description": "Mendapatkan data semua dosen dan karyawan",
            "param": [{
                "name": "filed",
                "type": "String",
                "description": "Jenis data yang diikutkan dalam hasil dipisahkan dengan koma, contoh = \"field=nama,nis\""
            }, {
                "name": "page",
                "type": "Number",
                "description": "Halaman yang diminta untuk hasil"
            }, {
                "name": "limit",
                "type": "Number",
                "description": "Jumlah data maksimal per request yang dihasilkan, default = 30"
            }, {
                "name": "sort",
                "type": "String",
                "description": "Jenis data yang digunakan untuk mengurutkan hasil, dipisahkan dengan koma dan penambahan tanda \"-\" menjadikan DESC, contoh = \"nama,-nis\""
            }, {
                "name": "filter",
                "type": "String",
                "description": "filter Untuk memfilter hasil, contoh = \"filter['+'nama'+']=a%\""
            }],
            "response": "{\n                                                \"jsonapi\": {\n                                                    \"version\": \"1.0\"\n                                                },\n                                                \"meta\": {\n                                                    \"authors\": \"unira\",\n                                                    \"copyright\": \"(2017) Universitas Madura\",\n                                                    \"count\": 290,\n                                                    \"page\": 1,\n                                                    \"limit\": 1\n                                                },\n                                                \"data\": [\n                                                    {\n                                                        \"id\": \"07104811001\",\n                                                        \"type\": \"dosen\",\n                                                        \"attributes\": {\n                                                            \"prodi\": 11,\n                                                            \"nidn\": \"x7111111001\",\n                                                            \"nama\": \"Drs. Ustman, M.Pd\",\n                                                            \"nip\": null,\n                                                            \"alamat\": \"pamekasan\",\n                                                            \"telepon\": null,\n                                                            \"email\": \"usman@gmail.com\",\n                                                            \"ijazah\": \"s2\",\n                                                            \"jabatanfungsional\": null,\n                                                            \"jabatanstruktural\": null,\n                                                            \"lahirtanggal\": null,\n                                                            \"lahirtempat\": null,\n                                                            \"thumbnail\": null\n                                                        }\n                                                    }\n                                                ],\n                                                \"links\": {\n                                                    \"self\": \"/v1/dosen?limit=1&page=1\",\n                                                    \"first\": \"/v1/dosen?limit=1&page=1\",\n                                                    \"next\": \"/v1/dosen?limit=1&page=2\",\n                                                    \"last\": \"/v1/dosen?limit=1&page=290\"\n                                                }\n                                            }"
        }, {
            "url": "/v1/dokar",
            "side": "POST Dokar",
            "name": "PostDokar",
            "method": "POST",
            "description": "Menyimpan data dosen karyawan baru",
            "response": ""
        }]
    }, {
        "apiGroup": "Dokar Per NIS",
        "apiData": [{
            "url": "/v1/dokar/nis",
            "side": "GET Dokar Per NIS",
            "name": "GetDokarPerNIs",
            "method": "GET",
            "description": "Mendapatkan data dosen atau karyawan",
            "param": [{
                "name": "nis",
                "type": "Number",
                "description": "Nis dosen atau karyawan"
            }],
            "response": ""
        }, {
            "url": "/v1/dokar/:nis",
            "side": "PUT Dokar Per NIS",
            "name": "PutDokarPerNIs",
            "method": "PUT",
            "description": "Mengubah data dosen atau karyawan",
            "param": [{
                "name": "nis",
                "type": "Number",
                "description": "Nis dosen atau karyawan"
            }],
            "response": ""
        }, {
            "url": "/v1/dokar/nis",
            "side": "DELETE Dokar Per NIS",
            "name": "DeleteDokarPerNIs",
            "method": "DELETE",
            "description": "Menghapus data dosen atau karyawan",
            "param": [{
                "name": "nis",
                "type": "Number",
                "description": "Nis dosen atau karyawan"
            }],
            "response": ""
        }]
    }, {
        "apiGroup": "Admin",
        "apiData": [{
            "url": "/v1/admin",
            "side": "GET Admin",
            "name": "GetAdmin",
            "method": "GET",
            "description": "Mendapatkan data semua administrator",
            "response": ""
        }, {
            "url": "/v1/admin",
            "side": "POST Admin",
            "name": "PostAdmin",
            "method": "POST",
            "description": "Menyimpan data administrator baru",
            "response": ""
        }, {
            "url": "/v1/admin/nis",
            "side": "PUT Admin",
            "name": "PutAdmin",
            "method": "PUT",
            "description": "Mengubah data administrator baru",
            "param": [{
                "name": "nis",
                "type": "Number",
                "description": "NIS dosen atau karyawan"
            }],
            "response": ""
        }, {
            "url": "/v1/admin/nis",
            "side": "DELETE Admin",
            "name": "DeleteAdmin",
            "method": "DELETE",
            "description": "Menghapus data administrator baru",
            "param": [{
                "name": "nis",
                "type": "Number",
                "description": "NIS dosen atau karyawan"
            }],
            "response": ""
        }]
    }, {
        "apiGroup": "Mahasiswa",
        "apiData": [{
            "url": "/v1/mahasiswa/nim",
            "side": "PUT Mahasiswa",
            "name": "PutMahasiswa",
            "method": "PUT",
            "description": "Mengubah data mahasiswa",
            "param": [{
                "name": "nim",
                "type": "Number",
                "description": "Nim mahasiswa"
            }],
            "response": ""
        }]
    }]
}]