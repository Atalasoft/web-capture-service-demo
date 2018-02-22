var _viewer;
var _scanPage = 1;

$(function () {

    try {

        InitializeWebDocumentViewer();

        AddCustomToolbar();
        AddStatusToolbar();

        InitializeWebScanning();

        ModifyViewer();
    }
    catch (error) {
        AppendStatus(error);
    }
});

function InitializeWebDocumentViewer() {
    _viewer = new Atalasoft.Controls.WebDocumentViewer({
        parent: $('.atala-document-container'),
        toolbarparent: $('.atala-document-toolbar'),
        serverurl: 'WDVHandler.ashx',
    });
}

function InitializeWebScanning() {

    Atalasoft.Controls.Capture.WebScanning.initialize({
        handlerUrl: 'ScanningHandler.ashx',
        onScanError: function (msg, params) { scanErrorHandler(msg, params); },
        onScanStarted: function (eventName, eventObj) { Started("Scanning Page 1"); },
        onImageAcquired: function (eventName, eventObj) { ImageAcquired(); },
        onScanCompleted: function (eventName, eventObj) { Completed("Scanning Completed"); if(!eventObj.success) scanErrorHandler(eventObj.error.message); },
        onUploadError: function (msg, params) { AppendStatus(msg); },
        onUploadStarted: function (eventName, eventObj) {
            AppendStatus('Upload Started');
        },
        onUploadCompleted: function (eventName, eventObj) {
            AppendStatus('Upload Completed: ' + eventObj.success);
            if (eventObj.success) {
                AppendStatus('Document Ready');
                _viewer.OpenUrl('atala-capture-upload/' + eventObj.documentFilename);
            }
        },
        scanningOptions: {
            applyVRS: true, // turn on VRS
            duplex: 1, // double-sided scanning
            resultPixelType: 0, //  -- VRS
            suppressBackgroundColor: true, // if image has solid background color, treat that as 'white' -- VRS
            discardBlankPages: true, // just what it says. Most useful when scanning duplex with some blank backs. -- VRS
            tiff: { jpegCompression: true} // if you are saving to TIFF and might be saving color, this shrinks the files *a lot* 
            //showScannerUI: true
        }
    });

}

function scanWithSelectedScanner() {
    Atalasoft.Controls.Capture.WebScanning.scanningOptions.scanner = $('.atala-scanner-list').val();
    Atalasoft.Controls.Capture.WebScanning.scan();
}


