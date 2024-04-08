package com.msu.csc.repositoryjpa;

import org.springframework.data.repository.CrudRepository;

import com.msu.csc.domin.Request;
/*
 * Author : Satya
 */

public interface StudentEnrollmentJpaRepo extends CrudRepository<Request, String>{

}
