# FULLSTYLE — web oficial

Landing page estática, responsive y administrable para **FULLSTYLE**, diseñada para convertir visitas en consultas por WhatsApp. Funciona sin backend y deja aislada la fuente de contenido para poder migrarla posteriormente a una API, CMS o base de datos.

El contenido visual real del negocio está integrado. Los precios permanecen como `null` y se muestran como “Consultar precio” hasta que el negocio confirme el tarifario.

## Tecnologías

- Astro y TypeScript estricto
- Tailwind CSS
- Lucide Icons
- HTML estático con JavaScript mínimo (solo menú móvil)

## Instalación y comandos

```bash
npm install
npm run dev
```

La terminal mostrará la URL local, normalmente `http://localhost:4321`.

```bash
npm run build    # valida TypeScript/Astro y genera dist/
npm run preview  # previsualiza el build
npm run check    # validación Astro/TypeScript
```

Al desplegar, configura la variable de entorno `SITE_URL` con el dominio público completo (por ejemplo, el dominio real con `https://`). Astro generará entonces canonical, Open Graph, `robots.txt` y `sitemap.xml` con la URL correcta. Puedes copiar `.env.example` como punto de partida; no se incluye un dominio ficticio.

## Arquitectura

```text
src/
├── components/
│   ├── layout/          # Navbar, footer y botón flotante
│   ├── sections/        # Secciones de la landing
│   └── ui/              # Cards y piezas reutilizables
├── config/              # Negocio y navegación
├── data/                # Fuentes locales temporales
├── layouts/             # Metadatos, JSON-LD y documento base
├── pages/               # Composición de páginas
├── repositories/        # Capa de acceso a contenido
├── styles/
├── types/               # Contratos de entidades
└── utils/               # WhatsApp y formato
```

Flujo de datos: `data/config → repository → page → component props`. Los componentes visuales no importan catálogos ni configuración comercial.

## Editar información del negocio

Todo se centraliza en `src/config/business.ts`:

- **WhatsApp:** cambia `whatsapp` usando solo código de país y números; cambia también `phone`, que es la presentación visible.
- **Correo:** cambia `email`.
- **Horario:** edita los registros de `openingHours`. El orden depende de `order`.
- **Ubicación local:** `locality`, `region` y `countryCode` alimentan el SEO estructurado. La configuración actual corresponde a Arequipa, Perú.
- **Redes:** reemplaza el `url: null` de Instagram, Facebook o TikTok por la URL real. Los enlaces aparecen automáticamente. Con `null` no se renderizan.

## Servicios

Los registros están en `src/data/services.ts`. Para agregar uno, añade un objeto que cumpla el tipo `Service` con un `id` único, `slug`, nombre, descripción, precio, estado y orden. No se modifica ningún componente. Usa `price: null` cuando el precio deba consultarse.

- `active: false` lo oculta.
- `featured: true` lo destaca.
- `order` controla su posición.
- `image` puede ser `null` o una ruta como `/images/services/fade.webp`.

Para cambiar o eliminar un precio, edita el registro correspondiente. Se recomienda desactivar (`active: false`) en lugar de eliminar cuando se quiera conservar historial para una futura base de datos.

## Productos

Los registros están en `src/data/products.ts` y siguen el mismo patrón.

- `active: false` oculta el producto completo.
- `available: false` conserva el producto y muestra “Consultar stock”.
- `featured`, `order`, `price` e `image` se administran desde el registro.

## Galería y fotografías

Las fotografías van en `public/images/`; dentro hay carpetas para `hero`, `services`, `products`, `gallery` y `about`, con tamaños recomendados en `public/images/README.md`.

- Hero: guarda `/public/images/hero/fullstyle-hero.webp` y asigna `heroImage: '/images/hero/fullstyle-hero.webp'` en `src/config/business.ts`.
- Servicios/productos: asigna la ruta en el campo `image` del registro.
- Galería: agrega o edita registros en `src/data/gallery.ts`. `visible: false` los oculta y `category` admite Fade, Clásico, Moderno, Barba u Otros.

Los placeholders actuales son deliberadamente discretos y no realizan peticiones externas.

## Ubicación

En `src/config/business.ts`, reemplaza:

```ts
address: 'Dirección real confirmada',
mapsUrl: 'URL real para abrir Google Maps',
mapsEmbedUrl: 'URL real de inserción de Google Maps',
```

Mientras estos valores sean `null`, se muestra “Ubicación próximamente”, no se crea un iframe y tampoco aparece un botón roto.

## Logo

Actualmente se usa el wordmark tipográfico `FULLSTYLE`. Para instalar el logo definitivo:

El logo oficial está instalado en `public/images/logo.webp` y configurado mediante `logo: '/images/logo.webp'` en `src/config/business.ts`.

Navbar y footer lo adoptarán automáticamente mediante el componente `Brand.astro`.

## Evolución futura

Los contratos `ServicesRepository`, `ProductsRepository` y `GalleryRepository` están en `src/repositories/types.ts`. Hoy sus implementaciones leen archivos locales. Para conectar un panel, CMS o API:

1. Implementa otro repositorio, por ejemplo `apiServicesRepository`, respetando `ServicesRepository`.
2. Obtén y normaliza la respuesta remota dentro del repositorio.
3. Sustituye la implementación importada en `src/pages/index.astro` o inyecta la implementación mediante un módulo de composición.
4. Conserva los tipos de `src/types` como contrato compartido, o adapta allí la respuesta de la API.

Las cards y secciones no necesitan cambios porque reciben entidades mediante props. Un futuro `/admin` puede escribir en la API/base de datos con los mismos campos (`id`, `slug`, estados, disponibilidad y orden) sin hacer que la landing dependa del panel.

Antes de publicar, confirma precios, dirección exacta, enlaces de Google Maps, redes y `SITE_URL`. Fotografías, logo, SEO local de Arequipa, metadatos sociales, `robots.txt` y sitemap ya están integrados.
