import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useId } from "react";
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import css from './ContactForm.module.css'


export default function ContactForm({onAdd}) {
    const fieldId = useId();
    const contactId = nanoid();
    const handleSubmit = (values, actions) => {
        onAdd({...values,id:contactId});
        actions.resetForm();    
    };

    const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 characters!")
    .max(50, "Max 50 characters!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Min 3 characters!")
    .max(50, "Max 50 characters!")
    .required("Required"),
});

    return (
        <>
            <Formik initialValues={{name: "",number: ""}} onSubmit={handleSubmit} validationSchema={UserSchema}>
                <Form className={css.form}>
                    <div className={css.container}>
                        <label htmlFor={`${fieldId}-username`}>Name</label>
                        <Field type="text" name="name" id={`${fieldId}-username`} />
                        <ErrorMessage className={css.error} name="name" component="span"/>
                    </div>
                    <div className={css.container}>
                        <label htmlFor={`${fieldId}-userphone`}>Number</label>
                        <Field type="text" name="number" id={`${fieldId}-userphone`} />
                        <ErrorMessage className={css.error} name="number" component="span"/>
                    </div>
                    <button type="submit" className={css.button}>Submit</button>
                </Form>
            </Formik>
        </>
)}