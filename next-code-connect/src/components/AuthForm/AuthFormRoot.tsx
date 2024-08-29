import React, {ReactNode} from 'react';

const AuthFormRoot = ({children}:{children?: ReactNode}) => {
    return (
        <div className="w-96 h-96 bg-cinza-500 rounded-xl">
            <form action="">
                {children}
            </form>
        </div>
    );
};

export default AuthFormRoot;