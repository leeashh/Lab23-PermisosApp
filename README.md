# 📱 PermisosApp — Laboratorio Semana 13

## 🧠 Flujo de permisos

- Al iniciar la app, se solicita permiso de **cámara** y **ubicación** usando `expo-camera` y `expo-location`.
- Se guarda el estado de cada permiso (`granted` o `denied`) en variables de estado.
- Se muestra en pantalla el estado actual:
  - ✅ `"Permitido"` en color verde
  - ❌ `"Denegado"` en color rojo
- Si el permiso fue denegado, se muestra una advertencia en texto rojo.
- Se incluye un botón **"Verificar nuevamente permisos"** que vuelve a ejecutar la comprobación.
- Se muestra un mensaje explicando por qué la app necesita cada permiso.

---
## 📄 Configuración en `app.json` (iOS)

Para que iOS muestre mensajes personalizados al solicitar permisos, se debe agregar el bloque `infoPlist` dentro de `"ios"`:

```json
"ios": {
  "infoPlist": {
    "NSCameraUsageDescription": "Esta app requiere acceso a la cámara para tomar fotos.",
    "NSLocationWhenInUseUsageDescription": "Se usa tu ubicación para mostrar contenido local."
  }
}
```

---

## 🖼️ Evidencia visual
A continuación se muestran capturas que evidencian el funcionamiento correcto de la app:

### Solicitud de permisos

Al iniciar la app, se solicita permiso de cámara y ubicación. Se muestra el estado actual en pantalla.

<div align="center">
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/cef9b626-9056-4877-a4f8-f4b3c879e3b4" />
</div>

<div align="center">
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/bb8be60b-bc06-4985-b1c3-5918497409b1" />
</div>

### Evidencia del sistema solicitando permisos

Captura del sistema mostrando el diálogo de solicitud de permisos.

<div align="center">
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/0877fb7b-a317-4ad0-94c9-4f8ee10d5dc9" />
</div>





