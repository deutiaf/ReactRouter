import { Form, useLoaderData ,redirect,useNavigate} from "react-router-dom";
import { updateContact } from "../contacts";


export async function action({request,params}){
    const formData= await request.formData()
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId,updates)
    return redirect(`/contacts/${params.contactId}`)

}

export default function EditContact(){
    const {contact} = useLoaderData();
    const navigate = useNavigate()

    return(
        <Form method="post" id='contact-form'>
            <p>
                <span>name</span>
                <input type="text" placeholder="first" aria-label="first name" name="first" defaultValue={contact.first} />
                <input type="text" placeholder="last" aria-label="last name" name="last" defaultValue={contact.last} />

            </p>

            <label>
                <span>twitter</span>
                <input type="text" name="twitter" placeholder="@username" defaultValue={contact.twitter}/>
            </label>

            <label>
                <span>Avatar Url</span>
                <input type="text" placeholder="https://example.com/avatar.jpg" aria-label="Avatar Url" name="avatar" defaultValue={contact.avatar}/>
            </label>

            <label>
                <span>Notes</span>
                <textarea name="notes"  rows="6" defaultValue={contact.notes}></textarea>
            </label>

            <p>
                <button type="submit" >save</button>
                <button type="button" onClick={()=>{navigate(-1)}}>cancel</button>
            </p>
        </Form>
    )
}