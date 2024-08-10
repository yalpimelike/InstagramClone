package com.sivrikaya.instagramcloneservice.service;

import com.sivrikaya.instagramcloneservice.dto.request.CreateLikeRequest;
import com.sivrikaya.instagramcloneservice.dto.response.LikeResponse;
import com.sivrikaya.instagramcloneservice.model.Like;
import com.sivrikaya.instagramcloneservice.model.Post;
import com.sivrikaya.instagramcloneservice.model.User;
import com.sivrikaya.instagramcloneservice.repository.LikeRepository;
import com.sivrikaya.instagramcloneservice.repository.PostRepository;
import com.sivrikaya.instagramcloneservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LikeServiceImpl implements LikeService {
    private final LikeRepository likeRepository;

    @Override
    public List<LikeResponse> getAll() {
        List<Like> likes = likeRepository.findAll();
        return likes.stream().map(LikeResponse::new).collect(Collectors.toList());
    }

    @Override
    public Optional<Like> getById(Long id) {
        return likeRepository.findById(id);
    }

    @Override
    public LikeResponse create(CreateLikeRequest like) {
        Like newLike = new Like();
        newLike.setUserId(like.getUserId());
        newLike.setPostId(like.getPostId());
        try {
            likeRepository.save(newLike);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return new LikeResponse(newLike);
    }

    @Override
    public Like update(Like like) {
        return likeRepository.save(like);
    }

    @Override
    public boolean deleteById(Long id) {
        try {
            likeRepository.deleteById(id);
            return true;
        }catch (Exception e){

        }
        return false;
    }
}
