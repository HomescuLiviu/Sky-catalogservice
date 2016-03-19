package skycatalog.entities;
public class CatalogueProduct {

    private String id;
    private String category;
    private String name;
    private String locationId;

    public CatalogueProduct(String id, String category, String name, String locationId) {
        this.id = id;
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

    public String getId() {
        return id;
    }
}
