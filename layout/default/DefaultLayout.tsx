// dependencies
import { ReactNode } from 'react';


/* TYPES */
export interface Props {
    children: ReactNode;
}

const DefaultLayout = ( {
    children
}: Props ) => {

    return (
        <div className='container'>
            <main className='default-layout'>
                {children}
            </main>
        </div>
    );
}

export default DefaultLayout;