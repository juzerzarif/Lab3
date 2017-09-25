function showNext()
{
  let img = document.getElementById("image");
  if(img.getAttribute('src') == "Images/img1.jpg")
  {
    img.src = "Images/img2.jpg";
  }
  else if(img.getAttribute('src') == "Images/img2.jpg")
  {
    img.src = "Images/img3.jpg";
  }
  else if(img.getAttribute('src') == "Images/img3.jpg")
  {
    img.src = "Images/img4.jpg";
  }
  else if(img.getAttribute('src') == "Images/img4.jpg")
  {
    img.src = "Images/img5.jpg";
  }
  else
  {
    img.src = "Images/img1.jpg";
  }
}

function showPrev()
{
  let img = document.getElementById("image");
  if(img.getAttribute('src') == "Images/img1.jpg")
  {
    img.src = "Images/img5.jpg";
  }
  else if(img.getAttribute('src') == "Images/img2.jpg")
  {
    img.src = "Images/img1.jpg";
  }
  else if(img.getAttribute('src') == "Images/img3.jpg")
  {
    img.src = "Images/img2.jpg";
  }
  else if(img.getAttribute('src') == "Images/img4.jpg")
  {
    img.src = "Images/img3.jpg";
  }
  else
  {
    img.src = "Images/img4.jpg";
  }
}
