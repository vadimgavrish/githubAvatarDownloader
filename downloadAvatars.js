var request = require('request');

console.log('Welcome to the Gihub Avatar Downloader!')

var GITHUB_USER = 'vadimgavrish';
var GITHUB_TOKEN = '6dc806145c584b233aa636944eba7e47365da69e';    


function getRepoContributors(repoOwner, repoName, cb) {

    var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '' + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

    var options = {
        url: requestURL,
        headers: {'User-Agent': 'GitHub Avatar Downloader - Student Project'}
    };


    request(options, function (error, response, body) {

        var data = JSON.parse(body);


        cb(error, data);


    });
    
    console.log(requestURL);

}


getRepoContributors("jquery", "jquery", function(error, data) {
  



    for (var i = 0; i < data.length; i++) {

        console.log(data[i].avatar_url);

    }





});