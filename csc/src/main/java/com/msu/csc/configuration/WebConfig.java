package com.msu.csc.configuration;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/register")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("POST") // Allow specific methods if needed
                .allowedHeaders("*"); // Allow specific headers if needed
    }
}