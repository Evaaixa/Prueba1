function addTarea(){
    //leer el texto del input
    let tarea = document.getElementById("inputTarea").value;
    tarea = tarea.trim();
    if(tarea != ''){
        // crea un nuevo elemento <li></li>
        let itemLista = document.createElement('li');
        // añade texto al li <li>comprar pan</li>
        itemLista.innerHTML = `
        ${tarea}
        <button class="btnEliminar">Eliminar</button>
        `;
        //añade a la lista ul un child
        document.getElementById('listaTareas').appendChild(itemLista);
        //seleccionar el botón eliminar para añadirle un evento
        itemLista.querySelector('.btnEliminar').addEventListener('click', function(){
            itemLista.remove();
        })
    }//fin del if

}//fin de la función addTarea
