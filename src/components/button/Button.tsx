import { Children, ForwardedRef } from "react";
import Icons from "../../assets/icon/Icons";
import cn from "../../lib/utils/cn";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    icon: keyof typeof Icons,
    size: "XL" | "L" | "M" | "S" | "XS",
    variantIcon: boolean;
    type: "primary" | "secondary" | "tertiary" | "destructive";
    iconPosition: "Leading" | "Trailing"
    disabled?: boolean;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    className: string;
}

type Ref = HTMLButtonElement;

const Button  = ForwardRef< Ref , ButtonProps>( {icon, size, variantIcon, type, iconPosition, className }) => {
    
    if (!icon) {
        
    }

    return <button
     className={cn(

         "text-button-primary"
         {
            icon && 
         }
            
     )
     }>
        <span>
          {icon && }
        </span>

        {Children}
     </button>

}
export default Icon;