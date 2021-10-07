import * as Yup from "yup";

export const validationSchema = Yup.object({
  comment: Yup.string().required("comment required").min(3, "comment must be at least 3 characters"),
});
