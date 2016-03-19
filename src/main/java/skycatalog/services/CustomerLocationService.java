package skycatalog.services;

import skycatalog.exception.LocationIdNotFoundException;

public interface CustomerLocationService {

    String getLocationByCustomerId(String customerId) throws LocationIdNotFoundException;
}
