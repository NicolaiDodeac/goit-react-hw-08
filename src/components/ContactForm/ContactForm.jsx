import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = { id: "", name: "", number: "" };

  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const cleaned = ("" + value).replace(/\D/g, "");
    // Match the cleaned string with groups of numbers
    const match = cleaned.match(/^(\d{0,3})(\d{0,2})(\d{0,2})$/);

    if (match) {
      // Format the number as `xxx-xxx-xxxx`
      return [match[1], match[2], match[3]].filter(Boolean).join("-");
    }
    return value;
  };

  const handleSubmit = (values, options) => {
    const newContact = { ...values };
    dispatch(addContactThunk(newContact));
    options.resetForm();
  };
  const contactSchema = Yup.object({
    name: Yup.string()
      .min(3, "To short")
      .max(50, "To long")
      .required("Is required!"),
    number: Yup.string()
      .matches(/^[0-9-]+$/, "numbers only")
      .min(9, "To short")
      .max(15, "To long")
      .required("Is required!"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={contactSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={s.form}>
            <label className={s.label}>
              Name
              <ErrorMessage
                className={s.errorMessage}
                name="name"
                component="div"
              />
              <Field className={s.input} name="name" />
            </label>
            <label className={s.label}>
              Number
              <ErrorMessage
                className={s.errorMessage}
                name="number"
                component="div"
              />
              <Field
                name="number"
                className={s.input}
                value={values.number}
                placeholder=" xxx-xx-xx "
                onChange={(e) => {
                  const formattedNumber = formatPhoneNumber(e.target.value);
                  setFieldValue("number", formattedNumber);
                }}
              />
            </label>
            <button className={s.btn} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
