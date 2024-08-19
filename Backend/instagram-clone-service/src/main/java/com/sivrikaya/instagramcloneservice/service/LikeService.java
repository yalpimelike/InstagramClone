package com.sivrikaya.instagramcloneservice.service;


import com.sivrikaya.instagramcloneservice.dto.request.CreateLikeRequest;
import com.sivrikaya.instagramcloneservice.dto.response.LikeResponse;
import com.sivrikaya.instagramcloneservice.model.Like;

import java.util.List;
import java.util.Optional;

public interface LikeService {
    List<LikeResponse> getAll();
    Optional<Like> getById(Long id);
    LikeResponse create(CreateLikeRequest like);
    Like update(Like like);
    boolean deleteById(Long id);
}
