package skycatalog.services;

import skycatalog.exception.LocationIdNotFoundException;
import org.junit.Test;

import static junit.framework.Assert.assertTrue;

public class CustomerLocationServiceStubTest {

    private final CustomerLocationServiceStub customerLocationServiceStub = new CustomerLocationServiceStub();

    @Test(expected= LocationIdNotFoundException.class)
    public void testCustomerLocationServiceThrowsExceptionWhenLocationIsNotAvailable() throws LocationIdNotFoundException {

        customerLocationServiceStub.getLocationByCustomerId("customer_123");
    }

    public void testCustomerLocationServiceReturnsLocationIfAvailable() throws LocationIdNotFoundException {
       assertTrue("CustomerLocationServie returned empty for a customer id which has a stored location ", !customerLocationServiceStub.getLocationByCustomerId("customerR").isEmpty());
    }

}
