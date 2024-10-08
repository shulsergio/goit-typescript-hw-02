import css from "./SearchBar.module.css";
import toast, { Toaster } from 'react-hot-toast';
import { useState, FormEvent, ChangeEvent } from 'react';
import Button from "../Button/Button";

interface SearchBar {
  onSubmit: (query: string) => void;
}
export default function SearchBar({onSubmit}:SearchBar){
    const [searchQuery, setSearchQuery] = useState<string>('');
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

    if (!searchQuery.trim()) {
      toast.error('Input please');
        return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
    };
    
return (
    <div className={css.searchBox}>
<Toaster/>
        <form className={css.searchForm} onSubmit={handleSubmit}>
<input type="text" autoComplete="off" autoFocus value={searchQuery}
        onChange={handleChange}
      placeholder="Search images and photos"
        className={css.searchInput}
      />
      {/* <button type="submit" className={css.searchBtn}>Search</button> */}
      <Button type={"submit"} text={'Search'}/>
        </form>
    </div>
    
)}