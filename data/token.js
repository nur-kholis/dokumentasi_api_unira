[{
    "group": "token",
    "dataGroup": [{
        "apiGroup": "PMB",
        "apiData": [{
            "url": "/v1/token",
            "side": "POST Token",
            "name": "PostToken",
            "method": "POST",
            "description": "Mengecek akun pengguna menggunakan username dan password dan akan generate token bila berhasil. Dua jenis token yang akan digenerate adalah \"access\" dan \"refresh\". Access token akan valid selama 3 menit dan harus digenerate ulang menggunakan PUT Token serta mengirimkan isi refresh token.",
            "param": [{
                "name": "name",
                "type": "String",
                "description": "Username, NPM, NIS pengguna. <b>( Panjang Nilai 3 sampai 30 )</b>"
            }, {
                "name": "password",
                "type": "String",
                "description": "Password, PIN pengguna. <b>( Panjang Nilai 6 sampai 30 )</b>"
            }],
            "response": ""
        }, {
            "url": "/v1/token",
            "side": "PUT Token",
            "name": "PutToken",
            "method": "PUT",
            "description": "Menggenerate ulang access token karena sudah kadaluarsa (tiap 3 menit)",
            "param": [{
                "name": "refresh",
                "type": "String",
                "description": "String refresh token yang digenerate saat login"
            }],
            "response": ""
        }, {
            "url": "/v1/token",
            "side": "DELETE Token",
            "name": "DeleteToken",
            "method": "DELETE",
            "description": "Menghapus data token akun aktif / Keluar aplikasi",
            "response": ""
        }]
    }]
}]