function AddCustomToolbar() {

    var toolbar = $('<div />');

    toolbar.addClass('WebCaptureToolbar');

    toolbar.append(CreateSelectButton());
    toolbar.append(CreateScanButton());
    toolbar.append(CreateVRSToggleButton());

    $('.atala-document-toolbar').append(toolbar);

}

function AddStatusToolbar() {

    var toolbar = $('<div />');

    toolbar.addClass('StatusToolbar');
    toolbar.text("Status : Ready");

    $('.atala-document-toolbar').append(toolbar);

}

function CreateSelectButton() {
    var selectButton = $('<input type="button" title="Select Scanner"></input>');
    selectButton.addClass('atala-select-button');
    selectButton.addClass('atala-ui-button');
    selectButton.click(ScannerDialogShow);

    try {
        selectButton.button({
            icons: { primary: 'atala-ui-icon-select' }, text: false
        });
    } catch (ex) {
        //alert(ex);
    }


    
    return selectButton;
}

function CreateScanButton() {

    var scanButton = $('<input type="button" title="Scan" role="button" onclick=scanWithSelectedScanner();></input>');

    scanButton.addClass('atala-scan-button');
    scanButton.addClass('atala-ui-button');

    try {
        scanButton.button({
            icons: { primary: 'atala-ui-icon-scan' }, text: false
        });
    } catch (ex) {
        //alert(ex);
    }


    return scanButton;

}


function CreateVRSToggleButton() {

    var vrsButton = $('<input type="button" title="VRS Enabled"></input>');

    vrsButton.addClass('atala-VRS-button');
    vrsButton.addClass('atala-ui-button');

    try {
        vrsButton.button({
            icons: { primary: 'atala-ui-icon-vrs' }, text: false
        });
    } catch (ex) {
        //alert(ex);
    }


    vrsButton.click(ToggleVRSState);

    return vrsButton;
}

function ModifyViewer() {

    $('.atala-ui-button .ui-button-text').html('');
    $('.atala-ui-button').css({ height: '24px', width: '24px' });
}

