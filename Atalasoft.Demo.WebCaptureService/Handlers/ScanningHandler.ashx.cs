using System;
using System.Collections.Generic;
using Atalasoft.Imaging.WebControls.Capture;
using Atalasoft.Licensing;
using System.Configuration;
using System.Diagnostics;
using System.IO;
using System.Web;
using System.Web.Caching;

namespace Atalasoft.Demo.WebCaptureService.Handlers
{
    public class ScanningHandler : WebCaptureRequestHandler
    {

        static ScanningHandler()
        {
            var value = ConfigurationManager.AppSettings["AtalasoftLicenseString"];
            if(!string.IsNullOrEmpty(value))
                AtalaLicense.SetAssemblyLicense(HttpUtility.HtmlDecode(value));
            StartCacheMonitor();
        }

        #region atala-capture-upload cleanup

        public const string GuardFileName = "Upload Folder - Do Not Delete.txt";
        public const string CacheFolder = "atala-capture-upload/";

        private const int CacheMonitorInterval = 60;
        private static CacheItemRemovedCallback _onCacheRemove;

        public static void StartCacheMonitor()
        {
            _onCacheRemove = ClearExpiredFiles;
            HttpRuntime.Cache.Insert("atala_capture_upload_cache", 0, null, DateTime.Now.AddMinutes(CacheMonitorInterval), Cache.NoSlidingExpiration, CacheItemPriority.NotRemovable, _onCacheRemove);
        }

        public static void ClearExpiredFiles(string key, object value, CacheItemRemovedReason reason)
        {
            foreach (var filePath in Directory.EnumerateFiles(Path.Combine(HttpRuntime.AppDomainAppPath, CacheFolder)))
            {
                try
                {
                    // Skip guard file
                    if (Path.GetFileName(filePath).Equals(GuardFileName))
                        continue;

                    if (File.GetLastAccessTimeUtc(filePath) < DateTime.UtcNow.AddMinutes(-CacheMonitorInterval))
                        File.Delete(filePath);
                }
                catch (Exception)
                {
                    // ignored
                }
            }

            StartCacheMonitor();
        }

        #endregion
    }
}