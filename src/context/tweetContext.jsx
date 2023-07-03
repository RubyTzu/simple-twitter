//import react tools
import { createContext, useContext, useEffect, useState } from "react";
//import api
import { getTweets, createTweet } from "api/tweet";
//export useContext: create Tweet Context and export useContext
const TweetContext = createContext();
export const useTweet = () => useContext(TweetContext);
//export contextProvider
export const TweetContextProvider = ({ children }) => {
  //current user id
  const id = localStorage.getItem("id");
  //useState hook
  const [allTweets, setAllTweets] = useState([]);
  const [userTweets, setUserTweets] = useState([]);
  const [userReplies, setUserReplies] = useState([]);
  const [userLikedTweets, setUserLikedTweets] = useState([]);
  const [singleTweet, setSingleTweet] = useState({});
  const [replyListReplies, setReplyListReplies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [replyInputValue, setReplyInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showReplyAlert, setShowReplyAlert] = useState(false);
  const [addTweetRefresh, setAddTweetRefresh] = useState(null);

  //useEffect hook
  useEffect(() => {
    const showHomePageTweets = async () => {
      const data = await getTweets(id);
      if (data) setAllTweets(data);
    };
    showHomePageTweets();
    console.log(`hello from useEffect-TweetContext id :${id}`);
  }, [id, addTweetRefresh]);

  useEffect(() => {
    console.log(`hello from useEffect-TweetContext showAlert :${showAlert}`);
  }, [showAlert]);

  //event handler
  const handleAddTweetHeight = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleAddTweet = async () => {
    if (inputValue.length === 0) return;
    await createTweet({
      description: inputValue,
      likable: 1,
      commendable: 1,
    });
    console.log(`createTweet success`);
    setInputValue("");
    handleClick();
    console.log(`setClick${addTweetRefresh}`);
    window.location.reload();
  };

  const handleClick = () => {
    setAddTweetRefresh(Date.now());
  };

  //TweetContext.Provider value
  const providerValue = {
    id,
    //useState hook
    allTweets,
    userTweets,
    setUserTweets,
    userReplies,
    setUserReplies,
    userLikedTweets,
    setUserLikedTweets,
    singleTweet,
    setSingleTweet,
    replyListReplies,
    setReplyListReplies,
    inputValue,
    setInputValue,
    replyInputValue,
    setReplyInputValue,
    showAlert,
    setShowAlert,
    showReplyAlert,
    setShowReplyAlert,
    addTweetRefresh,
    //event handler
    onInput: handleAddTweetHeight,
    onAddTweetClick: handleAddTweet,
    onRefresh: handleClick,
  };

  return (
    <TweetContext.Provider value={providerValue}>
      {children}
    </TweetContext.Provider>
  );
};
