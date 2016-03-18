package skycatalog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by liviu on 3/18/2016.
 */
@ComponentScan
@SpringBootApplication
public class CatalogueServiceApplicationContext {

    public static void main(String[] args) throws Throwable {
        SpringApplication.run(CatalogueServiceApplicationContext.class, args);
    }
}
