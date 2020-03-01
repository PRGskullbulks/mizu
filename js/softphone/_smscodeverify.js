// smscodeverify
wpa._smscodeverify = (function ()
{

var username = '';
var password = '';
var userID = '';

function onCreate (event) // called only once - bind events here
{
    try{
    common.PutToDebugLog(4, "EVENT, _smscodeverify: onCreate");
    
    j$( window ).resize(function() // window resize handling
    {
        if (j$.mobile.activePage.attr('id') === 'page_smscodeverify')
        {
            MeasureSmscodeverify();
        }
    });

    j$('#smscodeverify_menu_ul').on('click', 'li', function(event)
    {
        MenuItemSelected(j$(this).attr('id'));
    });
    j$("#btn_smscodeverify_menu").on("click", function() { CreateOptionsMenu('#smscodeverify_menu_ul'); });
    j$("#btn_smscodeverify_menu").attr("title", stringres.get("hint_menu"));
    
    j$("#btn_sms_verify").on("click", function() { VerifyPhonenumber(); });
    j$("#btn_cancel_smscodeverify").on("click", function() { CancelClick(); });
    
    j$("#sms_instructions").html(stringres.get('smscode_instrucation'));
    
    } catch(err) { common.PutToDebugLogException(2, "_smscodeverify: onCreate", err); }
}

function onStart(event)
{
    try{
    common.PutToDebugLog(4, "EVENT, _smscodeverify: onStart");
    global.isSmscodeverifyStarted = true;
    
    if (!common.isNull(document.getElementById('smscodeverify_title')))
    {
        document.getElementById('smscodeverify_title').innerHTML = stringres.get('smscodeverify_title');
    }
    j$("#smscodeverify_title").attr("title", stringres.get("hint_page"));

    if (!common.isNull(document.getElementById('smscodeverify_btnback')))
    {
        document.getElementById('smscodeverify_btnback').innerHTML = '<b>&LT;</b>&nbsp;' + stringres.get("go_back_btn_txt");
    }
    
    if (!common.isNull(document.getElementById('btn_sms_verify')))
    {
        document.getElementById('btn_sms_verify').innerHTML = stringres.get('btn_smsverify');
    }
    
    if (!common.isNull(document.getElementById('btn_cancel_smscodeverify')))
    {
        document.getElementById('btn_cancel_smscodeverify').innerHTML = stringres.get('btn_cancel');
    }

    global.nuiswebpage = null;

    username = common.GetIntentParam(global.intentsmscodeverify, 'username');
    password = common.GetIntentParam(global.intentsmscodeverify, 'password');
    userID = common.GetIntentParam(global.intentsmscodeverify, 'smsverify_userid');
    
    MeasureSmscodeverify();
    
    } catch(err) { common.PutToDebugLogException(2, "_smscodeverify: onStart", err); }
}

function MeasureSmscodeverify() // resolve window height size change
{
    try{
//--    var pgh = common.GetDeviceHeight() - 1; j$('#page_smscodeverify').css('min-height', pgh + 'px'); // must be set when softphone is skin in div
    j$('#page_smscodeverify').css('min-height', 'auto'); // must be set when softphone is skin in div

    j$(".separator_line_thick").css( 'background-color', common.HoverCalc(common.getBgColor('#page_smscodeverify'), -30) );
    
    var heightTemp = common.GetDeviceHeight() - j$("#smscodeverify_header").height() - j$("#smscodeverify_footer").height();
    heightTemp = heightTemp - 5;
    heightTemp = Math.floor(heightTemp);
    j$("#page_smscodeverify_content").height(heightTemp);

    } catch(err) { common.PutToDebugLogException(2, "_smscodeverify: MeasureSmscodeverify", err); }
}

function VerifyPhonenumber()
{
    var code = "";
    try{
        if (common.isNull(document.getElementById('sms_code_field')))
        {
            common.PutToDebugLog(2, 'ERROR, smscodeverify VerifyPhonenumber: input field is NULL');
            return;
        }

        var code = document.getElementById('sms_code_field').nodeValue;
        if (common.isNull(code)) { code = ''; }

        if (code.length < 2 || code.length > 10)
        {
            common.ShowToast(stringres.get('sms_verification_error1'));
            return;
        }

        common.PutToDebugLog(2, "EVENT, smscodeverify VerifyPhonenumber code is: " + code);
        global.smsCodeUser = code;
        
        code = encodeURIComponent(code);
        var usr = encodeURIComponent(username);
        var pwd = encodeURIComponent(password);

        if (common.isNull(userID) || userID.length < 1)
        {
            userID = username;
        }

        //String uritmp = Common.smsverify_url;
        var uritmp = newuser_public.GetUriSecondNU();
        if (common.Trim(uritmp).indexOf("*") === 0) { uritmp = uritmp.substring(1); }
        uritmp = uritmp.replace("USERNAME", usr);
        uritmp = uritmp.replace("PASSWORD", pwd);
        uritmp = uritmp.replace("SMSCODE", code);
        uritmp = uritmp.replace("DEVICEID", common.GetDeviceID());
        uritmp = uritmp.replace("USERID", userID);

        //http://185.20.99.144/mvapireq/?apientry=newusercode&authkey=5267734&u_code=SMSCODE&u_username=USERNAME&u_password=PASSWORD&deviceid=DEVICEID&now=415

        common.PutToDebugLog(4, "EVENT, VerifyPhonenumber uri: "+uritmp);
        common.UriParser(uritmp, '', '', '', '', 'verifysmscode');

    } catch(err) { common.PutToDebugLogException(2, "_smscodeverify: VerifyPhonenumber", err); }
}

function CancelClick()
{
    try{
    j$.mobile.back();

    } catch(err) { common.PutToDebugLogException(2, "_smscodeverify: CancelClick", err); }
}

function HttpResponseHandler(resp, action)
{
    try{
    if (actionHandler === 'smscodeverify')
    {
        if ((resp.toLowerCase()).indexOf('error') >= 0)
        {
            common.PutToDebugLog(2, 'ERROR, HttpResponseHandler action: smscodeverify, error: ' + resp);
            common.ShowToast(resp);
            return;
        }

        if (action === "verifysmscode")
        {
            if (resp == null) resp = "";
            if (common.isNull(resp)) { resp = ''; }
            resp = resp.replace("\"", "");
            var tempresp = resp.toLowerCase();

            var seconduri = newuser_public.GetUriSecondNU();

            var errorstring = common.GetUrlParamVal(seconduri, "ERRORSTRING");
            if (common.isNull(errorstring)) { errorstring = ""; }
            errorstring = errorstring.toLowerCase();

        // get and display success message if any
            var msgtodisplay = common.GetJsonParamVal(resp, "message:");
            if (common.isNull(msgtodisplay) || msgtodisplay.length < 1)
            {
                msgtodisplay = common.GetJsonParamVal(resp, "msg:");
            }
            if (common.isNull(msgtodisplay) || common.Trim(msgtodisplay).length < 1) { msgtodisplay = resp; }

            if (resp.length < 1 || tempresp.indexOf("error") >= 0 || tempresp.indexOf(errorstring) >= 0)
            {
                common.PutToDebugLog(2, "ERROR, SMS verification failed: " + resp);
                common.PutToDebugLog(1, "ERROR," + msgtodisplay);
                common.ShowToast(msgtodisplay);
                return;
            }

            var success = common.GetUrlParamVal(seconduri, "SUCCESSSTRING");
            if (common.isNull(success)) { success = ""; }
            success = success.toLowerCase();
            if (success.length > 0)
            {
                if (tempresp.indexOf(success) >= 0)
                {
                    common.PutToDebugLog(1, "EVENT," + msgtodisplay);
                    common.PutToDebugLog(2, "EVENT, smscodeverify SUCCEDED" + resp);
                }else
                {
                    common.PutToDebugLog(1, "ERROR," + msgtodisplay);
                    common.PutToDebugLog(2, "ERROR, smscodeverify failed, does not contain SUCCESSSTRING" + resp);
                    common.ShowToast(msgtodisplay);
                    return;
                }
            }

            var userid_begin = common.GetUrlParamVal(seconduri, "USERID_BEGIN");
            var userid_end = common.GetUrlParamVal(seconduri, "USERID_END");
            var username_begin = common.GetUrlParamVal(seconduri, "USERNAME_BEGIN");
            var username_end = common.GetUrlParamVal(seconduri, "USERNAME_END");
            var password_begin = common.GetUrlParamVal(seconduri, "PASSWORD_BEGIN");
            var password_end = common.GetUrlParamVal(seconduri, "PASSWORD_END");
            var callerid_begin = common.GetUrlParamVal(seconduri, "CALLERID_BEGIN");
            var callerid_end = common.GetUrlParamVal(seconduri, "CALLERID_END");
            var name_begin = common.GetUrlParamVal(seconduri, "NAME_BEGIN");
            var name_end = common.GetUrlParamVal(seconduri, "NAME_END");
            var email_begin = common.GetUrlParamVal(seconduri, "EMAIL_BEGIN");
            var email_end = common.GetUrlParamVal(seconduri, "EMAIL_END");

            var usr = username;
            var pwd = password;

            if (email_begin.length > 0 && email_end.length > 0 && resp.indexOf(email_begin) >= 0 && resp.indexOf(email_end) > 0)
            {
                var email = resp.substring(resp.indexOf(email_begin) + email_begin.length, resp.indexOf(email_end));

                common.SaveParameter("email", email);
                common.PutToDebugLog(2, "EVENT,smscodeverify VerifyThreadHandler NEW email saved: " + email);
            }

            if (name_begin.length > 0 && name_end.length > 0 && resp.indexOf(name_begin) >= 0 && resp.indexOf(name_end) > 0)
            {
                var name = resp.substring(resp.indexOf(name_begin) + name_begin.length, resp.indexOf(name_end));

                common.SaveParameter("name", name);
                common.PutToDebugLog(2, "EVENT,smscodeverify VerifyThreadHandler NEW name saved: " + name);
            }

            if (callerid_begin.length > 0 && callerid_end.length > 0 && resp.indexOf(callerid_begin) >= 0 && resp.indexOf(callerid_end) > 0)
            {
                var callerid = resp.substring(resp.indexOf(callerid_begin) + callerid_begin.length, resp.indexOf(callerid_end));

                common.SaveParameter("username", callerid);
                common.PutToDebugLog(2, "EVENT,smscodeverify VerifyThreadHandler NEW callerid saved: " + callerid);
            }

            if (userid_begin.length > 0 && userid_end.length > 0 && resp.indexOf(userid_begin) >= 0 && resp.indexOf(userid_end) > 0)
            {
                var userid = resp.substring(resp.indexOf(userid_begin) + userid_begin.length, resp.indexOf(userid_end));

                common.SaveParameter("userid", userid);
                common.PutToDebugLog(2, "EVENT,smscodeverify VerifyThreadHandler NEW userid saved: " + userid);
            }

            if (username_begin.length > 0 && username_end.length > 0 && resp.indexOf(username_begin) >= 0 && resp.indexOf(username_end) > 0)
            {
                usr = resp.substring(resp.indexOf(username_begin) + username_begin.length, resp.indexOf(username_end));

                common.SaveParameter("sipusername", usr);
                common.PutToDebugLog(2, "EVENT,smscodeverify VerifyThreadHandler NEW username saved: " + usr);
            }

            
            var showpwd = false;
            if (password_begin.length > 0 && password_end.length > 0 && resp.indexOf(password_begin) >= 0 && resp.indexOf(password_end) > 0)
            {
                pwd = resp.substring(resp.indexOf(password_begin) + password_begin.length, resp.indexOf(password_end));
                common.SaveParameter("password", pwd);
                common.PutToDebugLog(2, "EVENT,smscodeverify VerifyThreadHandler NEW password saved: " + pwd);
            }else
            {
                // if user already exists, then I will receive encrypted password:
                // OK: userdata: Base64XOREncode(password)
                if (resp.indexOf("userdata:") >= 0)
                {
                    pwd = resp.substring(resp.indexOf("userdata:") + 9, resp.length);
                    pwd = pwd.trim();

                    var key = common.GetParameter('httpreqencryptkey');
                    if (!common.isNull(key) && key.length > 1)
                    {
                        pwd = StrDc(pwd, key);
                    }

                    common.SaveParameter("password", pwd);
                    common.SaveParameter("sipusername", usr);
                    common.PutToDebugLog(2, "EVENT,smscodeverify VerifyThreadHandler OLD password saved: " + pwd);
                }
                else if (pwd.length > 0)
                {
                    common.SaveParameter("password", pwd);
                    common.SaveParameter("username", usr);
                    common.PutToDebugLog(2, "EVENT,smscodeverify VerifyThreadHandler password saved: " + pwd + "; username: " + username);

            // calculate password
                }else // int uauthverifypwd: 0=pwd+755+code,1=code (default),2=client supplied
                {
                    var uauthverifypwd = common.GetParameterInt('uauthverifypwd', 2);

                    if (uauthverifypwd === 0) { pwd = password + "755" + global.smsCodeUser; }
                    else if (uauthverifypwd === 1) { pwd = global.smsCodeUser; }
                    else if (uauthverifypwd > 1) { pwd = password; }

                    common.SaveParameter("password", pwd);
                    common.SaveParameter("sipusername", usr);
                    common.PutToDebugLog(2, "EVENT,smscodeverify VerifyThreadHandler NEW password saved: " + pwd + "; username: " + username);
                    showpwd = true;
                }
            }

            // try to guess/find username in http answer; handle common cases
            var usrTmp = common.GetJsonParamVal(resp, "sip_username");
            if (common.isNull(usrTmp) || usrTmp.length < 1) usrTmp = common.GetJsonParamVal(resp, "sipusername");
            if (common.isNull(usrTmp) || usrTmp.length < 1) usrTmp = common.GetJsonParamVal(resp, "username");
            if (!common.isNull(usrTmp) && usrTmp.length > 0) usr = usrTmp;

            if (!common.isNull(usr) && usr.length > 0)
            {
                common.SaveParameter("sipusername", usr);
                common.PutToDebugLog(2, "EVENT,smscodeverify VerifyThreadHandler NEW username saved(autoguessed): " + usr);
            }


            var pwdTmp = common.GetJsonParamVal(resp, "sip_password");
            if (common.isNull(pwdTmp) || pwdTmp.length < 1) pwdTmp = common.GetJsonParamVal(resp, "sippassword");
            if (common.isNull(pwdTmp) || pwdTmp.length < 1) pwdTmp = common.GetJsonParamVal(resp, "password");
            if (!common.isNull(pwdTmp) && pwdTmp.length > 0) pwd = pwdTmp;

            if (!common.isNull(pwd) && pwd.length > 0)
            {
                common.SaveParameter("password", pwd);
                common.PutToDebugLog(2, "EVENT,smscodeverify VerifyThreadHandler NEW password saved(autoguessed): " + usr);
            }

            if (common.GetParameter("username").length > 0 && common.GetParameter("password").length > 0)
            {
                if (Settings.instance != null)
                {
                    setTimeout(function ()
                    {
                        j$("#btn_login").click();
                    }, 300);

                    if (showpwd === true)
                    {
                        common.AlertWindow(stringres.get('password'), stringres.get('sms_verification_pwdmsg') + ": " +common.GetParameter("password"));
                    }
                }
            }
        }

        j$.mobile.back();
    }
    } catch(err) { common.PutToDebugLogException(2, "_smscodeverify: HttpResponseHandler", err); }
}

var MENUITEM_VERIFY = '#menuitem_smscodeverify_verify';
var MENUITEM_CANCEL = '#menuitem_smscodeverify_cancel';

function CreateOptionsMenu (menuId) // adding items to menu, called from html
{
    try{
// remove data transition for windows softphone, because it's slow
    if (common.IsWindowsSoftphone())
    {
        j$( "#btn_smscodeverify_menu" ).removeAttr('data-transition');
    }

    if ( common.isNull(menuId) || menuId.lenght < 1 ) { common.PutToDebugLog(2, "ERROR, _smscodeverify: CreateOptionsMenu menuid null"); return; }

    if (j$(menuId).length <= 0) { common.PutToDebugLog(2, "ERROR, _smscodeverify: CreateOptionsMenu can't get reference to Menu"); return; }
    
    if (menuId.charAt(0) !== '#') { menuId = '#' + menuId; }
    
    j$(menuId).html('');
    j$(menuId).append( '<li id="' + MENUITEM_VERIFY + '"><a data-rel="back">' + stringres.get('btn_smsverify') + '</a></li>' ).listview('refresh');
    j$(menuId).append( '<li id="' + MENUITEM_CANCEL + '"><a data-rel="back">' + stringres.get('btn_cancel') + '</a></li>' ).listview('refresh');

    return true;
    
    } catch(err) { common.PutToDebugLogException(2, "_smscodeverify: CreateOptionsMenu", err); }
    
    return false;
}

function MenuItemSelected(itemid)
{
    try{
    if (common.isNull(itemid) || itemid.length < 1) { return; }
    
    j$( '#smscodeverify_menu' ).on( 'popupafterclose', function( event )
    {
        j$( '#smscodeverify_menu' ).off( 'popupafterclose' );
        
        switch (itemid)
        {
            case MENUITEM_VERIFY:
                VerifyPhonenumber();
                break;
            case MENUITEM_CANCEL:
                CancelClick();
                break;
        }
    });
    } catch(err) { common.PutToDebugLogException(2, "_smscodeverify: MenuItemSelected", err); }
}

function onStop(event)
{
    try{
    common.PutToDebugLog(4, "EVENT, _smscodeverify: onStop");
    global.isSmscodeverifyStarted = false;

    } catch(err) { common.PutToDebugLogException(2, "_smscodeverify: onStop", err); }
}

function onDestroy (event){} // deprecated by onstop

var smscodeverify_public = {

    HttpResponseHandler: HttpResponseHandler
};
window.smscodeverify_public = smscodeverify_public;

// public members and methods
return {
    onCreate: onCreate,
    onStart: onStart,
    onStop: onStop,
    onDestroy: onDestroy
};
})();