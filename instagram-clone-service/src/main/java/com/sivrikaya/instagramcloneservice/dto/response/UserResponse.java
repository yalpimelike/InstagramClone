package com.sivrikaya.instagramcloneservice.dto.response;

import com.sivrikaya.instagramcloneservice.model.User;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponse {
    private String firstname,lastname,fullName,username,email,phone,profilePhoto;
}
