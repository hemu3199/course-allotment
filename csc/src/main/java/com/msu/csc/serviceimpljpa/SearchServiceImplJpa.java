package com.msu.csc.serviceimpljpa;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msu.csc.domin.Request;
import com.msu.csc.repositoryjpa.StudentEnrollmentJpaRepo;



@Service
public class SearchServiceImplJpa{
	
	@Autowired
	private StudentEnrollmentJpaRepo studentRepo;

	public Boolean studentCourseRecordExists(Request request) {
		Optional<Request> studentRecord = studentRepo.findById(request.getMnumber());
		if(studentRecord.isPresent()) {
			return true;
		}return false;
		
	}

}
