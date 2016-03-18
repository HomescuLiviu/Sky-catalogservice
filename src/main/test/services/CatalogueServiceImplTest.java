package services;

import org.junit.Test;

import java.util.List;

import static junit.framework.Assert.assertTrue;

/**
 * Created by liviu on 3/18/2016.
 */
public class CatalogueServiceImplTest {

    private final CatalogueServiceImpl catalogueService = new CatalogueServiceImpl();

    @Test
    public void testCatalogServiceReturnsProductsWithNoLocationIdWhenCustomerLocationIsNotFound(){
        List defaultProducts = catalogueService.getProductsByLocationID("Nicaragua");
        assertTrue("The list of default products was not returned properly", defaultProducts.size() > 0);
    }

    @Test
    public void testCatalogServiceReturnsProductsWithLocationIdWhenCustomerLocationIsFound(){
        List productsWithLocationId = catalogueService.getProductsByLocationID("LONDON");
        assertTrue("The list of products was not returned properly", productsWithLocationId.size() == 4);
    }
}
