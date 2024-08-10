package com.sivrikaya.instagramcloneservice.controller;


import com.sivrikaya.instagramcloneservice.dto.request.CreateLikeRequest;
import com.sivrikaya.instagramcloneservice.dto.response.LikeResponse;
import com.sivrikaya.instagramcloneservice.model.Like;

import java.util.List;
import java.util.Optional;

public interface LikeController {
    List<LikeResponse> getAll();
    Optional<Like> getById(Long id);
    LikeResponse create(CreateLikeRequest like);
    boolean deleteById(Long id);
}
