//local json can't use ajax, Live Server in VS Code is used here to makes it work.
$.getJSON("./stack.json", function (data) {
    var list1="";
    for(i=0;i<10;i++){  
       var str = data[i].title;
       var result = str.link("./question.html")
       list1 += i+1 +'. ' + result +"<br>"
    }
    document.getElementById("newest").innerHTML = list1;


    var list2="";
    for(i=10;i<20;i++){  
       var str = data[i].title;
       var result = str.link("./question.html")
       list2 += i-9 +'. ' + result +"<br>" 
    }
    document.getElementById("mostVoted").innerHTML = list2;

})
    

    

    