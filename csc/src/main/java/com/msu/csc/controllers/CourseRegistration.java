package com.msu.csc.controllers;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;
import java.util.stream.Collectors;

import com.msu.csc.service.StudentService;
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
    @Autowired
    private StudentService studentService;



    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public Response student_choices(@RequestBody Request request) {
        System.out.println(request.toString());
        studentService.postRecord(request);
        return new Response();
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
