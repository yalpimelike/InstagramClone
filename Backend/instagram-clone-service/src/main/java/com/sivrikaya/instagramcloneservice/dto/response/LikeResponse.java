package com.sivrikaya.instagramcloneservice.dto.response;

import com.sivrikaya.instagramcloneservice.model.Like;
import lombok.Data;

@Data
public class LikeResponse {
    private Long id,userId,postId;
    public LikeResponse(Like like){
        this.id = like.getId();
        this.userId = like.getUserId();
        this.postId = like.getPostId();
    }
}
