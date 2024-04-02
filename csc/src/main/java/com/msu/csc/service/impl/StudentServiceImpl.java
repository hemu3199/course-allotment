package com.msu.csc.service.impl;

import com.msu.csc.domin.Request;
import com.msu.csc.repository.ExcelWriterRepository;
import com.msu.csc.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    ExcelWriterRepository excelWriterRepository;

    @Override
    public List<Map<String, String>> postRecord(Request request) {
        excelWriterRepository.writeDataToExcel(request, "C:/Users/ravip/Downloads/students.xlsx");
        return null;
    }
}
