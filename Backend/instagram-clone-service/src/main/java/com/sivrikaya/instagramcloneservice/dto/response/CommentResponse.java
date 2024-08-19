package com.sivrikaya.instagramcloneservice.dto.response;

import com.sivrikaya.instagramcloneservice.model.Comment;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CommentResponse {
    private String text;
}
