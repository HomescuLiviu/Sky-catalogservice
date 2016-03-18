package skycatalog.entities;/**
 * Created by liviu on 3/18/2016.
 */
public class CatalogueProduct {

    private String category;
    private String name;
    private String locationId;

    public CatalogueProduct(String category, String name, String locationId) {
        this.category = category;
        this.name = name;
        this.locationId = locationId;
    }

    public String getCategory() {
        return category;
    }

    public String getName() {
        return name;
    }

    public String getLocationId() {
        return locationId;
    }
}
