package skycatalog.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import skycatalog.entities.CatalogueProduct;
import skycatalog.exception.LocationIdNotFoundException;
import skycatalog.services.CatalogueServiceImpl;
import skycatalog.services.CustomerLocationServiceStub;

import java.util.List;

/**
 * Created by liviu on 3/18/2016.
 */
@RestController
public class CatalogueController {

    @Autowired
    private CustomerLocationServiceStub customerLocationService;

    @Autowired
    private CatalogueServiceImpl catalogueService;

    @RequestMapping("/checkout")
    public String confirmationPage(Model model, @CookieValue("customerID") String customerId){

        model.addAttribute("customerID", customerId);
        return "confirmationPage";
    }

    @RequestMapping("/productSelection")
    public String productSelection(Model model, @CookieValue("customerID") String customerId){
        String locationId = "";

        try {
            locationId = customerLocationService.getLocationByCustomerId(customerId);
        } catch (LocationIdNotFoundException e) {
            model.addAttribute("error", "There was a problem with your settings. Please contact Customer Support! Thank you.");
            e.printStackTrace();
        }

        List<CatalogueProduct> productList = catalogueService.getProductsByLocationID(locationId);

        model.addAttribute("productList", productList);
        return "productSelection";
    }

}
