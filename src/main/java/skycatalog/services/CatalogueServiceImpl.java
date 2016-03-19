package skycatalog.services;

import org.springframework.stereotype.Component;
import skycatalog.entities.CatalogueProduct;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CatalogueServiceImpl implements CatalogueService {

    private static final List<CatalogueProduct> CATALOGUE_PRODUCTS = new ArrayList<>();

    static {
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("prod_1", "Sports", "Arsenal TV", "LONDON"));
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("prod_2", "Sports", "Chelsea TV", "LONDON"));
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("prod_3", "Sports", "Liverpool TV", "LIVERPOOL"));
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("prod_4", "Sports", "French TV", "PARIS"));
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("prod_5", "Sports", "More French TV", "PARIS"));

        CATALOGUE_PRODUCTS.add( new CatalogueProduct("prod_6", "News", "Sky News", ""));
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("prod_7", "News", "Sky Sport News", ""));
    }


    public List getProductsByLocationID(String locationId) {
        return CATALOGUE_PRODUCTS.stream()
                .filter((c) -> c.getLocationId().equals(locationId) || c.getLocationId().isEmpty())
                .collect(Collectors.toList());
    }
}
