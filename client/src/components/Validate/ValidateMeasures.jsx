export default function ValidateMeasures(measures) {
  let measureErrors = {};
  if (!measures.min_height) {
    measureErrors.min_height = "Minimum height is required";
  } else if (!/^\d+$/.test(measures.min_height)) {
    measureErrors.min_height = "Minimun height must be a number";
  }

  if (!measures.max_height) {
    measureErrors.max_height = "Maximum height is required";
  } else if (!/^\d+$/.test(measures.max_height)) {
    measureErrors.max_height = "Maximum height must be a number";
  }

  if (!measures.min_weight) {
    measureErrors.min_weight = "Minimum weight is required";
  } else if (!/^\d+$/.test(measures.min_weight)) {
    measureErrors.min_weight = "Minimun weight must be a number";
  }

  if (!measures.max_weight) {
    measureErrors.max_weight = "Maximum weight is required";
  } else if (!/^\d+$/.test(measures.max_weight)) {
    measureErrors.max_weight = "Maximum weight must be a number";
  }

  return measureErrors;
}
