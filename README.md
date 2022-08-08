# Lista de tareas (aplicación de consola con Node js)

Esta aplicación fue realizada con Node js utilizando los siguientes modulos:
* **colors: versión 1.4.0** para estilos de la ventana de comandos.
* **inquirer: versión 8.2.4** para darle interactividad a la ventana de comandos.
* **uuid: 8.3.2 ** para asignarle un identificador único a cada tarea.

###Inicio
Para iniciar debemos instalar los modulos requeridos en el package.json

`npm install`

una vez instalados  podemos iniciar la aplicación.

`node app`

Al iniciar nos podemos mover con las flechas direccionales del teclado o los números del 0 al 6 para navegar entre las opciones.

##Opciones
Dentro de las opciones podemos encontrarnos con: 
* **Crear tarea** 
* **Listar tareas**
* **Listar tareas completadas**
* **Listar tareas pendientes**
* **Completar tarea(s)**
* **Borrar tarea**

Todas las acciones persisten dentro de un archivo json.