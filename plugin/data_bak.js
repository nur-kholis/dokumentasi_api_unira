var data =
[
    {
        "group" : "Print",
        "dataGroup" :
            [

            {
                "apiGroup"  : "SkAjar",
                "apiData"   : [
                    {   
                        "url"           : "/print/skajar",
                        "side"          : "GET SK Ajar Dosen",
                        "name"          : "GetSkAjar",
                        "method"        : "GET",
                        "description"   : "Menghasilkan tampilan cetak surat keputusan ajar",
                        "response"      : ""
                    },
                    {
                        "name"          : "Post Simat",
                        "method"        : "POST",
                        "url"           : "url/post/simat",
                        "description"   : "POST data simat",
                        "param"         : [
                                            {
                                                "name"  : "ID",
                                                "type"  : "Number",
                                                "legth" : 12
                                            },
                                            {
                                                "name"  : "Nama",
                                                "type"  : "string",
                                                "legth" : 120
                                            }
                                         ],
                        "response"      : ""
                    },
                    {
                        "name"          : "Put Simat",
                        "method"        : "PUT",
                        "url"           : "url/put/simat",
                        "description"   : "put data simat",
                        "response"      : 
                                        `
                                            {
                                                "name"          : "put Simat",
                                                "method"        : "POST"
                                            }

                                        `
                    },
                    {
                        "name"          : "Delete Simat",
                        "method"        : "DELETE",
                        "url"           : "url/del/1",
                        "description"   : "del data simat",
                        "response"      : 
                                        `
                                            {
                                                "name"          : "del Simat",
                                                "method"        : "POST"
                                            }

                                        `
                    }
                ]
            },

            {
                "apiGroup"  : "fakultas",
                "apiData"   : [
                    {
                        "name"          : "Get Fakultas",
                        "method"        : "GET",
                        "url"           : "url/get/simat",
                        "description"   : "Mengambil data simat",
                        "response"      : 
                                        `
                                            {
                                                "name"          : "Get Fakultas",
                                                "method"        : "POST"
                                            }

                                        `
                    },
                    {
                        "name"          : "Post Fakultas",
                        "method"        : "POST",
                        "url"           : "url/post/simat",
                        "description"   : "POST data simat",
                        "param"         : [
                                            {
                                                "name"  : "ID",
                                                "type"  : "Number",
                                                "legth" : 12
                                            },
                                            {
                                                "name"  : "Nama",
                                                "type"  : "string",
                                                "legth" : 120
                                            }
                                         ],
                        "response"      : ""
                    },
                    {
                        "name"          : "Put Fakultas",
                        "method"        : "PUT",
                        "url"           : "url/put/simat",
                        "description"   : "put data simat",
                        "response"      : 
                                        `
                                            {
                                                "name"          : "put Fakultas",
                                                "method"        : "POST"
                                            }

                                        `
                    },
                    {
                        "name"          : "Delete Fakultas",
                        "method"        : "DELETE",
                        "url"           : "url/del/1",
                        "description"   : "del data simat",
                        "response"      : 
                                        `
                                            {
                                                "name"          : "del Fakultas",
                                                "method"        : "POST"
                                            }

                                        `
                    }
                ]
            }
        ]
    }
]
;
