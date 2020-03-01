var allowed_domain_i = '*';
var webphoneframe = null;
var logtag = 'iframe_webphone: ';
var webphone_api = {};

// handle onLoaded
var onLoaded_IFRAME = null;
webphone_api.onLoaded = function (callback)
{
    onLoaded_IFRAME = callback;
    SendMessageToFrame('webphone_api.onLoaded');
};

// handle onStart
var onStart_IFRAME = null;
webphone_api.onStart = function (callback)
{
    onStart_IFRAME = callback;
    SendMessageToFrame('webphone_api.onStart');
};

// handle onRegistered
var onRegistered_IFRAME = null;
webphone_api.onRegistered = function (callback)
{
    onRegistered_IFRAME = callback;
    SendMessageToFrame('webphone_api.onRegistered');
};

// handle onUnRegistered
var onUnRegistered_IFRAME = null;
webphone_api.onUnRegistered = function (callback)
{
    onUnRegistered_IFRAME = callback;
    SendMessageToFrame('webphone_api.onUnRegistered');
};

// handle onCallStateChange
var onCallStateChange_IFRAME = null;
webphone_api.onCallStateChange = function (callback)
{
    onCallStateChange_IFRAME = callback;
    SendMessageToFrame('webphone_api.onCallStateChange');
};

// handle onChat
var onChat_IFRAME = null;
webphone_api.onChat = function (callback)
{
    onChat_IFRAME = callback;
    SendMessageToFrame('webphone_api.onChat');
};

// handle onCdr
var onCdr_IFRAME = null;
webphone_api.onCdr = function (callback)
{
    onCdr_IFRAME = callback;
    SendMessageToFrame('webphone_api.onCdr');
};



webphone_api.start = function () { SendMessageToFrame('webphone_api.start(webphone_api.parameters)'); };
webphone_api.stop = function () { SendMessageToFrame('webphone_api.stop()'); };
webphone_api.register = function () { SendMessageToFrame('webphone_api.register(webphone_api.parameters)'); };
webphone_api.call = function (number)
{
    PutToDebugLog(5, 'iframe_helper call to number: ' + number.toString());
    //SendMessageToFrame('webphone_api.call(' + number.toString() + ')');
    SendMessageToFrame('webphone_api.call("' + number.toString() + '")');
};
webphone_api.videocall = function (number)
{
    PutToDebugLog(5, 'iframe_helper videocall to number: ' + number.toString());
    SendMessageToFrame('webphone_api.videocall("' + number.toString() + '")');
};
webphone_api.hangup = function () { SendMessageToFrame('webphone_api.hangup()'); };
webphone_api.accept = function () { SendMessageToFrame('webphone_api.accept()'); };
webphone_api.reject = function () { SendMessageToFrame('webphone_api.reject()'); };
webphone_api.ignore = function () { SendMessageToFrame('webphone_api.ignore()'); };

webphone_api.getavailablecallfunc = function ()
{
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.getavailablecallfunc();
    }
    PutToDebugLog(2, logtag + 'ERROR, getavailablecallfunc webphoneframe is NULL');
};

webphone_api.getlastcalldetails = function ()
{
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.getlastcalldetails();
    }
    PutToDebugLog(2, logtag + 'ERROR, getlastcalldetails webphoneframe is NULL');
};

webphone_api.forward = function (number) { SendMessageToFrame('webphone_api.forward("' + number.toString() + '")'); };
webphone_api.conference = function (number, add) { SendMessageToFrame('webphone_api.conference("' + number.toString() + ',' + add + '")'); };
webphone_api.transfer = function (number) { SendMessageToFrame('webphone_api.transfer("' + number.toString() + '")'); };
webphone_api.dtmf = function (message) { SendMessageToFrame('webphone_api.dtmf("' + message.toString() + '")'); };
webphone_api.mute = function (mute, direction) { SendMessageToFrame('webphone_api.mute(' + mute + ', ' + direction + ')'); };

webphone_api.ismuted = function ()
{
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.ismuted();
    }
    PutToDebugLog(2, logtag + 'ERROR, ismuted webphoneframe is NULL');
};

webphone_api.hold = function (state) { SendMessageToFrame('webphone_api.hold(' + state + ')'); };

webphone_api.isonhold = function ()
{
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.isonhold();
    }
    PutToDebugLog(2, logtag + 'ERROR, isonhold webphoneframe is NULL');
};

webphone_api.sendchat = function (number, msg) { SendMessageToFrame('webphone_api.sendchat("' + number.toString() + '","' + msg.toString() + '")'); };
webphone_api.sendsms = function (number, msg, from) { SendMessageToFrame('webphone_api.sendsms("' + number.toString() + '","' + msg.toString() + '","' + from.toString() + '")'); };
webphone_api.voicerecord = function (bool, url) { SendMessageToFrame('webphone_api.voicerecord(' + bool + ',"' + url + '")'); };
webphone_api.audiodevice = function () { SendMessageToFrame('webphone_api.audiodevice()'); };
webphone_api.devicepopup = function () { SendMessageToFrame('webphone_api.devicepopup()'); };

