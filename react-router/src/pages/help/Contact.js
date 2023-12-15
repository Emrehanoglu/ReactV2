import {Form, redirect, useActionData} from "react-router-dom"

export const Contact = () => {
    const errors = useActionData() 
    /* başka bir metot içerisindeki bilgiyi
    formun post edilmesi anında bu şekilde alabilirim. */
    return (
        <div className="contact">
            <h3>İletişim</h3>
            <Form method="post" action="/help/contact">
                {/* 
                    form post olduğunda App.js içerisinde contact path 'i içerisinde
                    ilişkilendirmiş olduğum action metodunu çalıştıracak.
                */}
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"/>
                    {errors?.email && <p className="error">{errors.email}</p>} 
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message"></textarea>
                    {errors?.message && <p className="error">{errors.message}</p>} 
                </div>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

export const contactAction = async ({request}) => {
    const data = await request.formData(); /* form üzerindeki name ile ilişkilendirilmiş alanlara ait bilgileri aldım */
    const email = data.get("email")
    const message = data.get("message")

    const errors = {}
    if(typeof email !== "string" || !email.includes("@")){ /* typeof ile tip kontrolü yapıyorum */
        errors.email = "email girmelisiniz"
    }
    if(typeof message !== "string" || message.length < 10){
        errors.message = "mesaj için en az 10 karakter girmelisiniz"
    }
    if(Object.keys(errors).length){ /* errors bilgisinin içerisi setlenmişse return ettim */
        return errors
    }

    return redirect("/")
}