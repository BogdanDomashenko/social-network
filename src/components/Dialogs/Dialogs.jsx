import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} active="true"/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage(newMessageBody);
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s['dialogs-items']}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div>
                        <textarea value={ newMessageBody } onChange={ onNewMessageChange } className='textarea' placeholder='Enter your message' />
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick } className={`button button--primary ${s.post__button}`}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;