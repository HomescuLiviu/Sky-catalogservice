package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import services.CatalogueService;
import services.CustomerLocationService;

/**
 * Created by liviu on 3/18/2016.
 */
@RestController
public class CatalogueController {

    @Autowired
    private CustomerLocationService customerLocationService;

    @Autowired
    private CatalogueService catalogueService;

    @RequestMapping("/checkout")
    public String confirmationPage(Model model, @CookieValue("customerID") String customerId){

        model.addAttribute("customerID", customerId);
        return "confirmationPage";
    }

}
