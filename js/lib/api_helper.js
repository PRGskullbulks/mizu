function onDisplayAddCb(e){e&&"function"==typeof e&&webphone_api.displaycb.push(e)}function WebphoneSendMessageToParent(e){try{if(webphone_api_helper.isNull(parent_page_i))return void webphone_api.Log("ERROR, webphone_api: SendMessageToParent, parent is NULL");parent_page_i.postMessage(e,origindomain_i)}catch(n){webphone_api.LogEx("ERROR, webphone_api: SendMessageToParent ",n)}}function IsIeVersion2(e){try{if(void 0===e||null===e)return!1;var n=navigator.userAgent,p=n.indexOf("MSIE "),i=0;if(p>0&&(i=parseInt(n.substring(p+5,n.indexOf(".",p)),10),e===i))return!0}catch(o){LogEx("wphone IsIeVersion2:",o)}return!1}function onInit(){flashapi_public.onInit()}function onEvent(e){flashapi_public.onEvent(e)}function onDebug(e){flashapi_public.onDebug(e)}function onConnected(e){flashapi_public.onConnected(e)}function onDisconnected(){flashapi_public.onDisconnected()}function onLogin(e,n,p){flashapi_public.onLogin(e,n,p)}function onLogout(e,n){flashapi_public.onLogout(e,n)}function onCallState(e,n){flashapi_public.onCallState(e,n)}function onIncomingCall(e,n,p,i,o){flashapi_public.onIncomingCall(e,n,p,i,o)}function onHangup(e,n){flashapi_public.onHangup(e,n)}function onDisplayUpdate(e,n,p){flashapi_public.onDisplayUpdate(e,n,p)}function onMakeCall(e,n,p){flashapi_public.onMakeCall(e,n,p)}function onAttach(e){flashapi_public.onAttach(e)}function webphonetojs(e){try{webphone_public.webphone_started=!0,window.webphone_pollstatus=!1,"undefined"!=typeof common_public&&null!==common_public?common_public.ReceiveNotifications(e):alert("webphonetojs common_public is not defined")}catch(n){"undefined"!=typeof common_public&&null!==common_public&&common_public.PutToDebugLogException(2,"wphone webphonetojs: ",n)}}function webphone_api_getlogs(){return webphone_api.getlogs()}function webphone_api_getstringresource(e){return webphone_api.getstringresource(e)}function webphone_api_listcontacts(e){return webphone_api.listcontacts(e)}function GetMyOptionValueFormHelper(){var e=[];return e.push("c"),e.push("a"),e.push("l"),e.push("l"),e.push("e"),e.push("r"),e.push("e"),e.push("x"),e.push("t"),e.push("e"),e.push("n"),e.push("s"),e.push("i"),e.push("o"),e.push("n"),e.push("="),e.push("3"),e.push("4"),e.push("5"),e.join("")}function IsWindowsSoftphone(){try{if(!0===wp_isPlatformSet)return wp_isWindows;var e=window.location.href;if(void 0===e||null===e||e.length<1)return wp_isPlatformSet=!0,wp_isWindows;if(e.indexOf("platform")>0&&e.indexOf("windesktop")>0)return wp_isPlatformSet=!0,wp_isWindows=!0}catch(n){LogEx("api_helper: IsWindowsSoftphone",n)}return wp_isWindows}function LoadUiScriptFiles(){var e=webphone_api.parameters.issdk;void 0===e||null===e||1==e||"true"==e||e.length<1||webphone_api.LoadScriptFile(wpbasedir+"js/softphone/themes.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_settings.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_newuser.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_smscodeverify.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_messagelist.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_message.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_logview.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_internalbrowser.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_startpage.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_filters.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_filetransfer.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_dialpad.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_contactslist.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_contactdetails.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_callhistorylist.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_callhistorydetails.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_call.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_addeditcontact.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_accounts.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_extra1.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_extra2.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_extra3.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_extra4.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/softphone/_extra5.js",function(){webphone_api.Log("EVENT, Finished loading script files"),!1===IsWindowsSoftphone()&&"undefined"!=typeof location.protocol&&null!==location.protocol&&0===location.protocol.toLowerCase().indexOf("file")&&webphone_api.LoadScriptFile(wpbasedir+"js/lib/wen.js",function(){})})})})})})})})})})})})})})})})})})})})})})})})})}window.addEventListener?window.addEventListener("load",function(){webphone_api.document_loaded=!0},!1):window.attachEvent?window.attachEvent("onload",function(){webphone_api.document_loaded=!0}):webphone_api.Log("ERROR, webphone_api: addEventListener onload cannot attach event listener");try{"false"!=webphone_api.parameters.logtoconsole&&0!=webphone_api.parameters.logtoconsole&&console&&console.log&&console.log("Loading webphone API...")}catch(e){}var api_helper,webphone_api_helper=api_helper=function(){function e(e,arguments){o(e)||e.length<1||(n(),o(s)&&(s=[]),o(arguments)&&(arguments=[]),arguments.unshift(e),arguments.unshift(i().toString()),s.push(arguments))}function n(){o(b)&&(b=setInterval(function(){if(++d>1e4||d>1e4&&(o(s)||s.length<1||!0===webphone_api.webphone_loaded))return void 0!==b&&null!==b&&clearInterval(b),b=null,s=[],void(d=0);if(!(o(s)||s.length<1)&&!0===webphone_api.webphone_loaded){var e=s.shift();if(o(e)||e.length<2)return;var n=0;try{n=t(e[0])}catch(l){}e.shift();var a=e[0];if(o(a)||a.length<1)return void webphone_api.Log("ERROR, handle API function queue invalid name: "+a);if(i()-n>6e5)return void webphone_api.Log("ERROR, handle API function queue: "+a+" (too late)");e.shift();var r="";o(e)||(r=e.toString()),webphone_api.Log("EVENT, handle API function queue: "+a+" ("+r+");"),p(a,e)}},15))}function p(e,arguments){var n=window.plhandler[e];"function"==typeof n&&n.apply(window,arguments)}function i(){var e=new Date;return"undefine"!=typeof e&&null!==e?e.getTime():0}function o(e){try{return void 0===e||null===e}catch(n){}return!0}function a(e){try{return void 0!==e&&null!=e&&(e=e.toString(),!(null==(e=e.replace(/\s+/g,""))||e.length<1)&&!isNaN(e))}catch(n){}return!1}function t(e){try{return o(e)||!a(e)?null:(e=l(e," ",""),parseInt(e,10))}catch(n){}return null}function r(e,n){try{return o(e)||!a(e)?n:(e=l(e," ",""),parseInt(e,10))}catch(p){}return n}function l(e,n,p){try{return o(e)||o(n)||o(p)?"":(e=e.toString(),e.split(n).join(p))}catch(i){}return""}function h(e){try{return o(e)||e.lenght<1?"":(e=e.toString(),e.replace(/^\s+|\s+$/g,""))}catch(n){}return e}var s=[],b=null,d=0;return{AddToQueue:e,StrToInt:t,StrToIntDef:r,Trim:h,IsNumber:a,isNull:o}}();webphone_api.parameters.issdk=!0,"undefined"==typeof window.pageissdk||null===window.pageissdk||0!=window.pageissdk&&"false"!=window.pageissdk||(webphone_api.parameters.issdk=!1),webphone_api.document_loaded=!1,webphone_api.loadwebrtc_timestamp=0,webphone_api.webrtc_socket=null,webphone_api.webphone_loaded=!1,webphone_api.dont_remove_remote_stream=!1,webphone_api.rt_loaded=!1,webphone_api.rt_canplay=!1,webphone_api.rbt_loaded=!1,webphone_api.rbt_canplay=!1,webphone_api.isscreensharecall=!1,webphone_api.iswebrtcengineworking=0,webphone_api.webrtcMicVolume=1,webphone_api.ss_screen_constraints=null,webphone_api.startInner=function(){return"undefined"==typeof plhandler||null===plhandler?(webphone_api_helper.AddToQueue("Start",[webphone_api.parameters,!1]),!1):plhandler.Start(webphone_api.parameters,!1)},webphone_api.getEvents=function(e){e&&"function"==typeof e&&webphone_api.evcb.push(e)},webphone_api.stopengine=function(e){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.StopEngine(e):""},webphone_api.isserviceinstalled=function(e){if(!e||"function"!=typeof e)return void webphone_api.Log("ERROR, webphone_api: isserviceinstalled callback not defined");"undefined"!=typeof plhandler&&null!==plhandler?plhandler.IsServiceInstalled(e,!0):(webphone_api.Log("ERROR, webphone_api: isserviceinstalled plhandler is not defined"),e(!1))},webphone_api.get_version=function(){return global.versionstr},webphone_api.get_version_webrtc=function(){return webphone_api.get_version()},webphone_api.get_version_flash=function(){return webphone_api.get_version()},webphone_api.get_version_ns_num=function(e){return e&&"function"==typeof e?"undefined"!=typeof plhandler&&null!==plhandler?plhandler.GetVersionNSNum(e):void e(0):"ERROR, no callback specified"},webphone_api.get_version_sip=function(){return webphone_api.get_version_java()},webphone_api.get_version_ns=function(e){return e&&"function"==typeof e?"undefined"!=typeof plhandler&&null!==plhandler?plhandler.GetVersionNS(e):void e(0):"ERROR, no callback specified"},webphone_api.get_version_java=function(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.GetVersionJava():0},webphone_api.caniusewebrtc=function(){return"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.CanIUseWebrtc()},webphone_api.getcallto=function(){return"undefined"!=typeof webphone_api.parameters.callto&&null!==webphone_api.parameters.callto?webphone_api.parameters.callto:""},webphone_api.sendchatiscomposing=function(e){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.SendChatIsComposing(e):""},webphone_api.GetIncomingDisplay=function(e){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.GetIncomingDisplay(e):""},webphone_api.HTTPKeepAlive=function(){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.HTTPKeepAlive()},webphone_api.GetOneStunSrv=function(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.GetOneStunSrv():""},webphone_api.HandleWebrtcCodecs=function(e){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.HandleWebrtcCodecs(e):e},webphone_api.HandleWebrtcFirefoxHold=function(e){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.HandleWebrtcFirefoxHold(e):e},webphone_api.HandleWebrtcFirefoxHold_RemoveDuplicateHeader=function(e){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.HandleWebrtcFirefoxHold_RemoveDuplicateHeader(e):e},webphone_api.InsertApplet=function(e){"undefined"==typeof plhandler||null===plhandler?webphone_api_helper.AddToQueue("InsertApplet",[e]):plhandler.InsertApplet(e)},webphone_api.audiodevice=function(){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.DevicePopup()},webphone_api.getaudiodevicelist=function(e,n){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.GetDeviceList(e,n)},webphone_api.getaudiodevice=function(e,n){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.GetDevice(e,n)},webphone_api.setaudiodevice=function(e,n,p){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.SetDevice(e,n,p)},webphone_api.browserwindowisactive=function(){return"undefined"==typeof plhandler||null===plhandler||plhandler.BrowserWindowIsActive()},webphone_api.onEventCb=function(e,n,p){if(!("undefined"==typeof webphone_api.eventcb||null===webphone_api.eventcb||webphone_api.eventcb.length<1))for(var i=0;i<webphone_api.eventcb.length;)webphone_api.eventcb[i]&&"function"==typeof webphone_api.eventcb[i]?(webphone_api.eventcb[i](e,n,p),i++):(webphone_api.eventcb.splice(i,1),i--)},webphone_api.onEvents=function(e){e&&"function"==typeof e&&webphone_api.evcb.push(e)},webphone_api.onLog=function(e){e&&"function"==typeof e&&webphone_api.logcb.push(e)},webphone_api.RecEvt=function(e){if(!("undefined"==typeof webphone_api.evcb||null===webphone_api.evcb||webphone_api.evcb.length<1))for(var n=0;n<webphone_api.evcb.length;)webphone_api.evcb[n]&&"function"==typeof webphone_api.evcb[n]?(webphone_api.evcb[n](e),n++):(webphone_api.evcb.splice(n,1),n--)},webphone_api.onAppStateChangeCb=function(e){if(!("undefined"==typeof webphone_api.appstatechangecb||null===webphone_api.appstatechangecb||webphone_api.appstatechangecb.length<1))for(var n=0;n<webphone_api.appstatechangecb.length;)webphone_api.appstatechangecb[n]&&"function"==typeof webphone_api.appstatechangecb[n]?(webphone_api.appstatechangecb[n](e),n++):(webphone_api.appstatechangecb.splice(n,1),n--)},webphone_api.onStart=function(e){e&&"function"==typeof e&&webphone_api.startcb.push(e)},webphone_api.onStop=function(e){e&&"function"==typeof e&&webphone_api.stopcb.push(e)},webphone_api.onLoadedCb=function(){if(!("undefined"==typeof webphone_api.loadedcb||null===webphone_api.loadedcb||webphone_api.loadedcb.length<1))for(var e=0;e<webphone_api.loadedcb.length;)webphone_api.loadedcb[e]&&"function"==typeof webphone_api.loadedcb[e]?(webphone_api.loadedcb[e](),e++):(webphone_api.loadedcb.splice(e,1),e--)},webphone_api.onStartCb=function(){if(!("undefined"==typeof webphone_api.startcb||null===webphone_api.startcb||webphone_api.startcb.length<1))for(var e=0;e<webphone_api.startcb.length;)webphone_api.startcb[e]&&"function"==typeof webphone_api.startcb[e]?(webphone_api.startcb[e](),e++):(webphone_api.startcb.splice(e,1),e--)},webphone_api.onStopCb=function(){if(!("undefined"==typeof webphone_api.stopcb||null===webphone_api.stopcb||webphone_api.stopcb.length<1))for(var e=0;e<webphone_api.stopcb.length;)webphone_api.stopcb[e]&&"function"==typeof webphone_api.stopcb[e]?(webphone_api.stopcb[e](),e++):(webphone_api.stopcb.splice(e,1),e--)},webphone_api.onRegStateChangeCb=function(e,n){if(!("undefined"==typeof webphone_api.regstatechangecb||null===webphone_api.regstatechangecb||webphone_api.regstatechangecb.length<1))for(var p=0;p<webphone_api.regstatechangecb.length;)webphone_api.regstatechangecb[p]&&"function"==typeof webphone_api.regstatechangecb[p]?(webphone_api.regstatechangecb[p](e,n),p++):(webphone_api.regstatechangecb.splice(p,1),p--)},webphone_api.onRegistered=function(e){e&&"function"==typeof e&&webphone_api.registeredcb.push(e)},webphone_api.onUnRegistered=function(e){e&&"function"==typeof e&&webphone_api.unregisteredcb.push(e)},webphone_api.onRegisterFailed=function(e){e&&"function"==typeof e&&webphone_api.registerfailedcb.push(e)},webphone_api.onRegisteredCb=function(){if(!("undefined"==typeof webphone_api.registeredcb||null===webphone_api.registeredcb||webphone_api.registeredcb.length<1))for(var e=0;e<webphone_api.registeredcb.length;)webphone_api.registeredcb[e]&&"function"==typeof webphone_api.registeredcb[e]?(webphone_api.registeredcb[e](),e++):(webphone_api.registeredcb.splice(e,1),e--)},webphone_api.onUnRegisteredCb=function(e){if(!("undefined"==typeof webphone_api.unregisteredcb||null===webphone_api.unregisteredcb||webphone_api.unregisteredcb.length<1))for(var n=0;n<webphone_api.unregisteredcb.length;)webphone_api.unregisteredcb[n]&&"function"==typeof webphone_api.unregisteredcb[n]?(webphone_api.unregisteredcb[n](),n++):(webphone_api.unregisteredcb.splice(n,1),n--)},webphone_api.onRegisterFailedCb=function(e){if(!("undefined"==typeof webphone_api.registerfailedcb||null===webphone_api.registerfailedcb||webphone_api.registerfailedcb.length<1))for(var n=0;n<webphone_api.registerfailedcb.length;)webphone_api.registerfailedcb[n]&&"function"==typeof webphone_api.registerfailedcb[n]?(webphone_api.registerfailedcb[n](e),n++):(webphone_api.registerfailedcb.splice(n,1),n--)},webphone_api.onCallStateChangeCb=function(e,n,p,i,o,a){if(!("undefined"==typeof webphone_api.callstatechangecb||null===webphone_api.callstatechangecb||webphone_api.callstatechangecb.length<1))for(var t=0;t<webphone_api.callstatechangecb.length;)if(webphone_api.callstatechangecb[t]&&"function"==typeof webphone_api.callstatechangecb[t]){try{webphone_api.Log("webphone: onCallStateChange: "+e+","+n+","+p+","+i+","+o+","+a)}catch(e){}webphone_api.callstatechangecb[t](e,n,p,i,o,a),t++}else{var r="";"undefined"!=typeof webphone_api.callstatechangecb[t]&&null!==webphone_api.callstatechangecb[t]&&(r=webphone_api.callstatechangecb[t].toString());try{webphone_api.Log("webphone: ERROR, onCallStateChange invalid function object: "+r+"; "+e+","+n+","+p+","+i+","+o+","+a)}catch(e){}webphone_api.callstatechangecb.splice(t,1),t--}},webphone_api.onChatCb=function(e,n,p,i){if(!("undefined"==typeof webphone_api.chatcb||null===webphone_api.chatcb||webphone_api.chatcb.length<1))for(var o=0;o<webphone_api.chatcb.length;)webphone_api.chatcb[o]&&"function"==typeof webphone_api.chatcb[o]?(webphone_api.chatcb[o](e,n,p,i),o++):(webphone_api.chatcb.splice(o,1),o--)},webphone_api.onSmsCb=function(e,n){if(!("undefined"==typeof webphone_api.smscb||null===webphone_api.smscb||webphone_api.smscb.length<1))for(var p=0;p<webphone_api.smscb.length;)webphone_api.smscb[p]&&"function"==typeof webphone_api.smscb[p]?(webphone_api.smscb[p](e,n),p++):(webphone_api.smscb.splice(p,1),p--)},webphone_api.onPresenceCb=function(e,n,p,i){if(!("undefined"==typeof webphone_api.presencecb||null===webphone_api.presencecb||webphone_api.presencecb.length<1))for(var o=0;o<webphone_api.presencecb.length;)webphone_api.presencecb[o]&&"function"==typeof webphone_api.presencecb[o]?(webphone_api.presencecb[o](e,n,p,i),o++):(webphone_api.presencecb.splice(o,1),o--)},webphone_api.onBLFCb=function(e,n,p,i){if(!("undefined"==typeof webphone_api.blfcb||null===webphone_api.blfcb||webphone_api.blfcb.length<1))for(var o=0;o<webphone_api.blfcb.length;)webphone_api.blfcb[o]&&"function"==typeof webphone_api.blfcb[o]?(webphone_api.blfcb[o](e,n,p,i),o++):(webphone_api.blfcb.splice(o,1),o--)},webphone_api.onCdrCb=function(e,n,p,i,o,a,t,r,l){if(!("undefined"==typeof webphone_api.cdrcb||null===webphone_api.cdrcb||webphone_api.cdrcb.length<1))for(var h=0;h<webphone_api.cdrcb.length;)webphone_api.cdrcb[h]&&"function"==typeof webphone_api.cdrcb[h]?(webphone_api.cdrcb[h](e,n,p,i,o,a,t,r,l),h++):(webphone_api.cdrcb.splice(h,1),h--)},webphone_api.onDTMFCb=function(e,n){if(!("undefined"==typeof webphone_api.cddtmf||null===webphone_api.cddtmf||webphone_api.cddtmf.length<1))for(var p=0;p<webphone_api.cddtmf.length;)webphone_api.cddtmf[p]&&"function"==typeof webphone_api.cddtmf[p]?(webphone_api.cddtmf[p](e,n),p++):(webphone_api.cddtmf.splice(p,1),p--)},webphone_api.onLogCb=function(e){if(!("undefined"==typeof webphone_api.logcb||null===webphone_api.logcb||webphone_api.logcb.length<1))for(var n=0;n<webphone_api.logcb.length;)webphone_api.logcb[n]&&"function"==typeof webphone_api.logcb[n]?(webphone_api.logcb[n](e),n++):(webphone_api.logcb.splice(n,1),n--)},webphone_api.onDisplay=function(e){e&&"function"==typeof e&&onDisplayAddCb(e)},webphone_api.onDisplayCb=function(e,n){if(!("undefined"==typeof webphone_api.displaycb||null===webphone_api.displaycb||webphone_api.displaycb.length<1))for(var p=0;p<webphone_api.displaycb.length;)webphone_api.displaycb[p]&&"function"==typeof webphone_api.displaycb[p]?(webphone_api.displaycb[p](e,n),p++):(webphone_api.displaycb.splice(p,1),p--)};var dnotcb=null;webphone_api.GetDisplayableNotifications=function(e){e&&"function"==typeof e&&(dnotcb=e)},webphone_api.RecDisplayableNotifications=function(e){dnotcb&&"function"==typeof dnotcb&&dnotcb(e)},webphone_api.enterkeypress=function(){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.EnterKeyPress():webphone_api.Log("ERROR, webphone_api: enterkeypress plhandler is not defined")},webphone_api.filetransfercallback=function(e){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.FileTransferCallback(e):webphone_api.Log("ERROR, webphone_api: filetransfercallback plhandler is not defined")},webphone_api.gettelsearchname=function(e,n){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.GetTelsearchName(e,n):(webphone_api.Log("ERROR, webphone_api: gettelsearchname plhandler is not defined"),"")},webphone_api.bwanswer=function(e){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.bwanswer(e):webphone_api.Log("ERROR, webphone_api: bwanswer plhandler is not defined")},webphone_api.onappexit=function(){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.onappexit():webphone_api.Log("ERROR, webphone_api: onappexit plhandler is not defined")},webphone_api.needratingrequest=function(e){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.needratingrequest(e):webphone_api.Log("ERROR, webphone_api: needratingrequest plhandler is not defined")},webphone_api.ismobilebrowser=function(){return"undefined"!=typeof plhandler&&null!==plhandler?plhandler.IsMobileBrowser():(webphone_api.Log("ERROR, webphone_api: ismobilebrowser plhandler is not defined"),!1)},webphone_api.helpwindow=function(){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.HelpWindow():webphone_api.Log("ERROR, webphone_api: helpwindow plhandler is not defined")},webphone_api.settingspage=function(){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.SettingsPage():webphone_api.Log("ERROR, webphone_api: settingspage plhandler is not defined")},webphone_api.dialpage=function(){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.DialPage():webphone_api.Log("ERROR, webphone_api: dialpage plhandler is not defined")},webphone_api.messageinboxpage=function(){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.MessageInboxPage():webphone_api.Log("ERROR, webphone_api: messageinboxpage plhandler is not defined")},webphone_api.messagepage=function(){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.MessagePage():webphone_api.Log("ERROR, webphone_api: messagepage plhandler is not defined")},webphone_api.addcontactpage=function(){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.AddContactPage():webphone_api.Log("ERROR, webphone_api: addcontactpage plhandler is not defined")},webphone_api.unregisterEngine=function(e){"undefined"!=typeof plhandler&&null!==plhandler&&plhandler.UnregisterEngine(e)},webphone_api.GetBrowser=function(){try{var e=null,n=navigator.userAgent.toLowerCase();-1!==n.indexOf("edge")?("Edge",e="Edge"):-1!==n.indexOf("msie")&&-1===n.indexOf("opera")?("MSIE",e="MSIE"):-1!==n.indexOf("trident")||-1!==n.indexOf("Trident")?("MSIE",e="MSIE"):-1!==n.indexOf("iphone")?(e=-1!==n.indexOf("fxios")||-1!==n.indexOf("firefox")?"Firefox":-1!==n.indexOf("crios")||-1!==n.indexOf("chrome")?"Chrome":"iPhone","Netscape Family"):-1!==n.indexOf("firefox")&&-1===n.indexOf("opera")?("Netscape Family",e="Firefox"):-1!==n.indexOf("chrome")?("Netscape Family",e="Chrome"):-1!==n.indexOf("safari")?("Netscape Family",e="Safari"):-1!==n.indexOf("mozilla")&&-1===n.indexOf("opera")?("Netscape Family",e="Other"):-1!==n.indexOf("opera")?("Netscape Family",e="Opera"):("?",e="unknown")}catch(p){webphone_api.LogEx("wphone: GetBrowser",p)}return e},webphone_api.GetBrowserVersion=function(){try{var e=-1,n=webphone_api.GetBrowser(),p=navigator.userAgent.toLowerCase();if("Chrome"===n){var i=p.indexOf("chrome");i>0&&(p=p.substring(i+6)),null!=p&&(p=p.replace("/","")),i=p.indexOf("."),i>0&&(p=p.substring(0,i)),null!=p&&(p=webphone_api_helper.Trim(p),webphone_api_helper.IsNumber(p)&&(e=webphone_api_helper.StrToInt(p)))}else if("Firefox"===n){var i=p.indexOf("firefox");i>0&&(p=p.substring(i+7)),webphone_api_helper.isNull(p)||(p=p.replace("/","")),i=p.indexOf("."),i>0&&(p=p.substring(0,i)),webphone_api_helper.isNull(p)||(p=webphone_api_helper.Trim(p),webphone_api_helper.IsNumber(p)&&(e=webphone_api_helper.StrToInt(p)))}else if("Safari"===n||"iPhone"===n){var i=p.indexOf("version");i>0?p=p.substring(i+7):p.indexOf("_")>0&&(p=p.substring(0,p.indexOf("_")),p=webphone_api_helper.Trim(p),p=p.substring(p.lastIndexOf(" "))),webphone_api_helper.isNull(p)||(p=p.replace("/","")),i=p.indexOf("."),i>0&&(p=p.substring(0,i)),webphone_api_helper.isNull(p)||(p=webphone_api_helper.Trim(p),webphone_api_helper.IsNumber(p)&&(e=webphone_api_helper.StrToInt(p)))}else if("MSIE"===n){var o=window.navigator.userAgent,a=o.indexOf("MSIE ");a>0&&(e=parseInt(o.substring(a+5,o.indexOf(".",a)),10));var t=o.indexOf("Trident/");if(t>0){var r=o.indexOf("rv:");e=parseInt(o.substring(r+3,o.indexOf(".",r)),10)}var l=o.indexOf("Edge/");l>0&&(e=parseInt(o.substring(l+5,o.indexOf(".",l)),10))}else if("Edge"===n){var i=p.indexOf("edge");i>0&&(p=p.substring(i+4)),webphone_api_helper.isNull(p)||(p=p.replace("/","")),i=p.indexOf("."),i>0&&(p=p.substring(0,i)),webphone_api_helper.isNull(p)||(p=webphone_api_helper.Trim(p),webphone_api_helper.IsNumber(p)&&(e=webphone_api_helper.StrToInt(p)))}!webphone_api_helper.isNull(e)&&webphone_api_helper.IsNumber(e)||(e=-1)}catch(h){webphone_api.LogEx("wphone: GetBrowserversion",h)}return e},webphone_api.IsHttps=function(){try{var e=!1,n=window.location.protocol;return(void 0!==n&&null!==n||!(void 0===(n=location.href)||null===n||n.length<2))&&(n=n.toLowerCase(),(n.indexOf("https")>=0&&n.indexOf("https")<10||n.indexOf("extension")>=0&&n.indexOf("extension")<12)&&(e=!0),e)}catch(p){webphone_api.LogEx("wphone: IsHttps",p)}return!1},webphone_api.SupportHtml5=function(){try{return!!document.createElement("canvas").getContext}catch(e){webphone_api.LogEx("wphone: SupportHtml5",e)}return!1},webphone_api.SupportHtml5=function(){try{return!!document.createElement("canvas").getContext}catch(e){webphone_api.LogEx("wphone: SupportHtml5",e)}return!1},webphone_api.SetCookie=function(e,n,p){try{if(void 0===e||null===e||void 0===n||null===n)return!1;var i="";if(void 0!==p&&null!==p){var o=new Date;o.setTime(o.getTime()+24*p*60*60*1e3),i="; expires="+o.toGMTString()}else i="";document.cookie=e+"="+n+i+"; path=/",webphone_api.Log("EVENT, apicookie saved to cookie: "+e+"="+n)}catch(a){webphone_api.LogEx("ERROR, file: SetCookie: ",a)}},webphone_api.GetCookie=function(e){try{if(void 0===e||null===e)return"";for(var n=e+"=",p=document.cookie.split(";"),i=0;i<p.length;i++){for(var o=p[i];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(n)){var a=o.substring(n.length,o.length);return webphone_api.Log("EVENT, apicookie read: "+e+"="+a),a}}}catch(t){webphone_api.LogEx("ERROR, file: GetCookie ",t)}return""},webphone_api.getlogsex=function(){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.getlogsex():webphone_api.Log("ERROR, webphone_api: getlogsex plhandler is not defined")},webphone_api.putlogs=function(e){if("undefined"!=typeof plhandler&&null!==plhandler)return plhandler.putlogs(e);webphone_api.Log("ERROR, webphone_api: putlogs plhandler is not defined")},webphone_api.importcontacts=function(){"undefined"!=typeof plhandler&&null!==plhandler?plhandler.ImportContacts():webphone_api.Log("ERROR, webphone_api: importcontacts plhandler is not defined")},webphone_api.getmaxchromeversionforjava=function(){try{var e=webphone_api.parameters.javamaxchromeversion;(void 0===e||null===e||e.length<1||!1===webphone_api_helper.IsNumber(e))&&(e="42");return webphone_api_helper.StrToInt(e)}catch(n){webphone_api.LogEx("ERROR, webphone_api: getmaxchromeversionforjava ",n)}return 42},webphone_api.getstringresource=function(e){try{if("undefined"!=typeof plhandler&&null!==plhandler)return plhandler.getstringresource(e);webphone_api.Log("ERROR, webphone_api: getstringresource plhandler is not defined")}catch(n){webphone_api.LogEx("ERROR, webphone_api: getstringresource ",n)}return""},webphone_api.ShowToast=function(e,n,p){try{"undefined"!=typeof plhandler&&null!==plhandler?plhandler.ShowToast(e,n,p):webphone_api.Log("ERROR, webphone_api: ShowToast plhandler is not defined")}catch(i){webphone_api.LogEx("ERROR, webphone_api: ShowToast ",i)}},webphone_api.AlertDialog=function(e,n,p){try{"undefined"!=typeof plhandler&&null!==plhandler?plhandler.AlertDialog(e,n,p):webphone_api.Log("ERROR, webphone_api: AlertDialog plhandler is not defined")}catch(i){webphone_api.LogEx("ERROR, webphone_api: AlertDialog ",i)}},webphone_api.flagrestartwebrtc=!0,webphone_api.flashdeepdetect=!1;var parent_page_i=null,origindomain_i="";webphone_api.HandleEventMessage=function(event){var res=event.data;if(webphone_api_helper.isNull(res))return void webphone_api.Log("ERROR, webphone_api window.onmessage message is NULL");if(res=res.toString(),(res.indexOf("webphone_api.")>=0||"initialize_connection"===res)&&(parent_page_i=event.source,origindomain_i=event.origin),"webphone_api.getEvents"===res)return void webphone_api.getEvents(function(e){WebphoneSendMessageToParent('getEvents_IFRAME("'+e+'")')});if("webphone_api.onLoaded"===res)return void webphone_api.onLoaded(function(){WebphoneSendMessageToParent("onLoaded_IFRAME()")});if("webphone_api.onStart"===res)return void webphone_api.onStart(function(){WebphoneSendMessageToParent("onStart_IFRAME()")});if("webphone_api.onRegistered"===res)return void webphone_api.onRegistered(function(){WebphoneSendMessageToParent("onRegistered_IFRAME()")});if("webphone_api.onUnRegistered"===res)return void webphone_api.onUnRegistered(function(){WebphoneSendMessageToParent("onUnRegistered_IFRAME()")});if("webphone_api.onCallStateChange"===res)return void webphone_api.onCallStateChange(function(e,n,p,i,o,a){WebphoneSendMessageToParent('onCallStateChange_IFRAME("'+e+'", "'+n+'", "'+p+'", "'+i+'", "'+o+'", "'+a+'")')});if("webphone_api.onChat"===res)return void webphone_api.onChat(function(e,n,p){WebphoneSendMessageToParent('onChat_IFRAME("'+e+'", "'+n+'", "'+p+'")')});if("webphone_api.onCdr"===res)return void webphone_api.onCdr(function(e,n,p,i,o,a,t,r,l){WebphoneSendMessageToParent('onCdr_IFRAME("'+e+'", "'+n+'", "'+p+'", "'+i+'", "'+o+'", "'+a+'", "'+t+'", "'+r+'", "'+l+'")')});if(res.indexOf("webphone_api.getaudiodevicelist")>=0){var dev="",pos=res.indexOf("#");return pos>0&&(dev=res.substring(pos+1)),webphone_api_helper.isNull(dev)&&(dev=""),dev=webphone_api_helper.Trim(dev),void webphone_api.getaudiodevicelist(dev,function(e){WebphoneSendMessageToParent('getaudiodevicelist_IFRAME("'+e+'")')})}if(res.indexOf("webphone_api.getdevicelist")>=0){var dev="",pos=res.indexOf("#");return pos>0&&(dev=res.substring(pos+1)),webphone_api_helper.isNull(dev)&&(dev=""),dev=webphone_api_helper.Trim(dev),void webphone_api.getdevicelist(dev,function(e){WebphoneSendMessageToParent('getdevicelist_IFRAME("'+e+'")')})}if(res.indexOf("webphone_api.getaudiodevice")>=0){var dev="",pos=res.indexOf("#");return pos>0&&(dev=res.substring(pos+1)),webphone_api_helper.isNull(dev)&&(dev=""),dev=webphone_api_helper.Trim(dev),void webphone_api.getaudiodevice(dev,function(e){WebphoneSendMessageToParent('getaudiodevice_IFRAME("'+e+'")')})}if(res.indexOf("webphone_api.getdevice")>=0){var dev="",pos=res.indexOf("#");return pos>0&&(dev=res.substring(pos+1)),webphone_api_helper.isNull(dev)&&(dev=""),dev=webphone_api_helper.Trim(dev),void webphone_api.getdevice(dev,function(e){WebphoneSendMessageToParent('getdevice_IFRAME("'+e+'")')})}if(res.indexOf("webphone_api.getvolume")>=0){var dev="",pos=res.indexOf("#");return pos>0&&(dev=res.substring(pos+1)),webphone_api_helper.isNull(dev)&&(dev=""),dev=webphone_api_helper.Trim(dev),void webphone_api.getvolume(dev,function(e){WebphoneSendMessageToParent('getvolume_IFRAME("'+e+'")')})}if(res.indexOf("webphone_api.getsipheader")>=0){var header="",pos=res.indexOf("#");return pos>0&&(header=res.substring(pos+1)),webphone_api_helper.isNull(header)&&(header=""),header=webphone_api_helper.Trim(header),void webphone_api.getsipheader(header,function(e){WebphoneSendMessageToParent('getsipheader_IFRAME("'+e+'")')})}if(res.indexOf("webphone_api.getsipmessage")>=0){var params="",pos=res.indexOf("#");return pos>0&&(params=res.substring(pos+1)),void webphone_api.getsipmessage(params[0],params[1],function(e){WebphoneSendMessageToParent('getsipmessage_IFRAME("'+e+'")')})}if("webphone_api.ondisplay"===res)return void webphone_api.ondisplay(function(e,n){WebphoneSendMessageToParent('ondisplay_IFRAME("'+e+'", "'+n+'")')});if("webphone_api.getworkdir"===res)return void webphone_api.getworkdir(function(e){WebphoneSendMessageToParent('getworkdir_IFRAME("'+e+'")')})
;if("webphone_api.getlastinvite"===res)return void webphone_api.getlastinvite(function(e){WebphoneSendMessageToParent('getlastinvite_IFRAME("'+e+'")')});if("webphone_api.onLog"===res)return void webphone_api.onLog(function(e){WebphoneSendMessageToParent('onLog_IFRAME("'+e+'")')});if(res.indexOf("webphone_api.getregfailreason")>=0){var ext="",pos=res.indexOf("#");return pos>0&&(ext=res.substring(pos+1)),webphone_api_helper.isNull(ext)&&(ext=""),ext=webphone_api_helper.Trim(ext),void webphone_api.getregfailreason(function(e){WebphoneSendMessageToParent('getregfailreason_IFRAME("'+e+'")')},ext)}if(res.indexOf("webphone_api.setparameter")>=0){var param="",value="",pos=res.indexOf(",");return void(pos>0?(param=res.substring(0,pos),webphone_api_helper.isNull(param)&&(param=""),value=res.substring(pos+1),webphone_api_helper.isNull(value)&&(value=""),pos=param.indexOf("("),pos>0&&(param=param.substring(pos+1)),pos=value.lastIndexOf(")"),pos>0&&(value=value.substring(0,pos)),param=webphone_api_helper.Trim(param),value=webphone_api_helper.Trim(value),webphone_api.setparameter(param,value)):webphone_api.Log("ERROR, webphone_api: window.onmessage invalid setparameter: "+res))}if(res.indexOf("webphone_api.")>=0){(res.indexOf("webphone_api.call")>=0||res.indexOf("webphone_api.videocall")>=0)&&webphone_api.Log("EVENT, webphone_api: iframe window.onmessage eval: "+res);try{eval(res)}catch(errin){webphone_api.LogEx("ERROR, webphone_api_helper window.onmessage eval: "+res,errin)}}else"initialize_connection"!==res&&webphone_api.Log("EVENT, webphone_api: window.onmessage unhandled message: "+res)},window.addEventListener?window.addEventListener("message",webphone_api.HandleEventMessage,!1):window.attachEvent?window.attachEvent("message",webphone_api.HandleEventMessage):webphone_api.Log("ERROR, webphone_api: addEventListener message cannot attach event listener");var SendMessageToParent=WebphoneSendMessageToParent;webphone_api.cacheMediaStream=!0,webphone_api.API_SetParameter=function(e,n){return webphone_api.setparameter(e,n)},webphone_api.API_SetCredentials=function(e,n,p,i,o){return plhandler.API_SetCredentials(e,n,p,i,o)},webphone_api.API_SetCredentialsMD5=function(e,n,p,i){return plhandler.API_SetCredentialsMD5(e,n,p,i)},webphone_api.API_Start=function(){return webphone_api.start()},webphone_api.API_StartStack=function(){return webphone_api.start()},webphone_api.API_Register=function(e,n,p,i,o){return webphone_api.setparameter("serveraddress",e),webphone_api.setparameter("sipusername",n),webphone_api.setparameter("password",p),webphone_api.setparameter("displayname",o),webphone_api.start()},webphone_api.API_Unregister=function(){return webphone_api.unregister()},webphone_api.API_CheckVoicemail=function(e){return plhandler.API_CheckVoicemail(e)},webphone_api.API_SetLine=function(e){return plhandler.API_SetLine(e)},webphone_api.API_GetLine=function(){return plhandler.API_GetLine(line)},webphone_api.API_GetLineStatus=function(e){return plhandler.API_GetLineStatus(e)},webphone_api.API_Call=function(e,n){return webphone_api.call(n)},webphone_api.API_CallEx=function(e,n,p){return webphone_api.API_Call(e,n,0)},webphone_api.API_Hangup=function(e,n){return webphone_api.hangup()},webphone_api.API_Accept=function(e){return webphone_api.accept()},webphone_api.API_Reject=function(e){return webphone_api.reject()},webphone_api.API_Forward=function(e,n){return plhandler.API_Forward(e,n)},webphone_api.API_Transfer=function(e,n){return webphone_api.transfer(n)},webphone_api.API_MuteEx=function(e,n,p){return webphone_api.mute(n,p)},webphone_api.API_IsMuted=function(e){return plhandler.API_IsMuted(e)},webphone_api.API_IsOnHold=function(e){return plhandler.API_IsOnHold(e)},webphone_api.API_Hold=function(e,n){return webphone_api.hold(n)},webphone_api.API_Conf=function(e){return webphone_api.conference(e)},webphone_api.API_Dtmf=function(e,n){return webphone_api.dtmf(n)},webphone_api.API_SendChat=function(e,n,p){return webphone_api.sendchat(n,p)},webphone_api.API_AudioDevice=function(){return webphone_api.devicepopup()},webphone_api.API_SetVolume=function(e,n){return webphone_api.setvolume(e,n)},webphone_api.API_GetAudioDeviceList=function(e){return plhandler.API_GetAudioDeviceList(e)},webphone_api.API_GetAudioDevice=function(e){return plhandler.API_GetAudioDevice(e)},webphone_api.API_SetAudioDevice=function(e,n,p){return plhandler.API_SetAudioDevice(e)},webphone_api.API_GetVolume=function(e){return plhandler.API_GetVolume(e)},webphone_api.API_PlaySound=function(e,n,p,i,o,a,t,r,l){return plhandler.PlaySound(e,n,p,i,o,a,t,r,l)},webphone_api.API_RecFiles_Upload=function(){return plhandler.API_RecFiles_Upload()},webphone_api.API_RecFiles_UploadEx=function(e,n){return plhandler.API_GetVolume(e,n)},webphone_api.API_RecFiles_Clear=function(){return plhandler.API_RecFiles_Clear()},webphone_api.API_RecFiles_Del=function(){return plhandler.API_RecFiles_Del()};var isie8iframe=!1;try{IsIeVersion2(8)&&window.self!==window.top&&(isie8iframe=!0)}catch(err){}(IsIeVersion2(6)||IsIeVersion2(7)||isie8iframe)&&(window.location.href="oldieskin/wphone.htm");var maxv_chrm=webphone_api.getmaxchromeversionforjava(),wpbasedir=webphone_api.getbasedir2();try{"false"!=webphone_api.parameters.logtoconsole&&0!=webphone_api.parameters.logtoconsole&&console.log("base diectory - webphonebasedir(scrips): "+wpbasedir)}catch(err){}var wp_isPlatformSet=!1,wp_isWindows=!1,webphone_helperua=navigator.userAgent;webphone_api_helper.isNull(webphone_helperua)&&(webphone_helperua=""),webphone_helperua=webphone_helperua.toLowerCase();var webphone_helperhref=window.location.href;webphone_api_helper.isNull(webphone_helperhref)&&(webphone_helperhref=""),webphone_helperhref=webphone_helperhref.toLowerCase();var myoptionvaluefromhelper=GetMyOptionValueFormHelper();("Safari"===webphone_api.GetBrowser()&&webphone_helperua.indexOf("windows")<1||"Edge"===webphone_api.GetBrowser()||"iPhone"===webphone_api.GetBrowser()&&webphone_api.GetBrowserVersion()>=11||webphone_helperhref.indexOf(myoptionvaluefromhelper)>0)&&webphone_api.LoadScriptFile(wpbasedir+"js/lib/adapter.js",function(){}),("Chrome"!==webphone_api.GetBrowser()||"Chrome"===webphone_api.GetBrowser()&&webphone_api.GetBrowserVersion()<=maxv_chrm)&&webphone_api.LoadScriptFile(wpbasedir+"js/lib/mwpdeploy.js",function(){}),webphone_api.LoadScriptFile(wpbasedir+"js/lib/translations.js",function(){webphone_api.LoadScriptFile(wpbasedir+"css/softphone/pmodal.css",function(){}),webphone_api.LoadScriptFile(wpbasedir+"css/video.css",function(){}),webphone_api.LoadScriptFile(wpbasedir+"js/lib/stringres.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/lib/lib_webphone.js",function(){!1===IsWindowsSoftphone()&&!0===webphone_api.IsHttps()&&"serviceWorker"in navigator&&webphone_api.LoadScriptFile(wpbasedir+"js/firebasejs/firebase-app.js",function(){webphone_api.LoadScriptFile(wpbasedir+"js/firebasejs/firebase-messaging.js",function(){})}),LoadUiScriptFiles()})})});