using Atalasoft.Imaging.WebControls;
using Atalasoft.Licensing;
using System.Configuration;
using System.Web;

namespace Atalasoft.Demo.WebCaptureService.Handlers
{
    public class WDVHandler : WebDocumentRequestHandler
    {
        static WDVHandler()
        {
            var value = ConfigurationManager.AppSettings["AtalasoftLicenseString"];
            if (!string.IsNullOrEmpty(value))
                AtalaLicense.SetAssemblyLicense(HttpUtility.HtmlDecode(value));
        }
    }
}