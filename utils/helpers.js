module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
  format_plural: ( text, count ) => {
    if(count != 1){
      return (text + 's');
    }else{
      return text;
    }
  },
  format_url: url => {
    return url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('/')[0]
      .split('?')[0];
  }
}
