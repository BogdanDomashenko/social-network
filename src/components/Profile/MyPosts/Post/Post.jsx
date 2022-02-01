import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                <img className={s.post__img} src="https://tulatrud.ru/wp-content/uploads/modnye-avatarki-dlya-vk_4.jpg" />
                <div className={s.post__content}>
                    <h2 className={`h1 ${s.post__name}`}>{props.name}</h2>
                    <div className={s.post_message}>{props.message}</div>
                </div>
            </div>
            <div className={s.post__activity}>
                <div className={s.like}>
                    <i className={`bi bi-heart ${s.like__icon}`}></i>
                    <span className={s.like__count}>{props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;