var year=document.getElementById('year');
var option='';
for (var i=1985;i<2008;i++){
    if (i==1991){
        option+='<option class="font-select" selected>'+i+'</option>';
        
    }
    else{
    option+='<option class="font-select">'+i+'</option>';
}
}
year.innerHTML=option;