<?php
/**
 * Plugin Name: Pizarra Online Shortcode
 * Description: Añade una pizarra online básica para dibujo a mano alzada mediante el shortcode [pizarra_online].
 * Version: 1.0
 * Author: Tu Nombre
 */

if (!defined('ABSPATH')) {
    exit; // Salir si se accede directamente
}

// Registrar el Shortcode
function po_registrar_shortcode() {
    // Encolar los estilos y scripts propios del plugin
    wp_register_style('po-pizarra-style', plugins_url('pizarra.css', __FILE__));
    wp_register_script('po-pizarra-script', plugins_url('pizarra.js', __FILE__), array(), '1.0', true);

    // Retornar el HTML de la pizarra
    ob_start();

    // Aseguramos que se carguen los assets solo si el shortcode está activo
    wp_enqueue_style('po-pizarra-style');
    wp_enqueue_script('po-pizarra-script');
    ?>
    <div class="po-pizarra-contenedor" style="padding: 0.25em;">
        <canvas id="pizarraOnline" width="800" height="500"></canvas>
        <div class="po-pizarra-controles">
            <button id="btnLimpiar" class="po-btn">Limpiar Pizarra</button>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('pizarra_online', 'po_registrar_shortcode');