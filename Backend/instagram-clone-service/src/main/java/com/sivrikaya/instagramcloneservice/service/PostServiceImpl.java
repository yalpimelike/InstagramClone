package com.sivrikaya.instagramcloneservice.service;

import com.sivrikaya.instagramcloneservice.converter.PostConverter;
import com.sivrikaya.instagramcloneservice.dto.request.CreatePostRequest;
import com.sivrikaya.instagramcloneservice.dto.request.UpdatePostRequest;
import com.sivrikaya.instagramcloneservice.dto.response.PostResponse;
import com.sivrikaya.instagramcloneservice.model.Post;
import com.sivrikaya.instagramcloneservice.model.User;
import com.sivrikaya.instagramcloneservice.repository.PostRepository;
import com.sivrikaya.instagramcloneservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @Override
    public List<PostResponse> getAll() {
        List<Post> posts =  postRepository.findAll();
        return posts.stream().map(PostConverter::toResponse).collect(Collectors.toList());
    }

    @Override
    public Optional<Post> getById(Long id) {
        return postRepository.findById(id);
    }

    @Override
    public PostResponse create(CreatePostRequest post) {
        Post newPost = new Post();
        newPost.setPhotourl(post.getPhotourl());
        newPost.setTitle(post.getTitle());
        newPost.setDescription(post.getDescription());
        User user = userRepository.findById(post.getUserId()).get();
        postRepository.save(newPost);
        userRepository.save(user);
        user.getPostList().add(newPost);
        newPost.setUserId(user.getId());
        return PostConverter.toResponse(newPost);
    }

    @Override
    public PostResponse update(UpdatePostRequest request) {
       return PostConverter.toResponse(postRepository.save(PostConverter.toPost(request)));

    }

    @Override
    public boolean deleteById(Long id) {
        try {
            postRepository.deleteById(id);
            return true;
        }catch (Exception e){
            log.info(e.getMessage());
        }
        return false;
    }
}
