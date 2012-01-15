# Wine Over IP

Wine Over IP is a simple service allowing you to share your wine photos
over twitter.

**Wine Over IP** is powered by Apache CouchDB and Python. All the frontend is a
couchapp.


## Requirements

- Apache CouchDB , better to use [The distribution
  rcouch](http://github.com/refuge/rcouch) proposed by the
[refuge](http://refuge.io) project.
- [couch_randomdoc](http://github.com/refuge/couch_randomdoc) extention
  to handle random document fetching in couchdb. It's already included
in rcouch.
- [Python 2.7](http://python.org)
- [Couchdbkit](http://couchdbkit.org)
- [Gevent](http://gevent.org)
- [Erica](http://github.com/benoitc/erica)


## Installation

1. Install rcouch and launch it.
2. push the couchapp to your rcouch

    $ cd couchapp/wineoverip
    $ erica push http://rcouch/wineoverip


3. Get the grabber from the source code of
   [wineoverip](http://github.com/benoitc/wineoverip) and install it

3. Launch the wine grabber

    $ go_grab_wine -c ~/.wineoverip.ini 

ex of ini:

    [wineoverip]
    server_uri = http://127.0.0.1:5984 ; uri of couchdb node
    db = wineoverip ; db where to save data
    q = #wineoverip ; query to do in twitter
    refresh_tim = 10 ; in seconds
