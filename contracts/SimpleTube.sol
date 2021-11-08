//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract SimpleTube{
    address public owner;
    uint public videoCount = 0;
    string public name ="SimpleTube";
    //storing videos
    mapping(uint => Video) public videos;
    
    // Creating a video file
    struct Video{
        uint id;
        string hash;
        string title;
        address author;
    }
    
    event VideoUploaded(
        uint id,
        string hash,
        string title,
        address author
    );
    
    constructor(){
        owner = msg.sender;
    }
    
    function uploadVideo(string memory _videoHash, string memory _title) public{
        require(bytes(_videoHash).length>0);
        require(bytes(_title).length>0);
        require( msg.sender != address(0));
        
        videos[videoCount] = Video(videoCount, _videoHash, _title, msg.sender);
        emit VideoUploaded(videoCount, _videoHash, _title, msg.sender);
        videoCount++;
    }
}