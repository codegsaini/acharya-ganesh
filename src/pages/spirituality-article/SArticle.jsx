import css from './style.module.css';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../../components/page-container/PageContainer';
import { TopBar } from '../../components/top-bar/TopBar';
import { Navigation } from '../../components/navigation/Navigation';
import ImgHeaderBg from '../../assets/blog_header_bg.png';

import { HorizontalBorder } from '../../components/spacer/Spacer';
import { CoursesCarousel } from '../../components/courses-carousel/CoursesCarousel';
import { TitleInformation } from './components/title-info/TitleInformation';
import { Footer } from '../../components/footer/Footer';
import { TableOfContent } from './components/table-of-content/TableOfContent';
import { RecentBlogs } from './components/recents/RecentBlogs';
import IcStar from '../../assets/star_primary_dark.png';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { APIHelper } from '../../util/APIHelper';
const SArticle = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    useEffect(() => {
        getArticle();
    }, [slug]);
    const getArticle = async () => {
        try {
            const response = await APIHelper.getSpiritualities({ slug: slug });
            setArticle(response.data.data[0]);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <PageContainer className={css.container}>
            <div
                style={{ backgroundImage: `url(${ImgHeaderBg})` }}
                className={css.header}
            >
                <TopBar />
                <Navigation />
            </div>
            <TitleInformation article={article} />
            <HorizontalBorder color={'#cebeb1'} />
            <div className={css.content}>
                <div className={css.article_container}>
                    <TableOfContent />
                    <div className={css.article_wrapper}>
                        <div className={css.article}>
                            {parse(article?.Description || '')}
                        </div>
                    </div>
                    <RecentBlogs />
                </div>
                <CoursesCarousel />
            </div>
            <Footer />
        </PageContainer>
    );
};

export default SArticle;
