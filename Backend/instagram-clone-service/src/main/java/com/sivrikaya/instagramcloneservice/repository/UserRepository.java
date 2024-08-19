package com.sivrikaya.instagramcloneservice.repository;

import com.sivrikaya.instagramcloneservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
