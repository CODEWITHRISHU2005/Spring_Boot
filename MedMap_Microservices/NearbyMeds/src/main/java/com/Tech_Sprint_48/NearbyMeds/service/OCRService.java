package com.Tech_Sprint_48.NearbyMeds.service;

import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class OCRService {

    public String extractTextFromImage(File imageFile) {
        Tesseract tesseract = new Tesseract();
        tesseract.setDatapath("C:\\Program Files\\Tesseract-OCR\\testate"); // Update with your Tesseract path
        tesseract.setLanguage("eng"); // Set language (e.g., English)

        try {
            return tesseract.doOCR(imageFile);
        } catch (TesseractException e) {
            e.printStackTrace();
            return "Error: Unable to process the image.";
        }
    }
}
