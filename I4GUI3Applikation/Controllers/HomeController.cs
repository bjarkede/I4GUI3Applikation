using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace I4GUI3Applikation.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DashboardManager()
        {
            return View();
        }

        public ActionResult DashboardModel()
        {
            return View();
        }
    }
}