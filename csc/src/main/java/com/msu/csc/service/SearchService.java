package com.msu.csc.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface SearchService {

    public Boolean searchForstudent(String filePath, Boolean isRemove, String mnumber);
}