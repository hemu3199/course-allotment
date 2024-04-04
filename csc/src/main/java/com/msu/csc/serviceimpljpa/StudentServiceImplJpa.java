package com.msu.csc.serviceimpljpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msu.csc.domin.Request;
import com.msu.csc.repositoryjpa.StudentEnrollmentJpaRepo;

@Service
public class StudentServiceImplJpa {
	
	@Autowired
	private SearchServiceImplJpa searchService;
	
	@Autowired
	private StudentEnrollmentJpaRepo studentRepo;
	
	public String registerCourse(Request request) {
		if(request.getFlag().equalsIgnoreCase("new")) {
			if(searchService.studentCourseRecordExists(request)) {
				return "exists";
			}else {
				studentRepo.save(request);
				return "saved";
			}
		}else {
			if(searchService.studentCourseRecordExists(request)) {
				studentRepo.save(request);
				return "saved";
			}else {
				return "wrong input";
			}
			
		}
	}

}
