import styled from 'styled-components';

interface IWrapper {
  isPreview: boolean;
}
const Wrapper = styled.div<IWrapper>`
  ${({ isPreview }) =>
    isPreview && 'border-bottom: 1px solid rgb(241, 243, 245);'}
  ${({ isPreview }) => !isPreview && 'padding: 20px;'}
  margin: 52px 0;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Summary = styled.div`
  font-size: 1.2rem;
  color: rgb(73, 80, 87);
  margin-bottom: 40px;
`;

const DateTime = styled.div`
  font-size: 1.1.rem;
  color: rgb(134, 142, 150);
  margin-bottom: 36px;
  margin-top: 28px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 420px;
  object-fit: contain;
`;
export { Wrapper, Title, Summary, DateTime, Thumbnail };
