import css from './style.module.css';
import { Spacer } from '../../../../../components/spacer/Spacer';
import parse from 'html-react-parser';
export const ArticleCard = ({ onClick, article, style, className }) => {
    return (
        <div
            onClick={onClick}
            style={style}
            className={[className, css.container].join(' ')}
        >
            <p className={css.category}>{article?.CategoryName}</p>
            <Spacer vertical={'24px'} />
            <h3 className={css.title}>{article?.Title}</h3>
            <Spacer vertical={'10px'} />
            <div className={css.shortDesc}>
                {parse(article?.ShortDescription || '')}
            </div>
            <Spacer vertical={'10px'} />
            <p className={css.author}>{'-' + article?.PublishedBy}</p>
        </div>
    );
};
