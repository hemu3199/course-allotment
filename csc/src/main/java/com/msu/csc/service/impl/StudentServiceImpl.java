package com.msu.csc.service.impl;

import com.msu.csc.domin.Request;
import com.msu.csc.repository.ExcelWriterRepository;
import com.msu.csc.repository.SearchAndRemoveRepository;
import com.msu.csc.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    ExcelWriterRepository excelWriterRepository;
    
    @Autowired
    SearchAndRemoveRepository search;
    
    public final String filepath = "C:\\Users\\Nitin's Inspiron5410\\Documents\\workspace-spring-tool-suite-4-4.20.0.RELEASE\\IllinoisCourses\\studentcourses.xlsx";

    @Override
    public List<Map<String, String>> postRecord(Request request) {
    	//search.searchInSheet(filepath, false, request.getMnumber());
        excelWriterRepository.writeDataToExcel(request, filepath);
        return null;
    }
}
