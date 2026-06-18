document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("pizarraOnline");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const btnLimpiar = document.getElementById("btnLimpiar");

    // Configuración del trazo (Negro por defecto)
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let dibujando = false;

    // Obtener la posición exacta del cursor/toque relativa al canvas
    function obtenerPosicion(e) {
        const rect = canvas.getBoundingClientRect();
        
        // Soporte para eventos táctiles (Mobile) o de ratón (Desktop)
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        // Escalado por si el CSS redimensiona el canvas en pantallas pequeñas
        return {
            x: (clientX - rect.left) * (canvas.width / rect.width),
            y: (clientY - rect.top) * (canvas.height / rect.height)
        };
    }

    function empezarDibujo(e) {
        dibujando = true;
        const pos = obtenerPosicion(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        // Evita el scroll de la página en dispositivos móviles al dibujar
        if(e.touches) e.preventDefault();
    }

    function dibujar(e) {
        if (!dibujando) return;
        const pos = obtenerPosicion(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        if(e.touches) e.preventDefault();
    }

    function detenerDibujo() {
        dibujando = false;
        ctx.closePath();
    }

    // Eventos de Ratón (Desktop)
    canvas.addEventListener("mousedown", empezarDibujo);
    canvas.addEventListener("mousemove", dibujar);
    canvas.addEventListener("mouseup", detenerDibujo);
    canvas.addEventListener("mouseleave", detenerDibujo);

    // Eventos Táctiles (Móviles / Tablets)
    canvas.addEventListener("touchstart", empezarDibujo, { passive: false });
    canvas.addEventListener("touchmove", dibujar, { passive: false });
    canvas.addEventListener("touchend", detenerDibujo);

    // Funcionalidad del botón Limpiar
    btnLimpiar.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});