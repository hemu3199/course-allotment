package com.msu.csc.repository;
import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.ss.usermodel.*;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.IOException;
import java.util.*;

@Repository
public class CourseRepository {
    public List<Map<String, String>> readExcelData(String filePath) {

        List<Map<String, String>> excelData = new ArrayList<>();
        try {
            Workbook workbook = WorkbookFactory.create(new File(filePath));
            Sheet sheet = workbook.getSheetAt(0); // Assuming data is in the first sheet
            Row headerRow = sheet.getRow(0);
            int rowCount = sheet.getPhysicalNumberOfRows();
            int columnCount = headerRow.getLastCellNum();
            for (int i = 1; i < rowCount; i++) { // Start from index 1 to skip header
                Row row = sheet.getRow(i);
                Map<String, String> rowData = new HashMap<>();
                for (int j = 0; j < columnCount; j++) {
                    Cell cell = row.getCell(j, Row.MissingCellPolicy.CREATE_NULL_AS_BLANK);
                    //String cellValue = cell.get(); // Assuming all data is string type
                    DataFormatter formatter = new DataFormatter();
                    String val = formatter.formatCellValue(cell);
                    rowData.put(headerRow.getCell(j).getStringCellValue(), val);
                }
                excelData.add(rowData);
            }
            workbook.close();
        } catch (IOException | EncryptedDocumentException e) {
            e.printStackTrace();
        }
        return excelData;
    }
}

