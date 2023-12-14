export const Contact = () => {
    return (
        <div className="contact">
            <h3>İletişim</h3>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message"></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}