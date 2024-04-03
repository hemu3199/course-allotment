package com.msu.csc.service.impl;

import com.msu.csc.repository.SearchAndRemoveRepository;
import com.msu.csc.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SearchServiceImpl implements SearchService {

    @Autowired
    SearchAndRemoveRepository searchAndRemoveRepository;

    @Override
    public Boolean searchForstudent(String filePath, Boolean isRemove, String mnumber) {
        searchAndRemoveRepository.searchInSheet(filePath, isRemove, mnumber);
        return null;
    }
}
