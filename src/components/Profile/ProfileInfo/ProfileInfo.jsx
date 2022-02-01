import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.profile__img} src="https://www.impel.eu/wp-content/uploads/2019/08/mediterranean-sea.jpg" alt="" />
            </div>
        </div>
    )
}

export default ProfileInfo;