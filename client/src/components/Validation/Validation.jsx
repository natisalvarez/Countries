const validation = (form) => {


    const errors = {};

    if (!form.name || !/[a-z]+/.test(form.name)) {
      errors.name = "Activity is required and must be a word";
    }

    if (!/^[1-5]$/.test(form.difficulty)) {
      errors.difficulty = "Invalid Number. Please enter a number between 1 and 5.";
    }

    if (!/^(1?[0-9]|2[0-4])$/.test(form.duration)) {
      errors.duration = "Invalid Number. Please enter a number between 1 and 24.";
    }

    if (!["summer", "winter", "autumn", "spring"].includes(form.season)) {
      errors.season = "Invalid season. Please choose one of: summer, winter, autumn, spring.";
    }

    if (form.countryId.length < 1) {
      errors.countryId = "Debes seleccionar al menos un (1) país";
    }

    return errors
  };



export default validation; 