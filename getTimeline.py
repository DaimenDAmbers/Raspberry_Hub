from access import TwitterAccess
import queue
import threading, time

request = TwitterAccess()
if __name__ == "__main__":
    while True:
        request.getHomeTimeLine()
        time.sleep(5)

## Next you'll need to create a an html page that will take in the object received from this method ##
