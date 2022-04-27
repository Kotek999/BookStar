// import * as React from 'react';
// import FormInputs from '../common/formInputs/formInputs';


// const FormPage = () => {
//     const [form, setForm] = React.useState({});
//     const [errors, setErrors] = React.useState({});

//     const onChange = ({ name, value }) => {
//         setForm({ ...form, [name]: value });
//     };

//     const onSubmit = () => {
//         // validations
//         console.log('form: >>', form);

//         if (!form.Name) {
//             setErrors((prev) => {
//                 return {...prev, Name: "This field cannot be empty!"}
//             });
//         }
//     };

//     return (
//         <FormInputs
//             onSubmit={onSubmit}
//             onChange={onChange}
//             form={form}
//             errors={errors}
//         />
//     );
// };

// export default FormPage;

