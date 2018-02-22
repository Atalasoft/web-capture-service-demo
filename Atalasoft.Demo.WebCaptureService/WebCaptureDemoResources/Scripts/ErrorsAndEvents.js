function AppendStatus(msg) {
    $('.StatusToolbar').text(msg);
}

function promptText(msg) {
    $(".atala-prompt-message").text(msg);
    $(".atala-prompt-message").css("visibility", "visible");
}

function promptHTML(h) {
    $(".atala-prompt-message").html(h);
    $(".atala-prompt-message").css("visibility", "visible");
}

var _isMouseOverScannerDialog = false;
function InitScannerDialog() {

    var scannerDialog = $('#SelectScannerDialog');

    scannerDialog.onmouseover = function () { _isMouseOverScannerDialog = true; };
    scannerDialog.onmouseout = function () { _isMouseOverScannerDialog = false; };
    scannerDialog.css("visibility", "hidden");

}

function ScannerDialogClick(e) {
    if (!_isMouseOverScannerDialog) {
        _isMouseOverScannerDialog = false;
        var scannerDialog = $('#SelectScannerDialog');
        scannerDialog.css("visibility", "hidden");
    }
}

function PromptMessageClick(e) {
    $(".atala-prompt-message").css("visibility", "hidden");
}

function ScannerDialogShow() {
    if (_isMouseOverScannerDialog)
        return;

    var scannerDialog = $('#SelectScannerDialog');
    scannerDialog.css("visibility", "visible");
}

function ToggleVRSState() {

    Atalasoft.Controls.Capture.WebScanning.scanningOptions.applyVRS = !Atalasoft.Controls.Capture.WebScanning.scanningOptions.applyVRS;

    if (Atalasoft.Controls.Capture.WebScanning.scanningOptions.applyVRS) {
        $('.atala-VRS-button').css("background-image", "url('WebCaptureDemoResources/icons/vrs16.png')");
        $('.atala-VRS-button').attr("title", "VRS Enabled");
    }
    else {
        $('.atala-VRS-button').css("background-image", "url('WebCaptureDemoResources/icons/novrs16.png')");
        $('.atala-VRS-button').attr("title","VRS Disabled");
    }

}

function Started(msg) {
    AppendStatus(msg);

    var viewer = $('.atala-document-container');
    var pos = viewer.position();
    var w = viewer.width();
    var h = viewer.height();

    var gif = $('.loadingGif');
    gif.css("visibility", "visible");
    gif.css("left", (pos.left + w / 2));
    gif.css("top", (pos.top + h / 2));
    gif.css("height", h);
    gif.css("width", w);

}

function ImageAcquired() {
    _scanPage++;
    AppendStatus("Scanning Page " + _scanPage);
}

function Completed(msg) {
    AppendStatus(msg);
    var gif = $('.loadingGif');
    gif.css("visibility", "hidden");
}

function scanErrorHandler(msg, params) {
    //AppendStatus(msg + "<br />params=" + objToString(params));
    switch (msg) {
        case Atalasoft.Controls.Capture.Errors.badBrowser:
            promptHTML(
                msg + " <br />(" + params + ")");
            break;

        case Atalasoft.Controls.Capture.Errors.activeX:
            promptHTML(
            "The ActiveX Scanning Control needs to be installed, updated,<br/>" +
            "or enabled.  When prompted, please allow the Web Capture Web <br/>" +
            "Scanning Control to install itself, or Manage Add-ons through<br/>" +
            "IE Settings. Refresh your browser when completed.");
            break;

        case Atalasoft.Controls.Capture.Errors.noTwain:
            promptHTML(
                "TWAIN is not installed on this computer.\n" +
                "Contact your system administrator.");
            break;

        case Atalasoft.Controls.Capture.Errors.noPlugin:
            promptHTML(
                "The Web Capture Service is not available. <br />" +
                "Please follow any prompts to install it, or <a href='Scripts/" + params.filename + "'>Click Here</a><br />" +
                "Refresh your browser when completed.");
            break;

        case Atalasoft.Controls.Capture.Errors.oldPlugin:
            promptHTML(
                "The Web Capture Service is out of date.<br />" +
                "To download and install the latest version " +
                "<a href='Scripts/" + params.filename + "'>Click Here</a><br />" +
                "Refresh your browser when completed.");
            break;
        case "VRS: No license or license expired":
            promptHTML("Scanning aborted with a VRS licensing exception. <br /><br />" +
                "VRS is enabled, but no VRS license is present. <br />" +
                "Either turn VRS off in your scanningOptions or <br />" +
                "activate a license with VRS.");
            break;
        default:
            promptHTML(msg);
            break;
    }
}

function objToString(obj) {
    if (typeof obj === 'object') {
        var text = "{ ";
        var separator = "";
        for (var name in obj) {
            if (obj.hasOwnProperty(name)) {
                text += separator + name + ": " + objToString(obj[name]);
                separator = ", ";
            }
        }
        return text + " }";
    } else if (typeof obj == 'string') {
        return '\"' + obj + '\"';
    } else {
        return obj;
    }
}

