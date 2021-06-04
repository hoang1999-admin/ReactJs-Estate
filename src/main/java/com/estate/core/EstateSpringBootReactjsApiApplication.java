package com.estate.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;




@SpringBootApplication
public class EstateSpringBootReactjsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(EstateSpringBootReactjsApiApplication.class, args);
	}
	
	
	
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(EstateSpringBootReactjsApiApplication.class);
	}


}
