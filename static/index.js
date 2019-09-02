function sendreq(){

}
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#form').onsubmit = () => {
         document.querySelector('#search_list').innerHTML="";
        const request = new XMLHttpRequest();
        const search_query = document.querySelector('#form-username').value;
        request.open('POST', '/search');
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            if (data.success) {
                for(var i = 0; i<data.tweets.length ; i++){
                    const li = document.createElement('li');
                    const p = document.createElement('p');
                    p.innerHTML = data.tweets[i][0];
                    li.append(p);
                    document.querySelector('#search_list').append(li);
                }
            }
            else {
                // no data 
            }
        }
        const data = new FormData();
        data.append('search_query', search_query);
        request.send(data);
        return false;

    };

   document.querySelector('#psenti').onclick = () =>{
     const senti = 'p';
     document.querySelector('#search_list').innerHTML="";
        const request = new XMLHttpRequest();
        const search_query = document.querySelector('#form-username').value;
        request.open('POST', '/search');
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            if (data.success) {

                for(var i = 0; i<data.tweets.length ; i++){
                    if(data.tweets[i][1] >=0){
                    const li = document.createElement('li');
                    const p = document.createElement('p');
                    p.innerHTML = data.tweets[i][0];
                    li.append(p);
                    document.querySelector('#search_list').append(li);}



                }
            }
            else {
            }
        }
        const data = new FormData();
        data.append('search_query', search_query);
        request.send(data);
    return false;
   };


      document.querySelector('#nsenti').onclick = () =>{
     const senti = 'n';
     document.querySelector('#search_list').innerHTML="";
        const request = new XMLHttpRequest();
        const search_query = document.querySelector('#form-username').value;
        request.open('POST', '/search');
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            if (data.success) {
                var status=0;
                for(var i = 0; i<data.tweets.length ; i++){
                    if(data.tweets[i][1] <0){
                        status=1;
                    const li = document.createElement('li');
                    const p = document.createElement('p');
                    p.innerHTML = data.tweets[i][0];
                    li.append(p);
                    document.querySelector('#search_list').append(li);
                }
                }
                if(status ==0){
                    console.log("No data found..")
                    const li = document.createElement('li');
                    const p = document.createElement('p');
                    p.innerHTML = 'No data found';
                    li.append(p);
                    document.querySelector('#search_list').append(li);
                }
            }
            else {
                // no data
            }
        }
        const data = new FormData();
        data.append('search_query', search_query);
        request.send(data);
    return false;
   };



      document.querySelector('#opi').onclick = () =>{
     const opi = 'o';
     document.querySelector('#search_list').innerHTML="";
        const request = new XMLHttpRequest();
        const search_query = document.querySelector('#form-username').value;
        request.open('POST', '/search');
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            if (data.success) {

                for(var i = 0; i<data.tweets.length ; i++){
                    if(data.tweets[i][2] >= 0.5){
                    const li = document.createElement('li');
                    const p = document.createElement('p');
                    p.innerHTML = data.tweets[i][0];
                    li.append(p);
                    document.querySelector('#search_list').append(li);}



                }
            }
            else {
                // no data
            }
        }
        const data = new FormData();
        data.append('search_query', search_query);
        request.send(data);
    return false;
   };


      document.querySelector('#fac').onclick = () =>{
     const opi = 'f';
     document.querySelector('#search_list').innerHTML="";
        const request = new XMLHttpRequest();
        const search_query = document.querySelector('#form-username').value;
        request.open('POST', '/search');
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            if (data.success) {

                for(var i = 0; i<data.tweets.length ; i++){
                    if(data.tweets[i][2] < 0.5){
                    const li = document.createElement('li');
                    const p = document.createElement('p');
                    p.innerHTML = data.tweets[i][0];
                    li.append(p);
                    document.querySelector('#search_list').append(li);}



                }
            }
            else {
                //no data
            }
        }
        const data = new FormData();
        data.append('search_query', search_query);
        request.send(data);
    return false;
   };



});