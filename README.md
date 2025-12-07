#  Guía de Inicio para Desarrolladores Folkode Landing

##  Pasos para Contribuir al Proyecto

1. **Haz un fork del repositorio:**

   Ve a [https://github.com/FolkodeGroup/landing](https://github.com/FolkodeGroup/landing) y haz clic en "Fork".

2. **Clona tu fork en tu máquina local:**

```bash
git clone https://github.com/tu-usuario/landing.git # NO SE OLVIDEN DE PONER SU USARIO DE GITHUB
```

3. **Accede a la carpeta e instala las dependencias:**

```bash
cd landing # Cambias a la carpeta del proyecto
npm install # Instala las dependencias del proyecto
```

   Asegúrate de tener Node.js y npm instalados. Puedes verificarlo con:
```bash
node -v
npm -v
```
3.1 **Levanta el servidor de desarrollo:**

```bash
npm run dev
```
   Abre tu navegador en `http://localhost:3000` para ver la aplicación en funcionamiento.
   deberías ver la página de inicio de la landing page.


4. **Sincroniza tu fork con la última versión de `develop` antes de empezar:**

```bash
git checkout develop
git pull upstream develop
git push origin develop
```

5. **Crea una nueva rama para tu tarea asignada:**

```bash
git checkout -b feature/2.1/crear-componente-button
```


6. **Desarrolla el componente en el archivo correspondiente**  
   Ejemplo: `src/components/ui/Button.tsx`  
   
   Sigue la descripción y los criterios de aceptación definidos en ClickUp.

7. **Realiza commits pequeños y descriptivos conforme avances.**

8 . **Sube tu rama a tu fork en GitHub:**

```bash
git push -u origin nombre-de-la-rama
```


9. **Crea una Pull Request (PR) desde tu fork hacia `main` del repositorio original.**  

    En la descripción, enlaza la tarea de ClickUp y asígnale al revisor correspondiente.

---

# 🏗️ Arquitectura del Proyecto - Folkode Landing Page

## 📁 Estructura de Carpetas

### `/src/app`

**Propósito**: Contiene las páginas y rutas de la aplicación usando Next.js App Router

- `page.tsx` - Página principal
- `layout.tsx` - Layouts compartidos
- `loading.tsx` - Estados de carga
- `error.tsx` - Manejo de errores
- Carpetas para rutas anidadas

**Ejemplo**:

```
/src/app/
  ├── page.tsx          # Página principal (/)
  ├── layout.tsx        # Layout principal
  ├── about/
  │   └── page.tsx      # Página about (/about)
  └── services/
      └── page.tsx      # Página servicios (/services)
```

### `/src/components/ui`

**Propósito**: Componentes reutilizables básicos (botones, inputs, cards, etc.)

- Componentes pequeños y atómicos
- Sin lógica de negocio específica
- Altamente reutilizables en todo el proyecto

**Ejemplos**: `Button.tsx`, `Input.tsx`, `Card.tsx`, `Modal.tsx`

### `/src/components/layout`

**Propósito**: Componentes de estructura y navegación

- Header, Footer, Sidebar
- Componentes que definen la estructura de la página
- Navegación y elementos de layout

**Ejemplos**: `Header.tsx`, `Footer.tsx`, `Navbar.tsx`, `Sidebar.tsx`

### `/src/components/sections`

**Propósito**: Secciones específicas de la landing page

- Componentes grandes que representan secciones completas
- Hero, About, Services, Contact, etc.
- Combinan múltiples componentes UI

**Ejemplos**: `HeroSection.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`

### `/src/lib`

**Propósito**: Utilidades, funciones helper y configuraciones

- Funciones reutilizables
- Configuraciones de librerías externas
- Utilidades para validaciones, formateo, etc.

**Ejemplos**: `utils.ts`, `validations.ts`, `constants.ts`, `api.ts`

### `/src/styles`

**Propósito**: Archivos de estilos globales y configuraciones CSS

- Estilos globales
- Variables CSS customizadas
- Configuraciones adicionales de Tailwind

**Ejemplos**: `globals.css`, `components.css`, `utilities.css`

### `/src/types`

**Propósito**: Definiciones de tipos TypeScript

- Interfaces y tipos compartidos
- Tipos para APIs y datos
- Definiciones de propiedades de componentes

**Ejemplos**: `index.ts`, `api.ts`, `components.ts`

## 🎯 Convenciones de Nomenclatura

### Archivos y Componentes

- **Componentes**: PascalCase (`Button.tsx`, `HeroSection.tsx`)
- **Utilidades**: camelCase (`utils.ts`, `apiHelpers.ts`)
- **Tipos**: PascalCase con sufijo (`UserType.ts`, `ApiResponse.ts`)

### Carpetas

- **Carpetas**: kebab-case (`components`, `lib`, `types`)
- **Rutas**: kebab-case (`about-us`, `contact-form`)

## 📝 Reglas para el Desarrollo

### 1. **Componentes UI** (`/src/components/ui`)

- Deben ser completamente reutilizables
- Sin dependencias de estado global
- Documentar props con TypeScript interfaces
- Incluir variantes usando Tailwind classes

### 2. **Componentes de Layout** (`/src/components/layout`)

- Responsables de la estructura visual
- Pueden consumir estado global si es necesario
- Deben ser responsive por defecto

### 3. **Componentes de Sección** (`/src/components/sections`)

- Combinan múltiples componentes UI
- Contienen la lógica específica de cada sección
- Deben ser independientes entre sí

### 4. **Utilidades** (`/src/lib`)

- Funciones puras cuando sea posible
- Documentar con JSDoc
- Incluir tests unitarios

## 🚀 Flujo de Trabajo Recomendado

1. **Crear componente UI** → Testear aisladamente
2. **Componer en secciones** → Integrar múltiples componentes UI
3. **Implementar en páginas** → Usar secciones en las rutas
4. **Optimizar y refactorizar** → Mover lógica común a `/src/lib`

## 📚 Recursos Adicionales

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)

---

**¿Dudas?** Consulta en el canal de desarrollo del equipo o revisa la documentación oficial de las tecnologías utilizadas.

Este es un test para el setup de CI/CD.