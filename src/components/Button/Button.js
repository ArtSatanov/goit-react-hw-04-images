import { LoadMoreBtn, LoadMoreDiv } from './Button.styled';

export const Button = ({ OnClick }) => {
  return (
    <LoadMoreDiv>
      <LoadMoreBtn
        type="button"
        onClick={() => {
          OnClick();
        }}
      >
        Load More
      </LoadMoreBtn>
    </LoadMoreDiv>
  );
};
