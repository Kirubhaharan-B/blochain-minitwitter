/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Twitter Contract", function () {
  let TwitterContract;
  let twitter;
  let myAddress;

  const TOTAL_TWEETS = 8;

  let tweetArray;

  beforeEach(async function () {
    TwitterContract = await ethers.getContractFactory("TwitterContract");
    twitter = await TwitterContract.deploy();
    [myAddress, randAddress] = await ethers.getSigners();

    tweetArray = [];

    for (let i = 0; i < TOTAL_TWEETS; i++) {
      let address = i % 2 == 0 ? randAddress : myAddress;
      let tweet = {
        text: "Tweet Number: " + i,
        userName: address,
        isDeleted: false,
      };

      await twitter.connect(address).addTweet(tweet.text);
      tweetArray.push(tweet);
    }
  });

  describe("Add Tweet", function () {
    it("emit AddTweet event", async function () {
      let _tweet = {
        text: "My Tweet is created and added",
        isDeleted: false,
      };

      await expect(await twitter.addTweet(_tweet.text))
        .to.emit(twitter, "AddTweet")
        .withArgs(myAddress.address, TOTAL_TWEETS);
    });
  });

  describe("Get All Tweets", function () {
    it("return the number of total tweets", async function () {
      const tweetsFromChain = await twitter.getAllTweets();
      expect(tweetsFromChain.length).to.equal(TOTAL_TWEETS);
    });

    it("return the number of all my tweets", async function () {
      const myTweetsFromChain = await twitter.getMyTweets();
      expect(myTweetsFromChain.length).to.equal(4);
    });
  });

  describe("UPDATE TWEET FUNCTION", function () {
    it("update tweet functionality check", async function () {
      const _tweetId = 6;
      const _tweetContent = "Say hello to this edited tweet";
      await expect(
        // eslint-disable-next-line prettier/prettier
        await twitter.connect(randAddress).updateTweet(_tweetId, _tweetContent, false),
      )
        .to.emit(twitter, "TweetUpdate")
        .withArgs(randAddress.address, _tweetId, false);
    });
  });

  describe("Delete Tweet", function () {
    it("delete tweet event", async function () {
      const _TWEET_ID = 0;
      await expect(twitter.connect(randAddress).deleteTweet(_TWEET_ID))
        .to.emit(twitter, "DeleteTweet")
        .withArgs(_TWEET_ID);
    });
  });
});
