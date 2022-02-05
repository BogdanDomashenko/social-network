import s from './ProfileInfo.module.css';

import userPhoto from "../../../assets/images/default.jpg";

const ProfileInfo = (props) => {
    if (!props.profile) return ( <div>No data</div> );
    
    const {
        aboutMe, contacts, lookingForAJob,
        lookingForAJobDescription, fullName,
        userId, photos,
    } = props.profile;

    const contactsKeys = Object.keys(contacts);

    photos.large = photos.large || userPhoto;
    photos.small = photos.small || userPhoto;

    return (
        <div>
            <div className={s.userInfo}>
                <div>
                    <img className={s.profile__img} src={photos.large} alt="" />
                </div>
                <div className={s.userInfoContent}>
                    <h1 className={s.userName}>{fullName}</h1>
                    <div>{aboutMe}</div>
                    <div>Описание: {lookingForAJobDescription}</div>
                    <div>{lookingForAJob ? 'В поисках работы' : 'Не ищет работу'}</div>
                    <div>
                        Соцсети:
                        { contactsKeys.map(key => {
                            if(contacts[key]) return (
                                <div>
                                    <a href={contacts[key]}>
                                        {key}: {contacts[key]}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;