package com.msu.csc.service;

import org.springframework.stereotype.Service;


@Service
public interface SearchService {

    public Boolean searchForstudent(String filePath, Boolean isRemove, String mnumber);
}