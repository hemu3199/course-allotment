package com.msu.csc.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.msu.csc.domin.Courses;
import com.msu.csc.domin.Request;
import com.msu.csc.domin.Response;
import com.msu.csc.service.CourseService;

@RestController
public class CourseRegistration {

    @Autowired
    private CourseService courseService;



    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public Response student_choices(@RequestBody Request request) {
        System.out.println(request.toString());
        return new Response();
    }

    @RequestMapping("/courses")
    public ArrayList<String> get_courses(){
        return courseService.getCourses();
    }

    @RequestMapping("/payments")
    public ArrayList<String> get_payments(){
        return courseService.getCourses();
    }
}
