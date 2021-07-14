APP PARA ACORTAR LINKS

Pequeña página para acortar links, básicamente esta compuesta por:



```diff
+ MODELO
```

Un único modeo que consta de 3 atributos:

fullUrl: La url completa que va a ser acortada.

shortUrl: Url acortada que es generada automaticamente.

clicks: Cantidad de clicks/interacciones con el link acortado.

```diff
+ ROUTES
```

Una ruta GET, encargada de renderizar el template con los links

Una ruta POST, donde se le envía la URL que se busca acortar, y esta ruta almacena la url acortada en el modelo.

Una ruta GET, que es la encargada de redireccionar la url acortada a la url original.
