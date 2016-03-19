package skycatalog.services;

import java.util.List;

public interface CatalogueService {
    List getProductsByLocationID(String locationId);
}
