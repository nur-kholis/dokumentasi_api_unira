function jsonManager(group,data){
	var allHTML = null;
	var openMainBoxHTML = 
	`
	<div id="box-`+ group +`">
	    <div class="row">
	        <div class="main-box shadow">
	            <div class="main-box-body">
	                <h2 class="title">
	                    <i class="fa fa-angle-double-right"></i><b> `+ group +`</b>
	                </h2>

	`;

	var CloseMainBoxHTML = 
	`
				</div>
	        </div>
	    </div>
	</div>
	`;

	var getHTML = '';
	var postHTML = '';
	var putHTML = '';
	var deleteHTML = '';

	for(i=0; i<data.length; i++){
        
    	if(data[i].method == "GET"){
            var paramData = '';
            if (typeof data[i].param !== 'undefined') {
                if (data[i].param.length>0) {
                    paramData = `<div class="divider"></div>
                                        <div class="row p-1">
                                            <caption>
                                                <strong>Parameter</strong>
                                            </caption>
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Type</th>
                                                        <th>description</th>
                                                    </tr>
                                                </thead>    
                                                <tbody>`
                                                ;
                    for(a=0; a<data[i].param.length; a++){
                        paramData += '<tr>'
                                   + '<td>'+data[i].param[a].name+'</td>'
                                   + '<td>'+data[i].param[a].type+'</td>'
                                   + '<td>'+data[i].param[a].description+'</td>'
                                   + '</tr>';
                    }

                    paramData += `              </tbody>
                                            </table>
                                        </div>`;

                };
            }else{
                console.log('gak ada');
            }
                

            getHTML = 
            `
             <div id="panel-get-`+ group.replace(/\ /g, '-') +`" class="panel panel-success">
                  <div class="panel-heading">
                        <h3 class="panel-title">`+ data[i].name +`</h3>
                  </div>
                  <div class="panel-body">

                        <div class="row p-1">
                            <div class="url">
                                <div class="col-md-11 p-0">
                                    <div class="input-group">
                                        <input type="text" id="url-get`+ group +`" value="`+ data[i].url +`" class="form-control" readonly="">
                                        <span class="input-group-btn">
                                            <button type="button" data-toggle="tooltip" title="Disalin!"  data-clipboard-target="#url-get`+ group +`" class="btn btn-default"><img src="assets/images/clippy.svg" width="13"></button>
                                        </span>
                                    </div>

                                </div>
                                <div class="col-md-1 p-0">
                                    <button  type="button" data-toggle="collapse" data-target="#response-get`+ group.replace(/\ /g, '-') +`" class="btn btn-default pull-right">
                                        Response
                                    </button>
                                </div>
                                <div class="col-md-12 p-0">
                                    <div id="response-get`+ group.replace(/\ /g, '-') +`" class="collapse response">
                                        <pre><code class="language-json">
                                            `+ data[i].response +`                                                     
                                        </code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <div class="row p-1">

                        <p>`+ data[i].description +`</p>
                        </div>

                        `+paramData+`


                  </div>
            </div>
            `;
    	}

    	if(data[i].method == "POST"){
            var paramData = '';
            if (typeof data[i].param !== 'undefined') {
                if (data[i].param.length>0) {
                    paramData = `<div class="divider"></div>
                                        <div class="row p-1">
                                            <caption>
                                                <strong>Parameter</strong>
                                            </caption>
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Type</th>
                                                        <th>description</th>
                                                    </tr>
                                                </thead>    
                                                <tbody>`
                                                ;
                    for(a=0; a<data[i].param.length; a++){
                        paramData += '<tr>'
                                   + '<td>'+data[i].param[a].name+'</td>'
                                   + '<td>'+data[i].param[a].type+'</td>'
                                   + '<td>'+data[i].param[a].description+'</td>'
                                   + '</tr>';
                    }

                    paramData += `              </tbody>
                                            </table>
                                        </div>`;

                };
            }else{
                //console.log('gak ada');
            }
                

            postHTML = 
            `
             <div id="panel-post-`+ group.replace(/\ /g, '-') +`" class="panel panel-primary">
                  <div class="panel-heading">
                        <h3 class="panel-title">`+ data[i].name +`</h3>
                  </div>
                  <div class="panel-body">

                        <div class="row p-1">
                            <div class="url">
                                <div class="col-md-11 p-0">
                                    <div class="input-group">
                                        <input type="text" id="url-post`+ group +`" value="`+ data[i].url +`" class="form-control" readonly="">
                                        <span class="input-group-btn">
                                            <button type="button" data-toggle="tooltip" title="Disalin!"  data-clipboard-target="#url-post`+ group +`" class="btn btn-default"><img src="assets/images/clippy.svg" width="13"></button>
                                        </span>
                                    </div>

                                </div>
                                <div class="col-md-1 p-0">
                                    <button  type="button" data-toggle="collapse" data-target="#response-post`+ group.replace(/\ /g, '-') +`" class="btn btn-default pull-right">
                                        Response
                                    </button>
                                </div>
                                <div class="col-md-12 p-0">
                                    <div id="response-post`+ group.replace(/\ /g, '-') +`" class="collapse response">
                                        <pre><code class="language-json">
                                            `+ data[i].response +`                                                     
                                        </code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <div class="row p-1">

                        <p>`+ data[i].description +`</p>
                        </div>

                        `+paramData+`


                  </div>
            </div>
            `;
    	}

    	if(data[i].method == "PUT"){
            var paramData = '';
            if (typeof data[i].param !== 'undefined') {
                if (data[i].param.length>0) {
                    paramData = `<div class="divider"></div>
                                        <div class="row p-1">
                                            <caption>
                                                <strong>Parameter</strong>
                                            </caption>
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Type</th>
                                                        <th>description</th>
                                                    </tr>
                                                </thead>    
                                                <tbody>`
                                                ;
                    for(a=0; a<data[i].param.length; a++){
                        paramData += '<tr>'
                                   + '<td>'+data[i].param[a].name+'</td>'
                                   + '<td>'+data[i].param[a].type+'</td>'
                                   + '<td>'+data[i].param[a].description+'</td>'
                                   + '</tr>';
                    }

                    paramData += `              </tbody>
                                            </table>
                                        </div>`;

                };
            }else{
                console.log('gak ada');
            }
                

            putHTML = 
            `
             <div id="panel-put-`+ group.replace(/\ /g, '-') +`" class="panel panel-warning">
                  <div class="panel-heading">
                        <h3 class="panel-title">`+ data[i].name +`</h3>
                  </div>
                  <div class="panel-body">

                        <div class="row p-1">
                            <div class="url">
                                <div class="col-md-11 p-0">
                                    <div class="input-group">
                                        <input type="text" id="url-put`+ group +`" value="`+ data[i].url +`" class="form-control" readonly="">
                                        <span class="input-group-btn">
                                            <button type="button" data-toggle="tooltip" title="Disalin!"  data-clipboard-target="#url-put`+ group +`" class="btn btn-default"><img src="assets/images/clippy.svg" width="13"></button>
                                        </span>
                                    </div>

                                </div>
                                <div class="col-md-1 p-0">
                                    <button  type="button" data-toggle="collapse" data-target="#response-put`+ group.replace(/\ /g, '-') +`" class="btn btn-default pull-right">
                                        Response
                                    </button>
                                </div>
                                <div class="col-md-12 p-0">
                                    <div id="response-put`+ group.replace(/\ /g, '-') +`" class="collapse response">
                                        <pre><code class="language-json">
                                            `+ data[i].response +`                                                     
                                        </code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <div class="row p-1">

                        <p>`+ data[i].description +`</p>
                        </div>

                        `+paramData+`


                  </div>
            </div>
            `;
    	}

    	if(data[i].method == "DELETE"){
            var paramData = '';
            if (typeof data[i].param !== 'undefined') {
                if (data[i].param.length>0) {
                   
                    paramData = `<div class="divider"></div>
                                        <div class="row p-1">
                                            <caption>
                                                <strong>Parameter</strong>
                                            </caption>
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Type</th>
                                                        <th>description</th>
                                                    </tr>
                                                </thead>    
                                                <tbody>`
                                                ;
                    for(a=0; a<data[i].param.length; a++){
                        paramData += '<tr>'
                                   + '<td>'+data[i].param[a].name+'</td>'
                                   + '<td>'+data[i].param[a].type+'</td>'
                                   + '<td>'+data[i].param[a].description+'</td>'
                                   + '</tr>';
                    }

                    paramData += `              </tbody>
                                            </table>
                                        </div>`;

                };
            }else{
                console.log('gak ada');
            }
                

            deleteHTML = 
            `
             <div id="panel-delete-`+ group.replace(/\ /g, '-') +`" class="panel panel-danger">
                  <div class="panel-heading">
                        <h3 class="panel-title">`+ data[i].name +`</h3>
                  </div>
                  <div class="panel-body">

                        <div class="row p-1">
                            <div class="url">
                                <div class="col-md-11 p-0">
                                    <div class="input-group">
                                        <input type="text" id="url-delete`+ group +`" value="`+ data[i].url +`" class="form-control" readonly="">
                                        <span class="input-group-btn">
                                            <button type="button" data-toggle="tooltip" title="Disalin!"  data-clipboard-target="#url-delete`+ group +`" class="btn btn-default"><img src="assets/images/clippy.svg" width="13"></button>
                                        </span>
                                    </div>

                                </div>
                                <div class="col-md-1 p-0">
                                    <button  type="button" data-toggle="collapse" data-target="#response-delete`+ group.replace(/\ /g, '-') +`" class="btn btn-default pull-right">
                                        Response
                                    </button>
                                </div>
                                <div class="col-md-12 p-0">
                                    <div id="response-delete`+ group.replace(/\ /g, '-') +`" class="collapse response">
                                        <pre><code class="language-json">
                                            `+ data[i].response +`                                                     
                                        </code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <div class="row p-1">

                        <p>`+ data[i].description +`</p>
                        </div>

                        `+paramData+`


                  </div>
            </div>
            `;
    	}
    }

	allHTML = openMainBoxHTML+getHTML+postHTML+putHTML+deleteHTML+CloseMainBoxHTML;
	return allHTML;
}

