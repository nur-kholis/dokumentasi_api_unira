[
    {
        "group" : "web",
        "dataGroup" :
            [

            {
                "apiGroup"  : "Profil Universitas",
                "apiData"   : [
                    {   
                        "url"           : "/v1/profil",
                        "side"          : "GET Profil Universitas",
                        "name"          : "GetProfil",
                        "method"        : "GET",
                        "description"   : "Mendapatkan data profil universitas",
                        "response"      : ""
                    },
                    {   
                        "url"           : "/v1/profil/:id",
                        "side"          : "PUT Profil Universitas",
                        "name"          : "PutProfilPerId",
                        "method"        : "PUT",
                        "description"   : "Mengubah data profil kampus/prodi/fakultas berdasarkan ID",
                        "response"      : ""
                    }
                ]
            },
            {
                "apiGroup"  : "Content",
                "apiData"   : [
                    {   
                        "url"           : "/v1/content",
                        "side"          : "GET Content",
                        "name"          : "GetContent",
                        "method"        : "GET",
                        "description"   : "Mendapatkan data content ",
                        "response"      : ""
                    },
                    {   
                        "url"           : "/v1/content",
                        "side"          : "POST Content",
                        "name"          : "PostContent",
                        "method"        : "POST",
                        "description"   : "Menyimpan data content",
                        "response"      : ""
                    }
                ]
            },
            {
                "apiGroup"  : "Content Per Id",
                "apiData"   : [
                    
                    {   
                        "url"           : "/v1/content/id",
                        "side"          : "GET Content Per Id",
                        "name"          : "GetContentPerId",
                        "method"        : "GET",
                        "description"   : "Mendapatkan content berdasarkan id",
                        "param"         : 
                                        [
                                            {
                                                "name"         : "id",
                                                "type"          : "Number",
                                                "description"   : "Id Content"
                                            }
                                        ],
                        "response"      : ""
                    },
                    {   
                        "url"           : "/v1/content/id",
                        "side"          : "PUT Content Per Id",
                        "name"          : "PutContentPerId",
                        "method"        : "PUT",
                        "description"   : "Mengubah content berdasarkan id",
                        "param"         : 
                                        [
                                            {
                                                "name"         : "id",
                                                "type"          : "Number",
                                                "description"   : "Id Content"
                                            }
                                        ],
                        "response"      : ""
                    },
                    {   
                        "url"           : "/v1/content/id",
                        "side"          : "DELETE Content Per Id",
                        "name"          : "DeleteContentPerId",
                        "method"        : "DELETE",
                        "description"   : "Menghapus content berdasarkan id",
                        "param"         : 
                                        [
                                            {
                                                "name"         : "id",
                                                "type"          : "Number",
                                                "description"   : "Id Content"
                                            }
                                        ],
                        "response"      : ""
                    }
                ]
            }

        ]
    }
]
