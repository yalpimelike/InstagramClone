package com.sivrikaya.instagramcloneservice.dto.request;

import lombok.Data;

@Data
public class CreateLikeRequest {
    private Long userId,postId;
}
