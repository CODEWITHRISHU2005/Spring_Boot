package com.Tech_Sprint_48.NearbyMeds.service;

import com.Tech_Sprint_48.NearbyMeds.model.Pharmacy;
import com.Tech_Sprint_48.NearbyMeds.model.UserPrincipal;
import com.Tech_Sprint_48.NearbyMeds.model.Users;
import com.Tech_Sprint_48.NearbyMeds.repository.PharmacyRepository;
import com.Tech_Sprint_48.NearbyMeds.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PharmacyService {

    @Autowired
    private PharmacyRepository pharmacyRepository;

    public List<Pharmacy> getAllPharmacies() {
        return pharmacyRepository.findAll();
    }

    public List<Pharmacy> getNearbyPharmacies(double latitude, double longitude, double radius) {
        return pharmacyRepository.findNearbyPharmacies(latitude, longitude, radius);
    }

    public Pharmacy getPharmacyById(Long pharmacyId) {
        return pharmacyRepository.findById(pharmacyId).orElse(null);
    }

    @Service
    public static class MyUserDetailsService implements UserDetailsService {

        @Autowired
        private UserRepository repo;

        @Override
        public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            Users user = repo.findByUsername(username);
            if (user == null) {
                throw new UsernameNotFoundException("User not found");
            }
            return new UserPrincipal(user);
        }
    }

    @Service
    public static class UserService {

        @Autowired
        private UserRepository userRepository;
        private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

        public Users saveUser(Users user) {
            user.setPassword(encoder.encode(user.getPassword()));
            return userRepository.save(user);
        }

    }
}
