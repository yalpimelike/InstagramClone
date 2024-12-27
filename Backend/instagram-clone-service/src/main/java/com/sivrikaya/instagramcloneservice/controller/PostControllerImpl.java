package com.sivrikaya.instagramcloneservice.controller;

import com.sivrikaya.instagramcloneservice.dto.request.CreatePostRequest;
import com.sivrikaya.instagramcloneservice.dto.request.UpdatePostRequest;
import com.sivrikaya.instagramcloneservice.dto.response.PostResponse;
import com.sivrikaya.instagramcloneservice.model.Post;
import com.sivrikaya.instagramcloneservice.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/posts")
public class PostControllerImpl implements PostController {

    private final PostService postService;

    @GetMapping
    @Override
    public List<PostResponse> getAll() {
        return postService.getAll();
    }

    @GetMapping("{id}")
    @Override
    public Optional<Post> getById(@PathVariable Long id) {
        return postService.getById(id);
    }

    @PostMapping
    @Override
    public PostResponse create(@RequestBody CreatePostRequest post) {
        return postService.create(post);
    }

    @PutMapping
    @Override
    public PostResponse update(@RequestBody UpdatePostRequest post) {
        return postService.update(post);
    }

    @DeleteMapping("{id}")
    @Override
    public boolean deleteById(@PathVariable Long id) {
        return postService.deleteById(id);
    }


}
