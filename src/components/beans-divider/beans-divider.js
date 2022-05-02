import black from './svg/beans-black.svg';
import white from './svg/beans-white.svg';

export default function BeansDivider(props) {
    let beansUrl = props.white ? white : black;
    return <img src={beansUrl} alt="beans_divider" />;
}