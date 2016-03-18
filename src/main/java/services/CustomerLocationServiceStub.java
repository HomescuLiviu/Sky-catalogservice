package services;

import exception.LocationIdNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by liviu on 3/18/2016.
 */
@Component
public class CustomerLocationServiceStub implements CustomerLocationService {

    private static final Map<String, String> LOCATIONS_FOR_CUSTOMERS = new ConcurrentHashMap<>();

    static {

        LOCATIONS_FOR_CUSTOMERS.put("customerR", "LONDON");
        LOCATIONS_FOR_CUSTOMERS.put("customerZ", "LIVERPOOL");
        LOCATIONS_FOR_CUSTOMERS.put("customerA", "PARIS");
        LOCATIONS_FOR_CUSTOMERS.put("customerX", "LONDON");
        LOCATIONS_FOR_CUSTOMERS.put("customerY", "PARIS");

    }

    @Override
    public String getLocationByCustomerId(String customerId) throws LocationIdNotFoundException {
        if (LOCATIONS_FOR_CUSTOMERS.get(customerId) == null){
            throw new LocationIdNotFoundException("Could not find location for customer : "+ customerId);
        }
        return LOCATIONS_FOR_CUSTOMERS.get(customerId);
    }
}
