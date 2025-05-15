package org.CodeWithRishu.RestQuickHire.service;

import org.CodeWithRishu.RestQuickHire.model.User;
import org.springframework.security.core.CredentialsContainer;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class MyUserDetails implements UserDetails, CredentialsContainer {

    private final User user;

    public MyUserDetails(User user) {
        this.user = user;
    }
    @Override
    public void eraseCredentials() {
        user.setPassword(null);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority("USER"));
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }
}
