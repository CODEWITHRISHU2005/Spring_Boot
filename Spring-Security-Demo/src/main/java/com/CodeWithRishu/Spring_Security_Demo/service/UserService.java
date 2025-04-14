package com.CodeWithRishu.Spring_Security_Demo.service;

import com.CodeWithRishu.Spring_Security_Demo.model.User;
import com.CodeWithRishu.Spring_Security_Demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {

        return userRepository.save(user);
    }

}
