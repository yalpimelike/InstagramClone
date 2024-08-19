package com.sivrikaya.instagramcloneservice.service;

import com.sivrikaya.instagramcloneservice.converter.CommentConverter;
import com.sivrikaya.instagramcloneservice.dto.request.CreateCommentRequest;
import com.sivrikaya.instagramcloneservice.dto.request.UpdateCommentRequest;
import com.sivrikaya.instagramcloneservice.dto.response.CommentResponse;
import com.sivrikaya.instagramcloneservice.model.Comment;
import com.sivrikaya.instagramcloneservice.model.Post;
import com.sivrikaya.instagramcloneservice.repository.CommentRepository;
import com.sivrikaya.instagramcloneservice.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;
    private final PostRepository postRepository;

    @Override
    public List<CommentResponse> getAll() {
        List<Comment> comments = commentRepository.findAll();
        return comments.stream().map(CommentConverter::toResponse).collect(Collectors.toList());
    }

    @Override
    public Optional<Comment> getById(Long id) {
        return commentRepository.findById(id);
    }

    @Override
    public CommentResponse create(CreateCommentRequest request) {
        Post post = postRepository.getReferenceById(request.getPostId());
        Comment comment = CommentConverter.toComment(request);
        post.getComments().add(comment);
        commentRepository.save(comment);
        postRepository.save(post);
        return CommentConverter.toResponse(comment);
    }

    @Override
    public CommentResponse update(UpdateCommentRequest request) {
        return CommentConverter.toResponse(commentRepository.save( CommentConverter.toComment(request)));
    }

    @Override
    public boolean deleteById(Long id) {
        try {
            commentRepository.deleteById(id);
            return true;
        }
        catch (Exception e){

        }
        return false;
    }
}
