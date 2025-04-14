package org.CodeWithRishu.RestQuickHire.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public AuthenticationProvider authenticationProvider() {

        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();

        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(new BCryptPasswordEncoder(12));

        return provider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        // Disable CSRF protection for all endpoints
        httpSecurity.csrf(customizer -> {
                    try {
                        customizer.disable();
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                })
                .authorizeHttpRequests(requests -> requests
                        .anyRequest()
                        .authenticated())
                .httpBasic(Customizer.withDefaults())
                .sessionManagement(session -> session
                        .sessionCreationPolicy(org.springframework.security.config.http.SessionCreationPolicy.STATELESS));

        return httpSecurity.build();

        /*
         * Customizer<CsrfConfigurer<HttpSecurity>> custCsrf = new
         * Customizer<CsrfConfigurer<HttpSecurity>>() {
         *
         * @Override public void customize(CsrfConfigurer<HttpSecurity> configurer) {
         *
         * configurer.disable(); } };
         *
         * Customizer<AuthorizeHttpRequestsConfigurer<HttpSecurity>.
         * AuthorizationManagerRequestMatcherRegistry> custHttp = new
         * Customizer<AuthorizeHttpRequestsConfigurer<HttpSecurity>.
         * AuthorizationManagerRequestMatcherRegistry>() {
         *
         * @Override public void customize(
         * AuthorizeHttpRequestsConfigurer<HttpSecurity>.
         * AuthorizationManagerRequestMatcherRegistry registry) {
         * registry.anyRequest().authenticated();
         *
         * } };
         *
         * http.authorizeHttpRequests(custHttp); http.csrf(custCsrf);
         */
    }

//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
//        UserDetails userDetails = User.builder()
//                .username("rishu")
//                .password(passwordEncoder.encode("rishu"))
//                .roles("USER")
//                .build();
//
//        return new InMemoryUserDetailsManager(userDetails);
}