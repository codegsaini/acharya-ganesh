import css from './style.module.css';

import Logo from '../../../../../../assets/brand_logo.png';
import IcPhone from '../../../../../../assets/ic_phone.png';
import IcUser from '../../../../../../assets/user.png';

const NUMBER_ALT_1 = '+91 73000-04325';
const NUMBER_ALT_2 = '+91 73000-04326';

const TopBar = () => {
    return (
        <div className={css.container}>
            <img src={Logo} />
            <div className={css.info_n_action_button_container}>
                <ContactLabel icon={IcPhone}>{NUMBER_ALT_1}</ContactLabel>
                <ContactLabel icon={IcPhone}>{NUMBER_ALT_2}</ContactLabel>
                <ActionButton icon={IcUser}>Log in</ActionButton>
            </div>
        </div>
    );
};

const ContactLabel = ({ icon, className, children }) => {
    return (
        <div className={[className, css.contact_label].join(' ')}>
            {icon && <img src={icon} alt={`${children} icon`} />}
            <p>{children}</p>
        </div>
    );
};

const ActionButton = ({ icon, className, onClick, children }) => {
    return (
        <div
            onClick={onClick}
            className={[className, css.action_button].join(' ')}
        >
            {icon && <img src={icon} alt={`${children} icon`} />}
            <p>{children}</p>
        </div>
    );
};

export default TopBar;
