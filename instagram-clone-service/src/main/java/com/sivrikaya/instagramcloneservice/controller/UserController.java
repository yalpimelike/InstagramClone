package com.sivrikaya.instagramcloneservice.controller;



import com.sivrikaya.instagramcloneservice.dto.request.CreateUserRequest;
import com.sivrikaya.instagramcloneservice.dto.response.UserResponse;
import com.sivrikaya.instagramcloneservice.model.User;

import java.util.List;
import java.util.Optional;

public interface UserController {
    List<UserResponse> getAll();
    Optional<User> getById(Long id);
    UserResponse create( CreateUserRequest user);
    UserResponse update( User user);
    boolean deleteById( Long id);
}
