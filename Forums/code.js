var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
postList = []

document.querySelector('#add-post').addEventListener('submit', function(e) {
  //keep the submit button from redirecting the page
  e.preventDefault();
  //check that post is not empty
  if (e.target.querySelector('.post-content').value != "") {
    //add post to the post array
    let newPost = {"text": e.target.querySelector('.post-content').value, "drawn": false}
    postList.push(newPost);
    //reset the input field
    e.target.querySelector('.post-content').value = "";
    //run the post redraw script
    createPosts();
  } else {
    alert("Please enter text to post! 😊");
  }
});

//create posts
function createPosts() {
  //loop through the whole post array
  for(var i = 0; i < postList.length; i ++) {
    //if the 'drawn' attribute of the post object is false (meaning it has not yet been drawn), draw the post at the top of the list
    if (postList[i].drawn == false) {
      //create a new post element
      let newPost = document.createElement('div');
      newPost.className = "post";
      //set it text from the post array
      newPost.innerText = postList[i].text;
      //insert it at the top of the container
      document.querySelector('#post-list').insertBefore(newPost, document.querySelector('#post-list').firstChild);
      //set it to drawn so it is not redrawn later
      postList[i].drawn = true;
    }
  }
}
