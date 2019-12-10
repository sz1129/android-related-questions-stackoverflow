var header = document.querySelector('header');
var section = document.querySelector('section');
$.getJSON("./stack.json", function (data) {
    for(i=0;i<20;i++){
        var result;
        value = data[i].link;
        result = value.match(/[0-9]+/);
        api = "https://api.stackexchange.com/2.2/questions/"+ result +"?order=desc&sort=activity&site=stackoverflow";
        console.log(api);
        var requestURL = 'https://api.stackexchange.com/2.2/questions/59195776?order=desc&sort=activity&site=stackoverflow';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var question = request.response;
            populateHeader(question);
            showInfo(question);
        }
    }
})

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['title'];
    //console.log(jsonObj['items'].title);
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = jsonObj['link'];
    header.appendChild(myPara);


}
function showInfo(jsonObj) {
    var owner = jsonObj['owner'];
    var myArticle = document.createElement('article');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');

    myPara1.textContent = 'Reputation:' + owner.reputation;
    myPara2.textContent = 'User ID:' + owner.user_id
    myPara3.textContent = 'link:' + owner.link

    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    section.appendChild(myArticle);
}

//checked the API generated since the console shows server responded with a status of 400 (Bad Request)

//{"error_id":502,"error_message":"too many requests from this IP, 
//more requests available in 44183 seconds","error_name":"throttle_violation"}