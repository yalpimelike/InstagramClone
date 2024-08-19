package com.sivrikaya.instagramcloneservice.converter;

import com.sivrikaya.instagramcloneservice.dto.request.UpdatePostRequest;
import com.sivrikaya.instagramcloneservice.dto.response.PostResponse;
import com.sivrikaya.instagramcloneservice.model.Post;

public class PostConverter {
    public static Post toPost(UpdatePostRequest request){
        return Post.builder()
                .id(request.getId())
                .title(request.getTitle())
                .description(request.getDescription())
                .photourl(request.getPhotourl())
                .build();
    }
    public static PostResponse toResponse(Post post){
        return PostResponse.builder()
                .title(post.getTitle())
                .description(post.getDescription())
                .photourl(post.getPhotourl())
                .build();
    }
}
