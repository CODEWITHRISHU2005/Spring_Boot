package com.Tech_Sprint_48.Medicine.controller;

import com.Tech_Sprint_48.Medicine.service.OCRService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/ocr")
public class OCRController {

    @Autowired
    private OCRService ocrService;

    @PostMapping("/extract-text")
    public ResponseEntity<String> extractText(@RequestParam("file") MultipartFile file) {
        try {
            File tempFile = File.createTempFile("ocr-", file.getOriginalFilename());
            file.transferTo(tempFile);

            String extractedText = ocrService.extractTextFromImage(tempFile);
            boolean delete = tempFile.delete();
            System.out.println(extractedText);

            return ResponseEntity.ok(extractedText);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error: Unable to process the file.");
        }
    }
}