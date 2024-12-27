package com.sivrikaya.instagramcloneservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sivrikaya.instagramcloneservice.dto.request.CreateUserRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Entity
@Builder
@Table(name = "users")
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String firstname,lastname,fullName,username,email,password,phone,profilePhoto;

    public User(CreateUserRequest request){
        this.username=request.getUsername();
        this.email=request.getEmail();
        this.password=request.getPassword();
    }

    @OneToMany
    private List<Post> postList;


    @OneToMany
    private List<Comment> commentList;


    @OneToMany
    private List<Like> likeList;

}
