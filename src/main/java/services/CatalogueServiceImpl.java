package services;

import entities.CatalogueProduct;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by liviu on 3/18/2016.
 */
public class CatalogueServiceImpl implements CatalogueService {

    private static final List<CatalogueProduct> CATALOGUE_PRODUCTS = new ArrayList<>();

    static {
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("Sports", "Arsenal TV", "LONDON"));
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("Sports", "Chelsea TV", "LONDON"));
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("Sports", "Liverpool TV", "LIVERPOOL"));
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("Sports", "French TV", "PARIS"));
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("Sports", "More French TV", "PARIS"));

        CATALOGUE_PRODUCTS.add( new CatalogueProduct("News", "Sky News", ""));
        CATALOGUE_PRODUCTS.add( new CatalogueProduct("News", "Sky Sport News", ""));
    }


    public List getProductsByLocationID(String locationId) {
        return CATALOGUE_PRODUCTS.stream()
                .filter((c) -> c.getLocationId().equals(locationId) || c.getLocationId().isEmpty())
                .collect(Collectors.toList());
    }
}
