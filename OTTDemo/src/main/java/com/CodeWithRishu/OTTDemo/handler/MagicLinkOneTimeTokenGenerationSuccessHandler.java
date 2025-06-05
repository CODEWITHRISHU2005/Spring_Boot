package com.CodeWithRishu.OTTDemo.handler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.ott.OneTimeToken;
import org.springframework.security.web.authentication.ott.OneTimeTokenGenerationSuccessHandler;
import org.springframework.security.web.authentication.ott.RedirectOneTimeTokenGenerationSuccessHandler;
import org.springframework.security.web.util.UrlUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
public class MagicLinkOneTimeTokenGenerationSuccessHandler implements OneTimeTokenGenerationSuccessHandler {
    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String sender;

    private final OneTimeTokenGenerationSuccessHandler redirectHandler = new RedirectOneTimeTokenGenerationSuccessHandler("/ott/sent");

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, OneTimeToken oneTimeToken) throws IOException, ServletException {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(UrlUtils.buildFullRequestUrl(request))
                .replacePath(request.getContextPath())
                .replaceQuery(null)
                .fragment(null)
                .path("/login/ott")
                .queryParam("token", oneTimeToken.getTokenValue());
        String magicLink = builder.toUriString();
        System.out.println("Magic Link: " + magicLink);

        sendOttNotification(oneTimeToken, magicLink);
        redirectHandler.handle(request, response, oneTimeToken);
    }

    private void sendOttNotification(OneTimeToken oneTimeToken, String magiclink) {
        try {
            String recipientEmail = getEmail().get(oneTimeToken.getUsername());
            if (recipientEmail == null || recipientEmail.isBlank()) {
                throw new IllegalArgumentException("Recipient email is null or empty for user: " + oneTimeToken.getUsername());
            }

            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("Rishabh Gupta <" + sender + ">");
            message.setTo(recipientEmail);
            message.setSubject("One Time Token - Magic Link ");

            String messageBody = """
                     Hello %s,
                            \s
                     Use the following link to sign in to the application:
                            \s
                     %s
                            \s
                     This link is valid for a limited time. If you did not request this, please ignore this email.
                            \s
                    \s""".formatted(oneTimeToken.getUsername(), magiclink);

            message.setText(messageBody);
            javaMailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private Map<String, String> getEmail() {
        Map<String, String> emailMap = new HashMap<>();
        emailMap.put("Rishabh Gupta", "rg2822046@gmail.com");
        return emailMap;
    }

}
