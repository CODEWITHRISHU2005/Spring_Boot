package com.CodeWithRishu.OTTDemo.config;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.MailSender;
import org.springframework.security.authentication.ott.OneTimeToken;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.ott.OneTimeTokenGenerationSuccessHandler;
import org.springframework.security.web.authentication.ott.RedirectOneTimeTokenGenerationSuccessHandler;
import org.springframework.security.web.util.UrlUtils;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;

@Configuration
@EnableWebSecurity
class SpringOTT {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/login/ott").permitAll()
                        .requestMatchers("/ott/sent").permitAll()
                        .anyRequest().authenticated())
                .formLogin(Customizer.withDefaults())
                .oneTimeTokenLogin(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    InMemoryUserDetailsManager inMemoryUserDetailsManager() {
        UserDetails user = User.withUsername("Rishabh Gupta")
                .password("{noop}password")
                .build();
        return new InMemoryUserDetailsManager(user);
    }

}
