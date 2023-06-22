package com.msu.csc.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msu.csc.domin.Courses;
import com.msu.csc.domin.Request;
import com.msu.csc.domin.Response;
import com.msu.csc.service.CourseService;

@RestController
public class CourseRegistration {

    @Autowired
    private CourseService courseService;
    

    @RequestMapping("/register")
    public Response student_choices(Request courses) {

        return new Response();
    }

    @RequestMapping("/courses")
    public ArrayList<String> get_courses(){
        return courseService.getCourses();
    }
}
