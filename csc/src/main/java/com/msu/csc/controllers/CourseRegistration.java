package com.msu.csc.controllers;

import java.util.Map;
import java.util.List;
import java.util.stream.Collectors;

import com.msu.csc.service.StudentService;
import com.msu.csc.serviceimpljpa.StudentServiceImplJpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.msu.csc.domin.Request;
import com.msu.csc.domin.Response;
import com.msu.csc.service.CourseService;

@RestController
public class CourseRegistration {

    @Autowired
    private CourseService courseService;
    
//    @Autowired
//    private StudentService studentService;
//    
    @Autowired
    private StudentServiceImplJpa studentService;


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public Response student_choices(@RequestBody Request request) {
        System.out.println(request.toString());
        //studentService.postRecord(request); //This code is for Excel
        //Below is updated code using Jpa Repo
        String responseMsg = studentService.registerCourse(request);
        Response response = new Response();
        response.setStatus_message(responseMsg);
        return response;
    }

    @RequestMapping("/courseslist")
    public List<String> coursesList(){
        List<Map<String, String>> courses = courseService.getCourses();
        System.out.println(courses);
        return courses.stream().map(course -> course.get("course_id")+" - "+course.get("course_name")).collect(Collectors.toList());
    }

    @RequestMapping("/courses")
    public List<Map<String, String>> courses(){
        List<Map<String, String>> courses = courseService.getCourses();
        System.out.println(courses);
        return courses;
    }
    
    
}
