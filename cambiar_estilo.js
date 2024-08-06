const body = document.body
const cambiarEstilo = document.getElementById('cambiarEstilo');

cambiarEstilo.addEventListener('click', function(){
    if(body.classList.contains('light')){
        //cambiar a dark
        body.classList.remove('light');
        body.classList.add('dark');
    }else{
        //cambiar a light
        body.classList.remove('dark');
        body.classList.add('light');
    }
});