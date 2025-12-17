# Guía rápida: Programas (botones, títulos, tamaños e imágenes)

## Estructura actual
- Grid de programas: `src/app/programas/page.tsx`
  - 10 tarjetas (programas 1–10) linkean a `/programas/{n}`.
  - Imagen de cada tarjeta: `public/assets/programas/programa-{n}.webp`.
- Página de detalle de cada programa: `src/app/programas/[programId]/page.tsx`
  - Carga imágenes desde `public/assets/programas-inside` siguiendo el patrón `argentina{n}mitadX.webp` (por ejemplo: `argentina5mitad1.webp`, `argentina5mitad2.webp`).
  - Muestra todas las mitades encontradas para ese número, ordenadas por el sufijo `mitadX`.

## Cambiar cantidad de botones (programas)
1) Abrir `src/app/programas/page.tsx`.
2) En el grid, la cantidad está fija con `Array.from({ length: 10 }, ...)`.
3) Cambiar `10` por la cantidad deseada (ej.: 12 o 8).
4) Asegurarse de tener las imágenes de portada para cada tarjeta en `public/assets/programas/` con el nombre `programa-{n}.webp` para cada n existente.

## Cambiar títulos/etiquetas
Actualmente las tarjetas usan el texto “Programa {n}” implícitamente (en el alt de la imagen y la URL). Si quieres títulos personalizados visibles:
1) En `src/app/programas/page.tsx`, ubica donde se crea la tarjeta (dentro del map).
2) Añade un texto overlay o un `<p>` con el título deseado.
3) Opcional: crea un objeto de configuración con `{ [numero]: "Título" }` y úsalo para renderizar.

## Cambiar tamaños (portadas del grid)
- Las tarjetas usan relación `aspect-[3/4]`, imagen con `object-cover` y `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`.
- Para hacerlas más altas/bajas, ajusta `aspect-[3/4]`.
- Para controlar prioridad o calidad, ajusta `priority={index < 3}` y `quality={90}` en el componente `Image` del grid.

## Detalle de cada programa (imágenes internas)
- Ruta dinámica: `/programas/{n}`.
- Lee todas las imágenes en `public/assets/programas-inside` que cumplan `argentina{n}mitadX.webp`.
- Ordena por `X` (número después de `mitad`).
- Render a ancho amplio (`max-w-7xl`, imágenes 2000x3200, `object-contain`).

### Cómo agregar las imágenes internas
1) Coloca los archivos en `public/assets/programas-inside/`.
2) Nómbralos como `argentina{n}mitad1.webp`, `argentina{n}mitad2.webp`, etc. (sin espacios, todo minúsculas recomendado).
3) No necesitas editar código: al visitar `/programas/{n}`, se mostrarán todas las mitades encontradas para ese n.

### Ajustar tamaños en la página de detalle
- Archivo: `src/app/programas/[programId]/page.tsx`.
- Ajusta:
  - `max-w-7xl` y paddings en el contenedor para más/menos ancho.
  - Propiedades `width`/`height` del `Image` y `sizes` para controlar resolución y ancho efectivo.
  - `rounded-lg`, `shadow-sm`, `border` para el estilo de la tarjeta.

## Cambiar portadas del grid
- Ubicación: `public/assets/programas/`.
- Nombres: `programa-{n}.webp` (coincidir con cada programa existente).
- Reemplaza el archivo para cambiar la portada de un programa específico.

## Flujo típico para añadir un nuevo programa
1) Aumenta el `length` en `src/app/programas/page.tsx` si necesitas más de 10.
2) Añade la portada `public/assets/programas/programa-{n}.webp`.
3) Añade las mitades internas en `public/assets/programas-inside/` como `argentina{n}mitad1.webp`, `argentina{n}mitad2.webp`, etc.
4) Visita `/programas/{n}` para verificar que se renderizan.

## Notas
- No hay API ni fetch: todo es estático sobre `public/`.
- Los nombres de archivo no deben tener espacios.
- El rango permitido en detalle es 1–50 (configurable en `[programId]/page.tsx`).

