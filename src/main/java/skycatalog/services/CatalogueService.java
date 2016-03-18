package skycatalog.services;

import java.util.List;

/**
 * Created by liviu on 3/18/2016.
 */
public interface CatalogueService {
    List getProductsByLocationID(String locationId);
}
