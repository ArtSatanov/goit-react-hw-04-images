import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

export const Searchbar = ({ onSubmit }) => {
  handleSubmit = event => {
    event.preventDefault();
    const myFormData = new FormData(event.currentTarget);
    const searchData = Object.fromEntries(myFormData);
    onSubmit(searchData.searchQuery);
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch />
          <SearchFormLabel className="button-label">Search</SearchFormLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
