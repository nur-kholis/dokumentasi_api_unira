[{
    "group": "Fakultas-Prodi",
    "dataGroup": [{
        "apiGroup": "Fakultas",
        "apiData": [{
            "url": "/v1/fakultas",
            "side": "GET Fakultas",
            "name": "GetFakultas",
            "method": "GET",
            "description": "Mengambil data semua fakultas",
            "response": ""
        }, {
            "url": "/v1/fakultas",
            "side": "POST Fakultas",
            "name": "fakultasprodi",
            "method": "POST",
            "description": "Menyimpan data fakultas",
            "param": [{
                "name": "nama",
                "type": "String",
                "description": "nama fakultas"
            }, {
                "name": "dekan",
                "type": "String",
                "description": "Nis Dekan"
            }],
            "response": ""
        }, {
            "url": "/v1/fakultas/id",
            "side": "PUT Fakultas",
            "name": "PutFakultas",
            "method": "PUT",
            "description": "Mengubah data fakultas",
            "param": [{
                "name": "id",
                "type": "Number",
                "description": "Kode Fakultas"
            }],
            "response": ""
        }, {
            "url": "/v1/fakultas/id",
            "side": "DELETE Fakultas",
            "name": "DeleteFakultas",
            "method": "DELETE",
            "description": "Menghapus data fakultas",
            "param": [{
                "name": "id",
                "type": "Number",
                "description": "kode fakultas"
            }],
            "response": ""
        }]
    }, {
        "apiGroup": "Prodi",
        "apiData": [{
            "url": "/v1/prodi",
            "side": "GET Prodi",
            "name": "GetProdi",
            "method": "GET",
            "description": "Mengambil data semua prodi",
            "response": ""
        }, {
            "url": "/v1/prodi",
            "side": "POST Prodi",
            "name": "PostProdi",
            "method": "POST",
            "description": "Menyimpan data prodi",
            "param": [{
                "name": "nama",
                "type": "String",
                "description": "nama prodi"
            }],
            "response": ""
        }, {
            "url": "/v1/prodi/id",
            "side": "PUT Prodi",
            "name": "PutProdi",
            "method": "PUT",
            "description": "Mengubah data prodi",
            "param": [{
                "name": "id",
                "type": "Number",
                "description": "kode prodi"
            }],
            "response": ""
        }, {
            "url": "/v1/prodi/id",
            "side": "DELETE Prodi",
            "name": "DeleteProdi",
            "method": "DELETE",
            "description": "Menghapus data prodi",
            "param": [{
                "name": "id",
                "type": "Number",
                "description": "kode prodi"
            }],
            "response": ""
        }]
    }]
}]