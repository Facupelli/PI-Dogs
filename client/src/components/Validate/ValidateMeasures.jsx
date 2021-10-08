export default function Validate(measures) {
  let errors = {};
  if (!measures.min_height) {
    errors.min_height = "Minimum height is required";
  } else if (!/^\d+$/.test(measures.min_height)) {
    errors.min_height = "Minimun height must be a number";
  }

  if (!measures.max_height) {
    errors.max_height = "Maximum height is required";
  } else if (!/^\d+$/.test(measures.max_height)) {
    errors.max_height = "Maximum height must be a number";
  }

  if (!measures.min_weight) {
    errors.min_weight = "Minimum weight is required";
  } else if (!/^\d+$/.test(measures.min_weight)) {
    errors.min_weight = "Minimun weight must be a number";
  }

  if (!measures.max_weight) {
    errors.max_weight = "Maximum weight is required";
  } else if (!/^\d+$/.test(measures.max_weight)) {
    errors.max_weight = "Maximum weight must be a number";
  }

  return errors;
}
