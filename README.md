# 🎯 Juego del Número Secreto

Un pequeño juego web interactivo donde el usuario debe adivinar un número secreto generado aleatoriamente. La dificultad la define el propio jugador estableciendo el número máximo y la cantidad de intentos permitidos.

## 🚀 Cómo funciona

1. **Definición del rango:**  
   El usuario ingresa el valor máximo para el número secreto mediante un `prompt`.

2. **Inicio del juego:**  
   Se solicita al jugador que indique la cantidad de intentos disponibles. Se genera el número secreto y se habilitan los botones para comenzar a jugar.

3. **Lógica del juego:**  
   - Si el número ingresado coincide con el número secreto, ¡felicitaciones!
   - Si es incorrecto, se da una pista (mayor o menor).
   - Si se terminan los intentos, se informa al jugador que ha perdido.

4. **Control de repetición:**  
   Los números secretos no se repiten hasta agotar el rango, gracias a un sistema de historial con recursividad.

5. **Botones de interacción:**
   - **Intentar:** Verifica el número ingresado.
   - **Nuevo Juego:** Reinicia el juego con los mismos parámetros.
   - **Nuevo Máximo:** Permite redefinir el rango del número secreto.

## 💡 Descripción

La idea principal fue permitir al usuario establecer el número máximo posible y la cantidad de intentos. Para mantener la interacción fluida y visualmente atractiva, opté por modificar el HTML directamente desde funciones JavaScript. Utilicé conceptos como `const` en lugar de `let` donde las variables no cambian, y `createElement()` para generar botones dinámicamente.

Aunque algunos de estos conceptos no se vieron en el curso original, los estudié por iniciativa propia como parte de un desafío personal. También tengo experiencia previa con HTML y Thymeleaf, lo cual me ayudó a entender la manipulación del DOM desde app.js.

## 🧩 Características

- Generación aleatoria de número secreto sin repeticiones (recursividad incluida).
- Configuración personalizada del rango y número de intentos.
- Interfaz dinámica: botones de “Intentar”, “Nuevo juego” y “Nuevo máximo”.
- Validación de entrada y mensajes guiados para el usuario.

## 🔄 Manejo de Recursividad

La función `generarNumeroSecreto()` evita repeticiones dentro del rango, reiniciando la lista si se supera el límite. Se utilizó lógica recursiva para asegurar que el número generado no haya sido sorteado previamente.

También se manejó un bug relacionado al cambio de rango: si se actualizaba `numeromax` a un valor inferior al largo de la lista, el uso de `==` podía causar un bucle. Esta lógica fue ajustada para evitar ese escenario.

## 🛠 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+

## 💡 Mejoras posibles

- Validar entrada numérica para evitar errores.
- Agregar niveles de dificultad con tiempos o más pistas.
- Implementar sistema de puntuación.
- Añadir historial de partidas con almacenamiento local.

 
