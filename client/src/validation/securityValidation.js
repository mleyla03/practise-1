import * as yup from "yup"

export const Security = yup.object().shape({
    names:yup.string().min(9).max(50).required(),
    title:yup.string().required(),
    texts:yup.string().min(8).max(100).required(),
    imageURL:yup.string().required(),
    
})