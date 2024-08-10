package com.sivrikaya.instagramcloneservice.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PostResponse {
    private String title,description,photourl;
}
