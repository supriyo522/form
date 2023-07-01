import {
  TextField,
  TextareaAutosize,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  name: "",
  address: "",
  country: "",
  gender: "",
  hobbies: []
};

const countries = ["Country 1", "Country 2", "Country 3"]; // Replace with actual country list

const hobbies = ["Hobby 1", "Hobby 2", "Hobby 3"]; // Replace with actual hobbies list

const validateForm = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.address) {
    errors.address = "Address is required";
  }
  if (!values.country) {
    errors.country = "Country is required";
  }
  if (!values.gender) {
    errors.gender = "Gender is required";
  }
  return errors;
};

const handleSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};
const MaterialForm = () => {
  return (
    <div className="MaterialForm">
      <h1>Formik and Material-UI Form</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <Field as={TextField} name="name" label="Name" fullWidth />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field
                as={TextareaAutosize}
                name="address"
                label="Address"
                rows={4}
                fullWidth
              />
              <ErrorMessage name="address" component="div" />
            </div>
            <div>
              <Field
                as={TextField}
                select
                name="country"
                label="Country"
                fullWidth
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="country" component="div" />
            </div>
            <div>
              <Field as={RadioGroup} name="gender">
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </Field>
              <ErrorMessage name="gender" component="div" />
            </div>
            <div>
              <Field
                as={TextField}
                select
                name="hobbies"
                label="Hobbies"
                SelectProps={{ multiple: true }}
                fullWidth
              >
                {hobbies.map((hobby) => (
                  <option key={hobby} value={hobby}>
                    {hobby}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="hobbies" component="div" />
            </div>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default MaterialForm;
