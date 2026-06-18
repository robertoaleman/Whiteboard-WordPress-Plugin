#Online Whiteboard WordPress Plugin

Sometimes you need to take notes quickly, and the best way is by using your fingers on your mobile phone screen. 
Instead of writing or leaving voice notes that you'll forget in 24 hours or less, I came up with the idea of ​​creating a 
WordPress plugin that allows you to quickly draw whatever you want to remember on the screen, both on desktop and mobile. 
It's a single color (maybe more colors and options will be added later), and when you're finished, you capture the screenshot 
and voila, you have a quick note of a diagram or whatever you want to remember.

* Plugin Name: Online Whiteboard Shortcode
* Description: Adds a basic online whiteboard for freehand drawing using the [pizarra_online] shortcode.
* Version: 1.0
* Author: Roberto C. Aleman F.
* License: GPL v3
* Web: https://ventics.com/online-whiteboard-wordpress-plugin/
* Text Domain: pizarra-online

Plugin Documentation: Online Whiteboard Shortcode
1. Introduction & Overview

Online Whiteboard Shortcode is a lightweight, high-performance WordPress plugin designed to seamlessly embed an interactive freehand drawing canvas into any post, page, or custom post type. By leveraging native modern web technologies—HTML5 Canvas, CSS3, and Vanilla JavaScript—the plugin provides an elegant scratchpad environment without relying on bloated external dependencies or heavy third-party libraries (such as jQuery or external drawing frameworks).

The core philosophy behind this plugin is architectural efficiency and absolute security. It operates completely on the client side (browser-level execution), resulting in zero server overhead, no database interaction, and a minimal footprint on your WordPress rendering pipeline.
2. Core Features

    Zero Dependencies: Built entirely with native browser APIs, ensuring lightning-fast execution and maximum compatibility.

    Context-Aware Asset Loading: Scripts (pizarra.js) and stylesheets (pizarra.css) are registered dynamically and only enqueued when the shortcode [pizarra_online] is present in the current rendering context. This prevents unnecessary asset bloat on unrelated pages.

    Deterministic Coordinate Mapping: Utilizes getBoundingClientRect() alongside element-to-buffer aspect ratio scaling. This ensures that the drawing stroke aligns pixel-perfectly with the mouse cursor or touch point, even when the canvas is fluidly resized by responsive CSS layouts.

    Passive Mobile Optimization: Overrides default viewport scrolling behavior specifically during touch interaction inside the active canvas zone, allowing a seamless, unhindered mobile drawing experience.

3. Architecture & File Structure

The plugin is structured monolithically into a single pluggable directory for ease of deployment and maintenance:

pizarra-online-plugin/

pizarra-online.php # Main execution file, shortcode definition, and asset registration.
pizarra.css # Structural layout and presentation rules for the UI.
pizarra.js # Low-level event handlers, drawing loops, and canvas context management.
Technical Workflow:

    Hook Registration: The plugin hooks into add_shortcode('pizarra_online', ...) during the WordPress initialization sequence.

    Output Buffering: Upon shortcode detection, an output buffer (ob_start) handles the injection of the HTML container asynchronously.

    Canvas Initialization: The JavaScript wrapper listens for DOMContentLoaded to establish a safe rendering context (2d) with explicit parameters:

        strokeStyle: #000000 (Pure black brush)

        lineWidth: 3 (Optimized baseline thickness for readability)

        lineCap / lineJoin: round (To ensure anti-aliased, fluid vector paths)

Quick Guide: How to use your Virtual Whiteboard

Welcome to your new quick-notes space! This virtual whiteboard is designed for you to write, draw, or scribble just as you would with a real pencil and paper, but directly on your screen.

No installation required on your phone or computer; everything works directly inside the web page.

 What does the whiteboard look like?
It is a clean white canvas with a dark border. Everything you draw or write will appear in black, ensuring your notes are perfectly clear to read.
? How to start using it (Step-by-Step)

Depending on the device you are currently using, follow these simple steps:
If you are on a Computer or Laptop:

    Move your mouse cursor inside the white canvas area.
    Press and hold the left-click button on your mouse and move your hand without releasing it. You will see a black line following your movement!
    When you finish a letter or a drawing, release the click. To write again, simply hold it down once more.

If you are on a Mobile Phone or Tablet:

    Use the tip of your finger just like a physical pen.
    Touch the screen inside the white canvas and drag your finger to write your notes or sketch ideas.
    Don’t worry about the page moving! While drawing inside the canvas, the web page will remain locked in place so it won’t scroll up or down accidentally.

 How to clear and start fresh?

If you made a mistake, ran out of space, or simply want to start a brand new note, it’s incredibly easy:

    Right below the whiteboard, you will find a button that says «Clear Board».
    Click or tap it once.
    Done! The canvas instantly becomes completely white again, like a fresh sheet of paper, ready for your next ideas.

 Great ideas to use your whiteboard:

    Quick grocery lists: Jot down those last-minute items before heading to the supermarket.
    Phone numbers: Quickly write down a number or an address while taking a call.
    Visual explanations: Sketch a quick map, an arrow, or a simple diagram to clarify a thought.
    Entertainment: Let the little ones doodle quickly with their fingers.

