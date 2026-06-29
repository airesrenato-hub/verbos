#!/usr/bin/env python3
"""
Script para iniciar un servidor local y probar los juegos.

Uso:
    python3 start_server.py
    
Luego abre tu navegador en: http://localhost:8080
"""

import http.server
import socketserver
import webbrowser
import time

PORT = 8080

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=".", **kwargs)
    
    def do_GET(self):
        # Redirigir la raíz a index.html
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

def start_server():
    print(f"Iniciando servidor en http://localhost:{PORT}")
    print("Presiona Ctrl+C para detener el servidor")
    
    Handler = MyHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Servidor listo en puerto {PORT}")
        
        # Abrir el navegador automáticamente
        time.sleep(1)  # Esperar un segundo para que el servidor esté listo
        webbrowser.open(f"http://localhost:{PORT}")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido")

if __name__ == "__main__":
    start_server()
