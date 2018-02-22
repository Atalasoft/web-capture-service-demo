using Atalasoft.Imaging.WebControls.Capture;
using Atalasoft.Licensing;
using System.Configuration;
using System.Web;

namespace Atalasoft.Demo.WebCaptureService.Handlers
{
    public class ScanningHandler : WebCaptureRequestHandler
    {
        static ScanningHandler()
        {
            AtalaLicense.SetAssemblyLicense(HttpUtility.HtmlDecode(ConfigurationManager.AppSettings["AtalasoftLicenseString"]));
        }
    }
}