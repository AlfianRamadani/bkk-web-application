import cn from "../../lib/utils/cn";
import Icons from "./Icons";

const Icon = ( {name, size}) => {
    const IconComponent = Icons[name];
    
    if (!IconComponent) {
       return null; 
    }

    

       return <IconComponent 
       className={
        cn(
            [
                size === 'XL' && ['w-12']
            ]
        )
       }/>;

}
export default Icon;