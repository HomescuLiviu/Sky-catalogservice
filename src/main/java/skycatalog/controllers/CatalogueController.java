package skycatalog.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import skycatalog.entities.CatalogueProduct;
import skycatalog.exception.LocationIdNotFoundException;
import skycatalog.services.CatalogueServiceImpl;
import skycatalog.services.CustomerLocationServiceStub;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Controller
@CrossOrigin(origins = "http://localhost:63342")
public class CatalogueController {

    @Autowired
    private CustomerLocationServiceStub customerLocationService;

    @Autowired
    private CatalogueServiceImpl catalogueService;

    @RequestMapping("/checkout")
    public String confirmationPage(Model model, @RequestHeader("customerID") String customerID, @RequestParam(value="selectedProducts") List<String> selectedProducts){
        model.addAttribute("customerID", customerID);
        model.addAttribute("selectedProducts", selectedProducts);
        return "confirmation";
    }

    @RequestMapping("/productSelection")
    public String productSelection(Model model, @RequestHeader("customerID") String customerId){
        String locationId = "";

        try {
            locationId = customerLocationService.getLocationByCustomerId(customerId);
        } catch (LocationIdNotFoundException e) {
            model.addAttribute("error", "There was a problem with your settings. Please contact Customer Support! Thank you.");
            e.printStackTrace();
        }

        List productList = catalogueService.getProductsByLocationID(locationId);
        Set<String> categories = new HashSet<>();

        productList.stream().forEach((product) -> categories.add(((CatalogueProduct)product).getCategory()));

        model.addAttribute("productList", productList);
        model.addAttribute("customerID", customerId);
        model.addAttribute("categories", categories);
        return "productSelection";
    }

}
