const imagenes = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal a i");
//variables de estado
let rutasImg = []; //ESTO GUARDARÁ LAS URL DE LAS IMG
let imgActual = 0; //un número que representa un índice de rutasImf.
//abrir modal
imagenes.forEach(function(imagen,indice){
	rutasImg.push(imagen.getAttribute("href"));
	imagen.addEventListener("click", function(evento){
		evento.preventDefault();
		imgActual = indice; //con cada click asignamos el valor a la imagen actual segun el indice de la miniatura sobre la que hacemos click.
		imgModal.setAttribute("src",rutasImg[imgActual]);
		modal.classList.add("visible");
		
	});	
});
//cerrar modal
modal.addEventListener("click", function(){
	this.classList.remove("visible");
});



//navegacion entre imagenes

flechas.forEach(function(flecha,i){
	flecha.addEventListener("click",function(evento){
		evento.preventDefault();
		evento.stopPropagation(); 
		if(i == 0){//i representa la direccion.... 0 atrás | 1 adelante
			//atrás
			imgActual = imgActual > 0 ? imgActual - 1 : rutasImg.length - 1;
		}else{
			//adelante
			imgActual = imgActual < rutasImg.length - 1 ? imgActual + 1 : 0;
		}
		imgModal.setAttribute("src",rutasImg[imgActual]); 
	});	
});


