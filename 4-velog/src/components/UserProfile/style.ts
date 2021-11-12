import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 128px auto;
  align-items: center;
  border-bottom: 1px solid rgb(241, 243, 245);
  margin: 40px 0;
  padding: 20px 0;
`;

const RoundImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

const UserName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const UserBio = styled.div`
  font-size: 1.1rem;
`;

export { Wrapper, RoundImage, UserName, UserBio };
