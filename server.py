import http.server
import socketserver

Handler = http.server.SimpleHTTPRequestHandler


# class WebServerHandler(BaseHTTPRequestHandler):
#
#     def do_GET(self):
#         if self.path.endswith("/index.html"):
#             self.send_response(200)
#             self.send_header('Content-type', 'text/html')
#             self.end_headers()
#             # message = ""
#             # message += "<html><body>Hello!</body></html>"
#             # self.wfile.write(message)
#             # print(message)
#             return
#         else:
#             self.send_error(404, 'File Not Found: %s' % self.path)


def main():
    try:
        port = 8080
        with socketserver.TCPServer(("", port), Handler) as httpd:
            print("Web Server running on port %s" % port)
            httpd.serve_forever()
            # server = HTTPServer(('', port), WebServerHandler)

    except KeyboardInterrupt:
        print(" ^C entered, stopping web server....")
        server.socket.close()

if __name__ == '__main__':
    main()
