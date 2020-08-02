import os
import http.server
import socketserver
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer


class WebServerHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        try:
            if self.path.endswith("index.html"):
                f = open(os.curdir + os.sep + self.path)

                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(f.read())

                f.close()
                return

        except IOError:
            self.send_error(404, 'File Not Found: %s' % self.path)


def main():
    try:
        server = HTTPServer(('', 8080), WebServerHandler)
        print 'started httpserver...'
        server.serve_forever()

    except KeyboardInterrupt:
        print(" ^C entered, stopping web server....")
        server.socket.close()

if __name__ == '__main__':
    main()
