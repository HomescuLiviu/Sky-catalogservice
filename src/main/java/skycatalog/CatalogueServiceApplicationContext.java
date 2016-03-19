package skycatalog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@SpringBootApplication
public class CatalogueServiceApplicationContext {

    public static void main(String[] args) throws Throwable {
        SpringApplication.run(CatalogueServiceApplicationContext.class, args);
    }

}
