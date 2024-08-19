package com.sivrikaya.instagramcloneservice.converter;

import com.sivrikaya.instagramcloneservice.dto.request.CreateCommentRequest;
import com.sivrikaya.instagramcloneservice.dto.request.UpdateCommentRequest;
import com.sivrikaya.instagramcloneservice.dto.response.CommentResponse;
import com.sivrikaya.instagramcloneservice.model.Comment;

public class CommentConverter {
    public static Comment toComment(CreateCommentRequest request) {
        return Comment.builder()
                .postId(request.getPostId())
                .userId(request.getUserId())
                .text(request.getText())
                .build();
    }
    public static Comment toComment(UpdateCommentRequest request) {
        return Comment.builder()
                .id(request.getId())
                .text(request.getText())
                .build();
    }

    public static CommentResponse toResponse(Comment comment) {
        return CommentResponse.builder()
                .text(comment.getText())
                .build();
    }
}