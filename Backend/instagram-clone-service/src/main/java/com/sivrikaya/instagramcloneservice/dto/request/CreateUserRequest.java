package com.sivrikaya.instagramcloneservice.dto.request;

import lombok.Data;

@Data
public class CreateUserRequest {
    private String username,email,password;
}
