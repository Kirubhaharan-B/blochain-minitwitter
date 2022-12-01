// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract TwitterContract {

  // Creating a user defined structure for getting the information of the tweet.
  // Tweet_ID == id
  // Owner_of_the_tweet == userName
  // Tweet_is_Deleted == isDeleted
  // Tweet_Content == isDeleted

  struct Tweet {
    uint256 id;
    address userName;
    bool isDeleted;
    string text;
  }

  mapping(uint256 => address) tweetToOwner;
  Tweet[] private tweets;

   event AddTweet(address recipient, uint256 tweetId);
   event DeleteTweet(uint256 tweetId);
   event TweetUpdate(address recipient,uint tweetId, bool deleteStatus);

   // @dev Function that is used to add the tweet created by the user.
   // @param Pass the text which is typed by the user
   // @return This Function returns a array of tweets.

  function addTweet(string memory _text) external {
    uint256 _tweetId = tweets.length;
    tweets.push(Tweet(_tweetId, msg.sender, false, _text));
    tweetToOwner[_tweetId] = msg.sender;
    emit AddTweet(msg.sender, _tweetId);
  }

  // @dev Function that is used to get all the tweets of all users.
  // @return This Function returns a array of tweets.

  function getAllTweets() external view returns (Tweet[] memory) {
    Tweet[] memory _dummyArray = new Tweet[](tweets.length);
    uint256 _counter = 0;
    for (uint256 i = 0; i < tweets.length; i++) {
      if (!tweets[i].isDeleted) {
        _dummyArray[_counter] = tweets[i];
        _counter++;
      }
    }

    Tweet[] memory _result = new Tweet[](_counter);
    for (uint256 i = 0; i < _counter; i++) {
      _result[i] = _dummyArray[i];
    }
    return _result;
  }
  
  // @dev Function that is used to get all the tweets of the current user.
  // @return This Function returns a array of tweets.

  function getMyTweets() external view returns (Tweet[] memory) {
    Tweet[] memory _temporary = new Tweet[](tweets.length);
    uint256 _counter = 0;
    for (uint256 i = 0; i < tweets.length; i++) {
      if (tweetToOwner[i] == msg.sender && tweets[i].isDeleted == false) {
        _temporary[_counter] = tweets[i];
        _counter++;
      }
    }

    Tweet[] memory _result = new Tweet[](_counter);
    for (uint256 i = 0; i < _counter; i++) {
      _result[i] = _temporary[i];
    }
    return _result;
  }

  // @dev Function that is used to update the tweet which is already present.
  // @param Pass TweetId and text information.
  // @return This Function returns the updated Tweet.
  function updateTweet(uint _tweetId, string memory _text, bool _isDeleted) external {
        if (tweetToOwner[_tweetId] == msg.sender && tweets[_tweetId].isDeleted == false) {
            uint _newTweetId = tweets.length;
            tweets[_tweetId].isDeleted = true;
            tweets.push(Tweet(_newTweetId, msg.sender, _isDeleted, _text));
            tweetToOwner[_newTweetId] = msg.sender;
            emit TweetUpdate(msg.sender, _tweetId, _isDeleted);
        }
  }

  // @dev Function that is used to Delete the tweet.
  // @param Pass TweetId and isDeleted information.
  // @return This Function is will delete the tweet of the user.
  // 

  function deleteTweet(uint256 _tweetId) external {
    require(tweetToOwner[_tweetId] == msg.sender);
    tweets[_tweetId].isDeleted = true;
    emit DeleteTweet(_tweetId);
  }

}
