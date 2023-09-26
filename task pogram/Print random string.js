randomString = (length) => {
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    output = "";
    for(x = 0; x < length; x++) {
      i = Math.floor(Math.random() * 62);
      output += chars.charAt(i);
    }
    return output;
  }
  
  formSubmit = () => {
    form.outputbox.value = randomString(form.length.value);
    return false;
  }
  