// handle getaudiodevicelist OLD
var getaudiodevicelist_IFRAME = null;
webphone_api.getaudiodevicelist = function (dev, callback)
{
    getaudiodevicelist_IFRAME = callback;
    SendMessageToFrame('webphone_api.getaudiodevicelist#' + dev);
};
// handle getdevicelist NEW
var getdevicelist_IFRAME = null;
webphone_api.getdevicelist = function (dev, callback)
{
    getdevicelist_IFRAME = callback;
    SendMessageToFrame('webphone_api.getdevicelist#' + dev);
};


// handle getaudiodevice OLD
var getaudiodevice_IFRAME = null;
webphone_api.getaudiodevice = function (dev, callback)
{
    getaudiodevice_IFRAME = callback;
    SendMessageToFrame('webphone_api.getaudiodevice#' + dev);
};
// handle getdevice NEW
var getdevice_IFRAME = null;
webphone_api.getdevice = function (dev, callback)
{
    getdevice_IFRAME = callback;
    SendMessageToFrame('webphone_api.getdevice#' + dev);
};



webphone_api.setaudiodevice = function (dev, devicename, immediate) { SendMessageToFrame('webphone_api.setaudiodevice("' + dev + '", "' + devicename + '", "' + immediate + '")'); };
webphone_api.setdevice = function (dev, devicename, immediate) { SendMessageToFrame('webphone_api.setdevice("' + dev + '", "' + devicename + '", "' + immediate + '")'); };



webphone_api.setvolume = function (dev, volume) { SendMessageToFrame('webphone_api.setvolume("' + dev + '", "' + volume + '")'); };

// handle getvolume
var getvolume_IFRAME = null;
webphone_api.getvolume = function (dev, callback)
{
    getvolume_IFRAME = callback;
    SendMessageToFrame('webphone_api.getvolume#' + dev);
};

webphone_api.setparameter = function (param, value) { SendMessageToFrame('webphone_api.setparameter("' + param + '", "' + value + '")'); };

webphone_api.getparameter = function (param)
{
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.getparameter(param);
    }
    PutToDebugLog(2, logtag + 'ERROR, getparameter webphoneframe is NULL');
};

webphone_api.setline = function (line) { SendMessageToFrame('webphone_api.setline("' + line + '")'); };

webphone_api.getline = function ()
{
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.getline();
    }
    PutToDebugLog(2, logtag + 'ERROR, getline webphoneframe is NULL');
};

webphone_api.isregistered = function ()
{   
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.isregistered();
    }
    PutToDebugLog(2, logtag + 'ERROR, isregistered webphoneframe is NULL');
};

webphone_api.isincall = function ()
{
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.isincall();
    }
    PutToDebugLog(2, logtag + 'ERROR, isincall webphoneframe is NULL');
};

webphone_api.unregister = function () { SendMessageToFrame('webphone_api.unregister()'); };
webphone_api.checkpresence = function (userlist) { SendMessageToFrame('webphone_api.checkpresence("' + userlist + '")'); };
webphone_api.setpresencestatus = function (statustring) { SendMessageToFrame('webphone_api.setpresencestatus("' + statustring + '")'); };

webphone_api.isencrypted = function ()
{
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.isencrypted();
    }
    PutToDebugLog(2, logtag + 'ERROR, isencrypted webphoneframe is NULL');
};

webphone_api.setsipheader = function (header) { SendMessageToFrame('webphone_api.setsipheader("' + header + '")'); };

// handle getvolume
var getsipheader_IFRAME = null;
webphone_api.getsipheader = function (header, callback)
{
    getsipheader_IFRAME = callback;
    SendMessageToFrame('webphone_api.getsipheader#' + header);
};

// handle getsipmessage
var getsipmessage_IFRAME = null;
webphone_api.getsipmessage = function (dir, type,callback)
{
    getsipmessage_IFRAME = callback;
    SendMessageToFrame('webphone_api.getsipmessage#' + dir + ',' + type + ',' + callback);
};

// handle ondisplay
var ondisplay_IFRAME = null;
webphone_api.ondisplay = function (callback)
{
    ondisplay_IFRAME = callback;
    SendMessageToFrame('webphone_api.ondisplay');
};

// handle getworkdir
var getworkdir_IFRAME = null;
webphone_api.getworkdir = function (callback)
{
    getworkdir_IFRAME = callback;
    SendMessageToFrame('webphone_api.getworkdir');
};

webphone_api.delsettings = function (level) { SendMessageToFrame('webphone_api.delsettings(' + level + ')'); };

