package com.sivrikaya.instagramcloneservice.converter;

import com.sivrikaya.instagramcloneservice.dto.request.CreateUserRequest;
import com.sivrikaya.instagramcloneservice.dto.response.UserResponse;
import com.sivrikaya.instagramcloneservice.model.User;

public class UserConverter {
    public static UserResponse toResponse(User user) {
        return UserResponse.builder()
                .email(user.getEmail())
                .username(user.getUsername())
                .phone(user.getPhone())
                .fullName(user.getFullName())
                .firstname(user.getFirstname())
                .lastname(user.getLastname())
                .profilePhoto(user.getProfilePhoto())
                .build();
    }
    public static User toUser(CreateUserRequest request) {
        return User.builder()
                .email(request.getEmail())
                .username(request.getUsername())
                .password(request.getPassword())
                .build();
    }
}
