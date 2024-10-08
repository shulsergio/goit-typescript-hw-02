import { FormEvent, MouseEventHandler } from 'react';
import Button from '../Button/Button'
import css from './LoadMoreBtn.module.css'

interface LoadMoreBtn {
  onLoadMoreBtn: MouseEventHandler<HTMLButtonElement>;
}


const LoadMoreBtn: React.FC<LoadMoreBtn>=({onLoadMoreBtn})=> {
    return (
<div className={css.loadBtn}>
<Button type={'button'} onClick={onLoadMoreBtn} text={'Load more' } />                
            </div>
    )
}
export default LoadMoreBtn;