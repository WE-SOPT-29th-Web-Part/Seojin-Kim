import React from "react";

import useGithubUser from "../useGithubUser";

import {
  ResultCardProfileImg,
  ResultCardH1,
  ResultCardWrapper,
  ResultCardText,
  ResultCardAnchor,
  ResultCardBottom,
  ResultCardCloseButton,
} from "../style/ResultCard";

const ResultCard = ({ targetUser, setTargetUser }) => {
  const { user, isLoading, isError } = useGithubUser(targetUser);

  if (targetUser === null) return null;
  if (isLoading) return null;
  if (isError)
    return (
      <ResultCardWrapper style={{ backgroundColor: "red" }}>
        <ResultCardH1>No user</ResultCardH1>
      </ResultCardWrapper>
    );

  const {
    avatar_url,
    followers,
    following,
    name,
    login,
    bio,
    html_url,
    public_repos,
  } = user;
  return (
    <ResultCardWrapper>
      <ResultCardCloseButton onClick={() => setTargetUser(null)}>
        닫기
      </ResultCardCloseButton>
      <ResultCardProfileImg src={avatar_url} />
      <div>
        <ResultCardH1>{name}</ResultCardH1>
        <ResultCardText>{login}</ResultCardText>
      </div>
      <ResultCardText>{bio}</ResultCardText>
      <ResultCardAnchor href={html_url}>visit github</ResultCardAnchor>
      <ResultCardBottom>
        <div>
          <div>Followers</div>
          <div>{followers}</div>
        </div>
        <div>
          <div>Following</div>
          <div>{following}</div>
        </div>
        <div>
          <div>Repos</div>
          <div>{public_repos}</div>
        </div>
      </ResultCardBottom>
    </ResultCardWrapper>
  );
};

export default ResultCard;
