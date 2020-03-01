// string resource file
var StringResources = {

settings_title: 'Settings',

username: 'Username',
password: 'Password',

btn_login: 'Login',
btn_close: 'Close',
btn_cancel: 'Cancel',
btn_ok: 'OK',
btn_upgrade: 'Upgrade',
btn_save: 'Save',
btn_revert: 'Revert',
btn_create: 'Create',
btn_audio_device: 'Audio devices',
btn_quickcall: 'Call',

myprovider: 'Home',
myaccount: 'My account',
recharge:'Credit recharge',
newuser: 'New User',
p2p: 'Phone to Phone',
p2p_nra: 'Your phone number',
p2p_nrb: 'Who are you calling',
p2p_err1: 'Enter your number',
p2p_err2: 'Enter destination number',
callback: 'Callback',
callback_src: 'Enter your mobile phone number<br>(begining with country code)',

phone_nr: 'Phone Nr or SIP uri',
ct_search_hint: 'Search Contacts',
initializing: 'EVENT, Initializing',
reset_settings_msg: 'Are you sure you want to reset settings ?',
reset_settings_msg2: 'Settings were reset to defaults.',
aec_auto: 'Auto',
aec_none: 'None',
aec_software: 'Software',
aec_native: 'Native',
aec_fast: 'Fast',
aec_decrease_volume: 'Decrease volume',
warning: 'Warning',
help: 'Help',
help_provider: 'Find a voip provider',
logview_help: 'Copy the content of the logs window and send it in an emial to:',
please_enter: 'Please enter',
loading: 'Loading..',
type_home: 'Call home',
type_mobile: 'Call mobile',
type_work: 'Call work',
type_other: 'Call other',
type_fax_home: 'Fax home',
type_fax_work: 'Fax work',
type_pager: 'Pager',
type_sip: 'Call SIP URI',
home: 'Home',
mobile: 'Mobile',
work: 'Work',
other: 'Other',
fax_home: 'Fax home',
fax_work: 'Fax work',
pager: 'Pager',
sip: 'SIP URI',
send_msg: 'Send message',
contact_alert_title: 'Choose phone type',
contact_name: 'Name',
contact_firstname: 'First name',
contact_lastname: 'Last name',
contact_phone: 'Phone Nr or SIP uri',
contact_saved: 'Contact saved.',
contact_save_error: 'Error, Contact can\'t be saved',
contact_no_nunber: 'Enter a phone number or SIP URI or username',
no_contacts: 'You don\'t have any contacts to display.<br /><br /> To add contacts, press <b>Menu</b> and then <b>New Contact</b>.',
no_history: 'Call History Empty',
duration: 'Call duration:',
rating_minute: ' \\ min',
clear_callhistory: 'Clear Call History',
clear_callhistory_msg: 'Are you sure you want to clear all call history ?',
contact_delete_msg: 'Are you sure you want to delete this contact?',
ch_outgoing: 'Outgoing call',
ch_incoming: 'Incoming call',
ch_missed: 'Missed call',
ch_delete: 'Delete from call history',
in_hold: '(In Hold)',
initiate_call_forward: 'Initiate call forward',
initiate_call_transfer: 'Initiate call transfer',
initiate_conference: 'Initiate conference',
send_dtmf: 'Send DTMF',
unmuted: 'Unmuted',
muted: 'Muted',
hold_released: 'Hold released',
on_hold: 'On hold',
speaker_off: 'Speaker off',
speaker_on: 'Speaker on',
call_from: 'Missed call',
calls: 'missed calls',
message_from: 'Message from',
messages: 'new messages',
goto: 'Go to',
callhistory: 'Call history',
messagehistory: 'Messages',
sett_enabled: 'Enabled',
sett_disabled: 'Disabled',
hide_search: 'Hide search',
show_search: 'Search in settings',
settings_login: 'Login',
ie_update: 'This application requires a higher version of internet explorer. Would you like to download and update ?',
install_java: 'This softphone needs Java Runtime Environment to be installed, in order for this softphone to work.',
serviceengine_title: 'Use service plugin',
serviceengine_msg: 'Install service plugin for a better experience',
np_download: 'Service plugin download',
np_popup_title: 'Service plugin',
np_popup_msg: 'You must install service plugin in odrder for the softphone to work.',
choose_engine_title: 'Choose engine',
nativeplugin: 'service plugin',
ce_enablejava: 'Enable java in your browser or enable <a href="https://java.com/en/download/help/enable_browser.xml" target="_blank">from settings.</a>',
ce_install_java: 'Or if you don\'t have java installed, install from <a href="https://java.com/en/download/" target="_blank">here.</a>',
ce_installnativeplugin: 'Install [NATIVE_PLUGIN] for the best experience',
ce_usewebrtc: 'Use webrtc',
ce_webrtcnot: '(Not Recommended)',
ce_browser_install: 'Install',
ce_browser_alternate: 'alternate browser',
ce_native_ios: 'iOS doesn\'t support VoIP in browser. Please download native app from',
ce_native_android: 'Download native app from',
ce_use: 'selected. Just login.',
np_install_title: 'Service plugin',
np_install_msg: 'Downloading and installing service plugin...<br />Please wait.<br /><br />Press cancel, if you don\'t want to use Service plugin.',
np_successfully_installed: 'Service plugin successfully installed.',
java_install_title: 'Install Java',
java_install: 'Login again after you have finished installing Java.',
sync_contacts_started: 'Syncing contacts...',
sync_succeded: 'Sync succeded',
sync_failed: 'Sync failed',
sync_msg: 'Or Sync contacts from your mobile devices:',
ce_dontask: 'Don\'t ask again',
//OPSSTART
autoprov_loading: 'Retrieving configuration...',
autoprov_restart: 'Applying configuration...',
//OPSEND
hint_menu: 'Menu',
hint_voicemail: 'Voicemail',
hint_quickcall: 'Quick call',
hint_message: 'Message',
hint_addphone: 'Add phone',
hint_removephone: 'Remove phone',
hint_choosect: 'Choose contact',
hint_sendmsg: 'Send message',
hint_conference: 'Add to conference',
hint_transfer: 'Call transfer',
hint_dialpad_dtmf: 'Send DTMF',
hint_mute: 'Mute / Unmute',
hint_hold: 'Hold / Reload',
hint_speaker: 'Speaker On / Off',
hint_dialpad: 'Dialpad',
hint_contacts: 'Contacts',
hint_callhistory: 'Call History',
hint_status: 'Events and status messages',
hint_curr_user: 'Account username',
hint_phone_number: 'Enter here phone number, sip account username or SIP URI',
hint_btn_call: 'Initiate call',
hint_btnback: 'Back to previous page',
hint_numpad: 'Numpad',
hint_recents: 'Actions',
hint_encicon: 'Encrypted',

transfer_title: 'Call transfer',
forward_title: 'Call forward',
conference_title: 'Add to conference',

status_not_registered: 'Not registered',
pick_ct:'Pick contact',
chat_sms_title: 'Chat or SMS',
chdetails_title: 'Info',
chdetails_btnback_txt: 'Call history',
ctdetails_title: 'Contact',
ctdetails_btnback_txt: 'All contacts',
msg_title_chat: 'IM - Chat',
msg_title_sms: 'SMS',
dialpad_title: 'Call',
msglist_title: 'Messages',
ctlist_title: 'Contacts',
chlist_title: 'Call history',
addeditct_title_new: 'New contact',
addeditct_title_edit: 'Edit contact',
logview_title: 'Logs',
newuser_title: 'New user',
voicemail_title: 'Voicemail',
voicemail_msg: 'Voicemail / Enter your voicemail number',
quickcall_title: 'Quick call',
quickcall_msg: 'Enter phone number to call',
go_back_btn_txt: 'Back',
chat: 'IM - Chat',
sms: 'SMS',
delete_text: 'Delete',
delete_all_msg_alert: 'All messages will be deleted.',
delete_msg_alert: 'The entire thread will be deleted.',
btn_new_message: 'New message',
message_sent: 'Message sent',
me: 'Me',
sendtosupport: 'Send to support',
support_email_body: 'Copy and paste here the content of the log window:',
support_selectall: 'Select all',
nu_username: 'Username',
nu_password: 'Password',
nu_email: 'Email address',
nu_fullname: 'Full name',
nu_phone: 'Phone',
nu_address: 'Address',
nu_country: 'Country',
nu_birthday: 'Birthday',
nu_gender: 'Gender',
nu_fpq: 'Forgot password question',
nu_fpa: 'Forgot password answer',
presence_stat_online: 'Online',
presence_stat_away: 'Away',
presence_stat_dnd: 'Do Not Disturb',
presence_stat_invisible: 'Invisible',
presence_stat_offline: 'Offline',
connection_title: 'Connection problem',
connection_msg:'It seems that you are not connected to a network or the Internet.<br>Please check your connection.' ,

menu_sync: 'Sync contacts',
menu_volumehide: 'Hide volume controls',
menu_volumeshow: 'Volume controls',
menu_audiodevicehide: 'Hide audio device',
menu_audiodeviceshow: 'Audio device',
menu_conference: 'Conference',
menu_transfer: 'Transfer',
menu_numpad: 'Numpad',
menu_mute: 'Mute',
menu_hold: 'Hold',
menu_speaker: 'Speaker',
menu_call: 'Call',
menu_message: 'Message',
menu_new_contact: 'New contact',
menu_editcontact: 'Edit contact',
menu_createcontact: 'Save contact',
menu_deletecontact: 'Delete contact',
menu_exit: 'Exit',
menu_switchtoadvanced: 'Show advanced settings',
menu_switchtobasic: 'Show basic settings',
menu_showsettings: 'Settings',
menu_close: 'Close',
menu_help: 'Help',
help_help: 'Guide', // Help
help_rate: 'Rate MizuDroid',
help_loging: 'Logs (trace)',
help_proversion: 'MizuDroid Pro',
help_about: 'About',
help_report: 'Report a problem',
help_license: 'License agreement',
help_startlog: 'Start collecting logs',
help_sendlog: 'View logs / Send to support',
help_stoplog: 'Stop collecting logs',
about_url: 'Go to support page',
about_mail: 'Contact support',
about_license: 'License agreement',


warning_msg_1: 'Only direct calls to SIP URIs will be possible if the VoIP Server address is not set',
warning_msg_2: 'IP or domain name is not accepted in this version. Enter server name or ID here.',
warning_msg_3: "Please enter the contact's name",
warning_msg_4: "Failed retrieving configurations.<br /><br /> On Settings page Server input, enter your VoIP provider's domain name or IP address",
err_msg_1: 'Invalid username.',
err_msg_2: 'Invalid password.',
err_msg_3: 'ERROR, Enter a phone number or SIP URI or username',
err_msg_4: 'Invalid phone number or SIP URI or username',
err_msg_5: 'Invalid phone number.',
err_msg_6: 'Invalid address.',
err_msg_7: 'No messages to delete',

err_msg_8: 'Enter a username.',
err_msg_9: 'Enter a password.',
err_msg_10: 'Enter your email address.',
err_msg_11: 'Enter your full name.',
err_msg_12: 'Invalid email address.',
err_msg_13: 'Username\'s length must be at least',
err_msg_14: 'Invalid username.',
err_msg_15: 'Passwords\'s length must be at least',
err_msg_16: 'Invalid password.',
err_msg_17: 'Full names\'s length must be at least',
err_msg_18: 'Invalid name.',
err_msg_19: 'Invalid phone number.',
err_msg_20: 'Invalid address.',
err_msg_21: 'Enter your phone number.',
err_msg_22: 'Cannot retrieve configuration. Try again later.',

err_nocallinprogress: 'No call in progress',

srvaddr_help: 'VoIP service provider server address (ip address or domain name or DNS SRV record). You can also suffix a port number if the server is not on the default SIP port (5060). Example: yourserver.com:6000<br /><br /> In case if you are new to VoIP:<br /> Unlike some other popular software such as Skype, if you are using standard SIP protocol, then you can use any VoIP provider. There are a lot (hundreds) of such kind of services and you could also setup your own server.<br /> Internal (softphone to softphone) calls are usually free and the cost of outbound calls (calls to mobile or landline) are usually cheaper than for traditional providers, especially international calls.<br /> There are a lot of other benefits also in using standard VoIP such as high call quality ()with wideband codec), freedom (you can switch your provider at any time), control (you can easily manage your account) and flexibility (lots of extra services such as call recording, conferencing and others). You can even use multiple providers (for example you can always use the cheaper one for your call targets).<br /> If you don\'t have a VoIP account yet then you can create one within a few minutes at any provider and start using VoIP right now.',

proversion_content_text: 'Upgrade to MizuDroid Pro<br /><br />' +
'Certain features are available only in the Pro version ($39 license cost)<br />' +
'You should upgrade especially if you need one of the followings:<br />' +
'   -commercial usage<br />' +
'   -more features<br />' +
'   -explicit G.729 codec<br />' +
//OPSSTART
'   -VoIP tunneling and encryption extended service<br />' +
//OPSEND
'    <br />' +
'<br />' +
'How to upgrade:<br />' +
'	-Use PayPal to transfer 39 USD to <a href="mailto:info@mizu-voip.com">info@mizu-voip.com</a>. Mobile friendly link: <a href="https://mobile.paypal.com" target="_blank" onclick="common_public.OpenLinkInInternalBrowser(\'https://mobile.paypal.com\')">https://mobile.paypal.com</a><br />' +
'	-On your payment you will receive a software key by email within two workdays (usually within a few hours)<br />' +
'	-Enter the key in the input box below and click on the "Activate" button<br />' +
'	-You might need to restart the softphone on successful activation (Menu -> Manage Applications -> Force close, then start again)<br /> 	' +
'<br />	' +
'Note: some features are enabled only if your device CPU speed is high enough (at least 800 MHz ARMv6)<br />' +
'Note: you should first test the free version and upgrade to pro only if you are satisfied with the software. The pro version runs exactly like the free version but adds more features<br />' +
'<br />' +
'Contact webphone@mizu-voip.com for any help<br />	' +
'Please use the Mizutech Android Forum (under the Support menu) for any questions, bug reports or suggestions<br />' +
'Company home page: <a href="http://www.mizu-voip.com" target="_blank" onclick="common_public.OpenLinkInInternalBrowser(\'http://www.mizu-voip.com\')">http://www.mizu-voip.com</a> for more info.<br />' +
'Software home page: <a href="http://www.mizu-voip.com/Products/MobileSoftphones/AndroidSoftphone.aspx" target="_blank" onclick="common_public.OpenLinkInInternalBrowser(\'http://www.mizu-voip.com/Products/MobileSoftphones/AndroidSoftphone.aspx\')">http://www.mizu-voip.com/Products/MobileSoftphones/AndroidSoftphone.aspx</a><br />' +
'Copyright (C) Mizutech SRL.' +
'<br />',


sett_display_name_serveraddress_user: 'Server',
sett_comment_serveraddress_user: 'Enter server adress (domain or IP:port), brand-name or op-code here',
sett_comment_serveraddress_user_gmsdialer: 'Enter the operator code',
sett_comment_short_serveraddress_user: '',
sett_comment_serveraddress_user_operator: 'Enter the operator code',

sett_display_name_sipusername: 'Username',
sett_comment_sipusername: 'Your SIP username used for authentication',
sett_comment_short_sipusername: 'VoIP account username',    

sett_display_name_password: 'Password',
sett_comment_password: 'Enter the password for your SIP account',
sett_comment_short_password: 'VoIP account password',

sett_display_name_startwithos: 'Start with Windows',
sett_comment_startwithos: 'Start when Windows starts',
sett_comment_short_startwithos: '',

sett_display_name_startonboot: 'Run in background',
sett_comment_startonboot: 'Always listen for incoming calls (service will run in backround to enable incoming calls)',
sett_comment_short_startonboot: '',

sett_display_name_codec: 'Audio codec',
sett_comment_codec: 'Choose preferred codec',
sett_checkbox_codec: 'Use Only preferred codec',
sett_comment_short_codec: '',

sett_display_name_dtmfmode: 'DTMF',
sett_comment_dtmfmode: 'Choose DTMF (tone dialing) send method',
sett_comment_short_dtmfmode: '',

sett_display_name_register: 'Register',
sett_comment_register: 'Register to domain. This is always needed to receive incoming calls and some providers require also to allow outgoing calls.',
sett_comment_short_register: 'Enable / Disable registration to SIP domain',

sett_display_name_registerinterval: 'Register interval',
sett_comment_registerinterval: '(Re)Register time interval in seconds',
sett_comment_short_registerinterval: '',

sett_display_name_send: 'Send early media',
sett_comment_send: 'Start to send media when session progress is received',
sett_comment_short_send: '',

sett_display_name_transfertype: 'Transfer type',
sett_comment_transfertype: 'Choose call transfer method',
sett_comment_short_transfertype: '',

sett_display_name_playring: 'Ringback for',
sett_comment_playring: 'Generate ringtone for incoming and outgoing calls',
sett_comment_short_playring: '',

sett_display_name_autoanswer_forward: 'Auto answer, forward or ignore',
sett_comment_autoanswer_forward: 'Automatically handle all incoming calls',
sett_comment_short_autoanswer_forward: '',

sett_display_name_proxyaddress: 'Proxy address',
sett_comment_proxyaddress: 'Outbound SIP proxy address. Leave it empty if you don’t have a stateless proxy',
sett_comment_short_proxyaddress: 'Outbound proxy address',

sett_display_name_realm: 'Realm',
sett_comment_realm: 'Set the SIP realm if not the same with the serveraddress or domain',
sett_comment_short_realm: '',

sett_display_name_voicemailnum: 'Voicemail',
sett_comment_voicemailnum: 'Set voicemail number which will be used if not received automatically',
sett_comment_short_voicemailnum: 'Set voicemail access number',

sett_display_name_use_stun: 'Use STUN',
sett_comment_use_stun: 'Change if you have NAT related issues (registration/call/voice problems)',
sett_comment_short_use_stun: 'Enable external address discovery',

sett_display_name_use_fast_ice: 'Use ICE',
sett_comment_use_fast_ice: 'Fast ICE negotiations (for p2p rtp routing).<br />Note: if set to "Auto" or "Yes" then the stun should not be disabled',
sett_comment_short_use_fast_ice: '',

sett_display_name_techprefix: 'Tech prefix',
sett_comment_techprefix: 'Add any prefix for all called numbers',
sett_comment_short_techprefix: '',

sett_display_name_volumein: 'Volume in',
sett_comment_volumein: 'Set default microphone volume between 0 and 100%. 50 means no changes.',
sett_comment_short_volumein: '',

sett_display_name_volumeout: 'Volume out',
sett_comment_volumeout: 'Set default speaker volume between 0 and 100%. 50 means no changes.',
sett_comment_short_volumeout: '',

sett_display_name_prack: 'Use PRACK',
sett_comment_prack: '100rel support. Should be enabled only if your server require this',
sett_comment_short_prack: '',

sett_display_name_ringtimeout: 'Ring timeout',
sett_comment_ringtimeout: 'Maximum ringing time allowed in seconds. Default is 90 seconds',    
sett_comment_short_ringtimeout: '',

sett_display_name_calltimeout: 'Call timeout',
sett_comment_calltimeout: 'Maximum speech time allowed in seconds. Default is 10800 seconds = 3 hours',
sett_comment_short_calltimeout: '',

sett_display_name_username: 'Caller ID',
sett_comment_username: 'This will not be used for authentication. Specify if not the same with the Username for authentication setting. Some VoIP servers will reject if not the same with the username!',
sett_comment_short_username: 'You might set a different username here used for A number display',

sett_display_name_displayname: 'Display name',
sett_comment_displayname: 'Specify display name. This is an optional setting and it should be your full name',
sett_comment_short_displayname: 'Set display name',

sett_display_name_hidemyidentity: 'Hide my identity',
sett_comment_hidemyidentity: 'Hide my identity',
sett_comment_short_hidemyidentity: '',

sett_display_name_localip: 'Local IP address',
sett_comment_localip: 'Optionally specify local signaling IP address to use',
sett_comment_short_localip: '',

sett_display_name_signalingport: 'Local signaling port',
sett_comment_signalingport: 'Specify local IP address signaling port to use (default is a stable port initialized with a random value. This has nothing to do with the server SIP port which is usually 5060)',
sett_comment_short_signalingport: 'Optionally specify local signaling port to use',

sett_display_name_rtpport: 'Local RTP port',
sett_comment_rtpport: 'Specify local RTP port base (default is a stable port base initialized with a random value)',
sett_comment_short_rtpport: 'Specify local RTP port base',

sett_display_name_jittersize: 'Jitter size',
sett_comment_jittersize: 'The jitter buffer is used for smooth playback under variable bandwidth. The size is calculated dynamically, but its behavior can modified with this setting',
sett_comment_short_jittersize: '',

sett_display_name_forcewifi: 'Force WiFi',
sett_comment_forcewifi: '(Re)Enable and scan WiFi on startup, new call or connection lost (Even without this setting, WiFi will be the preferred when available)',
sett_comment_short_forcewifi: 'Keep the WiFi awake to handle incoming calls',

sett_display_name_callforwardonbusy: 'Call forward number',
sett_comment_callforwardonbusy: 'Set call forward number used when call is rejected on busy or for auto forward',
sett_comment_short_callforwardonbusy: '',

sett_display_name_callforwardonreject: 'Call forward on reject',
sett_comment_callforwardonreject: 'Forward call if rejected',
sett_comment_short_callforwardonreject: '',

sett_display_name_rejectonvoipbusy: 'On VoIP busy',
sett_comment_rejectonvoipbusy: 'Set behavior if there is already a VoIP call in progress',
sett_comment_short_rejectonvoipbusy: '',

//OPSSTART
sett_display_name_usetunneling: 'Tunneling and encryption',
sett_comment_usetunneling: 'Use encrypted and tunneled transport layer (UDP, TCP or HTTP)',
sett_comment_short_usetunneling: 'Use alternative encrypted transport',
sett_comment_usetunneling_1: 'Useful in VoIP blocked countries and from behind firewalls. If you need to use this feature for more than a few calls, then you should upgrade to MizuDroidPro which includes unlimited tunneling service.',
sett_comment_usetunneling_2: 'Use signaling and media within encrypted tunnel.',
//OPSEND

sett_display_name_encryptionport: 'Encryption port',
sett_comment_encryptionport: 'Server base port used for encrypted transport',
sett_comment_short_encryptionport: '',
/*
sett_display_name_loglevel: 'Set log/trace level',
sett_comment_loglevel: 'Set log detail level when logs are enabled',
sett_comment_short_loglevel: '',
*/
sett_display_name_loglevel: 'Enable log',
sett_comment_loglevel: 'Save trace to file for later uploading to technical support',
sett_comment_short_loglevel: '',

sett_display_name_rejectonphonebusy: 'On phone busy',
sett_comment_rejectonphonebusy: 'Set behavior if there is already a native phone call in progress',
sett_comment_short_rejectonphonebusy: '',

sett_display_name_proximitysensor: 'Proximity sensor',
sett_comment_proximitysensor: 'Turn off the screen while in call. This feature is turned off by default because most of the devices has problems when turned on',
sett_comment_short_proximitysensor: 'Turn off the screen wile near ear',

sett_display_name_aec: 'AEC',
sett_comment_aec: 'Acoustic echo cancellation. Turn on if your peers hears their echo.',
sett_comment_short_aec: '',

sett_display_name_agc: 'AGC',
sett_comment_agc: 'Automatic gain control. Will control the volume automatically.',
sett_comment_short_agc: '',

sett_display_name_denoise: 'Denoise',
sett_comment_denoise: 'Remove noise from the conversation (such as background noise or noise generated by the microphone).',
sett_comment_short_denoise: '',

sett_display_name_silencesupress: 'Silence suppression',
sett_comment_silencesupress: 'Do not transmit media when you do not speak. Enable only if your if your bandwidth is really poor.',
sett_comment_short_silencesupress: '',

sett_display_name_plc: 'PLC',
sett_comment_plc: 'Packet loss concealment. Helps to improve the call quality on packet loss which occurs on low quality networks',
sett_comment_short_plc: '',

sett_display_name_filters: 'Number rewrite',
sett_comment_filters: 'Add destination number rewrite rules (add/remove/rewrite prefix)',
sett_comment_short_filters: '',

sett_display_name_callback_mode: 'Callback mode',
sett_comment_callback_mode: 'Chose when to use callback if any',
sett_comment_short_callback_mode: '',

sett_display_name_email: 'Email',
sett_comment_email: 'Your email address (useful for any technical support)',
sett_comment_short_email: 'Your email address',

sett_display_name_chatsms: 'Chat/SMS',
sett_comment_chatsms: 'Set messaging method',
sett_comment_short_chatsms: '',

sett_display_name_savetocontacts: 'New contacts',
sett_comment_savetocontacts: 'Whether to (automatically) add new unknown called numbers to your contact list',
sett_comment_short_savetocontacts: 'Add new contacts to contact list',

sett_display_name_call_access: 'Call access number',
sett_comment_call_access: 'IVR access number to call from mobile operator network',
sett_comment_short_call_access: 'Access number to call from mobile operator network',

sett_display_name_unlockphone: 'Unlock keyguard',
sett_comment_unlockphone: 'Automatically unlock phone keyguard on incoming call',
sett_comment_short_unlockphone: '',

sett_display_name_audiorecorder: 'Audio recorder',
sett_comment_audiorecorder: 'Select audio recorder stream for calls. Should be changed only on special devices or if you have special requirements or the automatic setting is not the preferred',
sett_comment_short_audiorecorder: '',

sett_display_name_audioplayer: 'Audio player',
sett_comment_audioplayer: 'Select audio player stream for calls. Should be changed only on special devices or if you have special requirements or the automatic setting is not the preferred',
sett_comment_short_audioplayer: '',

sett_display_name_speakerphoneplayer: 'Speakerphone player',
sett_comment_speakerphoneplayer: 'Select audio speakerphone player stream. Should be changed only on special devices or if you have special requirements or the automatic setting is not the preferred',
sett_comment_short_speakerphoneplayer: '',

sett_display_name_speakerphoneoutput: 'Audio mode',
sett_comment_speakerphoneoutput: 'Select the output device when you switch to speakerphone',
sett_comment_short_speakerphoneoutput: '',

sett_display_name_keepalive: 'Keep-alive',
sett_comment_keepalive: 'Will send a short packet in the specified time interval (seconds) to open and keep your NAT device (router) opened in order to enable incoming calls and other notifications',
sett_comment_short_keepalive: 'Keep your NAT opened',

sett_display_name_mediaencryption: 'Media encryption',
sett_comment_mediaencryption: 'Set media encryption method',
sett_comment_short_mediaencryption: '',

sett_display_name_setqos: 'QoS',
sett_comment_setqos: 'Sets traffic class or type-of-service octet in the IP header for UDP packets',
sett_comment_short_setqos: '',

sett_display_name_codecframecount: 'RTP Frame/Packet',
sett_comment_codecframecount: 'Number of codec payloads in one UDP/RTP packet. Higher values will require less bandwidth but more delays. Unusual values (above 4) can cause incompatibility with your provider.',
sett_comment_short_codecframecount: 'Number of codec payloads in one UDP packet',

sett_display_name_doublesendrtp: 'Double send RTP',
sett_comment_doublesendrtp: 'Might improve audio quality in certain circumstances, but will increase upload data amount',
sett_comment_short_doublesendrtp: 'Double send RTP packets',

sett_display_name_cfgcpuspeed: 'CPU Speed',
sett_comment_cfgcpuspeed: 'Features such as AEC or codec are turned on/off based on your device processor speed',
sett_comment_short_cfgcpuspeed: 'Features are selected automatically based on your CPU speed',

sett_display_name_cfgnetworkspeed: 'Network Speed',
sett_comment_cfgnetworkspeed: 'Helps to choose the best codec and media enhancements for your calls.',
sett_comment_short_cfgnetworkspeed: '',

sett_display_name_accounts: 'Accounts',
sett_comment_accounts: 'Manage your SIP accounts/profiles.',
sett_comment_short_accounts: '',

sett_display_name_extraoption: 'Extra options',
sett_comment_extraoption: 'Custom parameters can be set in a key-value pair list, separated by semicolon.<br />Ex: displayname=John;',
sett_comment_short_extraoption: 'Custom parameter can be set',

sett_display_name_reset_settings: 'Reset settings',
sett_comment_reset_settings: 'Reset settings to their default values',
sett_comment_short_reset_settings: '',

sett_display_name_autoignore: 'Auto ignore',
sett_comment_autoignore: 'Automtically ignore all incoming calls',
sett_comment_short_autoignore: '',

sett_display_name_ringtone: 'Ringtone',
sett_comment_ringtone: 'Change your ringtone for incoming calls',
sett_comment_short_ringtone: '',

sett_display_name_changesptoring: 'Ring on session progress',
sett_comment_changesptoring: 'Treat session progress (183) responses as ringing (180). This might be required if your service provider doesn\'t send ringing nor early media',
sett_comment_short_changesptoring: 'Treat session progress (183) responses as ringing (180)',

sett_display_name_transport: 'Transport protocol',
sett_comment_transport: 'Select transport layer',
sett_comment_short_transport: '',

sett_display_name_defmute: 'Mute direction',
sett_comment_defmute: 'Specify how to mute the calls when mute button is pressed',
sett_comment_short_defmute: '',

sett_display_name_automute: 'Mute on new call',
sett_comment_automute: 'Specify whether existing calls should be muted on a new call',
sett_comment_short_automute: '',

sett_display_name_autohold: 'Hold on new call',
sett_comment_autohold: 'Specify whether existing calls should be held on a new call',
sett_comment_short_autohold: '',

sett_display_name_customsipheader: 'Custom SIP header',
sett_comment_customsipheader: 'Set a custom sip header (a line in the SIP signaling) that will be sent with all SIP messages (Expert setting)',
sett_comment_short_customsipheader: '',

sett_display_name_enginepriority_java: 'Java applet priority',
sett_comment_enginepriority_java: 'Set java applet engine priority',
sett_comment_short_enginepriority_java: '',

sett_display_name_enginepriority_webrtc: 'WebRTC priority',
sett_comment_enginepriority_webrtc: 'Set WebRTC engine priority',
sett_comment_short_enginepriority_webrtc: '',

sett_display_name_enginepriority_ns: 'Service plugin priority',
sett_comment_enginepriority_ns: 'Set service plugin engine priority',
sett_comment_short_enginepriority_ns: '',

sett_display_name_enginepriority_flash: 'Flash priority',
sett_comment_enginepriority_flash: 'Set flash engine priority',
sett_comment_short_enginepriority_flash: '',

sett_display_name_sendrtponmuted: 'Send media on muted',
sett_comment_sendrtponmuted: 'Send RTP even if muted (zeroed packets). Set to true only if your server is malfunctioning when RTP is suppressed',
sett_comment_short_sendrtponmuted: '',

sett_display_name_capabilityrequest: 'Capability request',
sett_comment_capabilityrequest: 'If set, then will send a capability request (OPTIONS) message to the SIP server on startup',
sett_comment_short_capabilityrequest: '',

sett_display_name_dialerintegration: 'Integrate',
sett_comment_dialerintegration: 'When dialing with native dialer you\'ll be asked if you want to use SIP or mobile',
sett_comment_short_dialerintegration: '',

sett_display_name_devtest: 'Developer tests',
sett_comment_devtest: 'Used for development',
sett_comment_short_devtest: '',

sett_display_name_settobasefunctionality: 'Set to base functionality',
sett_comment_settobasefunctionality: 'Used for development',
sett_comment_short_settobasefunctionality: '',

sett_display_name_enableaudio: 'Enable audio',
sett_comment_enableaudio: 'Used only for tests',
sett_comment_short_enableaudio: '',

sett_display_name_screenrotation: 'Screen rotation',
sett_comment_screenrotation: 'Control screen orientation',
sett_comment_short_screenrotation: 'Control screen orientation',

sett_display_name_audiobufferlength: 'Audiobuffer length',
sett_comment_audiobufferlength: '-1 means auto. Valid values are between 160 and 16000. Expert setting.',
sett_comment_short_audiobufferlength: 'Advanced setting for the audio playback buffer size',

    sett_display_name_p2p: 'Phone 2 Phone URI',
sett_comment_p2p: 'Phone 2 Phone http request',
sett_comment_short_p2p: 'Server HTTP API if any',

sett_display_name_callback: 'Callback URI',
sett_comment_callback: 'Callback HTTP request',
sett_comment_short_callback: 'Server HTTP API if any',

sett_display_name_sms: 'SMS URI',
sett_comment_sms: 'SMS HTTP request',
sett_comment_short_sms: 'Server HTTP API if any',

sett_display_name_creditrequest: 'Balance URI',
sett_comment_creditrequest: 'Balance HTTP request',
sett_comment_short_creditrequest: 'Server HTTP API if any',

sett_display_name_ratingrequest: 'Rating URI',
sett_comment_ratingrequest: 'Rating HTTP request',
sett_comment_short_ratingrequest: 'Server HTTP API if any',

sett_display_name_displaynotification: 'Display notification',
sett_comment_displaynotification: 'Show notifications in phone notification bar (usually on the top corner of your phone)',
sett_comment_short_displaynotification: 'Show notifications in phone notification bar',

sett_display_name_displayvolumecontrols: 'Always display volume',
sett_comment_displayvolumecontrols: 'Always display volume controls when in call',
sett_comment_short_displayvolumecontrols: '',

sett_display_name_displayaudiodevice: 'Always display audio device',
sett_comment_displayaudiodevice: 'Always display audio device when in call',
sett_comment_short_displayaudiodevice: '',

sett_display_name_cpualwayspartiallock: 'CPU always partial lock',
sett_comment_cpualwayspartiallock: 'Keep the device processor always awake. Set only if otherwise you loose registrations and don\'t receive incoming calls',
sett_comment_short_cpualwayspartiallock: 'Keep a partial lock on the CPU to prevent deep sleep',

sett_display_name_disablewbforpstn: 'Disable wideband for PSTN',
sett_comment_disablewbforpstn: 'Disable wideband audio codecs for calls to mobile/landline numbers (wideband only for IP to IP calls)',
sett_comment_short_disablewbforpstn: '',

sett_display_name_multiplecalls: 'Allow multiple calls',
sett_comment_multiplecalls: 'Allow multiple calls / conference (low-end CPU is not capable to handle)',
sett_comment_short_multiplecalls: '',

sett_display_name_callbacknumber: 'Callback number',
sett_comment_callbacknumber: 'Callback access number. Some VoIP service providers provide this kind of number which you can ring and receive incoming call from server IVR',
sett_comment_short_callbacknumber: 'Callback access number',

sett_display_name_storecallhistory: 'Call history storage',
sett_comment_storecallhistory: 'Specify where to store the call history',
sett_comment_short_storecallhistory: '',

sett_display_name_keepdeviceawakeincall: 'Keep device awake incall',
sett_comment_keepdeviceawakeincall: 'Keep device awake during calls',
sett_comment_short_keepdeviceawakeincall: '',

sett_display_name_speakermode: 'Speaker mode',
sett_comment_speakermode: 'Speaker mode',
sett_comment_short_speakermode: '',

sett_display_name_focusaudio: 'Focus audio',
sett_comment_focusaudio: 'Focus on VoIP call audio (this might lower the volume for other streams such as your media player while you are speaking on VoIP)',
sett_comment_short_focusaudio: 'Focus on VoIP audio',

sett_display_name_useroutingapi: 'Use routing API',
sett_comment_useroutingapi: 'Use routing API for compatibility reasons. Some -usually old- devices might need this for correct audio handling',
sett_comment_short_useroutingapi: '',

sett_display_name_hardwaremedia: 'Hardware media',
sett_comment_hardwaremedia: 'Use hardware media enhancements such as AEC and denoise. This might add a slight delay for the audio streams',
sett_comment_short_hardwaremedia: 'Use hardware media enhancements.',

sett_display_name_autousebluetooth: 'Auto Bluetooth',
sett_comment_autousebluetooth: 'Auto use Bluetooth when available',
sett_comment_short_autousebluetooth: '',

sett_display_name_nativefilterallow: 'Allowed prefixes',
sett_comment_nativefilterallow: 'Handle native calls if number starts with',
sett_comment_short_nativefilterallow: '',

sett_display_name_nativefilterblock: 'Not allowed prefixes',
sett_comment_nativefilterblock: 'Don\'t handle native calls if number starts with',
sett_comment_short_nativefilterblock: '',

sett_display_name_integrateifwifionly: 'Integrate if Wifi only',
sett_comment_integrateifwifionly: 'Integrate with native dialer only if Wifi is connected',
sett_comment_short_integrateifwifionly: '',

sett_display_name_cfgvideo: 'Enable video',
sett_comment_cfgvideo: 'Enable video calls',
sett_comment_short_cfgvideo: '',

sett_display_name_video_profile: 'Video quality',
sett_comment_video_profile: 'Set video quality',
sett_comment_short_video_profile: '',

sett_display_name_use_h263: 'Use H263 codec',
sett_comment_use_h263: 'Use H263 video codec',
sett_comment_short_use_h263: '',

sett_display_name_use_h264: 'Use H264 codec',
sett_comment_use_h264: 'Use H264 video codec',
sett_comment_short_use_h264: '',

sett_display_name_vibrate: 'Vibrate',
sett_comment_vibrate: 'Vibrate on incoming calls',
sett_comment_short_vibrate: '',

sett_display_name_video_fps: 'Video FPS',
sett_comment_video_fps: 'Set video framerate, 0 means automatic',
sett_comment_short_video_fps: '',

sett_display_name_setfinalcodec: 'Set final codec',
sett_comment_setfinalcodec: 'Workaround for multiple codec negotiation issues',
sett_comment_short_setfinalcodec: '',

sett_display_name_use_rport: 'Use rport',
sett_comment_use_rport: 'Rport usage in Via header',
sett_comment_short_use_rport: '',

sett_display_name_natopenpackets: 'NAT open packets',
sett_comment_natopenpackets: 'UDP packets to send to open the NAT device (change if you have NAT issues)',
sett_comment_short_natopenpackets: '',



sett_display_name_submenu_sipsettings: 'SIP Settings...',
sett_comment_submenu_sipsettings: 'SIP related configurations',
sett_comment_short_submenu_sipsettings: '',

sett_display_name_submenu_media: 'Media Settings...',
sett_comment_submenu_media: 'Voice codec, quality and device',
sett_comment_short_submenu_media: '',

sett_display_name_submenu_video: 'Video...',
sett_comment_submenu_video: 'Video related settings',
sett_comment_short_submenu_video: '',

sett_display_name_submenu_sounddevicevolume: 'Sound Device and Volume...',
sett_comment_submenu_sounddevicevolume: 'Sound playback and recording',
sett_comment_short_submenu_sounddevicevolume: '',

sett_display_name_submenu_calldivert: 'Call Divert Settings...',
sett_comment_submenu_calldivert: 'Forward, transfer, rewrite',
sett_comment_short_submenu_calldivert: '',

sett_display_name_submenu_calldivert_advanced: 'Advanced settings...',
sett_comment_submenu_calldivert_advanced: 'More settings',
sett_comment_short_submenu_calldivert_advanced: '',

sett_display_name_advancedsettings: 'Advanced settings...',
sett_comment_advancedsettings: 'Show advanced settings',
sett_comment_short_advancedsettings: '',

sett_display_name_entersettings: 'Settings...',
sett_comment_entersettings: 'Show settings',
sett_comment_short_entersettings: '',

sett_display_name_submenu_general: 'General Settings...',
sett_comment_submenu_general: 'Other settings',
sett_comment_short_submenu_general: '',

sett_display_name_submenu_integrate: 'Dialer integration...',
sett_comment_submenu_integrate: 'When dialing with native dialer you\'ll be asked if you want to use SIP or mobile',
sett_comment_short_submenu_integrate: '',

sett_display_name_submenu_advanced: 'Advanced settings... ',
sett_comment_submenu_advanced: 'More settings',
sett_comment_short_submenu_advanced: '',

help_text_custom: '> How to use ?' +
'<br /><br />' +
'  ' +
'In the settings, enter your server address, SIP username and password ' +
'Save the settings (tap on OK).' +
'Now you are ready to initiate and accept phone calls. ' +
'During calls you have some additional options such as call transfer, hold, loudspeaker and others (icons are displayed or press the menu for more).' +
//'We wish you a lean VoIP experience.' +
'<br /><br />' +
'' +
'> What is [BRANDNAME]?' +
'<br /><br />' +
'' +
'[BRANDNAME] is a VoIP softphone using the open standard SIP protocol. [BRANDNAME] is not tied with any VoIP provider. You are free to use it with any VoIP server.' +
'<br /><br />' +
'With [BRANDNAME] you can do the followings:' +
'-connect to any SIP server' +
'-free calls to other SIP softphones' +
'-make (cheap) calls to VoIP/landline/mobile/international (depending on your VoIP service provider)' +
'-accept incoming calls' +
'-exploit SIP features such as chat/CallerID/forward/transfer/hold/conference and others' +
'<br /><br />' +
'> What is SIP/VoIP?' +
'<br /><br />' +
'' +
'VoIP means "Voice over Internet Protocol", a few protocols to allow voice calls to be made over IP networks.' +
'SIP is the newest VoIP standard adopted by many organizations for their telecom infrastructure. By using the open standard SIP protocols you can keep yourself free of locked-in solutions such as Skype and you are free to use any standard based network for your telecom needs.' +
'More details: ' +
'<a href="http://en.wikipedia.org/wiki/Voice_over_IP" target="_blank" onclick="common_public.OpenLinkInInternalBrowser(\'http://en.wikipedia.org/wiki/Voice_over_IP\')">http://en.wikipedia.org/wiki/Voice_over_IP</a>' +
'<br /><br />' +
'<a href="http://en.wikipedia.org/wiki/Session_Initiation_Protocol" target="_blank" onclick="common_public.OpenLinkInInternalBrowser(\'http://en.wikipedia.org/wiki/Session_Initiation_Protocol\')">http://en.wikipedia.org/wiki/Session_Initiation_Protocol</a>' +
'<a href="http://www.voip-info.org/" target="_blank" onclick="common_public.OpenLinkInInternalBrowser(\'http://www.voip-info.org\')">http://www.voip-info.org/</a>' +
'<br /><br />' +
'You can make VoIP calls in the following ways:' +
'-direct IP to IP calls (this can be done by [BRANDNAME] by typing the peer full URI)' +
'-using your own VoIP server such as Asterisk on Linux' +
'-using a VoIP service provider' +
'<br /><br />' +
'' +
'> Settings/Features' +
'<br /><br />' +
'' +
'All the settings except server/username/password is optional.' +
'Change only if you have some special needs or if a setting is required by your VoIP service provider.' +
'There are some easy to use settings such as call forward or number rewrite which you might wish to modify to enhance your VoIP experience.' +
'However the advanced settings (Setting page -> Menu -> Show advanced settings) should be modified only by experts or if you have some issues using the softphone.' +

'A few useful settings:' +
'-Registration to a server: by default the [BRANDNAME] will try to register to the server what you have set to allow incoming calls, but this is optional (if you need only outbound calls) and can be disabled from the "SIP Settings"' +
'-Transport protocol: UDP (the default) usually works with all servers.' +
'-Proxy address: set this only if you are instructed so by your VoIP provider ' +
'-CalledID display: by default it is your username, but you can also set a "CallerID" and/or "Display name" from the "SIP settings" section' +
'' +
'-call forward always: from the "Call Divert" setting, set a "Call forward number" and then set the "Auto answer" setting to "Forward"' +
'-call forward on busy: from the "Call Divert" setting, set a "Call forward number" and then set the "On phone busy" and/or "On VoIP busy" setting to forward calls' +
'<br /><br />' +
'' +
'[BRANDNAME] is compatible with all VoIP servers using the open standard SIP protocol. You are free to create a VoIP account at any service provider' +
'<br /><br />',


help_text: '> How to use ?' +
'<br /><br />' +
'  ' +
'In the settings, enter your server address, SIP username and password ' +
'Save the settings (tap on OK).' +
'Now you are ready to initiate and accept phone calls. ' +
'During calls you have some additional options such as call transfer, hold, loudspeaker and others (icons are displayed or press the menu for more).' +
//'We wish you a lean VoIP experience.' +
'<br /><br />' +
'' +
'> What is [BRANDNAME]?' +
'<br /><br />' +
'' +
'[BRANDNAME] is a VoIP softphone using the open standard SIP protocol. [BRANDNAME] is not tied with any VoIP provider. You are free to use it with any VoIP server.' +
'<br /><br />' +
'With [BRANDNAME] you can do the followings:' +
'-connect to any SIP server' +
'-free calls to other SIP softphones' +
'-make (cheap) calls to VoIP/landline/mobile/international (depending on your VoIP service provider)' +
'-accept incoming calls' +
'-exploit SIP features such as chat/CallerID/forward/transfer/hold/conference and others' +
'<br /><br />' +
'> What is SIP/VoIP?' +
'<br /><br />' +
'' +
'VoIP means "Voice over Internet Protocol", a few protocols to allow voice calls to be made over IP networks.' +
'SIP is the newest VoIP standard adopted by many organizations for their telecom infrastructure. By using the open standard SIP protocols you can keep yourself free of locked-in solutions such as Skype and you are free to use any standard based network for your telecom needs.' +
'More details: ' +
'<a href="http://en.wikipedia.org/wiki/Voice_over_IP" target="_blank" onclick="common_public.OpenLinkInInternalBrowser(\'http://en.wikipedia.org/wiki/Voice_over_IP\')">http://en.wikipedia.org/wiki/Voice_over_IP</a>' +
'<br /><br />' +
'<a href="http://en.wikipedia.org/wiki/Session_Initiation_Protocol" target="_blank" onclick="common_public.OpenLinkInInternalBrowser(\'http://en.wikipedia.org/wiki/Session_Initiation_Protocol\')">http://en.wikipedia.org/wiki/Session_Initiation_Protocol</a>' +
'<a href="http://www.voip-info.org/" target="_blank" onclick="common_public.OpenLinkInInternalBrowser(\'http://www.voip-info.org\')">http://www.voip-info.org/</a>' +
'<br /><br />' +
'You can make VoIP calls in the following ways:' +
'-direct IP to IP calls (this can be done by [BRANDNAME] by typing the peer full URI)' +
'-using your own VoIP server such as Asterisk on Linux or Mizutech VoIP server on Windows servers' +
'-using a VoIP service provider' +
'<br /><br />' +
'' +
'> Settings/Features' +
'<br /><br />' +
'' +
'All the settings except server/username/password is optional.' +
'Change only if you have some special needs or if a setting is required by your VoIP service provider.' +
'There are some easy to use settings such as call forward or number rewrite which you might wish to modify to enhance your VoIP experience.' +
'However the advanced settings (Setting page -> Menu -> Show advanced settings) should be modified only by experts or if you have some issues using the softphone.' +

'A few useful settings:' +
'-Registration to a server: by default the [BRANDNAME] will try to register to the server what you have set to allow incoming calls, but this is optional (if you need only outbound calls) and can be disabled from the "SIP Settings"' +
'-Transport protocol: UDP (the default) usually works with all servers.' +
'-Proxy address: set this only if you are instructed so by your VoIP provider ' +
'-CalledID display: by default it is your username, but you can also set a "CallerID" and/or "Display name" from the "SIP settings" section' +
'' +
'-call forward always: from the "Call Divert" setting, set a "Call forward number" and then set the "Auto answer" setting to "Forward"' +
'-call forward on busy: from the "Call Divert" setting, set a "Call forward number" and then set the "On phone busy" and/or "On VoIP busy" setting to forward calls' +
'<br /><br />' +
'' +
'[BRANDNAME] is compatible with all VoIP servers using the open standard SIP protocol. You are free to create a VoIP account at any service provider' +
'<br /><br />' +
'' +
'> How can I get my customized softphone' +
'<br /><br />' +
'' +
'Contact Mizutech at <a href="mailto:info@mizu-voip.com">info@mizu-voip.com</a>' +
'<br /><br />' +
'' +
'> Contact us' +
'<br /><br />' +
'' +
'<a href="http://www.mizu-voip.com" target="_blank" onclick="common_public.OpenLinkInInternalBrowser(\'http://www.mizu-voip.com\')">http://www.mizu-voip.com</a><br />' +
'general/commercial: <a href="mailto:info@mizu-voip.com">info@mizu-voip.com</a><br />' +
'technical support: <a href="mailto:webphone@mizu-voip.com">webphone@mizu-voip.com</a>',





dlg_about_msg: "[BRANDNAME] Version [APPVERSION]<br /><br />" +

"[BRANDNAME] is a SIP client.<br /><br />" +

" Visit http://www.mizu-voip.com for more info. For customized/branded builds email to info@mizu-voip.com<br />" +
"Please use the Mizutech Forum (under the Support menu) for any questions, bug reports or suggestions.<br />" +
"<br /><br /><br />" +
"License agreement:<br /><br />" +

"This SOFTWARE is licensed, not sold.<br />" +
"Copyright (C) 2011 Mizutech. All rights reserved for MizuTech SRL Romania.<br /><br />" +

"BY USING, DEPLOYING OR RUNNING THIS WEBPHONE SOFTWARE, YOU ARE CONSENTING TO BE BOUND BY AND ARE BECOMING A PARTY TO THIS AGREEMENT. IF YOU DO NOT AGREE TO ALL OF THE TERMS OF THIS AGREEMENT, DO NOT DEPLOY AND DO NOT EXECUTE IT! You must destroy all copies of the Software upon termination.<br /><br />" +

"This software is licensed, not sold and it is free to use for non commercial purposes.<br />" +
"MizuTech grants you a non-exclusive license to use the software free of charge for non commercial purposes only.<br />" +
"This license does not entitle you to hard-copy documentation, support or telephone assistance.<br /><br />" +

"You may not:<br />" +
"	-Commercially deploy the software<br />" +
"	-Make any revenue by using the software (except Pro version)<br />" +
"	-Resell the software<br />" +
"	-Reverse engineer, decompile, or disassemble the software<br />" +
"	-Modify the software in any way<br />" +
"	-Rent, lease, grant a security interest in, or otherwise transfer purchase rights of the software<br /><br />" +

"Title, ownership rights, and intellectual property rights in the Software shall remain with MizuTech and/or its suppliers.<br />" +
"This Agreement and the license granted hereunder will terminate automatically if you fail to comply with the limitations described herein. Upon termination, you must destroy all copies of the Software.<br />" +
"This software contains some modules distributed with LGPL or modified BSD license:<br />" +
"	-speex: http://www.speex.org <br />" +
"	-iLBC: http://www.ilbcfreeware.org <br /><br />" +

"THE SOFTWARE IS PROVIDED \"AS IS\" WITHOUT ANY WARRANTY OF ANY KIND.<br />" +
"Mizutech and its suppliers specifically disclaim any express or implied warranty of fitness for High Risk Activities.<br /><br />" +

"Copyright (C) Mizutech SRL<br />"
};




var stringres = {

get: function (resName)
{
    if (typeof (resName) === 'undefined' || resName === null) { return ''; }

    resName = resName.toLowerCase();

    if (typeof (StringResources[resName]) === 'undefined' || StringResources[resName] === null)
    {
        return '';
    }

    return StringResources[resName];
}
    
};