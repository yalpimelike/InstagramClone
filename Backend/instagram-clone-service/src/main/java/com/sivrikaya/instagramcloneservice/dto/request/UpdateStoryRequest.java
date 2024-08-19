package com.sivrikaya.instagramcloneservice.dto.request;

import lombok.Data;

@Data
public class UpdateStoryRequest {
    private Long id;
    private String storyUrl;
}
