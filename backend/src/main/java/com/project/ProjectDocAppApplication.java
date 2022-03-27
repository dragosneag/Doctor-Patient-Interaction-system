package com.project;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class ProjectDocAppApplication {

    public static void main(String[] args) {
        SpringApplicationBuilder builder = new SpringApplicationBuilder(ProjectDocAppApplication.class);
        builder.headless(false);
        ConfigurableApplicationContext context = builder.run(args);

    }

}
