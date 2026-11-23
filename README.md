# Calculadora de envíos

Proyecto de práctica para comprobar una regla de negocio y preparar el despliegue de un sitio estático.

## Regla de negocio

- Subtotal entero desde 0 hasta 99.999 COP → envío de 8.000 COP.
- Subtotal entero desde 100.000 COP → envío gratis.
- El campo vacío, los negativos y los decimales producen un mensaje de validación. Los importes se introducen sin puntos ni comas.

## Abrir la calculadora

1. Descomprime el proyecto y abre `index.html` en un navegador.
2. Escribe `99999` y pulsa **Calcular**. Debe aparecer **Envío: 8.000 COP**.
3. Cambia el valor a `100000` y pulsa **Calcular**. Debe aparecer **Envío: 0 COP**.
4. Borra el valor y pulsa **Calcular**. Debe aparecer **Ingresa un subtotal entero no negativo en pesos.**
5. Como ejemplo adicional, prueba `50000.5` para verificar la validación de decimales.

Para servirlo por HTTP localmente, ejecuta `python -m http.server 8000` en esta carpeta y abre `http://localhost:8000/`. Usa `python3` si ese es el nombre del comando en tu equipo.

## Ejecutar las pruebas unitarias

Usa Node.js 22 o superior. Desde la carpeta que contiene `envios.js`:

```sh
node --version
node --test
```

La versión corregida debe pasar cinco pruebas. Para reproducir el fallo en una copia local, cambia temporalmente `>=` por `>` en `envios.js` y repite el comando. Debe fallar solo la prueba de 100.000 COP. Restaura `>=` y vuelve a ejecutar las pruebas.

## Publicar en GitHub Pages

1. En un repositorio de demostración con permisos de administración, sube `index.html`, `estilos.css`, `interfaz.js`, `envios.js`, `envios.test.js`, `README.md` y `.nojekyll` a la raíz de `main`. Conserva `evidencias` para la entrega académica.
2. En **Settings → Pages**, elige **Deploy from a branch**, selecciona **main** y **/(root)**, y guarda.
3. Comprueba la ejecución en **Actions** y, cuando termine correctamente, abre la URL que aparece en **Pages** desde una ventana privada.
4. Confirma que carga el formulario, que `100000` da **Envío: 0 COP** y que el campo vacío muestra el mensaje de validación. Registra la URL y los resultados observados.
5. Si aparece una regresión, identifica el commit defectuoso, reviértelo con `git revert <commit>`, sube la reversión y repite la prueba de humo tras el nuevo despliegue.

## Documentación oficial

[Ejecutor de pruebas de Node.js](https://nodejs.org/api/test.html) · [Fuente de publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
