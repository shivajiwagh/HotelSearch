using HotelSearch.Web.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace HotelSearch.Web.Tests;

[TestClass]
public class HomeControllerTests
{
    [TestMethod]
    public async Task TestMethod1()
    {
        var controller = new HotelSearchController();
        var result = await controller.GetAsync();

    }
}