import { Link, Outlet,useLoaderData } from "react-router-dom";
import  {getcontacts} from '../contacts'

export default function Root(){
    const {contacts} = useLoaderData()

    return(
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form action=""  role='search' id="search-form">
                        <input type="search" placeholder='search' name='q' id="q" />
                        <div id='search-spinner' aria-hidden hidden={true} />
                        <div className="sr-only" aria-live="polite" >
                        </div>
                        
                    </form>
                    <form action="" method="post">
                        <button type="submit">New</button>
                    </form>

                </div>
                <nav>
                    <ul>
                        <li><Link to={'/contacts/1'}>Your Name</Link></li>
                        <li><Link to={'/contacts/2'}>Your Friend</Link></li>
                    </ul>
                </nav>
            </div>
            <div id="detail"> <Outlet/> </div>
            
        
        </>
    )
}

export async function loader(){
    const contacts = await getcontacts();
    return {contacts}
}


