package com.msu.csc.serviceimpljpa;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.msu.csc.domin.Courses;
import com.msu.csc.repositoryjpa.CourseJpaRepo;
import com.msu.csc.service.CourseService;
/*
 * Author : Satya:)
 */
@Service
@Primary
public class CourseServiceImplJpa implements CourseService{
	
	@Autowired
	private CourseJpaRepo courserepo;
	
	@Override
	public List<Map<String, String>> getCourses() {
		List<Courses> courses = (List<Courses>) courserepo.findAll();
		List<Map<String, String>> resultList = 	courses.stream().map(
															(course)->{
																Map<String, String> map = new HashMap<>();
																map.put("course_id", course.getCourse_number());
																map.put("course_section", course.getCourse_section());
																map.put("course_name", course.getCourse_name());
																return map;
															}).collect(Collectors.toList());
		return resultList;
	}

}
