package com.sivrikaya.instagramcloneservice.service;


import com.sivrikaya.instagramcloneservice.dto.request.CreateCommentRequest;
import com.sivrikaya.instagramcloneservice.dto.request.UpdateCommentRequest;
import com.sivrikaya.instagramcloneservice.dto.response.CommentResponse;
import com.sivrikaya.instagramcloneservice.model.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentService {
    List<CommentResponse> getAll();
    Optional<Comment> getById(Long id);
    CommentResponse create(CreateCommentRequest comment);
    CommentResponse update(UpdateCommentRequest comment);
    boolean deleteById(Long id);
}
