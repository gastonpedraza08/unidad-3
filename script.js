 let boton = document.getElementById('boton');
 boton.addEventListener('click', validacion, true)
 let form = document.getElementById('ingreso');

function validacion(){
        let valor1 = document.getElementById('usuario').value;
        let valor2 = document.getElementById('clave').value;
        let usuario = document.getElementById('respuesta');
        if ( valor1 == ''){     
            usuario.innerHTML = 'Ingrese su usuario';
            document.getElementById('boton').disabled=true;    
        } else if (valor2 == ''){
            usuario.innerHTML = 'Ingrese su clave'; 
            document.getElementById('boton').disabled=true;    
        } else { 
            let recorrer = valor1.split('')
            for (let i in recorrer){
                if (recorrer[i] == '@'){
                    usuario.innerHTML = 'Correcto';
                } else{
                    usuario.innerHTML = 'Falta el arroba en el usuario';
                    document.getElementById('boton').disabled=true;  
                }
            }
        }
}

let input1 = document.getElementById('usuario');
let input2 = document.getElementById('clave');
input1.addEventListener('focus', habilitar)
input2.addEventListener('focus', habilitar)
function habilitar(){
    document.getElementById('boton').disabled=false;
}
