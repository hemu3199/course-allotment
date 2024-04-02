package com.msu.csc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public interface CourseService {
    
public List<Map<String, String>> getCourses();

}
