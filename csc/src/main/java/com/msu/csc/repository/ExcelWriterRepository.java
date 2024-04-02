package com.msu.csc.repository;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.msu.csc.domin.Request;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Repository;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;

@Repository
public class ExcelWriterRepository {

    public void writeDataToExcel(Request request, String filePath) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            Map<String, String> dataList = objectMapper.convertValue(request, new TypeReference<Map<String, String>>() {});
            FileInputStream inputStream = new FileInputStream(filePath);
            Workbook workbook = new XSSFWorkbook(inputStream);
            Sheet sheet = workbook.getSheet("student");
            if(sheet == null ){
                sheet = workbook.createSheet("student");
                Row headerRow = sheet.createRow(0);
                int cellIndex = 0;
                for (String key : dataList.keySet()) {
                    Cell cell = headerRow.createCell(cellIndex++);
                    cell.setCellValue(key);
                }
                Cell cell = headerRow.createCell(cellIndex);
                cell.setCellValue("time");
            }
            int rowCount = sheet.getPhysicalNumberOfRows();
            int newRowIdx = rowCount > 0 ? rowCount : 0;

            Row row = sheet.createRow(newRowIdx);
            int cellIndex = 0;
            for (String value : dataList.values()) {
                Cell cell = row.createCell(cellIndex++);
                cell.setCellValue(value);
            }
            Cell cell = row.createCell(cellIndex);
            cell.setCellValue(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
            // Add more cells as needed

            FileOutputStream outputStream = new FileOutputStream(filePath);
            workbook.write(outputStream);
            workbook.close();
            outputStream.close();
            inputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
