package com.msu.csc.repository;


import org.apache.poi.ss.usermodel.*;
import org.springframework.stereotype.Repository;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

@Repository
public class SearchAndRemoveRepository {

    public void searchInSheet(String filePath, boolean isRomove, String searchMnumber) {

        try (FileInputStream inputStream = new FileInputStream(filePath)) {
            Workbook workbook = WorkbookFactory.create(inputStream);
            Sheet sheet = workbook.getSheetAt(0); // Assuming you want to search in the first sheet

            int columnIndex = -1; // Initialize column index
            Row headerRow = sheet.getRow(0); // Assuming the header row is the first row
            // Find the index of the "Mnumber" column
            for (Cell cell : headerRow) {
                if (cell.getStringCellValue().equalsIgnoreCase("Mnumber")) {
                    columnIndex = cell.getColumnIndex();
                    break;
                }
            }

            if (columnIndex == -1) {
                System.out.println("Column 'Mnumber' not found in the Excel sheet.");
                return;
            }

            for (int i = 0; i < sheet.getPhysicalNumberOfRows(); i++) {
                Row row = sheet.getRow(i);
                if (row != null) {
                    Cell cell = row.getCell(columnIndex);
                    if (cell != null && cell.getCellType() == CellType.STRING) {
                        String mnumber = cell.getStringCellValue();
                        if (mnumber.equals(searchMnumber)) {
                            if(isRomove) {
                                sheet.removeRow(row); // Remove the row
                            }
                            System.out.println("Row containing Mnumber '" + searchMnumber + "' removed.");
                            break; // Stop searching after the first occurrence
                        }
                    }
                }
            }

            // Write the changes back to the Excel file
            try (FileOutputStream outputStream = new FileOutputStream(filePath)) {
                workbook.write(outputStream);
                System.out.println("Excel file updated successfully.");
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
