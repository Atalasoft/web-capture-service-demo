<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Atalasoft.Demo.WebCaptureService._Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="Scripts/jquery-3.3.1.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery.easing.1.3.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.12.1.min.js" type="text/javascript"></script>
    <script src="Scripts/raphael-min.js" type="text/javascript"></script>
    <script src="Scripts/clipboard.min.js" type="text/javascript"></script>
    <script src="Scripts/atalaWebDocumentViewer.js" type="text/javascript"></script>
	<link href="Content/themes/base/jquery-ui.min.css" rel="stylesheet" type="text/css" />
	<link href="Scripts/atalaWebDocumentViewer.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/atalaWebCapture.js" type="text/javascript"></script>
    <script src="WebCaptureDemoResources/Scripts/Initialization.js" type="text/javascript"></script>
    <script src="WebCaptureDemoResources/Scripts/ErrorsAndEvents.js" type="text/javascript"></script>
    <script src="WebCaptureDemoResources/Scripts/Customization.js" type="text/javascript"></script>
    <link href="WebCaptureDemoResources/Styling.css" rel="stylesheet" type="text/css" />
    <!--[if lte IE 8]>
<script src="WebCaptureDemoResources/Scripts/html5.js" type="text/javascript"></script>
<![endif]-->
    <title>Atalasoft's Web Capture Service Demo</title>
</head>
<body>
    <form id="form1" runat="server">
    <header>
        <img src="WebCaptureDemoResources/header.png" alt="Welcome to Atala Bank!*" />
    </header>
    <section>
        <ul class="mainsection">
            <li class="left">
                <img src="WebCaptureDemoResources/leftbar.png" alt="Quick Links" />
            </li>
            <li class="middle">
                <div class="atala-document-toolbar">
                </div>
                <div class="atala-document-container">
                </div>
            </li>
        </ul>
    </section>
    <div id="SelectScannerDialog" class="scannerDialog" style="position: absolute; left: 40%;
        top: 40%; visibility: hidden; outline: #3AC solid 3px; background-color: white;
        padding: 15px;">
        <p>
            Select Scanner:<br>
            <select class="atala-scanner-list" disabled="disabled" name="scannerList">
                <option selected="selected">(no scanners available)</option>
            </select>
        </p>
        <p>
            <input type="button" title="Close" id="CloseButton" value="Close" onclick="ScannerDialogClick();" style="float: right;">
        </p>
    </div>
    <div class="atala-prompt-message" style="position: absolute; left: 40%; top: 40%;
        visibility: hidden; outline: #3AC solid 3px; background-color: white; padding: 15px;">
        <p>
            <input type="button" title="Close" id="Button1" value="Close" onclick="PromptMessageClick();"
                style="float: right;">
        </p>
    </div>
    <div id="LoadingGif" class="loadingGif" style="visibility: hidden;">
    </div>
    </form>
</body>
</html>