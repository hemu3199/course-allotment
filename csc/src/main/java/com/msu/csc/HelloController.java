package com.msu.csc;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController{

    @RequestMapping("/")
    public String index() {
        return "my first testing boot application on vs code";
    }
}