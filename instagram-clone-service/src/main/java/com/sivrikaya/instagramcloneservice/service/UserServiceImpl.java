package com.sivrikaya.instagramcloneservice.service;
import com.sivrikaya.instagramcloneservice.converter.UserConverter;
import com.sivrikaya.instagramcloneservice.dto.request.CreateUserRequest;
import com.sivrikaya.instagramcloneservice.dto.response.UserResponse;
import com.sivrikaya.instagramcloneservice.model.User;
import com.sivrikaya.instagramcloneservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public List<UserResponse> getAll() {
        List<User> users = userRepository.findAll();
        return users.stream().map(UserConverter::toResponse).collect(Collectors.toList());
    }

    @Override
    public Optional<User> getById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public UserResponse create(CreateUserRequest request) {
        return UserConverter.toResponse(userRepository.save(UserConverter.toUser(request)));
    }

    @Override
    public UserResponse update(User user) {
        return UserConverter.toResponse(userRepository.save(user));
    }

    @Override
    public boolean deleteById(Long id) {
        try {
            userRepository.deleteById(id);
            return true;
        }catch (Exception e){

        }
        return false;
    }

//    @Override
//    public List<UserResponse> getAllWithoutFriend(Long userId) {
//        List<UserResponse> users = getAll();
//        List<FriendResponse> friends = friendService.getAllByUserId(userId);
//        List<UserResponse> usersWithoutFriend = new ArrayList<>();
//        users.forEach(user -> {
//            if (!Objects.equals(user.getId(), userId)){
//            boolean state = friends.stream().anyMatch(friend -> Objects.equals(friend.getFriendId(), user.getId()));
//            if (!state){
//                usersWithoutFriend.add(user);
//            }}
//        });
//        return usersWithoutFriend;
//    }
}
