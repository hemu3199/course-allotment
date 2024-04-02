package com.msu.csc.service;


import com.msu.csc.domin.Request;

import java.util.List;
import java.util.Map;

public interface StudentService {

    public List<Map<String, String>> postRecord(Request request);
}
