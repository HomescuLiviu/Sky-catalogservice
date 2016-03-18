package services;

import exception.LocationIdNotFoundException;

/**
 * Created by liviu on 3/18/2016.
 */
public interface CustomerLocationService {

    String getLocationByCustomerId(String customerId) throws LocationIdNotFoundException;
}