function sidenavManager(group,data){
   // console.log(group);
   // console.log(data);
   var sideGroup = ``;
   var openSideGroup = 
   `
   <li>
        <a href="#collapse-side-`+ group +`" class="cancot" data-toggle="collapse" aria-controls="collapse-side-`+ group +`" class="" aria-expanded="true">
            <span>`+ group +`</span>
            <span class="fa fa-angle-down pull-right"></span>
        </a>
        <ul class="collapseable collapse " id="collapse-side-`+ group +`" aria-expanded="true" style="">
   `;

   var closeSideGroup = 
   `
        </ul>
    </li>
   `;

   var openApiGroup = 
   `
            <li>
   `;
   var midleApiGroup = ``;
  
   var closeApiGroup = 
   `
            </li>
   `;
   var apiGroup = '';


   var closeApiMethod = `</ul>`;
   var midleApiMethod = ``;
   var apiMethod = ``;

   for(x=0; x<data.length; x++){
        //console.log(data[x].apiGroup);
        //console.log(data[x].apiData.length);

       var openApiMethod = 
       `
            <ul class="collapseable collapse" id="collapse-group-`+ data[x].apiGroup.replace(/\ /g, '-')+ `" aria-expanded="true" style="">
       `;

        midleApiGroup +=
         `  
        <a href="#collapse-group-`+ data[x].apiGroup.replace(/\ /g, '-') + `" data-toggle="collapse" aria-controls="collapse-group-`+ data[x].apiGroup.replace(/\ /g, '-') + `" class="" aria-expanded="true">
            <span>`+ data[x].apiGroup +`</span>
            <span class="fa fa-angle-down pull-right"></span>
        </a>
        `;

        for(y=0; y<data[x].apiData.length; y++){

            switch(data[x].apiData[y].method){

                case "GET" :
                    midleApiMethod += 
                    `
                        <li><a href="#" data-id="panel-get-`+ data[x].apiGroup.replace(/\ /g, '-')+`" >`+ data[x].apiData[y].side +`</a></li> 
                    `;
                break;

                case "POST" :
                    midleApiMethod += 
                    `
                        <li><a href="#" data-id="panel-post-`+ data[x].apiGroup.replace(/\ /g, '-')+`" >`+ data[x].apiData[y].side +`</a></li> 
                    `;
                break;

                case "PUT" :
                    midleApiMethod += 
                    `
                        <li><a href="#" data-id="panel-put-`+ data[x].apiGroup.replace(/\ /g, '-')+`" >`+ data[x].apiData[y].side +`</a></li> 
                    `;
                break;

                case "DELETE" :
                    midleApiMethod += 
                    `
                        <li><a href="#" data-id="panel-delete-`+ data[x].apiGroup.replace(/\ /g, '-')+`" >`+ data[x].apiData[y].side +`</a></li> 
                    `;
                break;

            }

        }
        apiMethod = openApiMethod + midleApiMethod + closeApiMethod; 

        var midleApiMethod = ``; // membersihkan midle agar data sebelum nya hak ikut

        apiGroup += openApiGroup + midleApiGroup + apiMethod + closeApiGroup;

        var midleApiGroup = ``; // membersihkan midle agar data sebelum nya hak ikut
        
   }

  

    sideGroup = openSideGroup + apiGroup + closeSideGroup;  
    return sideGroup;
}
