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
            AtalaLicense.SetAssemblyLicense(HttpUtility.HtmlDecode(ConfigurationManager.AppSettings["AtalasoftLicenseString"]));
        }
    }
}