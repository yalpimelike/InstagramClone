package com.sivrikaya.instagramcloneservice.service;


import com.sivrikaya.instagramcloneservice.dto.request.CreatePostRequest;
import com.sivrikaya.instagramcloneservice.dto.request.UpdatePostRequest;
import com.sivrikaya.instagramcloneservice.dto.response.PostResponse;
import com.sivrikaya.instagramcloneservice.model.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {
    List<PostResponse> getAll();
    Optional<Post> getById(Long id);
    PostResponse create(CreatePostRequest post);
    PostResponse update(UpdatePostRequest post);
    boolean deleteById(Long id);

}
