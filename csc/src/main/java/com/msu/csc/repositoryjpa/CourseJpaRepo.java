package com.msu.csc.repositoryjpa;

import org.springframework.data.repository.CrudRepository;

import com.msu.csc.domin.Courses;

/*
 * Author : Satya 
 */

public interface CourseJpaRepo extends CrudRepository<Courses, String>{

}
