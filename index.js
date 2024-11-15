function greet(event){
    let name = document.querySelector('#chat').value;
    alert(name);
    event.preventDefault();
}


let form = document.getElementById('form');
if(form){
    form.addEventListener('submit', function(){
        event.preventDefault()
        let type = document.getElementById('chat').value;
        document.getElementById('output-box').innerHTML += "<p>"+type+"</p>";
    });        
}
