function titleCase(str) {
  str_arr = str.split(' ');

  for (i=0; i < str_arr.length; i++) {
    str_arr[i] = str_arr[i].toLower().charAt(0).toUpper();
  }

  str = str_arr.join(' ');

  return str;
}

titleCase("I'm a little tea pot");