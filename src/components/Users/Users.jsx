import { NavLink } from 'react-router-dom';
import styles from './users.module.css';
import userPhoto from "../../assets/images/default.jpg";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        console.log(pagesCount);

        let pages = [];

    for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
    }

    return (
        <div>
        <div>
            {
                pages.map(page => {
                    return <a className={ props.currentPage === page ? styles.selectedPage : undefined } 
                    onClick={ () => { props.onPageChanged(page) } }>{ page }</a>
                })
            }
        </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={ user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        { 
                        !user.followed ? 
                        <button onClick={() => {props.follow(user.id)} } className="button button--success">Follow</button> 
                        : <button onClick={() => {props.unfollow(user.id)} } className="button">Unollow</button> 
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>user.location.country</div>
                        <div>user.location.city</div>
                    </span>
                </span>
            </div>)
        }
    </div>
    )
}

export default Users;