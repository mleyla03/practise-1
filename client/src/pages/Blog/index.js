import React from 'react'
import { Button, TextField } from "@mui/material";
import { useFormik} from "formik"
import { posted } from '../../api/requests';
import Style from "./index.module.css"
import { Security } from '../../validation/securityValidation';
const Blog = () => {

  function handleSubmit(values,actions) {
    posted(values)
    console.log(values);
   
  }


  const formik = useFormik({
    initialValues: {
      names: '',
      title: '',
      texts: '',
      imageURL: ''
    },
    validationSchema: Security,
    onSubmit: handleSubmit,
  })



  return (
   <>
   <h1 style={{ textAlign: "center", paddingTop: "220px" }}>Add Page</h1>
      <form  onSubmit={formik.handleSubmit} style={{ margin: "30px", display: "flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
        <TextField className={Style.inputs}  error={formik.errors.names && formik.touched.names ? true : false}
          onChange={formik.handleChange} onBlur={formik.handleBlur} name="names" type='text' id="outlined-basic" label="names" variant="outlined" />
        {formik.errors.names && formik.touched.names && <p style={{ color: 'red' }}>{formik.errors.names}</p>}
        <TextField  className={Style.inputs} error={formik.errors.title && formik.touched.title ? true : false}
          onChange={formik.handleChange} onBlur={formik.handleBlur} name="title" type='text' id="outlined-basic" label="title" variant="outlined" />
        {formik.errors.title && formik.touched.title && <p style={{ color: 'red' }}>{formik.errors.title}</p>}
        <TextField  className={Style.inputs} error={formik.errors.texts && formik.touched.texts ? true : false}
          onChange={formik.handleChange} onBlur={formik.handleBlur} name="texts" type='text' id="outlined-basic" label="texts" variant="outlined" />
        {formik.errors.texts && formik.touched.texts && <p style={{ color: 'red' }}>{formik.errors.texts}</p>}
        <TextField  className={Style.inputs} onChange={formik.handleChange} onBlur={formik.handleBlur} name="imageURL" value={formik.values.imageURL} error={formik.errors.imageURL && formik.touched.imageURL ? true : false} type='text' id="outlined-basic" label="image" variant="outlined" />
        {formik.errors.imageURL && formik.touched.imageURL && <p style={{ color: 'red' }}>{formik.errors.imageURL}</p>}
        <Button type='submit' style={{ padding: "10px 25px" }} variant="contained" color="warning">Add</Button>
      </form>
      <div style={{ height: "140px" }}></div>
   
   </>
  )
}

export default Blog
