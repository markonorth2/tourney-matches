import React from 'react'; //optional

function TweetForm(){
  let text = "what are you humming about?";
  
  return (

    <section class="newtweet">
      <form method=".preventDefault" action="/tweets" class="newtweet__form">
        <textarea class="form__textarea" name="text" placeholder= {text}  ></textarea>
        <input type="submit" value="Tweet" class="form__input" />
        <span class="form__counter">140</span >
      </form>
    
    </section>
  );
}

export default TweetForm;