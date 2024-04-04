package com.msu.csc.service.impl;

import java.util.Map;
import java.util.List;
import com.msu.csc.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.msu.csc.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public List<Map<String, String>> getCourses() {
         return courseRepository.readExcelData("C:\\Users\\Nitin's Inspiron5410\\Documents\\workspace-spring-tool-suite-4-4.20.0.RELEASE\\IllinoisCourses\\COURSES.xlsx");
    }
    
}
