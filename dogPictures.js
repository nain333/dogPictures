function fetchDogPics(){
    var xhrRequest= new XMLHttpRequest;
    xhrRequest.onload=function(){
        $('#fetcher').prop('disabled',true);
        $('#fetcher').html('Loading...');
        console.log(xhrRequest.response);
        var response=JSON.parse(xhrRequest.response);
        var imageURL=response.message;
        $('#dogImage').attr('src',imageURL);
        $('#fetcher').prop('disabled',false);
        $('#fetcher').html('Fetch');


    }
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send();


    


}
$('#fetcher').click(fetchDogPics);
