"""
Enjoy Holidays Tour and Travel, Katra
Lightweight Python Backend Server & Static File Server
Provides REST API endpoints for customer enquiries, packages, and settings persistence.
"""

import http.server
import socketserver
import json
import os
import sys
from urllib.parse import urlparse

PORT = 3000
DATA_DIR = os.path.join(os.path.dirname(__file__), "data")
ENQUIRIES_FILE = os.path.join(DATA_DIR, "enquiries.json")
SETTINGS_FILE = os.path.join(DATA_DIR, "settings.json")

# Ensure data directory exists
os.makedirs(DATA_DIR, exist_ok=True)

# Initialize files if not existing
if not os.path.exists(ENQUIRIES_FILE):
    with open(ENQUIRIES_FILE, "w", encoding="utf-8") as f:
        json.dump([], f, indent=2)

class EnjoyHolidaysHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for local testing
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        if path == "/api/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"status": "healthy", "service": "Enjoy Holidays Travel Backend"}).encode("utf-8"))
            return

        elif path == "/api/enquiries":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            try:
                with open(ENQUIRIES_FILE, "r", encoding="utf-8") as f:
                    data = json.load(f)
            except Exception:
                data = []
            self.wfile.write(json.dumps(data).encode("utf-8"))
            return

        # Serve static files (HTML, JS, CSS, JSON)
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path

        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)

        if path == "/api/enquiries":
            try:
                payload = json.loads(body.decode("utf-8"))
                
                # Read existing enquiries
                existing = []
                if os.path.exists(ENQUIRIES_FILE):
                    with open(ENQUIRIES_FILE, "r", encoding="utf-8") as f:
                        try:
                            existing = json.load(f)
                        except Exception:
                            existing = []
                
                # Append new enquiry
                existing.insert(0, payload)
                
                # Write back
                with open(ENQUIRIES_FILE, "w", encoding="utf-8") as f:
                    json.dump(existing, f, indent=2)

                print(f"[NEW ENQUIRY RECEIVED] From: {payload.get('fullName', 'N/A')}, Mobile: {payload.get('mobile', 'N/A')}, Dest: {payload.get('destination', 'N/A')}")

                self.send_response(201)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "message": "Enquiry saved successfully", "enquiry": payload}).encode("utf-8"))
            except Exception as e:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

def run_server(port=PORT):
    # Change working directory to this file's folder
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    server = None
    for p in [port, 3001, 8080, 8000]:
        try:
            server = socketserver.TCPServer(("127.0.0.1", p), EnjoyHolidaysHandler)
            print("=" * 70)
            print("*** ENJOY HOLIDAYS TOUR AND TRAVEL - KATRA, JAMMU & KASHMIR ***")
            print("=" * 70)
            print(f"Server successfully running at: http://localhost:{p}")
            print("Press Ctrl+C in terminal to stop the server.")
            print("=" * 70)
            server.serve_forever()
            break
        except OSError:
            continue

if __name__ == "__main__":
    run_server()