webphone_api.getenginename = function ()
{
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.getenginename();
    }
    PutToDebugLog(2, logtag + 'ERROR, getenginename webphoneframe is NULL');
};

// handle getlastinvite
var getlastinvite_IFRAME = null;
webphone_api.getlastinvite = function (callback)
{
    getlastinvite_IFRAME = callback;
    SendMessageToFrame('webphone_api.getlastinvite');
};

// handle onLog
var onLog_IFRAME = null;
webphone_api.onLog = function (callback)
{
    onLog_IFRAME = callback;
    SendMessageToFrame('webphone_api.onLog');
};

webphone_api.getlogs = function ()
{
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.getlogs();
    }
    PutToDebugLog(2, logtag + 'ERROR, getlogs webphoneframe is NULL');
};

// handle getEvents
var getEvents_IFRAME = null;
webphone_api.getEvents = function (callback)
{
    getEvents_IFRAME = callback;
    SendMessageToFrame('webphone_api.getEvents');
};

webphone_api.getStatus = function ()
{
    InitializeHandler();
    if (!isNull(webphoneframe))
    {
        return webphoneframe.webphone_api.getStatus();
    }
    PutToDebugLog(2, logtag + 'ERROR, getStatus webphoneframe is NULL');
};

// handle getregfailreason
var getregfailreason_IFRAME = null;
webphone_api.getregfailreason = function (callback, extended)
{
    getregfailreason_IFRAME = callback;
    SendMessageToFrame('webphone_api.getregfailreason#' + extended);
};
















function BtnClick()
{
    /*
    webphone_api.call('xxxxxx');
    webphone_api.onCallStateChange(function (status, direction, peer, peername)
    {
        alert(status + '; direction: ' + direction);
    });*/
}

function SendMessageToFrame(msg)
{
    try{
    if (isNull(msg) || msg.length < 1)
    {
        PutToDebugLog(2, logtag + 'ERROR, SendMessageToFrame invalid message: ' + msg);
        return;
    }

    var wpiframe = document.getElementById('webphoneframe');
    if (isNull(wpiframe))
    {
        PutToDebugLog(2, logtag + 'ERROR, SendMessageToFrame [webphoneframe] not found');
        return;
    }
    
    if (isNull(webphoneframe)) { webphoneframe = document.getElementById('webphoneframe').contentWindow; }
    if (isNull(webphoneframe))
    {
        PutToDebugLog(2, logtag + 'ERROR, SendMessageToFrame webphoneframe is NULL');
        return;
    }

    InitializeHandler();
    webphoneframe.postMessage(msg, allowed_domain_i); //send the message and target URI
    
    } catch(err) { PutToDebugLogException(2, logtag + "SendMessageToFrame", err); }
}

var initcounter = null;
var initcallednr = 0;
window.onload = function ()
{
    InitializeHandler();
};

var flag_inithandlercalled = false;
function InitializeHandler()
{
    try{
    if (flag_inithandlercalled === true) { return; }
    flag_inithandlercalled = true;
    PutToDebugLog(2, logtag + 'EVENT, InitializeHandler, eventlistener attached to window');
    webphoneframe = document.getElementById('webphoneframe').contentWindow;
    
// send a message to iframe, so it has the parent page to be able to send back message (initialize parent_page_i)
    initcounter = setInterval(function ()
    {
        initcallednr++;
        SendMessageToFrame('initialize_connection');
        
        if (initcallednr > 1200)
        {
            initcallednr = 0;
            if (!isNull(initcounter)) { clearInterval(initcounter); }
            initcounter = null;
        }
    }, 100);

    //listen to holla back
    window.addEventListener('message',function(event)
    {
        try{
//	if(event.origin !== allowed_domain_i) return;
        eval(event.data);

        } catch(err) { PutToDebugLogException(2, logtag + "window.onmessage", err); }
    },false);
    
    } catch(err) { PutToDebugLogException(2, logtag + "InitializeHandler", err); }
}

/** Helper functions*/
function isNull (variable) { try{ if (typeof (variable) === 'undefined' || variable === null) { return true; }else { return false; } } catch(err) { PutToDebugLogException(2, logtag + "isNull", err); } return true; }
function Trim(str){ try{ if (isNull(str) || str.lenght < 1) { return ''; } str = str.toString(); return str.replace(/^\s+|\s+$/g, '');  } catch(err) { PutToDebugLogException(2, logtag + "Trim", err); } return str;}
function PutToDebugLogException(level, msg, err) { PutToDebugLog(level, 'ERROR,' + msg + ' ' + err); }
function PutToDebugLog(level, msg) { if (msg.indexOf("ERROR") > -1) { try { console.error(msg); } catch (e1) {  } }else { try { console.log(msg); } catch (e2) {  } } }