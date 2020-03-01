Medianch and other native binaries for VoIP.
The SIP stack can work also without these files, but having them accessible might increase the voice quality and the availability of the optimal VoIP engine on multiple platforms.


DETAILS:

This folder contains optional platform dependent binaries for the VoIP engine.
These files are needed if you wish to enable the NS engine or use one of the following parameters: opus codec, aec (echo cancellation), agc (automatic gain control), denoise, silencesupress.
In case if your are using JVoIP then just copy these files in your native folder or the jar (unzip and copy the files near the webphone.jar or JVoIP.jar).
The files should be stored near the main jar file (on local file system or on your web server) and you might have to enable the dll and dylib mime type on your web server if used in a web project (or set the “mediaenchext” applet parameter to “jar” and rename dll with jar in file name extensions). If the files cannot be found or loaded than the webphone will just not use these features but will remain fully functional. 
When served from a webserver, the webphone will download one of these libraries only at the first usage. Subsequent usage will be served from the browser local cache.


In case if these files are not deployed correctly with your software, the SIP stack might still be able to use them auto-downloaded on demand from an external URL.

In case if you wish to ship it with your software:

If you are using JVoIP, unpack the mediaench.zip and copy the files near your webphone.jar or JVoIP.jar or into the native subfolder.

If you are using the webphone, enable mime types on your web server
Make sure that your web server allows the download of these resource types by allowing/adding the following mime types to your webserver configuration if not already added/allowed:
•	extension: .bin 	MIME type: application/octet-stream
•	extension: .dll 	MIME type: application/x-msdownload (or application/x-msdownload)
•	extension: .mxml	MIME type: application/octet-stream (or application/xv+xml)
•	extension: .exe 	MIME type: application/octet-stream (or application/x-msdownload)
•	extension: .jar 	MIME type: application/java-archive
•	extension: .jnilib	MIME type: application/java-archive
•	extension: .so  	MIME type: application/octet-stream
•	extension: .dylib	MIME type: application/octet-stream
•	extension: .pkg		MIME type: application/x-newton-compatible-pkg (or application/octet-stream)
•	extension: .swf		MIME type: application/x-shockwave-flash


Test the files availability by trying to download the files directly from your browser.
For example you should be able to download the mediaench.dll by entering it's exact URL in your browser:
https:\\yourdomain.com\path_to_webphone\mediaench.dll
If the browser doesn't initiate the file download (or displays an error) then you either typed the URL incorrectly or your web server doesn't allow the .dll mime type.
