function verify()
{
  let str1 = document.getElementById("pass1").value;
  let str2 = document.getElementById("pass2").value;
  if(str1 != str2)
  {
    alert("Passwords do not match");
  }
  else if(str1.length<8 || str2.length<8)
  {
    alert("Passwords must be atleast 8 characters long");
  }
  else
  {
    alert("Passwords verified!");
    document.getElementById("form").reset();
  }
}
