package com.msu.csc.repository;

import org.springframework.data.repository.CrudRepository;

import com.msu.csc.dto.CoursesDTO;

public interface CourseRepository extends CrudRepository<CoursesDTO, String> {
    
}
