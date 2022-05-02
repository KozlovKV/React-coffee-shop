import BeansDivider from './../beans-divider/beans-divider';

import './header-content.scss';

export default function HeaderContent(props) {
    const { text, children } = props;
    return (
        <>
            <h1>{text}</h1>
            {children ?
                (<>
                    <BeansDivider white />
                    {children}
                </>)
                : null}
        </>
    );
}