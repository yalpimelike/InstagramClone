package com.sivrikaya.instagramcloneservice.dto.request;

import lombok.Data;

@Data
public class UpdatePostRequest {
    private Long id;
    private String title,description,photourl;
}
